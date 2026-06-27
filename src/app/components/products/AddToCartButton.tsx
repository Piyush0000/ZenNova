import React from "react";
import type { Product } from "@/types/product";
import { CartIcon } from "./ProductIcons";

type Props = {
  product: Product;
  label?: string;
  variant?: "overlay" | "static";
  className?: string;
};

export default function AddToCartButton({
  product,
  label = "Add To Cart",
  variant = "static",
  className = "",
}: Props) {
  const button = (
    <button
      type="button"
      className={`tp-product-add-cart-btn-large ${className}`.trim()}
      data-bb-toggle="quick-shop"
      data-url={`/ajax/quick-shop/${product.slug}`}
      data-product-id={product.id}
      data-product-name={product.name}
      data-product-price={product.price}
      data-product-sku={product.sku || ""}
      data-product-category={product.category || ""}
      data-product-categories={product.category || ""}
      title="Quick Shop"
    >
      <CartIcon />
      {label}
    </button>
  );

  if (variant === "overlay") {
    return <div className="tp-product-add-cart-btn-large-wrapper">{button}</div>;
  }

  return button;
}
