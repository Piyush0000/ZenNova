/* eslint-disable */
"use client";

import React from "react";

export default function Wishlist() {
  return (
    <main>
      <section className="breadcrumb__area pt-80 pb-80" style={{ backgroundColor: "#000", borderBottom: "1px solid #111" }}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content text-center">
                <h2 className="breadcrumb__title text-white">My Wishlist</h2>
                <div className="breadcrumb__list text-white">
                  <span><a href="/" className="text-white">Home</a></span>
                  <span className="dvdr">/</span>
                  <span className="text-white-50">Wishlist</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-100 pb-100 grey-bg-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 text-center text-white">
              <div className="p-5 bg-dark rounded" style={{ border: "1px solid #222" }}>
                <h3 className="text-white mb-3">Your Wishlist is Empty</h3>
                <p className="text-white-50 mb-4">Keep track of your favorite supplements by clicking the heart icon on product cards.</p>
                <a href="/products" className="tp-btn bg-warning text-dark py-3 px-5 d-inline-block rounded font-weight-bold">
                  View Shop
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
