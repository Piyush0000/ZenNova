import { NextResponse } from "next/server";
import { getProducts } from "@/lib/api";
import { filterProducts, renderSearchResultsHtml } from "@/lib/search-results-html";

const MAX_RESULTS = 6;

async function handleSearch(request: Request) {
  const url = new URL(request.url);
  let query = (url.searchParams.get("q") || "").trim();

  if (!query && request.method === "POST") {
    try {
      const body = await request.formData();
      query = String(body.get("q") || "").trim();
    } catch {
      query = "";
    }
  }

  if (!query) {
    return NextResponse.json({ error: false, data: "", message: null });
  }

  const products = await getProducts();
  const matches = filterProducts(products, query);
  const limited = matches.slice(0, MAX_RESULTS);
  const html = renderSearchResultsHtml(limited, query, matches.length);

  return NextResponse.json({ error: false, data: html, message: null });
}

export async function GET(request: Request) {
  return handleSearch(request);
}

export async function POST(request: Request) {
  return handleSearch(request);
}
