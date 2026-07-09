"use client";

import React, { useMemo } from "react";
import WishlistDetailButton from "./WishlistDetailButton";
import { formatPrice } from "./productUtils";

type Variant = {
  id: string;
  name: string;
  sku?: string;
  originalPrice?: number | string | null;
  discountedPrice?: number | string | null;
  stock?: number | string;
  isActive?: boolean;
};

type Props = {
  productId: string;
  stock: number;
  initialPrice: string | number;
  initialCompareAtPrice?: string | number | null;
  variants?: Variant[];
  sku: string;
};

export default function ProductDetailActions({
  productId,
  stock,
  initialPrice,
  initialCompareAtPrice,
  variants = [],
  sku,
}: Props) {
  // Filter active variants
  const activeVariants = useMemo(() => {
    return (variants || []).filter((v) => v.isActive !== false);
  }, [variants]);

  // Select the first variant by default if variants exist
  const [selectedVariant, setSelectedVariant] = React.useState<Variant | null>(
    activeVariants.length > 0 ? activeVariants[0] : null
  );

  const currentPrice = useMemo(() => {
    if (selectedVariant) {
      const price = selectedVariant.discountedPrice ?? selectedVariant.originalPrice;
      return price != null ? Number(price) : Number(initialPrice);
    }
    return Number(initialPrice);
  }, [selectedVariant, initialPrice]);

  const currentCompareAtPrice = useMemo(() => {
    if (selectedVariant) {
      const compare = selectedVariant.originalPrice;
      return compare != null ? Number(compare) : (initialCompareAtPrice ? Number(initialCompareAtPrice) : null);
    }
    return initialCompareAtPrice ? Number(initialCompareAtPrice) : null;
  }, [selectedVariant, initialCompareAtPrice]);

  const currentStock = useMemo(() => {
    if (selectedVariant) {
      return selectedVariant.stock != null ? Number(selectedVariant.stock) : 0;
    }
    return stock;
  }, [selectedVariant, stock]);

  const currentSku = useMemo(() => {
    if (selectedVariant && selectedVariant.sku) {
      return selectedVariant.sku;
    }
    return sku;
  }, [selectedVariant, sku]);

  const maxQty = Math.max(1, currentStock);
  const [qty, setQty] = React.useState(1);

  // Reset quantity to 1 when selecting a new variant
  const handleSelectVariant = (variant: Variant) => {
    setSelectedVariant(variant);
    setQty(1);
  };

  const decrement = () => setQty((value) => Math.max(1, value - 1));
  const increment = () => setQty((value) => Math.min(maxQty, value + 1));

  const targetProductId = selectedVariant ? selectedVariant.id : productId;

  return (
    <div className="zn-product-details-interactive-section">
      {/* Prices */}
      <div className="tp-product-details-price-wrapper zn-product-details-price mb-20">
        <span className="tp-product-details-price new-price">₹{formatPrice(currentPrice)}</span>
        {currentCompareAtPrice && currentCompareAtPrice > currentPrice && (
          <span className="tp-product-details-price old-price">
            <del>₹{formatPrice(currentCompareAtPrice)}</del>
          </span>
        )}
      </div>

      {/* Variant Selector */}
      {activeVariants.length > 0 && (
        <div className="zn-product-details-variants mb-25">
          <span className="zn-product-details-variants__title text-white d-block mb-10 font-weight-bold">
            Select Option:
          </span>
          <div className="d-flex flex-wrap gap-2">
            {activeVariants.map((variant) => {
              const isSelected = selectedVariant?.id === variant.id;
              return (
                <button
                  key={variant.id}
                  type="button"
                  className={`zn-product-details-variant-btn btn ${
                    isSelected ? "btn-warning text-dark font-weight-bold" : "btn-outline-secondary text-white"
                  }`}
                  onClick={() => handleSelectVariant(variant)}
                  style={{
                    borderRadius: "20px",
                    padding: "6px 16px",
                    fontSize: "14px",
                    border: isSelected ? "2px solid #ffc107" : "1px solid #444",
                    backgroundColor: isSelected ? "#ffc107" : "transparent",
                    transition: "all 0.2s ease",
                  }}
                >
                  {variant.name}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Meta details (SKU & Availability) */}
      <div className="tp-product-details-meta mb-30" style={{ borderTop: "1px solid #222", borderBottom: "1px solid #222", padding: "15px 0" }}>
        <div className="d-flex justify-content-between text-white-50 mb-2">
          <span>SKU:</span>
          <span className="text-white font-weight-bold">{currentSku}</span>
        </div>
        <div className="d-flex justify-content-between text-white-50">
          <span>Availability:</span>
          <span className={currentStock > 0 ? "text-success font-weight-bold" : "text-danger font-weight-bold"}>
            {currentStock > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </div>
      </div>

      {/* Action Form */}
      <form
        action="/ajax/cart-content"
        method="POST"
        data-bb-toggle="product-form"
        className="zn-product-details-actions-form"
      >
        <input type="hidden" name="id" value={targetProductId} />
        <input type="hidden" name="qty" value={qty} readOnly />

        <div className="zn-product-details-actions">
          <div className="zn-product-details-qty" aria-label="Quantity">
            <button
              type="button"
              className="zn-product-details-qty__btn"
              onClick={decrement}
              disabled={qty <= 1}
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="zn-product-details-qty__value" aria-live="polite">
              {qty}
            </span>
            <button
              type="button"
              className="zn-product-details-qty__btn"
              onClick={increment}
              disabled={qty >= maxQty || currentStock <= 0}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

          <button
            type="submit"
            name="add-to-cart"
            className="zn-product-details-btn zn-product-details-btn--cart"
            disabled={currentStock <= 0}
          >
            Add To Cart
          </button>

          <button
            type="submit"
            name="checkout"
            className="zn-product-details-btn zn-product-details-btn--buy"
            disabled={currentStock <= 0}
          >
            Buy Now
          </button>

          <WishlistDetailButton productId={targetProductId} />
        </div>
      </form>
    </div>
  );
}
