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
        <div class="product-quickview-popup">
          <div class="row">
            <div class="col-md-6">
              <div class="product-quickview-img">
                <img src="/storage/whatsapp-image-2026-05-31-at-31628-am-150x150.jpeg" alt="Quick view image" style="width: 100%; border-radius: 8px;" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="product-quickview-details" style="padding: 20px;">
                <h3>Product Details (Quick View)</h3>
                <p>Premium quality fitness supplements and wellness capsules designed for your active lifestyle.</p>
                <h4 style="color: #f37324; margin: 15px 0;">₹1,560</h4>
                <button class="tp-btn" style="background-color: #f37324; color: #fff; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer;">Add to Cart</button>
              </div>
            </div>
          </div>
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
