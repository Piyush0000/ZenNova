"use client";

import React from "react";
import type { Product } from "@/types/product";
import { formatPrice } from "./productUtils";
import { CartIcon } from "./ProductIcons";

export type ComboOffer = {
  id: string;
  products: Product[];
  originalPrice: number;
  discountedPrice: number;
  discountLabel?: string;
};

type Props = {
  combo: ComboOffer;
  onAddCombo?: (combo: ComboOffer) => void;
};

export default function ComboOfferCard({ combo, onAddCombo }: Props) {
  const discount =
    combo.discountLabel ||
    `-${Math.round(
      ((combo.originalPrice - combo.discountedPrice) / combo.originalPrice) * 100
    )}%`;

  return (
    <div className="zn-combo-offer">
      <div className="zn-combo-offer__badge">{discount}</div>

      <div className="zn-combo-offer__products">
        {combo.products.map((product, index) => (
          <React.Fragment key={product.id}>
            <a
              href={`/products/${product.slug}`}
              className="zn-combo-offer__product"
              title={product.name}
            >
              <div className="zn-combo-offer__product-image">
                <img src={product.images?.[0]} alt={product.name} loading="lazy" />
              </div>
              <span className="zn-combo-offer__product-name text-truncate">
                {product.name}
              </span>
              <span className="zn-combo-offer__product-price">
                ₹{formatPrice(product.price)}
              </span>
            </a>
            {index < combo.products.length - 1 && (
              <span className="zn-combo-offer__operator" aria-hidden="true">
                +
              </span>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="zn-combo-offer__summary">
        <span className="zn-combo-offer__equals" aria-hidden="true">
          =
        </span>
        <div className="zn-combo-offer__pricing">
          <del className="zn-combo-offer__original-price">
            ₹{formatPrice(combo.originalPrice)}
          </del>
          <strong className="zn-combo-offer__discounted-price">
            ₹{formatPrice(combo.discountedPrice)}
          </strong>
        </div>
      </div>

      <button
        type="button"
        className="zn-combo-offer__cta tp-product-add-cart-btn-large"
        onClick={() => onAddCombo?.(combo)}
      >
        <CartIcon />
        Add Combo to Cart
      </button>
    </div>
  );
}
