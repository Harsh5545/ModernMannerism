'use server';


import prisma from '@/libs/db';
import bcrypt from 'bcryptjs';

export const signUp = async (email, password) => {
    const user = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    if (user) {
        return 'User with that email already exists.';
    }

    let Newpassword = bcrypt.hashSync(password, 10);

    await prisma.user.create({
        data: {
            email,
            password: Newpassword
        },
    });

    return "Successfully created new user!";
};