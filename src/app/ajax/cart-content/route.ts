/* eslint-disable */
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    error: false,
    data: {
      content: '<div class="cartmini__empty text-center"><p>Your cart is empty.</p></div>',
      footer: ""
    },
    message: null
  });
}

export async function POST() {
  return GET();
}
