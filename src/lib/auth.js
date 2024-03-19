import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

import pool from "./database";

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({

    providers: [

        GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],

    callbacks: {
        async signIn({user, account, profile}) {
    
            if (account.provider === 'github') {

                try {

                    const [rows] = await pool.query('SELECT * FROM user WHERE email = ?', [user.email]);

                    console.log(rows[0]);

                    if (!rows[0]) {
                        const newUser = {
                            firstName: profile.name,
                            lastName: profile.name,
                            email: profile.email,
                            profilePicture: profile.avatar_url,

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
        }
    }
})