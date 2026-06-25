/* eslint-disable */
"use client";

import React, { useState } from "react";

const FAQS = [
  {
    question: "How do I consume ZenNova Shilajit?",
    answer: "Dissolve a pea-sized amount (approx. 250-500mg) of Shilajit resin in warm water, milk, or green tea daily. Drink it in the morning on an empty stomach for maximum absorption."
  },
  {
    question: "Are your supplements lab tested?",
    answer: "Yes, all ZenNova products undergo rigorous third-party lab testing for purity, heavy metals, and active ingredients to ensure you receive only premium, safe, and effective formulations."
  },
  {
    question: "How long does shipping take?",
    answer: "Standard shipping takes 3-5 business days across India. Remote locations may take up to 7 business days. Express shipping options are available at checkout."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day money-back guarantee on all our products. If you are unsatisfied or receive a damaged item, please contact our support team or file a return request under your account dashboard."
  }
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main>
      <section className="breadcrumb__area pt-80 pb-80" style={{ backgroundColor: "#000", borderBottom: "1px solid #111" }}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content text-center">
                <h2 className="breadcrumb__title text-white">Frequently Asked Questions</h2>
                <div className="breadcrumb__list text-white">
                  <span><a href="/" className="text-white">Home</a></span>
                  <span className="dvdr">/</span>
                  <span className="text-white-50">FAQs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-100 pb-100 grey-bg-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="accordion bg-dark rounded p-4 text-white" style={{ border: "1px solid #222" }}>
                {FAQS.map((faq, idx) => (
                  <div key={idx} className="border-bottom border-secondary mb-3 pb-3">
                    <button 
                      onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                      className="w-100 text-start bg-transparent text-white border-0 py-3 d-flex justify-content-between align-items-center"
                      style={{ fontSize: "18px", fontWeight: "600", outline: "none" }}
                    >
                      {faq.question}
                      <span className="text-warning" style={{ fontSize: "22px" }}>
                        {openIndex === idx ? "−" : "+"}
                      </span>
                    </button>
                    {openIndex === idx && (
                      <div className="text-white-50 mt-2 pl-2" style={{ lineHeight: "1.6", fontSize: "15px" }}>
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
