/* eslint-disable */
"use client";

import React from "react";

export default function Register() {
  return (
    <main>
      <section className="breadcrumb__area pt-80 pb-80" style={{ backgroundColor: "#000", borderBottom: "1px solid #111" }}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content text-center">
                <h2 className="breadcrumb__title text-white">Create Account</h2>
                <div className="breadcrumb__list text-white">
                  <span><a href="/" className="text-white">Home</a></span>
                  <span className="dvdr">/</span>
                  <span className="text-white-50">Register</span>
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
                  <h3 className="tp-login-title text-white mb-2">Sign Up</h3>
                  <p className="text-white-50">Create an account to track orders and save wishlist items</p>
                </div>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="mb-4">
                    <label className="form-label text-white-50">Full Name</label>
                    <input type="text" className="form-control bg-transparent text-white border-secondary py-3" placeholder="John Doe" required />
                  </div>
                  <div className="mb-4">
                    <label className="form-label text-white-50">Email Address</label>
                    <input type="email" className="form-control bg-transparent text-white border-secondary py-3" placeholder="name@example.com" required />
                  </div>
                  <div className="mb-4">
                    <label className="form-label text-white-50">Password</label>
                    <input type="password" className="form-control bg-transparent text-white border-secondary py-3" placeholder="••••••••" required />
                  </div>
                  <div className="mb-4">
                    <label className="form-label text-white-50">Confirm Password</label>
                    <input type="password" className="form-control bg-transparent text-white border-secondary py-3" placeholder="••••••••" required />
                  </div>
                  <div className="mb-4 form-check">
                    <input type="checkbox" className="form-check-input" id="termsAgree" required />
                    <label className="form-check-label text-white-50 small" htmlFor="termsAgree">I agree to the Terms of Service & Privacy Policy</label>
                  </div>
                  <button type="submit" className="tp-btn text-white bg-warning hover-dark-btn w-100 py-3 rounded border-0 font-weight-bold" style={{ fontSize: "16px" }}>
                    Sign Up
                  </button>
                </form>
                <div className="text-center mt-4">
                  <p className="text-white-50 mb-0">Already have an account? <a href="/login" className="text-warning font-weight-bold hover-white">Sign In Instead</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
