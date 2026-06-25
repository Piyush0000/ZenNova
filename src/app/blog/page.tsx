/* eslint-disable */
"use client";

import React from "react";

const BLOG_POSTS = [
  {
    slug: "the-real-stories-of-crushing-fatigue-with-zennova-pure-himalayan-shilajit",
    title: "The Real Stories of Crushing Fatigue with Zennova Pure Himalayan Shilajit",
    date: "May 21, 2026",
    image: "/storage/whatsapp-image-2026-05-21-at-43405-pm-1-420x270.webp",
    summary: "We have all been there. It is 3:00 PM, you are staring at your laptop screen, and your brain feels like lead. Discover how pure gold-grade Himalayan Shilajit is helping thousands reclaim their energy and focus naturally."
  },
  {
    slug: "burn-fat-smarter-feel-stronger-every-day",
    title: "Burn Fat Smarter, Feel Stronger Every Day",
    date: "May 21, 2026",
    image: "/storage/whatsapp-image-2026-05-21-at-43458-pm-1-420x270.webp",
    summary: "Are you struggling with stubborn belly fat, low energy levels, or uncontrollable cravings? You’re not alone. Learn the smart science behind thermogenesis and how a curated fat burner can accelerate your progress safely."
  },
  {
    slug: "the-sleep-that-actually-makes-you-glow-why-zennova-sleepglow-is-the-transformation-youve-been-praying-for",
    title: "Why Zennova SLEEPGlow Is the Transformation You've Been Praying For",
    date: "May 21, 2026",
    image: "/storage/whatsapp-image-2026-05-21-at-44059-pm-420x270.webp",
    summary: "What if I told you there’s a missing piece to your wellness puzzle that doesn't involve a prescription pad? Deep, restorative REM sleep is the ultimate beauty and longevity secret. Meet the natural sleep aid changing everything."
  }
];

export default function BlogListing() {
  return (
    <main>
      {/* Breadcrumb */}
      <section className="breadcrumb__area pt-80 pb-80" style={{ backgroundColor: "#000", borderBottom: "1px solid #111" }}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content text-center">
                <h2 className="breadcrumb__title text-white">Latest News & Articles</h2>
                <div className="breadcrumb__list text-white">
                  <span><a href="/" className="text-white">Home</a></span>
                  <span className="dvdr">/</span>
                  <span className="text-white-50">Blog</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid Area */}
      <section className="tp-blog-grid-area pt-100 pb-100 grey-bg-2">
        <div className="container">
          <div className="row">
            {BLOG_POSTS.map(post => (
              <div className="col-xl-4 col-lg-6 col-md-6 mb-30" key={post.slug}>
                <div className="tp-blog-item mb-30 bg-dark text-white rounded overflow-hidden" style={{ border: "1px solid #222" }}>
                  <div className="tp-blog-thumb p-relative fix">
                    <a href={`/blog/${post.slug}`}>
                      <img src={post.image} alt={post.title} className="w-100" style={{ height: "250px", objectFit: "cover" }} />
                    </a>
                    <div className="tp-blog-meta tp-blog-meta-date">
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="tp-blog-content p-4">
                    <h3 className="tp-blog-title mb-15" style={{ fontSize: "20px", fontWeight: "600", lineHeight: "1.4" }}>
                      <a href={`/blog/${post.slug}`} className="text-white hover-orange">{post.title}</a>
                    </h3>
                    <p className="text-white-50 mb-20" style={{ fontSize: "14px", lineHeight: "1.6" }}>{post.summary}</p>
                    <div className="tp-blog-btn-wrapper">
                      <a href={`/blog/${post.slug}`} className="text-warning font-weight-bold hover-white" style={{ fontSize: "14px", textDecoration: "underline" }}>
                        Read Article →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
