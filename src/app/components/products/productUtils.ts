import type { Product } from "@/types/product";

export type ProductBadge = {
  text: string;
  className: string;
};

export function getProductBadge(product: Product): ProductBadge | null {
  if (product.isNewArrival) {
    return { text: "New", className: "product-trending" };
  }

  if (product.isBestSeller) {
    return { text: "Hot", className: "product-hot" };
  }

  const discount = product.compareAtPrice
    ? Math.round(
        ((Number(product.compareAtPrice) - Number(product.price)) /
          Number(product.compareAtPrice)) *
          100
      )
    : 0;

  if (discount > 0) {
    return { text: `-${discount}%`, className: "product-sale" };
  }

  return null;
}

export function getProductBadges(product: Product): ProductBadge[] {
  const badges: ProductBadge[] = [];

  if (product.isNewArrival) {
    badges.push({ text: "New", className: "product-trending" });
  }

  if (product.isBestSeller) {
    badges.push({ text: "Hot", className: "product-hot" });
  }

  const discount = product.compareAtPrice
    ? Math.round(
        ((Number(product.compareAtPrice) - Number(product.price)) /
          Number(product.compareAtPrice)) *
          100
      )
    : 0;

  if (discount > 0) {
    badges.push({ text: `-${discount}%`, className: "product-sale" });
  }

  return badges;
}

export function formatPrice(price: string | number): string {
  const value = Number(price);
  if (Number.isNaN(value)) return String(price);
  return value.toLocaleString("en-IN");
}
