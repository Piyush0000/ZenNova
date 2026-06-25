/* eslint-disable */
"use client";

import React from "react";

export default function NotFound() {
  return (
    <main>
      <section className="pt-100 pb-100 grey-bg-2 min-vh-100 d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 text-center text-white">
              <div className="p-5 bg-dark rounded" style={{ border: "1px solid #222" }}>
                <h1 className="text-warning mb-3" style={{ fontSize: "72px", fontWeight: "bold" }}>404</h1>
                <h2 className="text-white mb-3">Page Not Found</h2>
                <p className="text-white-50 mb-4">The page you are looking for does not exist, has been removed, or is temporarily unavailable.</p>
                <a href="/" className="tp-btn bg-warning text-dark py-3 px-5 d-inline-block rounded font-weight-bold">
                  Go Back Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
