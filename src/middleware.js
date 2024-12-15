import NextAuth from 'next-auth';
import { NextResponse } from 'next/server';
import { getToken } from "next-auth/jwt";
import { authConfig } from './auth.config';
import { PUBLIC_ROUTES, ADMIN_ROUTES, USER_ROUTES, LOGIN, ROOT } from './lib/routes';
const { auth } = NextAuth(authConfig);

export async function middleware(request) {
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

    console.log(token, "JWT Token from middleware")
    const { nextUrl } = request;
    // const session = await auth();
    // console.log(session, "session from middleware");
    const isAuthenticate = !!token
    console.log(isAuthenticate, nextUrl.pathname);
}
export const config = {
    matcher: '/api/:path*',
};
