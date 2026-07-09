import { NextRequest, NextResponse } from "next/server";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
// ZenNova's store ID — fetched from /frontend store.id
const STORE_ID = process.env.ZENNOVA_STORE_ID || "fd14721b-4480-4600-a6d2-d05fa6464cee";

interface Coupon {
  id: string;
  code: string;
  type: "PERCENTAGE" | "FIXED" | "BUY_X_GET_Y" | "FREE_SHIPPING" | "BUNDLE";
  value: number;
  minOrderValue?: number;
  maxUses?: number;
  usedCount: number;
  expiresAt?: string;
  endDate?: string;
  startDate?: string;
  isActive: boolean;
}

function isExpired(c: Coupon): boolean {
  if (c.expiresAt && new Date(c.expiresAt) < new Date()) return true;
  if (c.endDate && new Date(c.endDate) < new Date()) return true;
  return false;
}

function isNotStartedYet(c: Coupon): boolean {
  if (c.startDate && new Date(c.startDate) > new Date()) return true;
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { code, orderTotal } = body as { code: string; orderTotal: number };

    if (!code) {
      return NextResponse.json({ success: false, message: "Coupon code is required" }, { status: 400 });
    }

    // Fetch all coupons for the store directly
    const res = await fetch(`${BASE_URL}/coupons?storeId=${STORE_ID}`, {
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    });

    if (!res.ok) {
      // Fallback: try without storeId filter
      const res2 = await fetch(`${BASE_URL}/coupons`, {
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
      });
      if (!res2.ok) {
        return NextResponse.json({ success: false, message: "Could not fetch coupons" }, { status: 502 });
      }
    }

    const data = await res.json().catch(() => ({}));
    const coupons: Coupon[] = Array.isArray(data) ? data : (data.coupons || []);

    // Find the coupon by code (case-insensitive)
    const coupon = coupons.find(
      (c) => c.code.toUpperCase() === code.toUpperCase()
    );

    if (!coupon) {
      return NextResponse.json({ success: false, message: "Invalid coupon code" }, { status: 404 });
    }

    if (!coupon.isActive) {
      return NextResponse.json({ success: false, message: "This coupon is no longer active" }, { status: 400 });
    }

    if (isExpired(coupon)) {
      return NextResponse.json({ success: false, message: "This coupon has expired" }, { status: 400 });
    }

    if (isNotStartedYet(coupon)) {
      return NextResponse.json({ success: false, message: "This coupon is not valid yet" }, { status: 400 });
    }

    if (coupon.maxUses && coupon.usedCount >= coupon.maxUses) {
      return NextResponse.json({ success: false, message: "This coupon has reached its usage limit" }, { status: 400 });
    }

    // Check if order type is supported (only PERCENTAGE and FIXED for now)
    if (coupon.type !== "PERCENTAGE" && coupon.type !== "FIXED") {
      return NextResponse.json(
        { success: false, message: "This coupon type cannot be applied here" },
        { status: 400 }
      );
    }

    // Check minimum order value
    if (coupon.minOrderValue && orderTotal < coupon.minOrderValue) {
      return NextResponse.json(
        {
          success: false,
          message: `Minimum order value of ₹${coupon.minOrderValue} required for this coupon`,
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      code: coupon.code,
      type: coupon.type,
      value: coupon.value,
      minOrderValue: coupon.minOrderValue || 0,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: (error as Error).message || "Failed to validate coupon" },
      { status: 500 }
    );
  }
}
