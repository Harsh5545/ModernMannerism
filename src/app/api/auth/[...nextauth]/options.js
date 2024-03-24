import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { commonServices } from "@/lib/services/common";

export const options = {
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
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_Secret,
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
          const foundUser = await commonServices.readSingleData('user','*',{email:credentials.email})
          const hashedPassword = credentials.password;
          if (foundUser) {
            console.log("User Exists",foundUser);
            const match = await bcrypt.compare(hashedPassword,foundUser[0].password);
            if (match) {
              console.log("Good Pass");
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
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
        console.log(token)
      return token;
    },
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role;
        console.log(session)
      return session;
    },
  },
};