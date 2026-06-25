/* eslint-disable */
"use client";

import React from "react";

export default function Contact() {
  return (
    <main>
      <section className="breadcrumb__area pt-80 pb-80" style={{ backgroundColor: "#000", borderBottom: "1px solid #111" }}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content text-center">
                <h2 className="breadcrumb__title text-white">Contact Us</h2>
                <div className="breadcrumb__list text-white">
                  <span><a href="/" className="text-white">Home</a></span>
                  <span className="dvdr">/</span>
                  <span className="text-white-50">Contact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tp-contact-area pt-100 pb-100 grey-bg-2">
        <div className="container">
          <div className="row">
            {/* Info Cards */}
            <div className="col-lg-4 mb-40">
              <div className="p-5 bg-dark rounded text-white h-100" style={{ border: "1px solid #222" }}>
                <h3 className="text-white mb-4">Get In Touch</h3>
                
                <div className="mb-4">
                  <h4 className="text-warning small mb-1">Our Location</h4>
                  <p className="text-white-50">
                    <a href="https://maps.google.com/?q=79 Sleepy Hollow St. Jamaica, New York 1432" target="_blank" className="hover-orange text-white-50">
                      79 Sleepy Hollow St. Jamaica, New York 1432
                    </a>
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="text-warning small mb-1">Call Us</h4>
                  <p className="text-white">
                    <a href="tel:+670 413 90 762" className="text-white hover-orange font-weight-bold">+670 413 90 762</a>
                  </p>
                </div>

                <div>
                  <h4 className="text-warning small mb-1">Email Address</h4>
                  <p className="text-white-50">
                    <a href="mailto:support@shofy.com" className="text-white-50 hover-orange">support@shofy.com</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-8 mb-40">
              <div className="p-5 bg-dark rounded text-white h-100" style={{ border: "1px solid #222" }}>
                <h3 className="text-white mb-4">Send Us A Message</h3>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label className="form-label text-white-50">Name</label>
                      <input type="text" className="form-control bg-transparent text-white border-secondary py-3" placeholder="John Doe" required />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label className="form-label text-white-50">Email</label>
                      <input type="email" className="form-control bg-transparent text-white border-secondary py-3" placeholder="name@example.com" required />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="form-label text-white-50">Subject</label>
                    <input type="text" className="form-control bg-transparent text-white border-secondary py-3" placeholder="Product Inquiry / Feedback" required />
                  </div>
                  <div className="mb-4">
                    <label className="form-label text-white-50">Message</label>
                    <textarea className="form-control bg-transparent text-white border-secondary py-3" rows={5} placeholder="Write your message here..." required></textarea>
                  </div>
                  <button type="submit" className="tp-btn text-white bg-warning hover-dark-btn py-3 px-5 rounded border-0 font-weight-bold" style={{ fontSize: "16px" }}>
                    Send Message
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
