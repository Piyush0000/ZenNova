/* eslint-disable */
"use client";

import React from "react";

export default function CustomerOrderReturns() {
  return (
    <main>
      <section className="breadcrumb__area pt-80 pb-80" style={{ backgroundColor: "#000", borderBottom: "1px solid #111" }}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content text-center">
                <h2 className="breadcrumb__title text-white">Order Returns</h2>
                <div className="breadcrumb__list text-white">
                  <span><a href="/" className="text-white">Home</a></span>
                  <span className="dvdr">/</span>
                  <span>Account</span>
                  <span className="dvdr">/</span>
                  <span className="text-white-50">Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tp-dashboard-area pt-100 pb-100 grey-bg-2">
        <div className="container">
          <div className="row">
            {/* Dashboard Sidebar Navigation */}
            <div className="col-lg-4 col-md-5">
              <div className="tp-dashboard-nav bg-dark p-4 rounded text-white mb-30" style={{ border: "1px solid #222" }}>
                <div className="text-center pb-4 mb-4" style={{ borderBottom: "1px solid #222" }}>
                  <div className="bg-secondary rounded-circle d-inline-block d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: "70px", height: "70px", fontSize: "28px" }}>
                    👤
                  </div>
                  <h4 className="text-white mb-1">Guest User</h4>
                  <p className="text-white-50 mb-0 small">guest@zennova.com</p>
                </div>
                <div className="d-flex flex-column gap-2">
                  <a href="/customer/overview" className="text-white hover-orange py-2 px-3 rounded text-start">
                    Account Overview
                  </a>
                  <a href="/customer/orders" className="text-white hover-orange py-2 px-3 rounded text-start">
                    My Orders
                  </a>
                  <a href="/customer/order-returns" className="bg-warning text-dark font-weight-bold py-2 px-3 rounded text-start">
                    Order Returns
                  </a>
                  <a href="/login" className="text-danger hover-orange py-2 px-3 rounded text-start mt-3" style={{ borderTop: "1px solid #222" }}>
                    Logout
                  </a>
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="col-lg-8 col-md-7">
              <div className="tp-dashboard-content bg-dark p-5 rounded text-white" style={{ border: "1px solid #222" }}>
                <h3 className="text-white mb-4">Request a Return</h3>
                <p className="text-white-50 mb-4">If you are unsatisfied with your order or have received a damaged product, please fill out the return request form below. We offer a 30-day money-back guarantee.</p>
                
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label className="form-label text-white-50">Order Number</label>
                      <input type="text" className="form-control bg-transparent text-white border-secondary py-3" placeholder="e.g. #ZN-4821" required />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label className="form-label text-white-50">Product Name</label>
                      <select className="form-select bg-dark text-white border-secondary py-3" required style={{ appearance: "auto" }}>
                        <option value="">Select product to return...</option>
                        <option value="shilajit">Zennova Shilajit – Pure Himalayan Power</option>
                        <option value="lungs">Zennova Lungs Detox</option>
                        <option value="fatburn">Zennova Fat Burne</option>
                        <option value="ashwa">Zennova Ashwagandha</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="form-label text-white-50">Reason for Return</label>
                    <textarea className="form-control bg-transparent text-white border-secondary py-3" rows={4} placeholder="Please detail your reason for requesting a return..." required></textarea>
                  </div>
                  <button type="submit" className="tp-btn text-white bg-warning hover-dark-btn py-3 px-5 rounded border-0 font-weight-bold" style={{ fontSize: "16px" }}>
                    Submit Return Request
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
