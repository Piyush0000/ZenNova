/* eslint-disable */
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST() {
  try {
    const filePath = path.join(process.cwd(), "public", "ajax", "render-ui-blocks.html");
    const data = fs.readFileSync(filePath, "utf8");
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    return NextResponse.json({ error: true, data: null, message: (error as Error).message }, { status: 500 });
  }
}

export async function GET() {
  return POST();
}
