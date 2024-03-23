import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import pool from "./database";
import { commonServices } from "./services/common";
import bcrypt from "bcryptjs"
import { authConfig } from "./auth.Config";

const login = async (credentials) => {
    let isPasswordCorrect;
    try {
        const user = await commonServices.readSingleData('user', '*', { email: credentials.email });

        if (!user || user.length === 0 || !user[0]) {
            return null;
        }
        console.log(credentials.password,user[0]);
        isPasswordCorrect = await bcrypt.compare(credentials.password, user[0].password);

        if (!isPasswordCorrect) {
            throw new Error("Wrong Password.");
        }

        return user[0];

    } catch (error) {
        console.error('Error during login:', error);
        return { error: 'An error occurred during login.' };
    }
};



export const { handlers: { GET, POST }, auth, signIn, signOut }

    =
    NextAuth({
        ...authConfig,
        providers: [
            GitHub({
                clientId: process.env.GITHUB_ID,
                clientSecret: process.env.GITHUB_SECRET
            }),
            Google({
                clientId: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET
            }),
            CredentialsProvider({
                async authorize(credentials) {
                    try {
                        const user = await login(credentials);
                        return user;
                    } catch (error) {
                        return null;
                    }
                }
            }),
        ],
        callbacks: {
            async signIn({ user, account, profile }) {

                if (account.provider === 'google') {

                    try {

                        const [rows] = await pool.query('SELECT * FROM user WHERE email = ?', [user.email]);

                        console.log(rows[0]);

                        if (!rows[0]) {
                            const newUser = {
                                firstName: profile.given_name,
                                lastName: profile.family_name,
                                email: profile.email,
                                profilePicture: profile.avatar_url || profile.picture,
                                mobileNumber: null
                            }

                            await pool.query('INSERT INTO user SET ?', newUser);

                            console.log('New user added to the database:', newUser);
                        }
                    } catch (error) {

                        console.log(error);
                        return false;

                    }
                    return true;
                }

            },
            ...authConfig.callbacks,
        },
    });