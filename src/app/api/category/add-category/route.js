import { NextResponse, userAgent } from "next/server";
import bcrypt from "bcrypt";
import { commonServices } from "@/lib/services/common";

export async function POST(req) {
  try {
    const data = await req.json();
    console.log("Received raw data:", data); // Log received data

    // Example: Assuming data contains 'category_name' and 'status'
    const { category_name, status } = data;
    console.log("Parsed data:", category_name, status); // Log parsed values
    
    const new_category = {
      category_name,  // Directly assigning without redefining
      status,
    };

    const result = await commonServices.createEntry("category", new_category);
    console.log("Inserted entry:", result);
    
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ success: false, error: error.message });
  }
}
