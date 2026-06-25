/* eslint-disable */
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    return NextResponse.json({
      error: false,
      message: "Thank you for subscribing to our newsletter!"
    });
  } catch (error) {
    return NextResponse.json({
      error: true,
      message: (error as Error).message
    }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ error: false, message: "Newsletter API" });
}
