import type { Product } from "@/types/product";

function escapeHtml(value: string) {
  if (!value) return "";
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatPrice(value: string | number) {
  const num = Number(value);
  if (Number.isNaN(num)) return escapeHtml(String(value));
  return `&#8377;${num.toLocaleString("en-IN")}`;
}

function getSearchTags(product: Product) {
  const tags: string[] = [];
  if (product.category) tags.push(product.category.toUpperCase());
  (product.tags || []).forEach((tag) => tags.push(String(tag).toUpperCase()));
  return [...new Set(tags)].filter(Boolean).slice(0, 3);
}

function renderStars(reviewCount: number) {
  const stars = Array.from({ length: 5 }, () => "&#9734;").join("");
  return `<span class="zn-quick-search-stars" aria-hidden="true">${stars}</span><span>(${reviewCount})</span>`;
}

function renderProductItem(product: Product) {
  const image = product.images?.[0] || "/storage/logot.webp";
  const price = Number(product.price) || 0;
  const compareAt = Number(product.compareAtPrice) || 0;
  const reviewCount = Number((product as Product & { reviewCount?: number }).reviewCount) || 0;
  const oldPriceHtml =
    compareAt > price
      ? `<span class="bb-product-price-text-old">${formatPrice(compareAt)}</span>`
      : "";
  const tags = getSearchTags(product)
    .map((tag) => `<span class="zn-quick-search-tag">${escapeHtml(tag)}</span>`)
    .join("");

  return `
    <a href="/products/${escapeHtml(product.slug)}" class="bb-quick-search-item-wrapper zn-quick-search-item-link">
      <div class="bb-quick-search-item-image">
        <img src="${escapeHtml(image)}" alt="${escapeHtml(product.name)}" loading="lazy" />
      </div>
      <div class="bb-quick-search-item-info">
        <div class="bb-quick-search-item-name">${escapeHtml(product.name)}</div>
        <div class="bb-quick-search-item-rating zn-quick-search-rating">
          ${renderStars(reviewCount)}
        </div>
        <div class="bb-product-price bb-quick-search-item-price">
          <span class="bb-product-price-text new-price">${formatPrice(price)}</span>
          ${oldPriceHtml}
        </div>
        ${tags ? `<div class="zn-quick-search-tags">${tags}</div>` : ""}
      </div>
    </a>
  `;
}

export function renderSearchResultsHtml(products: Product[], query: string, total: number) {
  if (!products.length) {
    return `
      <div class="bb-quick-search-content zn-quick-search-content">
        <div class="bb-quick-search-empty zn-quick-search-empty">
          No products found for &ldquo;${escapeHtml(query)}&rdquo;
        </div>
      </div>
    `;
  }

  const items = products.map(renderProductItem).join("");
  const viewAll = `
    <div class="bb-quick-search-view-all zn-quick-search-view-all">
      <a href="/products?q=${encodeURIComponent(query)}">View all${total > products.length ? ` ${total}` : ""} results</a>
    </div>
  `;

  return `
    <div class="bb-quick-search-content zn-quick-search-content">
      <div class="bb-quick-search-list">
        ${items}
      </div>
      ${viewAll}
    </div>
  `;
}

export function filterProducts(products: Product[], query: string) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [];

  return products.filter((product) => {
    if (product.isActive === false) return false;
    const haystack = [
      product.name,
      product.description,
      product.category,
      product.sku,
      ...(product.tags || []),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return haystack.includes(normalized);
  });
}
