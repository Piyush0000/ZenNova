"use client";

import React from "react";
import type { Product } from "@/types/product";
import ProductCard from "./ProductCard";

type Props = {
  products: Product[];
  columnsClassName?: string;
};

export default function ProductGrid({
  products,
  columnsClassName = "col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-40",
}: Props) {
  return (
    <div className="row zn-product-grid">
      {products.map((product) => (
        <div className={columnsClassName} key={product.id}>
          <ProductCard product={product} showCountdown={false} />
        </div>
      ))}
    </div>
  );
}
