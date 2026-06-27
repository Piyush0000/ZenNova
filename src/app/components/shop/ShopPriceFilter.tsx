"use client";

import React from "react";
import { formatPrice } from "../products/productUtils";

type Props = {
  min: number;
  max: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
};

export default function ShopPriceFilter({ min, max, value, onChange }: Props) {
  const [minVal, maxVal] = value;
  const range = Math.max(max - min, 1);
  const minPercent = ((minVal - min) / range) * 100;
  const maxPercent = ((maxVal - min) / range) * 100;

  const handleMin = (next: number) => {
    onChange([Math.min(next, maxVal), maxVal]);
  };

  const handleMax = (next: number) => {
    onChange([minVal, Math.max(next, minVal)]);
  };

  return (
    <div className="zn-shop-price-filter">
      <div className="zn-shop-price-slider">
        <div className="zn-shop-price-slider__track" />
        <div
          className="zn-shop-price-slider__range"
          style={{ left: `${minPercent}%`, right: `${100 - maxPercent}%` }}
        />
        <input
          type="range"
          className="zn-shop-price-slider__input zn-shop-price-slider__input--min"
          min={min}
          max={max}
          value={minVal}
          onChange={(e) => handleMin(Number(e.target.value))}
          aria-label="Minimum price"
        />
        <input
          type="range"
          className="zn-shop-price-slider__input zn-shop-price-slider__input--max"
          min={min}
          max={max}
          value={maxVal}
          onChange={(e) => handleMax(Number(e.target.value))}
          aria-label="Maximum price"
        />
      </div>
      <p className="zn-shop-price-label">
        ₹{formatPrice(minVal)} — ₹{formatPrice(maxVal)}
      </p>
    </div>
  );
}
