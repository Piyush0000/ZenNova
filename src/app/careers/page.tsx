/* eslint-disable */
"use client";

import React from "react";

export default function Careers() {
  return (
    <main>
      <section className="breadcrumb__area pt-80 pb-80" style={{ backgroundColor: "#000", borderBottom: "1px solid #111" }}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content text-center">
                <h2 className="breadcrumb__title text-white">Join Our Team</h2>
                <div className="breadcrumb__list text-white">
                  <span><a href="/" className="text-white">Home</a></span>
                  <span className="dvdr">/</span>
                  <span className="text-white-50">Careers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-100 pb-100 grey-bg-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 text-center text-white mb-50">
              <h3 className="text-white mb-3">Work At ZenNova</h3>
              <p className="text-white-50" style={{ fontSize: "16px", lineHeight: "1.8" }}>
                At ZenNova, we are passionate about health, wellness, and peak physical performance. We are always looking for driven, creative, and enthusiastic individuals to join our growing global team.
              </p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="p-5 bg-dark rounded text-white mb-4" style={{ border: "1px solid #222" }}>
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3">
                  <h4 className="text-warning mb-0" style={{ fontSize: "20px" }}>Nutritionist & Wellness Expert</h4>
                  <span className="badge bg-secondary p-2">Full-Time / Remote</span>
                </div>
                <p className="text-white-50 small mb-4">We are seeking a certified nutritionist to contribute content, advice, and assist in wellness product development.</p>
                <button className="tp-btn bg-warning text-dark py-2 px-4 rounded border-0" onClick={() => alert("Application system coming soon!")}>Apply Now</button>
              </div>

              <div className="p-5 bg-dark rounded text-white" style={{ border: "1px solid #222" }}>
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3">
                  <h4 className="text-warning mb-0" style={{ fontSize: "20px" }}>Digital Marketing Manager</h4>
                  <span className="badge bg-secondary p-2">Full-Time / Hybrid</span>
                </div>
                <p className="text-white-50 small mb-4">Manage our social media presence, design campaigns, and grow ZenNova's online footprint worldwide.</p>
                <button className="tp-btn bg-warning text-dark py-2 px-4 rounded border-0" onClick={() => alert("Application system coming soon!")}>Apply Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
