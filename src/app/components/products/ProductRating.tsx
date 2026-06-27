import React from "react";

type Props = {
  slug: string;
  reviewCount?: number;
  ratingPercent?: number;
};

export default function ProductRating({
  slug,
  reviewCount = 0,
  ratingPercent = 0,
}: Props) {
  return (
    <div className="tp-product-rating d-flex align-items-center">
      <div className="tp-product-rating-icon">
        <div className="bb-product-rating" style={{ "--bb-rating-size": "70px" } as React.CSSProperties}>
          <span style={{ width: `${ratingPercent}%` }} />
        </div>
      </div>
      <div className="tp-product-rating-text">
        <a href={`/products/${slug}#product-review`} data-bb-toggle="scroll-to-review">
          <span className="d-none d-sm-block">({reviewCount} reviews)</span>
          <span className="d-block d-sm-none">({reviewCount})</span>
        </a>
      </div>
    </div>
  );
}
