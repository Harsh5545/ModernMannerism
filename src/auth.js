import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import bcrypt from "bcryptjs";
import prisma from "./lib/prisma";


export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    ...authConfig,
    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                if (credentials === null) return null;

                try {
                    const user = await prisma.user.findUnique({
                        where: {
                            email: credentials.email,
                        },
                        include: { role: true },
                    });
                    if (user) {
                        const isMatch = bcrypt.compare(
                            credentials.password,
                            user.password
                        );
                        if (isMatch) {
                            return user;
                        } else {
                            throw new Error("Email or Password is not correct");
                        }
                    } else {
                        throw new Error("User not found");
                    }
                } catch (error) {
                    throw new Error(error);
                }
            },

        }),

        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                },
            },
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                },
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {

            if (user) {
                token = { ...user, ...token }
            }
            return token;
        },
        async session({ session, token }) {
            console.log(token)
            const newSession = { ...session, ...token }
            session = newSession;
            if (session?.user) {
                session.user = { ...session.user, ...token }
            }
            return session;
        },
        authorized({request,auth}){
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = request.url.startsWith("/admin");
            const isOnLogin = request.url.startsWith("/login");
            const isOnRegister = request.url.startsWith("/register");
            if (isOnDashboard) {
                if (isLoggedIn) {
                    return true;
                }
                return false; // redirect unauthenticated users to login page
            } else if (isOnLogin || isOnRegister) {
                if (isLoggedIn) {
                    return Response.redirect(new URL('/admin', request.url));
                }
                return true;
            } else {
                return true;
            }
        },
        
    },
});