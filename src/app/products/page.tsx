/* eslint-disable */
"use client";

import React, { useState } from "react";

const PRODUCTS = [
  {
    id: 159,
    slug: "zennova-shilajit-pure-himalayan-power-advanced-gold-grade-formula",
    name: "Zennova Shilajit – Pure Himalayan Power (Advanced Gold Grade Formula)",
    image: "/storage/whatsapp-image-2026-05-31-at-31116-am-600x600.jpeg",
    price: 1299,
    oldPrice: 1560,
    category: "Body",
    badge: "Hot",
    rating: 0,
    sku: "SF-2443-JLD5",
    description: "Premium gold-grade Himalayan Shilajit, rich in fulvic acid and over 84 trace minerals to boost energy, vitality, stamina, and immune support."
  },
  {
    id: 150,
    slug: "zennova-lungs-detox",
    name: "Zennova Lungs Detox",
    image: "/storage/whatsapp-image-2026-05-31-at-35910-am-600x600.jpeg",
    price: 1130,
    oldPrice: 1420,
    category: "Body",
    badge: "-20%",
    rating: 0,
    sku: "SF-2443-BWKP",
    description: "Advanced respiratory support formula designed to cleanse, detoxify, and support lung health from the effects of smoke, pollution, and seasonal allergens."
  },
  {
    id: 148,
    slug: "zennova-fat-burne",
    name: "Zennova Fat Burne - Thermogenic formula",
    image: "/storage/whatsapp-image-2026-05-31-at-40352-am-600x600.jpeg",
    price: 1120,
    oldPrice: 1360,
    category: "Body",
    badge: "-17%",
    rating: 0,
    sku: "SF-2443-HDD9",
    description: "Powerful thermogenic fat burner capsules formulated to increase metabolism, accelerate fat loss, boost energy levels, and control cravings."
  },
  {
    id: 144,
    slug: "zennova-ashwagandha-premium-stress-immune-support",
    name: "Zennova Ashwagandha – Premium Stress & Immune Support",
    image: "/storage/whatsapp-image-2026-05-31-at-42031-am-600x600.jpeg",
    price: 600,
    oldPrice: 800,
    category: "Body",
    badge: "-25%",
    rating: 0,
    sku: "SF-2443-RZBB",
    description: "High-potency organic Ashwagandha capsules to help manage daily stress, promote calmness, improve sleep quality, and strengthen the immune system."
  }
];

const CATEGORIES = [
  { name: "All", count: PRODUCTS.length },
  { name: "Body", count: 4 },
  { name: "Face", count: 0 },
  { name: "Fitness", count: 0 },
  { name: "Fragrance", count: 0 },
  { name: "Hair", count: 0 },
  { name: "Weight Management", count: 0 }
];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <main>
      {/* Breadcrumb Area */}
      <section className="breadcrumb__area pt-80 pb-80" style={{ backgroundColor: "#000", borderBottom: "1px solid #111" }}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content text-center">
                <h2 className="breadcrumb__title text-white">Our Products</h2>
                <div className="breadcrumb__list text-white">
                  <span><a href="/" className="text-white">Home</a></span>
                  <span className="dvdr">/</span>
                  <span className="text-white-50">Shop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Area */}
      <section className="tp-shop-area pt-100 pb-100 grey-bg-2">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-xl-3 col-lg-4">
              <div className="tp-shop-sidebar mr-10">
                {/* Categories widget */}
                <div className="tp-shop-widget mb-35">
                  <h3 className="tp-shop-widget-title">Product Categories</h3>
                  <div className="tp-shop-widget-content">
                    <div className="tp-shop-widget-categories">
                      <ul>
                        {CATEGORIES.map(cat => (
                          <li key={cat.name}>
                            <button 
                              onClick={() => setSelectedCategory(cat.name)}
                              className={`w-100 text-start py-2 px-3 border-0 rounded ${selectedCategory === cat.name ? "bg-warning text-dark font-weight-bold" : "bg-transparent text-white-50"}`}
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

            {/* Product Grid */}
            <div className="col-xl-9 col-lg-8">
              <div className="tp-shop-main-wrapper">
                <div className="tp-shop-top mb-45">
                  <div className="row align-items-center">
                    <div className="col-md-6 col-6">
                      <div className="tp-shop-top-left">
                        <p className="text-white-50">Showing {filteredProducts.length} results</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tp-shop-items-wrapper">
                  <div className="row">
                    {filteredProducts.map(product => (
                      <div className="col-xl-4 col-md-6 col-sm-6 mb-40" key={product.id}>
                        <div className="tp-product-item transition-3 p-relative fix m-img bg-dark text-white rounded" style={{ border: "1px solid #222" }}>
                          <div className="tp-product-thumb p-relative fix">
                            <a href={`/products/${product.slug}`}>
                              <img src={product.image} alt={product.name} className="w-100" style={{ objectFit: "cover" }} />
                            </a>
                            {product.badge && (
                              <div className="tp-product-badge">
                                <span style={{ backgroundColor: "#AC2200" }}>{product.badge}</span>
                              </div>
                            )}
                            <div className="tp-product-action">
                              <div className="d-flex flex-column tp-product-action-item">
                                <a href={`/products/${product.slug}`} className="tp-product-action-btn" title="View Details">
                                  <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.99938 5.64111C8.66938 5.64111 7.58838 6.72311 7.58838 8.05311C7.58838 9.38211 8.66938 10.4631 9.99938 10.4631C11.3294 10.4631 12.4114 9.38211 12.4114 8.05311C12.4114 6.72311 11.3294 5.64111 9.99938 5.64111ZM9.99938 11.9631C7.84238 11.9631 6.08838 10.2091 6.08838 8.05311C6.08838 5.89611 7.84238 4.14111 9.99938 4.14111C12.1564 4.14111 13.9114 5.89611 13.9114 8.05311C13.9114 10.2091 12.1564 11.9631 9.99938 11.9631Z" fill="currentColor"/>
                                  </svg>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="tp-product-content p-4">
                            <h3 className="tp-product-title text-truncate mb-2">
                              <a href={`/products/${product.slug}`} className="text-white hover-orange">{product.name}</a>
                            </h3>
                            <div className="tp-product-price-wrapper mb-3">
                              <span className="tp-product-price new-price text-warning mr-10">₹{product.price}</span>
                              <span className="tp-product-price old-price text-white-50"><del>₹{product.oldPrice}</del></span>
                            </div>
                            <div className="tp-product-add-cart-btn-large-wrapper">
                              <a 
                                href={`/products/${product.slug}`}
                                className="tp-product-add-cart-btn-large w-100 text-center text-white bg-warning hover-dark-btn py-2 d-block rounded"
                              >
                                View Product
                              </a>
                            </div>
                          </div>
                        </div>
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
