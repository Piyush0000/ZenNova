"use server";

import { headers } from "next/headers";
import crypto from "crypto";

const PAYU_KEY = process.env.PAYU_MERCHANT_KEY || "IWqFlM";
const PAYU_SALT = process.env.PAYU_MERCHANT_SALT || "suPick5t";

export async function initiatePayUPayment(data: {
  orderId: string;
  amount: number;
  firstName: string;
  email: string;
  phone: string;
  productinfo: string;
}) {
  try {
    const { orderId, amount, firstName, email, phone, productinfo } = data;
    const txnid = orderId.includes("-") 
      ? orderId.split("-").pop()?.toUpperCase() || orderId 
      : orderId;

    const headersList = await headers();
    let host = headersList.get("x-forwarded-host") || headersList.get("host") || "";
    if (host.includes(",")) {
      host = host.split(",")[0].trim();
    }
    const protocol = host.includes("localhost") || host.includes("127.0.0.1") ? "http" : "https";
    const callbackUrl = host ? `${protocol}://${host}/api/payu/callback` : "";

    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.evoclabs.com/api/storefront/public/zenova";
    const parts = apiBaseUrl.split("/public/");
    const subdomain = parts[1] || "zenova";

    // Standard PayU hash format: key|txnid|amount|productinfo|firstname|email|udf1|udf2|udf3|udf4|udf5|udf6|udf7|udf8|udf9|udf10|SALT
    const hashString = [
      PAYU_KEY,
      txnid,
      amount.toFixed(2),
      productinfo || "",
      firstName || "",
      email || "",
      subdomain, // udf1
      "", // udf2
      "", // udf3
      "", // udf4
      "", // udf5
      "", // udf6
      "", // udf7
      "", // udf8
      "", // udf9
      "", // udf10
      PAYU_SALT
    ].join("|");

    const hash = crypto.createHash("sha512").update(hashString).digest("hex");

    return {
      success: true,
      data: {
        key: PAYU_KEY,
        txnid,
        amount: amount.toFixed(2),
        productinfo,
        firstname: firstName,
        email,
        phone,
        hash,
        surl: callbackUrl,
        furl: callbackUrl,
        udf1: subdomain,
      },
    };
  } catch (error: any) {
    return { success: false, message: error.message || "Failed to calculate secure payment parameters" };
  }
}
