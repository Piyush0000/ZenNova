import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const PAYU_KEY = process.env.PAYU_MERCHANT_KEY || "IWqFlM";
const PAYU_SALT = process.env.PAYU_MERCHANT_SALT || "suPick5t";

export async function POST(request: NextRequest) {
  let host = request.headers.get("x-forwarded-host") || request.headers.get("host") || "";
  if (host.includes(",")) {
    host = host.split(",")[0].trim();
  }
  const protocol = host.includes("localhost") || host.includes("127.0.0.1") ? "http" : "https";
  const baseUrl = host ? `${protocol}://${host}` : new URL(request.url).origin;

  try {
    const body = await request.formData();
    const data: Record<string, string> = {};
    body.forEach((value, key) => {
      data[key] = value.toString();
    });

    const {
      key,
      txnid,
      amount,
      productinfo,
      firstname,
      email,
      status,
      hash,
      udf1,
      udf2,
      udf3,
      udf4,
      udf5,
      udf6,
      udf7,
      udf8,
      udf9,
      udf10,
      mihpayid,
    } = data;

    // PayU response verification hash sequence:
    // SALT|status|udf10|udf9|udf8|udf7|udf6|udf5|udf4|udf3|udf2|udf1|email|firstname|productinfo|amount|txnid|key
    const verificationString = [
      PAYU_SALT,
      status || "",
      udf10 || "",
      udf9 || "",
      udf8 || "",
      udf7 || "",
      udf6 || "",
      udf5 || "",
      udf4 || "",
      udf3 || "",
      udf2 || "",
      udf1 || "",
      email || "",
      firstname || "",
      productinfo || "",
      amount || "",
      txnid || "",
      key || "",
    ].join("|");

    const calculatedHash = crypto.createHash("sha512").update(verificationString).digest("hex");

    if (calculatedHash !== hash) {
      console.error("PayU callback: Hash verification failed!", { calculatedHash, receivedHash: hash });
      return NextResponse.redirect(new URL(`/checkout?status=failure&reason=hash_mismatch`, baseUrl));
    }

    const normalizedStatus = status?.toLowerCase();
    if (normalizedStatus !== "success") {
      console.error("PayU callback: Payment failed or was cancelled:", status);
      return NextResponse.redirect(new URL(`/checkout?status=failure&reason=${status || "failed"}`, baseUrl));
    }

    return NextResponse.redirect(new URL(`/checkout?status=success&orderId=${txnid}&txn=${mihpayid}`, baseUrl));
  } catch (error: any) {
    console.error("PayU callback error:", error);
    return NextResponse.redirect(new URL(`/checkout?status=failure&reason=internal_error`, baseUrl));
  }
}
