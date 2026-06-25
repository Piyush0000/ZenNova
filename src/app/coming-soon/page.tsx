/* eslint-disable */
"use client";

import React from "react";

export default function ComingSoon() {
  return (
    <main>
      <section className="pt-100 pb-100 grey-bg-2 min-vh-100 d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 text-center text-white">
              <div className="p-5 bg-dark rounded mb-30" style={{ border: "1px solid #222" }}>
                <h2 className="text-warning mb-3">Coming Soon</h2>
                <p className="text-white-50 mb-4">We are currently preparing something amazing for this section. Subscribe to stay updated on product launches and discount offers!</p>
                <form onSubmit={(e) => e.preventDefault()} className="d-flex gap-2">
                  <input type="email" className="form-control bg-transparent text-white border-secondary" placeholder="Enter your email" required />
                  <button type="submit" className="tp-btn bg-warning text-dark px-4 rounded border-0 font-weight-bold">Notify</button>
                </form>
                <div className="mt-4">
                  <a href="/" className="text-white-50 hover-orange" style={{ textDecoration: "underline" }}>← Go Back Home</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
