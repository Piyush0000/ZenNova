/* eslint-disable */
"use client";

import React from "react";

export default function Shipping() {
  return (
    <main>
      <section className="breadcrumb__area pt-80 pb-80" style={{ backgroundColor: "#000", borderBottom: "1px solid #111" }}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content text-center">
                <h2 className="breadcrumb__title text-white">Shipping Policy</h2>
                <div className="breadcrumb__list text-white">
                  <span><a href="/" className="text-white">Home</a></span>
                  <span className="dvdr">/</span>
                  <span className="text-white-50">Shipping</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-100 pb-100 grey-bg-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 text-white">
              <div className="p-5 bg-dark rounded" style={{ border: "1px solid #222", lineHeight: "1.8" }}>
                <h3 className="text-warning mb-4">Domestic & International Shipping</h3>
                
                <h4 className="text-white small mb-2" style={{ fontSize: "16px", fontWeight: "bold" }}>Processing Time</h4>
                <p className="text-white-50 mb-4">
                  All orders are processed within 1-2 business days. Orders placed over weekends or public holidays will be processed on the next working business day.
                </p>

                <h4 className="text-white small mb-2" style={{ fontSize: "16px", fontWeight: "bold" }}>Shipping Rates & Estimates</h4>
                <p className="text-white-50 mb-4">
                  Standard delivery is free on all orders over ₹999. A flat shipping charge of ₹60 is applied to orders below ₹999. Delivery usually takes 3 to 5 working days depending on the state and pin code.
                </p>

                <h4 className="text-white small mb-2" style={{ fontSize: "16px", fontWeight: "bold" }}>Tracking Information</h4>
                <p className="text-white-50 mb-0">
                  Once your package leaves our warehouse, a shipping confirmation email containing your tracking ID will be sent. You can track your shipment via the <a href="/orders/tracking" className="text-warning hover-white" style={{ textDecoration: "underline" }}>Order Tracking</a> page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
