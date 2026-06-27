/* eslint-disable */
"use client";

import React from "react";

const BLOG_POSTS = [
  {
    slug: "the-real-stories-of-crushing-fatigue-with-zennova-pure-himalayan-shilajit",
    title: "The Real Stories of Crushing Fatigue with Zennova Pure Himalayan Shilajit",
    date: "May 21, 2026",
    category: "Self Care",
    image: "/storage/zennova-blog-shilajit.png",
    summary: "We have all been there. It is 3:00 PM, you are staring at your laptop screen, and your brain feels like lead. Discover how pure gold-grade Himalayan Shilajit is helping thousands reclaim their energy and focus naturally."
  },
  {
    slug: "burn-fat-smarter-feel-stronger-every-day",
    title: "Burn Fat Smarter, Feel Stronger Every Day",
    date: "May 21, 2026",
    category: "Fitness",
    image: "/storage/zennova-blog-fat-burner.png",
    summary: "Are you struggling with stubborn belly fat, low energy levels, or uncontrollable cravings? You’re not alone. Learn the smart science behind thermogenesis and how a curated fat burner can accelerate your progress safely."
  },
  {
    slug: "the-sleep-that-actually-makes-you-glow-why-zennova-sleepglow-is-the-transformation-youve-been-praying-for",
    title: "Why Zennova SLEEPGlow Is the Missing Piece to Your Wellness Puzzle",
    date: "May 21, 2026",
    category: "Self Care",
    image: "/storage/zennova-blog-sleepglow.png",
    summary: "What if I told you there’s a missing piece to your wellness puzzle that doesn't involve a prescription pad? Deep, restorative REM sleep is the ultimate beauty and longevity secret. Meet the natural sleep aid changing everything."
  }
];

