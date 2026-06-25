/* eslint-disable */
"use client";

import React from "react";

export default function CustomerOrders() {
  return (
    <main>
      <section className="breadcrumb__area pt-80 pb-80" style={{ backgroundColor: "#000", borderBottom: "1px solid #111" }}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content text-center">
                <h2 className="breadcrumb__title text-white">My Orders</h2>
                <div className="breadcrumb__list text-white">
                  <span><a href="/" className="text-white">Home</a></span>
                  <span className="dvdr">/</span>
                  <span>Account</span>
                  <span className="dvdr">/</span>
                  <span className="text-white-50">Orders</span>
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
                  <a href="/customer/orders" className="bg-warning text-dark font-weight-bold py-2 px-3 rounded text-start">
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
                <h3 className="text-white mb-4">My Orders</h3>
                
                <div className="table-responsive bg-transparent border-0">
                  <table className="table table-dark table-hover mb-0" style={{ border: "1px solid #333" }}>
                    <thead>
                      <tr style={{ borderBottom: "2px solid #444" }}>
                        <th scope="col" className="text-white py-3">Order ID</th>
                        <th scope="col" className="text-white py-3">Date</th>
                        <th scope="col" className="text-white py-3">Status</th>
                        <th scope="col" className="text-white py-3">Total</th>
                        <th scope="col" className="text-white py-3">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan={5} className="text-center text-white-50 py-5">
                          You haven't placed any orders yet.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
