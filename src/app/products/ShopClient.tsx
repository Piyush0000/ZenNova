/* eslint-disable */
"use client";

import React, { useState } from "react";
import type { Product } from "@/types/product";
import ProductCard from "../components/products/ProductCard";

type Props = {
  products: Product[];
  categories: { name: string; count: number }[];
};

export default function ShopClient({ products, categories }: Props) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (p) => p.category?.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <main>
      <section
        className="breadcrumb__area pt-80 pb-80"
        style={{ backgroundColor: "#000", borderBottom: "1px solid #111" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content text-center">
                <h2 className="breadcrumb__title text-white">Our Products</h2>
                <div className="breadcrumb__list text-white">
                  <span>
                    <a href="/" className="text-white">
                      Home
                    </a>
                  </span>
                  <span className="dvdr">/</span>
                  <span className="text-white-50">Shop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tp-shop-area pt-100 pb-100 grey-bg-2">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4">
              <div className="tp-shop-sidebar mr-10">
                <div className="tp-shop-widget mb-35">
                  <h3 className="tp-shop-widget-title">Product Categories</h3>
                  <div className="tp-shop-widget-content">
                    <div className="tp-shop-widget-categories">
                      <ul>
                        {categories.map((cat) => (
                          <li key={cat.name}>
                            <button
                              onClick={() => setSelectedCategory(cat.name)}
                              className={`w-100 text-start py-2 px-3 border-0 rounded ${
                                selectedCategory === cat.name
                                  ? "bg-warning text-dark font-weight-bold"
                                  : "bg-transparent text-white-50"
                              }`}
                              style={{ transition: "all 0.3s" }}
                            >
                              {cat.name} <span>({cat.count})</span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-9 col-lg-8">
              <div className="tp-shop-main-wrapper">
                <div className="tp-shop-top mb-45">
                  <div className="row align-items-center">
                    <div className="col-md-6 col-6">
                      <div className="tp-shop-top-left">
                        <p className="text-white-50">
                          Showing {filteredProducts.length} results
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tp-shop-items-wrapper">
                  <div className="row zn-product-grid">
                    {filteredProducts.map((product) => (
                      <div className="col-xl-4 col-md-6 col-sm-6 mb-40" key={product.id}>
                        <ProductCard product={product} showCountdown={false} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