export default function BlogListing() {
  return (
    <main className="zn-blog-page-bg">
      {/* Breadcrumb / Heading Area */}
      <section className="zn-blog-breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content">
                <span className="zn-blog-title-label">BLOG</span>
                <h2 className="zn-blog-main-title">Latest News & Articles</h2>
                <p className="zn-blog-subtitle">
                  Expert insights, real stories, and science-backed tips
                  to help you live stronger, sleep better, and burn smarter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid Area */}
      <section className="tp-blog-grid-area pt-100 pb-100 grey-bg-2" style={{ backgroundColor: "#060608" }}>
        <div className="container">
          <div className="row">
            
            {/* Left Column: Blog Grid */}
            <div className="col-xl-8 col-lg-8">
              <div className="row">
                
                {/* Row 1: Grid Cards (Post 1 & Post 2) */}
                {BLOG_POSTS.slice(0, 2).map(post => (
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-30" key={post.slug}>
                    <article className="zn-blog-card h-100 d-flex flex-column">
                      <div className="zn-blog-card-img-wrapper">
                        <a href={`/blog/${post.slug}`}>
                          <img src={post.image} alt={post.title} className="zn-blog-card-img" />
                        </a>
                      </div>
                      <div className="zn-blog-card-content d-flex flex-column flex-grow-1">
                        <div className="zn-blog-card-meta">
                          <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                              <line x1="16" y1="2" x2="16" y2="6"></line>
                              <line x1="8" y1="2" x2="8" y2="6"></line>
                              <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                            {post.date}
                          </span>
                          <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                              <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                            {post.category}
                          </span>
                        </div>
                        <h3 className="zn-blog-card-title">
                          <a href={`/blog/${post.slug}`}>{post.title}</a>
                        </h3>
                        <p className="zn-blog-card-summary flex-grow-1">{post.summary}</p>
                        <div>
                          <a href={`/blog/${post.slug}`} className="zn-blog-card-more">
                            Read More
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                              <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}

                {/* Row 2: Wide Card (Post 3) */}
                {BLOG_POSTS[2] && (
                  <div className="col-xxl-12 col-xl-12 col-lg-12 mb-30">
                    <article className="zn-blog-card-horizontal">
                      <div className="zn-blog-card-img-wrapper">
                        <a href={`/blog/${BLOG_POSTS[2].slug}`}>
                          <img src={BLOG_POSTS[2].image} alt={BLOG_POSTS[2].title} className="zn-blog-card-img h-100 w-100" style={{ objectFit: "cover" }} />
                        </a>
                      </div>
                      <div className="zn-blog-card-content">
                        <div className="zn-blog-card-meta">
                          <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                              <line x1="16" y1="2" x2="16" y2="6"></line>
                              <line x1="8" y1="2" x2="8" y2="6"></line>
                              <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                            {BLOG_POSTS[2].date}
                          </span>
                          <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                              <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                            {BLOG_POSTS[2].category}
                          </span>
                        </div>
                        <h3 className="zn-blog-card-title">
                          <a href={`/blog/${BLOG_POSTS[2].slug}`}>{BLOG_POSTS[2].title}</a>
                        </h3>
                        <p className="zn-blog-card-summary">{BLOG_POSTS[2].summary}</p>
                        <div>
                          <a href={`/blog/${BLOG_POSTS[2].slug}`} className="zn-blog-card-more">
                            Read More
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                              <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                )}
                
              </div>

              {/* Bottom Older Posts Navigation */}
              <div className="row text-center mt-20 mb-30">
                <div className="col-12">
                  <button className="zn-blog-btn-older">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="19" y1="12" x2="5" y2="12"></line>
                      <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                    Older Posts
                  </button>
                </div>
              </div>

            </div>

            {/* Right Column: Sidebar */}
            <div className="col-xl-4 col-lg-4">
              
              {/* About Me Card */}
              <div className="zn-blog-sidebar-card text-center">
                <h3 className="zn-blog-sidebar-title text-start">About Me</h3>
                <img src="/storage/ravi-avatar.png" alt="Ravi O'Leigh" className="zn-blog-author-avatar mx-auto" />
                <h4 className="zn-blog-author-name">Ravi O'Leigh</h4>
                <span className="zn-blog-author-title">Photographer & Blogger</span>
                <p className="zn-blog-author-bio">
                  Lorem ligula eget dolor. Aenean massa. Cum sociis que penatibus magnis dis parturient montes.
                </p>
                <img src="/storage/ravi-signature.png" alt="Signature" className="zn-blog-author-sig mx-auto" />
              </div>

              {/* Latest Posts Card */}
              <div className="zn-blog-sidebar-card">
                <h3 className="zn-blog-sidebar-title">Latest Posts</h3>
                <div className="zn-blog-recent-posts-list">
                  {BLOG_POSTS.map(post => (
                    <div className="zn-blog-recent-post-item" key={`recent-${post.slug}`}>
                      <a href={`/blog/${post.slug}`}>
                        <img src={post.image} alt={post.title} className="zn-blog-recent-thumb" />
                      </a>
                      <div className="zn-blog-recent-content">
                        <span className="zn-blog-recent-meta">{post.date}</span>
                        <h4 className="zn-blog-recent-title">
                          <a href={`/blog/${post.slug}`}>{post.title}</a>
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories Card */}
              <div className="zn-blog-sidebar-card">
                <h3 className="zn-blog-sidebar-title">Categories</h3>
                <div className="zn-blog-cat-list">
                  {[
                    { name: "Crisp Bread & Cake", count: "12" },
                    { name: "Fitness", count: "10" },
                    { name: "Self Care", count: "08" },
                    { name: "Nutrition", count: "06" },
                    { name: "Product Updates", count: "04" }
                  ].map(cat => (
                    <div className="zn-blog-cat-item" key={cat.name}>
                      <span>{cat.name}</span>
                      <span className="zn-blog-cat-badge">{cat.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stay Inspired Card */}
              <div className="zn-blog-sidebar-card">
                <h3 className="zn-blog-sidebar-title">Stay Inspired</h3>
                <p className="zn-blog-newsletter-sub">
                  Get the latest wellness tips and updates straight to your inbox.
                </p>
                <form className="zn-blog-newsletter-form" onSubmit={(e) => e.preventDefault()}>
                  <input type="email" placeholder="Enter your email" className="zn-blog-newsletter-input" required />
                  <button type="submit" className="zn-blog-newsletter-btn">Subscribe</button>
                </form>
              </div>

            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

