import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { createUser } from "@/queries/users";


export const POST = async (request) => {
    
    const body = await request.json();

    const hashedPassword = await bcrypt.hash(body.password, 5);
  
    const newUser = {
        first_name: body.firstName,
        last_name: body.lastName,
        password: hashedPassword,
        email: body.email,
        mobile_number: body.mobileNumber,
        roleId: 1
    }

    try {
        await createUser(newUser);
    } catch (error) {
        console.log(error)
        return new NextResponse(error.mesage, {
            status: 500,
        });
    }

    return new NextResponse("User has been created", {
        status: 201,
    });

}