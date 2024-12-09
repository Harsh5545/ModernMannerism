import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { commonServices } from "@/lib/services/common";

export const options = {
    pages: {
        signIn: '/login',
        newUser:  '/register' 
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
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            profile(profile) {
                console.log("Profile Google: ", profile);
                return {
                    ...profile,
                };
            },
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email:",
                    type: "text",
                    placeholder: "your-email",
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "your-password",
                },
            },
            async authorize(credentials) {
                try {
                    const foundUser  = await commonServices.readSingleData('users', '*', { email: credentials.email });
                    if (foundUser  && foundUser.length > 0) {
                        const match = await bcrypt.compare(credentials.password, foundUser[0].password_hash);
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
                token.role = user.role;
                token.name = user.firstName;
                token.picture = user.profilePicture;
                token.image = user.profilePicture;
            }
            return token;
        },

        async session({ session, token }) {
            if (session?.user) {
                session.role = token.role;
                session.picture = token.image;
                session.email = token.email;
                session.image = token.image;
            }
            return session;
        },

        async redirect({ url, baseUrl, token }) {
            if (token?.role === 'admin') {
                return `${baseUrl}/admin-dashboard`;
            }
            return baseUrl; 
        },
    },
    secret: process.env.NEXTAUTH_SECRET
};

export async function registerUser (email, password, role = 'user') {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser  = {
        email,
        password: hashedPassword,
        role, 
    };
    await commonServices.createEntry('users',newUser);
}