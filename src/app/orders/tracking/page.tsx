/* eslint-disable */
"use client";

import React from "react";

export default function OrderTracking() {
  return (
    <main>
      <section className="breadcrumb__area pt-80 pb-80" style={{ backgroundColor: "#000", borderBottom: "1px solid #111" }}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content text-center">
                <h2 className="breadcrumb__title text-white">Track Your Order</h2>
                <div className="breadcrumb__list text-white">
                  <span><a href="/" className="text-white">Home</a></span>
                  <span className="dvdr">/</span>
                  <span className="text-white-50">Order Tracking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tp-login-area pt-100 pb-100 grey-bg-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div className="tp-login-wrapper bg-dark p-5 rounded text-white" style={{ border: "1px solid #222" }}>
                <div className="tp-login-top text-center mb-30">
                  <h3 className="tp-login-title text-white mb-2">Track Order Status</h3>
                  <p className="text-white-50">To track your order please enter your Order ID and billing Email address in the box below.</p>
                </div>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="mb-4">
                    <label className="form-label text-white-50">Order ID</label>
                    <input type="text" className="form-control bg-transparent text-white border-secondary py-3" placeholder="Found in your receipt email (e.g. #ZN-4821)" required />
                  </div>
                  <div className="mb-4">
                    <label className="form-label text-white-50">Billing Email</label>
                    <input type="email" className="form-control bg-transparent text-white border-secondary py-3" placeholder="Email used during checkout" required />
                  </div>
                  <button type="submit" className="tp-btn text-white bg-warning hover-dark-btn w-100 py-3 rounded border-0 font-weight-bold" style={{ fontSize: "16px" }}>
                    Track Status
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
