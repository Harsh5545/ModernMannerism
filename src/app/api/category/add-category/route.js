import { NextResponse } from "next/server";
import { commonServices } from "@/lib/services/common";
import prisma from "@/lib/prisma";

export async function POST(req) {
  try {
    const data = await req.json();
    const { name, isActive } = data;
    console.log("Parsed data:", name, isActive); 
    
    const new_category = {
      category_name:name, 
      status:isActive ? "ACTIVE" : "INACTIVE",
    };

    // const result = await commonServices.createEntry("categories", new_category);
    const result = await prisma.category.create({
      data: new_category,
    });
    console.log(result)
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ success: false, error: error.message });
  }
}
