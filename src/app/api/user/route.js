
import { NextResponse, userAgent } from "next/server";
import bcrypt from "bcrypt";
import { commonServices } from "@/lib/services/common";

export async function POST(req) {
    try {
        const body = await req.json();
        const userData = body.formData;
        console.log(userData)
        //Confirm data exists
        if (!userData?.email || !userData.password) {
            return NextResponse.json({ message: "All fields are required." }, { status: 400 });
        }

        // check for duplicate emails
        const duplicate = await commonServices.readSingleData('users', '*', { email: userData.email })

        console.log(duplicate);

        if (duplicate && duplicate.length > 0) {
            return NextResponse.json({ message: "Duplicate Email" }, { status: 409 });
        }

        const hashPassword = await bcrypt.hash(userData.password, 10);

        const NewUser = {
            full_name:`${userData.firstName} ${userData.lastName}`,
            email: userData.email,
            mobile_number:userData.mobileNumber,
            password_hash: hashPassword,
            username:userData.firstName
        }
        await commonServices.createEntry('users', NewUser);
        return NextResponse.json({ message: "User Created." }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}