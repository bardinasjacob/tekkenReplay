import connectDB from "../connect";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    await connectDB();

  } catch (error: any) {
    return "Error";
  }
}
