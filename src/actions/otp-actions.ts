"use server";

import { cookies } from "next/headers";

const API_KEY = process.env.TWO_FACTOR_API_KEY || "7b634cbc-4ac1-11f1-9800-0200cd936042";
const SEND_URL_TEMPLATE = process.env.TWO_FACTOR_SEND_URL || "https://2factor.in/API/V1/{API_KEY}/SMS/{PHONE}/AUTOGEN3";
const VERIFY_URL_TEMPLATE = process.env.TWO_FACTOR_VERIFY_URL || "https://2factor.in/API/V1/{API_KEY}/SMS/{PHONE}/AUTOGEN/{OTP}";

export async function sendOtp({ phone }: { phone: string }) {
  try {
    const cleaned = phone.replace(/\D/g, "");
    if (cleaned.length < 10) {
      return { success: false, message: "Invalid phone number length" };
    }

    const url = SEND_URL_TEMPLATE
      .replace("{API_KEY}", API_KEY)
      .replace("{PHONE}", encodeURIComponent(cleaned));

    const res = await fetch(url);
    const data = await res.json();

    if (data && data.Status === "Success") {
      return { success: true, sessionId: data.Details };
    }

    return { success: false, message: data.Details || "Failed to send OTP code" };
  } catch (e: any) {
    return { success: false, message: e.message || "Failed to send OTP due to network error" };
  }
}

export async function verifyOtp({ phone, code }: { phone: string; code: string }) {
  try {
    const cleanedPhone = phone.replace(/\D/g, "");
    const cleanedCode = code.trim();

    const url = VERIFY_URL_TEMPLATE
      .replace("{API_KEY}", API_KEY)
      .replace("{PHONE}", encodeURIComponent(cleanedPhone))
      .replace("{OTP}", encodeURIComponent(cleanedCode));

    const res = await fetch(url);
    const data = await res.json();

    if (data && data.Status === "Success") {
      return { success: true };
    }

    return { success: false, message: data.Details || "Verification code mismatch" };
  } catch (e: any) {
    return { success: false, message: e.message || "Failed to verify OTP due to network error" };
  }
}

export async function createSession(phone: string) {
  try {
    const cookieStore = await cookies();
    cookieStore.set("zennova_checkout_phone", phone, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      httpOnly: true,
      sameSite: "lax"
    });
    return { success: true };
  } catch (e: any) {
    return { success: false, message: e.message };
  }
}

export async function validateSession() {
  try {
    const cookieStore = await cookies();
    const cookie = cookieStore.get("zennova_checkout_phone");
    if (cookie && cookie.value) {
      return { valid: true, phone: cookie.value };
    }
    return { valid: false };
  } catch (e) {
    return { valid: false };
  }
}
