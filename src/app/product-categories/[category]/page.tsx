/* eslint-disable */
import React from "react";
import { notFound } from "next/navigation";
import { getProducts } from "@/lib/api";
import ProductGrid from "@/app/components/products/ProductGrid";

const normalize = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-");


export default async function CategoryListing({
  params
}: {
  params: Promise<{ category: string }>
}) {
  const resolvedParams = await params;
  const { category } = resolvedParams;
const normalizedCategory = normalize(category);  

  const allProducts = await getProducts();
 const apiCategories = [
  ...new Set(
    allProducts
      .map((p: any) => normalize(p.category))
      .filter(Boolean)
  ),
];

  const isAll = normalizedCategory === "all-supplements";

  if (!isAll && !apiCategories.includes(normalizedCategory)) {
    notFound();
  }

  const categoryTitle = isAll
    ? "All Supplements"
    : normalizedCategory === "weight-management"
    ? "Weight Management"
    : normalizedCategory.charAt(0).toUpperCase() + normalizedCategory.slice(1);

    const filteredProducts = isAll
  ? allProducts
  : allProducts.filter(
      (p: any) =>
        normalize(p.category) === normalizedCategory
    );

  return (
    <main>
      {/* Breadcrumb */}
      <section className="breadcrumb__area pt-80 pb-80" style={{ backgroundColor: "#000", borderBottom: "1px solid #111" }}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content text-center">
                <h2 className="breadcrumb__title text-white">{categoryTitle}</h2>
                <div className="breadcrumb__list text-white">
                  <span><a href="/" className="text-white">Home</a></span>
                  <span className="dvdr">/</span>
                  <span><a href="/products" className="text-white">Categories</a></span>
                  <span className="dvdr">/</span>
                  <span className="text-white-50">{categoryTitle}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Category Area */}
      <section className="tp-shop-area pt-100 pb-100 grey-bg-2">
        <div className="container">
          {filteredProducts.length === 0 ? (
            <div className="row justify-content-center">
              <div className="col-xl-6 text-center py-5">
                <h3 className="text-white mb-3">No Products Found</h3>
                <p className="text-white-50 mb-4">We currently do not have any products listed under the {categoryTitle} category. Explore our other supplements.</p>
                <a href="/products" className="tp-btn text-white bg-warning hover-dark-btn py-3 px-5 d-inline-block rounded">
                  View All Products
                </a>
              </div>
            </div>
          ) : (
            <ProductGrid products={filteredProducts} />
          )}
        </div>
      </section>
    </main>
  );
}
