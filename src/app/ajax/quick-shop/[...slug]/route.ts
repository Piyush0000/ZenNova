/* eslint-disable */
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string[] }> }
) {
  const resolvedParams = await params;
  return NextResponse.json({
    error: false,
    data: {
      html: `
        <div class="product-quickshop-popup" style="padding: 25px; text-align: center;">
          <h3 style="margin-bottom: 15px;">Quick Shop Option</h3>
          <p style="color: #666; margin-bottom: 20px;">Select options for Zen Nova Premium Supplement.</p>
          <div class="quickshop-options" style="margin-bottom: 25px;">
            <label style="margin-right: 15px;">
              <input type="radio" name="size" value="250" defaultChecked /> 250g
            </label>
            <label>
              <input type="radio" name="size" value="500" /> 500g
            </label>
          </div>
          <button class="tp-btn" style="background-color: #f37324; color: #fff; padding: 10px 25px; border: none; border-radius: 4px; cursor: pointer; font-weight: 600;">Confirm & Add</button>
        </div>
      `
    },
    message: null
  });
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ slug: string[] }> }
) {
  return GET(request, { params });
}
