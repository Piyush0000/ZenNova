/* eslint-disable */
"use client";

import React from "react";

export default function CookiePolicy() {
  return (
    <main>
      <section className="breadcrumb__area pt-80 pb-80" style={{ backgroundColor: "#000", borderBottom: "1px solid #111" }}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content text-center">
                <h2 className="breadcrumb__title text-white">Cookie Policy</h2>
                <div className="breadcrumb__list text-white">
                  <span><a href="/" className="text-white">Home</a></span>
                  <span className="dvdr">/</span>
                  <span className="text-white-50">Cookie Policy</span>
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
                <h3 className="text-warning mb-4">How We Use Cookies</h3>
                <p className="text-white-50 mb-4">
                  ZenNova uses cookies and tracking technologies to improve your experience on our website, remember your settings, track analytics, and deliver personalized marketing offers.
                </p>
                <h4 className="text-white mb-2" style={{ fontSize: "16px", fontWeight: "bold" }}>What are cookies?</h4>
                <p className="text-white-50 mb-4">
                  Cookies are small text files stored on your browser or device when you load websites. They helper remember login states, items in your shopping cart, and search queries.
                </p>
                <h4 className="text-white mb-2" style={{ fontSize: "16px", fontWeight: "bold" }}>Types of Cookies We Use</h4>
                <p className="text-white-50 mb-0">
                  We use Essential cookies to operate the store checkout system; Analytics cookies to measure user interactions; and Marketing cookies to tailor ads that correspond to your wellness interests. You can customize preferences at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
