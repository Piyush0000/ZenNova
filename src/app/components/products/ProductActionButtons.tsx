import React from "react";
import type { Product } from "@/types/product";
import { CompareIcon, QuickViewIcon, WishlistIcon } from "./ProductIcons";

type Props = {
  product: Product;
};

export default function ProductActionButtons({ product }: Props) {
  return (
    <div className="tp-product-action">
      <div className="d-flex flex-column tp-product-action-item">
        <button
          type="button"
          className="tp-product-compare-btn tp-product-action-btn"
          data-bb-toggle="add-to-compare"
          title="Add To Compare"
          data-url={`/compare/${product.id}`}
          data-remove-url={`/compare/${product.id}`}
          data-add-text="Add To Compare"
          data-remove-text="Remove From Compare"
        >
          <CompareIcon />
          <span className="tp-product-tooltip">Add To Compare</span>
        </button>
        <button
          type="button"
          className="tp-product-quick-view-btn tp-product-action-btn"
          title="Quick View"
          data-bs-toggle="modal"
          data-bs-target="#product-quick-view-modal"
          data-url={`/ajax/quick-view/${product.id}`}
        >
          <QuickViewIcon />
          <span className="tp-product-tooltip">Quick View</span>
        </button>
        <button
          type="button"
          className="tp-product-add-to-wishlist-btn tp-product-action-btn"
          data-bb-toggle="add-to-wishlist"
          title="Add To Wishlist"
          data-url={`/wishlist/${product.id}`}
          data-add-text="Add To Wishlist"
          data-remove-text="Remove From Wishlist"
        >
          <WishlistIcon />
          <span className="tp-product-tooltip">Add To Wishlist</span>
        </button>
      </div>
    </div>
  );
}
