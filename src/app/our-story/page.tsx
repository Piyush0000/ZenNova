/* eslint-disable */
"use client";

import React from "react";

export default function OurStory() {
  return (
    <main>
      <section className="breadcrumb__area pt-80 pb-80" style={{ backgroundColor: "#000", borderBottom: "1px solid #111" }}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content text-center">
                <h2 className="breadcrumb__title text-white">Our Story</h2>
                <div className="breadcrumb__list text-white">
                  <span><a href="/" className="text-white">Home</a></span>
                  <span className="dvdr">/</span>
                  <span className="text-white-50">Our Story</span>
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
                <h3 className="text-warning mb-4">The ZenNova Journey</h3>
                <p className="text-white-50 mb-4">
                  ZenNova was born from a simple idea: that modern wellness shouldn't compromise on purity or power. In an industry filled with synthetic binders, heavy processing, and filler ingredients, we chose a different path.
                </p>
                <p className="text-white-50 mb-4">
                  We traveled to high-altitude mountain ranges, met with traditional extractors, and built supply chains rooted in ecological sustainability. Our signature Himalayan Shilajit is carefully hand-harvested at over 16,000 feet and purified using ancient low-temperature techniques to preserve all vital nutrients and fulvic minerals.
                </p>
                <p className="text-white-50 mb-0">
                  Today, ZenNova continues to pioneer natural supplements designed to combat stress, enhance physical stamina, improve sleep, and detoxify from modern environmental stress. We believe in transparency, science-backed formulas, and helping you achieve your peak vitality every single day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
