/* eslint-disable */
"use client";

import React from "react";

export default function CustomerOverview() {
  return (
    <main>
      <section className="breadcrumb__area pt-80 pb-80" style={{ backgroundColor: "#000", borderBottom: "1px solid #111" }}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content text-center">
                <h2 className="breadcrumb__title text-white">Dashboard</h2>
                <div className="breadcrumb__list text-white">
                  <span><a href="/" className="text-white">Home</a></span>
                  <span className="dvdr">/</span>
                  <span className="text-white-50">Account Overview</span>
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
                  <a href="/customer/overview" className="bg-warning text-dark font-weight-bold py-2 px-3 rounded text-start">
                    Account Overview
                  </a>
                  <a href="/customer/orders" className="text-white hover-orange py-2 px-3 rounded text-start">
                    My Orders
                  </a>
                  <a href="/customer/order-returns" className="text-white hover-orange py-2 px-3 rounded text-start">
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
                <h3 className="text-white mb-4">Hello, Guest User!</h3>
                <p className="text-white-50 mb-4">From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and profile details.</p>
                
                <div className="row mt-4">
                  <div className="col-md-6 mb-3">
                    <div className="p-4 rounded bg-transparent text-white" style={{ border: "1px solid #333" }}>
                      <h4 className="text-warning mb-2" style={{ fontSize: "16px" }}>Recent Orders</h4>
                      <p className="text-white-50 small mb-3">You have 0 active or pending orders.</p>
                      <a href="/products" className="text-white hover-orange small font-weight-bold" style={{ textDecoration: "underline" }}>Shop Supplements</a>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="p-4 rounded bg-transparent text-white" style={{ border: "1px solid #333" }}>
                      <h4 className="text-warning mb-2" style={{ fontSize: "16px" }}>Account Settings</h4>
                      <p className="text-white-50 small mb-3">Update your login credentials and details.</p>
                      <a href="/password/reset" className="text-white hover-orange small font-weight-bold" style={{ textDecoration: "underline" }}>Manage Profile</a>
                    </div>
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
