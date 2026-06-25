/* eslint-disable */
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "ajax", "sale-popup", "products.html");
    const data = fs.readFileSync(filePath, "utf8");
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    return NextResponse.json({ error: true, data: null, message: (error as Error).message }, { status: 500 });
  }
}

export async function POST() {
  return GET();
}
