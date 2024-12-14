import { NextResponse } from "next/server";
import { commonServices } from "@/lib/services/common";

export async function POST(req) {
  try {
    const data = await req.json();
    const { name, isActive } = data;
    console.log("Parsed data:", name, isActive); 
    
    const new_category = {
      name:name, 
      status:isActive,
    };

    const result = await commonServices.createEntry("categories", new_category);
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ success: false, error: error.message });
  }
}
