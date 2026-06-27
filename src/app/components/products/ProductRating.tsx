import React from "react";

type Props = {
  slug: string;
  reviewCount?: number;
  ratingPercent?: number;
  shopStars?: boolean;
};

export default function ProductRating({
  slug,
  reviewCount = 0,
  ratingPercent = 0,
  shopStars = false,
}: Props) {
  return (
    <div className={`tp-product-rating d-flex align-items-center ${shopStars ? "zn-shop-stars" : ""}`}>
      <div className="tp-product-rating-icon">
        <div className="bb-product-rating" style={{ "--bb-rating-size": shopStars ? "88px" : "70px" } as React.CSSProperties}>
          <span style={{ width: shopStars ? "100%" : `${ratingPercent}%` }} />
        </div>
      </div>
      {!shopStars && (
        <div className="tp-product-rating-text">
          <a href={`/products/${slug}#product-review`} data-bb-toggle="scroll-to-review">
            <span className="d-none d-sm-block">({reviewCount} reviews)</span>
            <span className="d-block d-sm-none">({reviewCount})</span>
          </a>
        </div>
      )}
    </div>
  );
}
