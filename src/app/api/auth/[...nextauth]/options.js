import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { commonServices } from "@/lib/services/common";

export const options = {
    pages: {
        signIn: '/login',
        newUser: '/register'
    },
    providers: [
        GitHubProvider({
            profile(profile) {
                console.log("Profile GitHub: ", profile);
                return {
                    ...profile,
                };
            },
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_Secret,
        }),
        GoogleProvider({
            profile(profile) {
                console.log("Profile Google: ", profile);
            },
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "email:",
                    type: "text",
                    placeholder: "your-email",
                },
                password: {
                    label: "password:",
                    type: "password",
                    placeholder: "your-password",
                },
            },
            async authorize(credentials) {
                try {
                    const foundUser = await commonServices.readSingleData('user', '*', { email: credentials.email })
                    const hashedPassword = credentials.password;
                    if (foundUser) {
                        const match = await bcrypt.compare(hashedPassword, foundUser[0].password);
                        if (match) {
                            return foundUser[0];
                        }
                    }
                } catch (error) {
                    console.log(error);
                }
                return null;
            },
        }),
    ],
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.isAdmin = user.isAdmin;
                token.name = user.firstName;
                token.picture = user.profilePicture;
                token.isAdmin = user.isAdmin;
                token.image  = user.profilePicture
            }
            return token;
        },

        async session({ session, token }) {
            if (session?.user) {
                session.isAdmin = token.isAdmin;
                session.picture = token.image;
                session.email = token.email;
                session.image = token.image;
            }
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET
};