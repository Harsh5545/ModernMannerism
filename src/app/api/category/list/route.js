import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET handler to fetch all categories
export async function GET(req) {
  try {
    // Fetch all categories from the database
    const categories = await prisma.category.findMany();

    // Return the list of categories
    return NextResponse.json({ success: true, data: categories });
  } catch (error) {
    // Handle any errors that occur during the process
    console.error("Error fetching categories:", error);
    return NextResponse.json({ success: false, error: error.message });
  }
}
