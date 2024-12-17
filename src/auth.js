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
                        console.log(user)

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
            const newSession = { ...session, ...token }
            session = newSession
            return session;
        }
    },
});