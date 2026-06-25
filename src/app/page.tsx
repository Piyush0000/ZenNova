/* eslint-disable */
"use client";

import React from "react";

const PRODUCTS = [
  {
    id: 159,
    slug: "zennova-shilajit-pure-himalayan-power-advanced-gold-grade-formula",
    name: "Zennova Shilajit – Pure Himalayan Power (Advanced Gold Grade Formula)",
    image: "/storage/whatsapp-image-2026-05-31-at-31116-am-600x600.jpeg",
    price: 1299,
    oldPrice: 1560,
    category: "Body",
    badge: "Hot",
    rating: 5,
    sku: "SF-2443-JLD5",
    description: "Premium gold-grade Himalayan Shilajit, rich in fulvic acid and over 84 trace minerals to boost energy, vitality, stamina, and immune support."
  },
  {
    id: 150,
    slug: "zennova-lungs-detox",
    name: "Zennova Lungs Detox",
    image: "/storage/whatsapp-image-2026-05-31-at-35910-am-600x600.jpeg",
    price: 1130,
    oldPrice: 1420,
    category: "Body",
    badge: "-20%",
    rating: 5,
    sku: "SF-2443-BWKP",
    description: "Advanced respiratory support formula designed to cleanse, detoxify, and support lung health from the effects of smoke, pollution, and seasonal allergens."
  },
  {
    id: 148,
    slug: "zennova-fat-burne",
    name: "Zennova Fat Burne - Thermogenic formula",
    image: "/storage/whatsapp-image-2026-05-31-at-40352-am-600x600.jpeg",
    price: 1120,
    oldPrice: 1360,
    category: "Body",
    badge: "-17%",
    rating: 5,
    sku: "SF-2443-HDD9",
    description: "Powerful thermogenic fat burner capsules formulated to increase metabolism, accelerate fat loss, boost energy levels, and control cravings."
  },
  {
    id: 144,
    slug: "zennova-ashwagandha-premium-stress-immune-support",
    name: "Zennova Ashwagandha – Premium Stress & Immune Support",
    image: "/storage/whatsapp-image-2026-05-31-at-42031-am-600x600.jpeg",
    price: 600,
    oldPrice: 800,
    category: "Body",
    badge: "-25%",
    rating: 5,
    sku: "SF-2443-RZBB",
    description: "High-potency organic Ashwagandha capsules to help manage daily stress, promote calmness, improve sleep quality, and strengthen the immune system."
  }
];

export default function Home() {
  const [activeTab, setActiveTab] = React.useState("all");
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 12,
    minutes: 30,
    seconds: 45
  });

  React.useEffect(() => {
    const targetTime = new Date().getTime() + 12 * 60 * 60 * 1000 + 30 * 60 * 1000 + 45 * 1000;
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetTime - now;
      if (difference <= 0) {
        clearInterval(interval);
        return;
      }
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
          <main>


        <style dangerouslySetInnerHTML={{ __html: `
            @font-face {
                font-family: 'Oregano';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: url(/storage/fonts/eeb4986ca8/soreganov15if2ixtpxcis3h4s2oz7vphvnzylfqw.woff2) format('woff2');
                unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
            }

            @font-face {
                font-family: 'Oregano';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: url(/storage/fonts/eeb4986ca8/soreganov15if2ixtpxcis3h4s2ozdvphvnzyi.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
        ` }} />

        <section className="tp-slider-area p-relative z-index-1">
            <div className="tp-slider-full-width tp-slider-active tp-slider-variation swiper-container " data-loop="1" data-autoplay="1" data-autoplay-speed="5000">
                <div className="swiper-wrapper">

                    <div className="tp-slider-item swiper-slide" style={{"backgroundColor":"transparent"} as React.CSSProperties}>
                        <div className="tp-slider-thumb text-end">
                            <picture>
                                <source srcSet="/storage/whatsapp-image-2026-06-07-at-80708-pm.jpeg" media="(min-width: 1200px)" />
                                <source srcSet="/storage/whatsapp-image-2026-06-07-at-80952-pm.jpeg" media="(min-width: 768px)" />
                                <source srcSet="/storage/whatsapp-image-2026-06-07-at-80952-pm.jpeg" media="(max-width: 767px)" />
                                <img src="/storage/loader.png" data-bb-lazy="true" loading="eager" data-src="/storage/whatsapp-image-2026-06-07-at-80708-pm.jpeg" alt="" />
                            </picture>

                        </div>
                    </div>

                    <div className="tp-slider-item swiper-slide" style={{"backgroundColor":"transparent"} as React.CSSProperties}>
                        <div className="tp-slider-thumb text-end">
                            <picture>
                                <source srcSet="/storage/whatsapp-image-2026-06-09-at-22321-pm.jpeg" media="(min-width: 1200px)" />
                                <source srcSet="/storage/whatsapp-image-2026-06-09-at-22332-pm.jpeg" media="(min-width: 768px)" />
                                <source srcSet="/storage/whatsapp-image-2026-06-09-at-22332-pm.jpeg" media="(max-width: 767px)" />
                                <img src="/storage/loader.png" data-bb-lazy="true" loading="eager" data-src="/storage/whatsapp-image-2026-06-09-at-22321-pm.jpeg" alt="" />
                            </picture>

                        </div>
                    </div>
                </div>
                <div className="tp-slider-arrow tp-swiper-arrow d-none d-lg-block">
                    <button type="button" className="tp-slider-button-prev">
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 13L1 7L7 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                    <button type="button" className="tp-slider-button-next">
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 13L7 7L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                </div>
                <div className="tp-slider-dot tp-swiper-dot"></div>
            </div>
        </section>

        
        <div className="ecommerce-ticker-wrap"> 
            <div className="ecommerce-ticker"> 
                
                <div className="ticker-item"><a href="https://yourwebsite.com/offer1">🔥 FLASH SALE: 20% OFF all electronics! Use code: FLASH20</a></div> 
                <div className="ticker-item"><a href="https://yourwebsite.com/offer2">🚚 Free shipping on all orders over $50! Shop Now</a></div> 
                <div className="ticker-item"><a href="https://yourwebsite.com/offer3">🎁 Buy 1 Get 1 Free on selected summer apparel!</a></div> 
                
                <div className="ticker-item" aria-hidden="true"><a href="https://yourwebsite.com/offer1">🔥 FLASH SALE: 20% OFF all electronics! Use code: FLASH20</a></div> 
                <div className="ticker-item" aria-hidden="true"><a href="https://yourwebsite.com/offer2">🚚 Free shipping on all orders over $50! Shop Now</a></div> 
                <div className="ticker-item" aria-hidden="true"><a href="https://yourwebsite.com/offer3">🎁 Buy 1 Get 1 Free on selected summer apparel!</a></div>  </div>
        </div>
        <section className="tp-product-category pt-60 pb-15" style={{"backgroundColor":"rgb(5, 5, 5) !important"} as React.CSSProperties}>
            <div className="container">

                <div className="tp-product-categories-slider swiper-container" data-items="5">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="tp-product-category-item text-center mb-40">
                                <div className="tp-product-category-thumb fix">
                                    <a href="/product-categories/fragrance" title="Perfumes">
                                    <img src="/storage/loader.png" data-bb-lazy="true" loading="lazy" data-src="/storage/whatsapp-image-2026-06-07-at-81842-pm.jpeg" alt="Perfumes" />
                                </a>
                                </div>
                                <div className="tp-product-category-content">
                                    <h3 className="tp-product-category-title">
                                        <a href="/product-categories/fragrance" title="Perfumes">Perfumes</a>
                                    </h3>
                                    <p>
                                        3 products
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="tp-product-category-item text-center mb-40">
                                <div className="tp-product-category-thumb fix">
                                    <a href="/product-categories/face" title="Face">
                                    <img src="/storage/loader.png" data-bb-lazy="true" loading="lazy" data-src="/storage/whatsapp-image-2026-06-07-at-45633-pm.jpeg" alt="Face" />
                                </a>
                                </div>
                                <div className="tp-product-category-content">
                                    <h3 className="tp-product-category-title">
                                        <a href="/product-categories/face" title="Face">Face</a>
                                    </h3>
                                    <p>
                                        1 product
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="tp-product-category-item text-center mb-40">
                                <div className="tp-product-category-thumb fix">
                                    <a href="/product-categories/body" title="Body">
                                    <img src="/storage/loader.png" data-bb-lazy="true" loading="lazy" data-src="/storage/whatsapp-image-2026-06-07-at-82848-pm.jpeg" alt="Body" />
                                </a>
                                </div>
                                <div className="tp-product-category-content">
                                    <h3 className="tp-product-category-title">
                                        <a href="/product-categories/body" title="Body">Body</a>
                                    </h3>
                                    <p>
                                        8 products
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="tp-product-category-item text-center mb-40">
                                <div className="tp-product-category-thumb fix">
                                    <a href="/product-categories/hair" title="Hair">
                                    <img src="/storage/loader.png" data-bb-lazy="true" loading="lazy" data-src="/storage/whatsapp-image-2026-06-07-at-45632-pm.jpeg" alt="Hair" />
                                </a>
                                </div>
                                <div className="tp-product-category-content">
                                    <h3 className="tp-product-category-title">
                                        <a href="/product-categories/hair" title="Hair">Hair</a>
                                    </h3>
                                    <p>
                                        1 product
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="tp-product-category-item text-center mb-40">
                                <div className="tp-product-category-thumb fix">
                                    <a href="/product-categories/fitness" title="Testosterone booster">
                                    <img src="/storage/loader.png" data-bb-lazy="true" loading="lazy" data-src="/storage/whatsapp-image-2026-06-07-at-45633-pm-1.jpeg" alt="Testosterone booster" />
                                </a>
                                </div>
                                <div className="tp-product-category-content">
                                    <h3 className="tp-product-category-title">
                                        <a href="/product-categories/fitness" title="Testosterone booster">Testosterone booster</a>
                                    </h3>
                                    <p>
                                        0 products
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="tp-product-category-item text-center mb-40">
                                <div className="tp-product-category-thumb fix">
                                    <a href="/product-categories/weight-management" title="Body care">
                                    <img src="/storage/loader.png" data-bb-lazy="true" loading="lazy" data-src="/storage/whatsapp-image-2026-06-07-at-81551-pm.jpeg" alt="Body care" />
                                </a>
                                </div>
                                <div className="tp-product-category-content">
                                    <h3 className="tp-product-category-title">
                                        <a href="/product-categories/weight-management" title="Body care">Body care</a>
                                    </h3>
                                    <p>
                                        1 product
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <style dangerouslySetInnerHTML={{ __html: `
            .shortcode-lazy-loading {
                position: relative;
                min-height: 12rem;
            }

            .loading-spinner {
                align-items: center;
                background: hsla(0, 0%, 100%, 0.5);
                display: flex;
                height: 100%;
                inset-inline-start: 0;
                justify-content: center;
                position: absolute;
                top: 0;
                width: 100%;
                z-index: 1;
                &:after {
                    animation: loading-spinner-rotation 0.5s linear infinite;
                    border-color: var(--primary-color) transparent var(--primary-color) transparent;
                    border-radius: 50%;
                    border-style: solid;
                    border-width: 1px;
                    content: ' ';
                    display: block;
                    height: 40px;
                    position: absolute;
                    top: calc(50% - 20px);
                    width: 40px;
                    z-index: 1;
                }
            }

            @keyframes loading-spinner-rotation {
                0% {
                    transform: rotate(0deg);
                }
                100% {
                    transform: rotate(360deg);
                }
            }
        ` }} />

        <section className="tp-product-area pb-50 pt-50 grey-bg-2">
          <div className="container">
            <div className="row align-items-end mb-40">
              <div className="col-xl-5 col-lg-6 col-md-5">
                <div className="tp-section-title-wrapper">
                  <h3 className="section-title tp-section-title">
                    <span>All</span> Supplements
                  </h3>
                </div>
              </div>
              <div className="col-xl-7 col-lg-6 col-md-7">
                <div className="tp-product-tab text-md-end">
                  <div className="tp-product-tab-inner">
                    <ul className="nav nav-tabs justify-content-md-end" style={{ border: 'none' }}>
                      <li className="nav-item" style={{ marginRight: '10px' }}>
                        <button 
                          className={`tp-product-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
                          style={{
                            background: activeTab === 'all' ? 'var(--primary-color)' : '#fff',
                            color: activeTab === 'all' ? '#fff' : '#000',
                            border: '1px solid #ddd',
                            padding: '8px 20px',
                            borderRadius: '4px',
                            fontWeight: 500,
                            transition: 'all 0.3s'
                          }}
                          onClick={() => setActiveTab('all')}
                        >
                          All Products
                        </button>
                      </li>
                      <li className="nav-item" style={{ marginRight: '10px' }}>
                        <button 
                          className={`tp-product-tab-btn ${activeTab === 'energy' ? 'active' : ''}`}
                          style={{
                            background: activeTab === 'energy' ? 'var(--primary-color)' : '#fff',
                            color: activeTab === 'energy' ? '#fff' : '#000',
                            border: '1px solid #ddd',
                            padding: '8px 20px',
                            borderRadius: '4px',
                            fontWeight: 500,
                            transition: 'all 0.3s'
                          }}
                          onClick={() => setActiveTab('energy')}
                        >
                          Energy & Vitality
                        </button>
                      </li>
                      <li className="nav-item">
                        <button 
                          className={`tp-product-tab-btn ${activeTab === 'wellness' ? 'active' : ''}`}
                          style={{
                            background: activeTab === 'wellness' ? 'var(--primary-color)' : '#fff',
                            color: activeTab === 'wellness' ? '#fff' : '#000',
                            border: '1px solid #ddd',
                            padding: '8px 20px',
                            borderRadius: '4px',
                            fontWeight: 500,
                            transition: 'all 0.3s'
                          }}
                          onClick={() => setActiveTab('wellness')}
                        >
                          Health & Wellness
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="row">
              {PRODUCTS.filter(p => {
                if (activeTab === 'all') return true;
                if (activeTab === 'energy') return p.id === 159 || p.id === 148; // Shilajit, Fat Burner
                if (activeTab === 'wellness') return p.id === 150 || p.id === 144; // Lungs Detox, Ashwagandha
                return true;
              }).map(product => (
                <div className="col-xl-3 col-lg-4 col-sm-6 mb-30" key={product.id}>
                  <div className="tp-product-item transition-3 p-relative fix m-img bg-white rounded shadow-sm" style={{ border: "1px solid #eee", overflow: "hidden" }}>
                    <div className="tp-product-thumb p-relative fix">
                      <a href={`/products/${product.slug}`}>
                        <img src={product.image} alt={product.name} className="w-100" style={{ transition: "transform 0.5s" }} />
                      </a>
                      {product.badge && (
                        <div className="tp-product-badge">
                          <span style={{"backgroundColor":"#AC2200"} as React.CSSProperties}>{product.badge}</span>
                        </div>
                      )}
                      <div className="tp-product-action">
                        <div className="d-flex flex-column tp-product-action-item">
                          <button type="button" className="tp-product-quick-view-btn tp-product-action-btn" title="Quick View" data-bs-toggle="modal" data-bs-target="#product-quick-view-modal" data-url={`/ajax/quick-view/${product.id}`}>
                            <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M9.99938 5.64111C8.66938 5.64111 7.58838 6.72311 7.58838 8.05311C7.58838 9.38211 8.66938 10.4631 9.99938 10.4631C11.3294 10.4631 12.4114 9.38211 12.4114 8.05311C12.4114 6.72311 11.3294 5.64111 9.99938 5.64111ZM9.99938 11.9631C7.84238 11.9631 6.08838 10.2091 6.08838 8.05311C6.08838 5.89611 7.84238 4.14111 9.99938 4.14111C12.1564 4.14111 13.9114 5.89611 13.9114 8.05311C13.9114 10.2091 12.1564 11.9631 9.99938 11.9631Z" fill="currentColor"/>
                            </svg>
                            <span className="tp-product-tooltip">Quick View</span>
                          </button>
                        </div>
                      </div>
                      <div className="tp-product-add-cart-btn-large-wrapper">
                        <button type="button" className="tp-product-add-cart-btn-large" data-product-id={product.id} data-product-name={product.name} data-product-price={product.price}>
                          Select Options
                        </button>
                      </div>
                    </div>
                    <div className="tp-product-content p-3">
                      <h3 className="text-truncate tp-product-title mb-2">
                        <a href={`/products/${product.slug}`} title={product.name} style={{ color: "#000", fontWeight: 500 }}>
                          {product.name}
                        </a>
                      </h3>
                      <div className="tp-product-price-wrapper">
                        <span className="tp-product-price new-price" style={{ color: "var(--primary-color)", fontWeight: "bold" }}>₹{product.price}</span>
                        <span className="tp-product-price old-price" style={{ marginLeft: "10px", color: "#999" }}><del>₹{product.oldPrice}</del></span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="tp-product-arrival-area pt-30 pb-30" style={{"backgroundColor":"transparent !important"} as React.CSSProperties}>
            <div className="container">
                <div className="row align-items-center mb-40">
                    <div className="col-xl-5 col-sm-6">
                        <div className="tp-section-title-wrapper ">
                            <h3 className="section-title tp-section-title">
                                <span>Trending</span> Products
                            </h3>
                        </div>

                    </div>
                    <div className="col-xl-7 col-sm-6">
                        <div className="tp-product-arrival-more-wrapper d-flex justify-content-end">
                            <div className="tp-product-arrival-arrow tp-swiper-arrow text-end tp-product-arrival-border">
                                <button type="button" className="tp-arrival-slider-button-prev">
                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 13L1 7L7 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                                <button type="button" className="tp-arrival-slider-button-next">
                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 13L7 7L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-xl-12">
                        <div className="tp-product-arrival-slider fix">
                            <div className="tp-product-arrival-active swiper-container" data-items-per-view="4">
                                <div className="swiper-wrapper">
                                    <div className="tp-product-item transition-3 mb-25 swiper-slide">
                                        <div className="tp-product-thumb p-relative fix m-img">
                                            <a href="/products/zennova-shilajit-pure-himalayan-power-advanced-gold-grade-formula">
            <img src="/storage/loader.png" data-bb-lazy="true" loading="lazy" data-src="/storage/whatsapp-image-2026-05-31-at-31116-am-600x600.jpeg" alt="Zennova Shilajit – Pure Himalayan Power (Advanced Gold Grade Formula)" />
        </a>

                                            <div className="tp-product-badge">
                                                <span style={{"backgroundColor":"#AC2200 !important"} as React.CSSProperties}>Hot</span>
                                            </div>

                                            <div className="tp-product-action">
                                                <div className="d-flex flex-column tp-product-action-item">
                                                    <button type="button" className="tp-product-compare-btn tp-product-action-btn" data-bb-toggle="add-to-compare" title="Add To Compare" data-url="/compare/159" data-remove-url="/compare/159"
                                                        data-add-text="Add To Compare" data-remove-text="Remove From Compare">
                <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.6666 1L16 4.33333L12.6666 7.66667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1 9.3335V7.66683C1 6.78277 1.35119 5.93493 1.97631 5.30981C2.60143 4.68469 3.44928 4.3335 4.33333 4.3335H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.33333 19.3332L1 15.9998L4.33333 12.6665" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 11V12.6667C16 13.5507 15.6488 14.3986 15.0237 15.0237C14.3986 15.6488 13.5507 16 12.6667 16H1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="tp-product-tooltip">
                                            Add To Compare
                                    </span>
            </button>
                                                    <button type="button" className="tp-product-quick-view-btn tp-product-action-btn" title="Quick View" data-bs-toggle="modal" data-bs-target="#product-quick-view-modal" data-url="/ajax/quick-view/159">
            <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.99938 5.64111C8.66938 5.64111 7.58838 6.72311 7.58838 8.05311C7.58838 9.38211 8.66938 10.4631 9.99938 10.4631C11.3294 10.4631 12.4114 9.38211 12.4114 8.05311C12.4114 6.72311 11.3294 5.64111 9.99938 5.64111ZM9.99938 11.9631C7.84238 11.9631 6.08838 10.2091 6.08838 8.05311C6.08838 5.89611 7.84238 4.14111 9.99938 4.14111C12.1564 4.14111 13.9114 5.89611 13.9114 8.05311C13.9114 10.2091 12.1564 11.9631 9.99938 11.9631Z" fill="currentColor"/>
                <g mask="url(#mask0_1211_721)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.56975 8.05226C3.42975 12.1613 6.56275 14.6043 9.99975 14.6053C13.4368 14.6043 16.5697 12.1613 18.4298 8.05226C16.5697 3.94426 13.4368 1.50126 9.99975 1.50026C6.56375 1.50126 3.42975 3.94426 1.56975 8.05226ZM10.0017 16.1053H9.99775H9.99675C5.86075 16.1023 2.14675 13.2033 0.06075 8.34826C-0.02025 8.15926 -0.02025 7.94526 0.06075 7.75626C2.14675 2.90226 5.86175 0.00326172 9.99675 0.000261719C9.99875 -0.000738281 9.99875 -0.000738281 9.99975 0.000261719C10.0017 -0.000738281 10.0017 -0.000738281 10.0028 0.000261719C14.1388 0.00326172 17.8527 2.90226 19.9387 7.75626C20.0208 7.94526 20.0208 8.15926 19.9387 8.34826C17.8537 13.2033 14.1388 16.1023 10.0028 16.1053H10.0017Z" fill="currentColor"/>
                </g>
            </svg>
            <span className="tp-product-tooltip">Quick View</span>
        </button>
                                                    <button type="button" className="tp-product-add-to-wishlist-btn tp-product-action-btn" data-bb-toggle="add-to-wishlist" title="Add To Wishlist" data-url="/wishlist/159" data-add-text="Add To Wishlist"
                                                        data-remove-text="Remove From Wishlist">
                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.78158 8.88867C3.15121 13.1386 8.5623 16.5749 10.0003 17.4255C11.4432 16.5662 16.8934 13.0918 18.219 8.89257C19.0894 6.17816 18.2815 2.73984 15.0714 1.70806C13.5162 1.21019 11.7021 1.5132 10.4497 2.4797C10.1879 2.68041 9.82446 2.68431 9.56069 2.48555C8.23405 1.49079 6.50102 1.19947 4.92136 1.70806C1.71613 2.73887 0.911158 6.17718 1.78158 8.88867ZM10.0013 19C9.88015 19 9.75999 18.9708 9.65058 18.9113C9.34481 18.7447 2.14207 14.7852 0.386569 9.33491C0.385592 9.33491 0.385592 9.33394 0.385592 9.33394C-0.71636 5.90244 0.510636 1.59018 4.47199 0.316764C6.33203 -0.283407 8.35911 -0.019371 9.99836 1.01242C11.5868 0.0108324 13.6969 -0.26587 15.5198 0.316764C19.4851 1.59213 20.716 5.90342 19.615 9.33394C17.9162 14.7218 10.6607 18.7408 10.353 18.9094C10.2436 18.9698 10.1224 19 10.0013 19Z" fill="currentColor"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.7806 7.42904C15.4025 7.42904 15.0821 7.13968 15.0508 6.75775C14.9864 5.95687 14.4491 5.2807 13.6841 5.03421C13.2983 4.9095 13.0873 4.49737 13.2113 4.11446C13.3373 3.73059 13.7467 3.52209 14.1335 3.6429C15.4651 4.07257 16.398 5.24855 16.5123 6.63888C16.5445 7.04127 16.2446 7.39397 15.8412 7.42612C15.8206 7.42807 15.8011 7.42904 15.7806 7.42904Z" fill="currentColor"/>
                </svg>
                <span className="tp-product-tooltip">
                                            Add To Wishlist
                                    </span>
            </button>
                                                </div>
                                            </div>

                                            <div className="tp-product-add-cart-btn-large-wrapper">
                                                <button type="button" className="tp-product-add-cart-btn-large" data-bb-toggle="quick-shop" data-url="/ajax/quick-shop/zennova-shilajit-pure-himalayan-power-advanced-gold-grade-formula" 
                                                    data-product-id="159" data-product-name="Zennova Shilajit – Pure Himalayan Power (Advanced Gold Grade Formula)" data-product-price="1560" data-product-sku="SF-2443-JLD5" data-product-category="Body" data-product-categories="Body"
                                                    title="Quick Shop">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.93795 5.34749L4.54095 12.5195C4.58495 13.0715 5.03594 13.4855 5.58695 13.4855H5.59095H16.5019H16.5039C17.0249 13.4855 17.4699 13.0975 17.5439 12.5825L18.4939 6.02349C18.5159 5.86749 18.4769 5.71149 18.3819 5.58549C18.2879 5.45849 18.1499 5.37649 17.9939 5.35449C17.7849 5.36249 9.11195 5.35049 3.93795 5.34749ZM5.58495 14.9855C4.26795 14.9855 3.15295 13.9575 3.04595 12.6425L2.12995 1.74849L0.622945 1.48849C0.213945 1.41649 -0.0590549 1.02949 0.0109451 0.620487C0.082945 0.211487 0.477945 -0.054513 0.877945 0.00948704L2.95795 0.369487C3.29295 0.428487 3.54795 0.706487 3.57695 1.04649L3.81194 3.84749C18.0879 3.85349 18.1339 3.86049 18.2029 3.86849C18.7599 3.94949 19.2499 4.24049 19.5839 4.68849C19.9179 5.13549 20.0579 5.68649 19.9779 6.23849L19.0289 12.7965C18.8499 14.0445 17.7659 14.9855 16.5059 14.9855H16.5009H5.59295H5.58495Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M14.8979 9.04382H12.1259C11.7109 9.04382 11.3759 8.70782 11.3759 8.29382C11.3759 7.87982 11.7109 7.54382 12.1259 7.54382H14.8979C15.3119 7.54382 15.6479 7.87982 15.6479 8.29382C15.6479 8.70782 15.3119 9.04382 14.8979 9.04382Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M5.15474 17.702C5.45574 17.702 5.69874 17.945 5.69874 18.246C5.69874 18.547 5.45574 18.791 5.15474 18.791C4.85274 18.791 4.60974 18.547 4.60974 18.246C4.60974 17.945 4.85274 17.702 5.15474 17.702Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M5.15374 18.0409C5.04074 18.0409 4.94874 18.1329 4.94874 18.2459C4.94874 18.4729 5.35974 18.4729 5.35974 18.2459C5.35974 18.1329 5.26674 18.0409 5.15374 18.0409ZM5.15374 19.5409C4.43974 19.5409 3.85974 18.9599 3.85974 18.2459C3.85974 17.5319 4.43974 16.9519 5.15374 16.9519C5.86774 16.9519 6.44874 17.5319 6.44874 18.2459C6.44874 18.9599 5.86774 19.5409 5.15374 19.5409Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M16.435 17.702C16.736 17.702 16.98 17.945 16.98 18.246C16.98 18.547 16.736 18.791 16.435 18.791C16.133 18.791 15.89 18.547 15.89 18.246C15.89 17.945 16.133 17.702 16.435 17.702Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M16.434 18.0409C16.322 18.0409 16.23 18.1329 16.23 18.2459C16.231 18.4749 16.641 18.4729 16.64 18.2459C16.64 18.1329 16.547 18.0409 16.434 18.0409ZM16.434 19.5409C15.72 19.5409 15.14 18.9599 15.14 18.2459C15.14 17.5319 15.72 16.9519 16.434 16.9519C17.149 16.9519 17.73 17.5319 17.73 18.2459C17.73 18.9599 17.149 19.5409 16.434 19.5409Z" fill="currentColor"/>
            </svg>
                            Select Options
                    </button>
                                            </div>
                                        </div>

                                        <div className="tp-product-content">


                                            <h3 className="text-truncate tp-product-title">
                                                <a href="/products/zennova-shilajit-pure-himalayan-power-advanced-gold-grade-formula" title="Zennova Shilajit – Pure Himalayan Power (Advanced Gold Grade Formula)">
                Zennova Shilajit – Pure Himalayan Power (Advanced Gold Grade Formula)
            </a>
                                            </h3>

                                            <div className="">
                                                <div className="tp-product-rating d-flex align-items-center">
                                                    <div className="tp-product-rating-icon">
                                                        <div className="bb-product-rating" style={{"--bb-rating-size":"70px"} as React.CSSProperties}>
                                                            <span style={{"width":"0% !important"} as React.CSSProperties}></span>
                                                        </div>
                                                    </div>
                                                    <div className="tp-product-rating-text">
                                                        <a href="/products/zennova-shilajit-pure-himalayan-power-advanced-gold-grade-formula#product-review" data-bb-toggle="scroll-to-review">
                    <span className="d-none d-sm-block">(0 reviews)</span>
                    <span className="d-block d-sm-none">(0)</span>
                </a>
                                                    </div>
                                                </div>

                                                <div className="tp-product-price-wrapper">
                                                    <span className="tp-product-price new-price" data-bb-value="product-price">₹1,299</span>

                                                    <span className="">
    <small>
        <del
            className="tp-product-price old-price"
            data-bb-value="product-original-price"
        >₹1,560</del>
    </small>
</span>
                                                </div>
                                            </div>



                                        </div>
                                    </div>
                                    <div className="tp-product-item transition-3 mb-25 swiper-slide">
                                        <div className="tp-product-thumb p-relative fix m-img">
                                            <a href="/products/zennova-lungs-detox">
            <img src="/storage/loader.png" data-bb-lazy="true" loading="lazy" data-src="/storage/whatsapp-image-2026-05-31-at-35910-am-600x600.jpeg" alt="Zennova Lungs Detox" />
        </a>

                                            <div className="tp-product-badge">
                                                <span className="product-sale">-20%</span>
                                            </div>

                                            <div className="tp-product-action">
                                                <div className="d-flex flex-column tp-product-action-item">
                                                    <button type="button" className="tp-product-compare-btn tp-product-action-btn" data-bb-toggle="add-to-compare" title="Add To Compare" data-url="/compare/150" data-remove-url="/compare/150"
                                                        data-add-text="Add To Compare" data-remove-text="Remove From Compare">
                <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.6666 1L16 4.33333L12.6666 7.66667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1 9.3335V7.66683C1 6.78277 1.35119 5.93493 1.97631 5.30981C2.60143 4.68469 3.44928 4.3335 4.33333 4.3335H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.33333 19.3332L1 15.9998L4.33333 12.6665" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 11V12.6667C16 13.5507 15.6488 14.3986 15.0237 15.0237C14.3986 15.6488 13.5507 16 12.6667 16H1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="tp-product-tooltip">
                                            Add To Compare
                                    </span>
            </button>
                                                    <button type="button" className="tp-product-quick-view-btn tp-product-action-btn" title="Quick View" data-bs-toggle="modal" data-bs-target="#product-quick-view-modal" data-url="/ajax/quick-view/150">
            <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.99938 5.64111C8.66938 5.64111 7.58838 6.72311 7.58838 8.05311C7.58838 9.38211 8.66938 10.4631 9.99938 10.4631C11.3294 10.4631 12.4114 9.38211 12.4114 8.05311C12.4114 6.72311 11.3294 5.64111 9.99938 5.64111ZM9.99938 11.9631C7.84238 11.9631 6.08838 10.2091 6.08838 8.05311C6.08838 5.89611 7.84238 4.14111 9.99938 4.14111C12.1564 4.14111 13.9114 5.89611 13.9114 8.05311C13.9114 10.2091 12.1564 11.9631 9.99938 11.9631Z" fill="currentColor"/>
                <g mask="url(#mask0_1211_721)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.56975 8.05226C3.42975 12.1613 6.56275 14.6043 9.99975 14.6053C13.4368 14.6043 16.5697 12.1613 18.4298 8.05226C16.5697 3.94426 13.4368 1.50126 9.99975 1.50026C6.56375 1.50126 3.42975 3.94426 1.56975 8.05226ZM10.0017 16.1053H9.99775H9.99675C5.86075 16.1023 2.14675 13.2033 0.06075 8.34826C-0.02025 8.15926 -0.02025 7.94526 0.06075 7.75626C2.14675 2.90226 5.86175 0.00326172 9.99675 0.000261719C9.99875 -0.000738281 9.99875 -0.000738281 9.99975 0.000261719C10.0017 -0.000738281 10.0017 -0.000738281 10.0028 0.000261719C14.1388 0.00326172 17.8527 2.90226 19.9387 7.75626C20.0208 7.94526 20.0208 8.15926 19.9387 8.34826C17.8537 13.2033 14.1388 16.1023 10.0028 16.1053H10.0017Z" fill="currentColor"/>
                </g>
            </svg>
            <span className="tp-product-tooltip">Quick View</span>
        </button>
                                                    <button type="button" className="tp-product-add-to-wishlist-btn tp-product-action-btn" data-bb-toggle="add-to-wishlist" title="Add To Wishlist" data-url="/wishlist/150" data-add-text="Add To Wishlist"
                                                        data-remove-text="Remove From Wishlist">
                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.78158 8.88867C3.15121 13.1386 8.5623 16.5749 10.0003 17.4255C11.4432 16.5662 16.8934 13.0918 18.219 8.89257C19.0894 6.17816 18.2815 2.73984 15.0714 1.70806C13.5162 1.21019 11.7021 1.5132 10.4497 2.4797C10.1879 2.68041 9.82446 2.68431 9.56069 2.48555C8.23405 1.49079 6.50102 1.19947 4.92136 1.70806C1.71613 2.73887 0.911158 6.17718 1.78158 8.88867ZM10.0013 19C9.88015 19 9.75999 18.9708 9.65058 18.9113C9.34481 18.7447 2.14207 14.7852 0.386569 9.33491C0.385592 9.33491 0.385592 9.33394 0.385592 9.33394C-0.71636 5.90244 0.510636 1.59018 4.47199 0.316764C6.33203 -0.283407 8.35911 -0.019371 9.99836 1.01242C11.5868 0.0108324 13.6969 -0.26587 15.5198 0.316764C19.4851 1.59213 20.716 5.90342 19.615 9.33394C17.9162 14.7218 10.6607 18.7408 10.353 18.9094C10.2436 18.9698 10.1224 19 10.0013 19Z" fill="currentColor"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.7806 7.42904C15.4025 7.42904 15.0821 7.13968 15.0508 6.75775C14.9864 5.95687 14.4491 5.2807 13.6841 5.03421C13.2983 4.9095 13.0873 4.49737 13.2113 4.11446C13.3373 3.73059 13.7467 3.52209 14.1335 3.6429C15.4651 4.07257 16.398 5.24855 16.5123 6.63888C16.5445 7.04127 16.2446 7.39397 15.8412 7.42612C15.8206 7.42807 15.8011 7.42904 15.7806 7.42904Z" fill="currentColor"/>
                </svg>
                <span className="tp-product-tooltip">
                                            Add To Wishlist
                                    </span>
            </button>
                                                </div>
                                            </div>

                                            <div className="tp-product-add-cart-btn-large-wrapper">
                                                <button type="button" className="tp-product-add-cart-btn-large" data-bb-toggle="quick-shop" data-url="/ajax/quick-shop/zennova-lungs-detox"  data-product-id="150" data-product-name="Zennova Lungs Detox"
                                                    data-product-price="1420" data-product-sku="SF-2443-BWKP" data-product-category="Body" data-product-categories="Body" title="Quick Shop">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.93795 5.34749L4.54095 12.5195C4.58495 13.0715 5.03594 13.4855 5.58695 13.4855H5.59095H16.5019H16.5039C17.0249 13.4855 17.4699 13.0975 17.5439 12.5825L18.4939 6.02349C18.5159 5.86749 18.4769 5.71149 18.3819 5.58549C18.2879 5.45849 18.1499 5.37649 17.9939 5.35449C17.7849 5.36249 9.11195 5.35049 3.93795 5.34749ZM5.58495 14.9855C4.26795 14.9855 3.15295 13.9575 3.04595 12.6425L2.12995 1.74849L0.622945 1.48849C0.213945 1.41649 -0.0590549 1.02949 0.0109451 0.620487C0.082945 0.211487 0.477945 -0.054513 0.877945 0.00948704L2.95795 0.369487C3.29295 0.428487 3.54795 0.706487 3.57695 1.04649L3.81194 3.84749C18.0879 3.85349 18.1339 3.86049 18.2029 3.86849C18.7599 3.94949 19.2499 4.24049 19.5839 4.68849C19.9179 5.13549 20.0579 5.68649 19.9779 6.23849L19.0289 12.7965C18.8499 14.0445 17.7659 14.9855 16.5059 14.9855H16.5009H5.59295H5.58495Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M14.8979 9.04382H12.1259C11.7109 9.04382 11.3759 8.70782 11.3759 8.29382C11.3759 7.87982 11.7109 7.54382 12.1259 7.54382H14.8979C15.3119 7.54382 15.6479 7.87982 15.6479 8.29382C15.6479 8.70782 15.3119 9.04382 14.8979 9.04382Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M5.15474 17.702C5.45574 17.702 5.69874 17.945 5.69874 18.246C5.69874 18.547 5.45574 18.791 5.15474 18.791C4.85274 18.791 4.60974 18.547 4.60974 18.246C4.60974 17.945 4.85274 17.702 5.15474 17.702Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M5.15374 18.0409C5.04074 18.0409 4.94874 18.1329 4.94874 18.2459C4.94874 18.4729 5.35974 18.4729 5.35974 18.2459C5.35974 18.1329 5.26674 18.0409 5.15374 18.0409ZM5.15374 19.5409C4.43974 19.5409 3.85974 18.9599 3.85974 18.2459C3.85974 17.5319 4.43974 16.9519 5.15374 16.9519C5.86774 16.9519 6.44874 17.5319 6.44874 18.2459C6.44874 18.9599 5.86774 19.5409 5.15374 19.5409Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M16.435 17.702C16.736 17.702 16.98 17.945 16.98 18.246C16.98 18.547 16.736 18.791 16.435 18.791C16.133 18.791 15.89 18.547 15.89 18.246C15.89 17.945 16.133 17.702 16.435 17.702Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M16.434 18.0409C16.322 18.0409 16.23 18.1329 16.23 18.2459C16.231 18.4749 16.641 18.4729 16.64 18.2459C16.64 18.1329 16.547 18.0409 16.434 18.0409ZM16.434 19.5409C15.72 19.5409 15.14 18.9599 15.14 18.2459C15.14 17.5319 15.72 16.9519 16.434 16.9519C17.149 16.9519 17.73 17.5319 17.73 18.2459C17.73 18.9599 17.149 19.5409 16.434 19.5409Z" fill="currentColor"/>
            </svg>
                            Select Options
                    </button>
                                            </div>
                                        </div>

                                        <div className="tp-product-content">


                                            <h3 className="text-truncate tp-product-title">
                                                <a href="/products/zennova-lungs-detox" title="Zennova Lungs Detox">
                Zennova Lungs Detox
            </a>
                                            </h3>

                                            <div className="">
                                                <div className="tp-product-rating d-flex align-items-center">
                                                    <div className="tp-product-rating-icon">
                                                        <div className="bb-product-rating" style={{"--bb-rating-size":"70px"} as React.CSSProperties}>
                                                            <span style={{"width":"0% !important"} as React.CSSProperties}></span>
                                                        </div>
                                                    </div>
                                                    <div className="tp-product-rating-text">
                                                        <a href="/products/zennova-lungs-detox#product-review" data-bb-toggle="scroll-to-review">
                    <span className="d-none d-sm-block">(0 reviews)</span>
                    <span className="d-block d-sm-none">(0)</span>
                </a>
                                                    </div>
                                                </div>

                                                <div className="tp-product-price-wrapper">
                                                    <span className="tp-product-price new-price" data-bb-value="product-price">₹1,130</span>

                                                    <span className="">
    <small>
        <del
            className="tp-product-price old-price"
            data-bb-value="product-original-price"
        >₹1,420</del>
    </small>
</span>
                                                </div>
                                            </div>



                                        </div>
                                    </div>
                                    <div className="tp-product-item transition-3 mb-25 swiper-slide">
                                        <div className="tp-product-thumb p-relative fix m-img">
                                            <a href="/products/zennova-fat-burne">
            <img src="/storage/loader.png" data-bb-lazy="true" loading="lazy" data-src="/storage/whatsapp-image-2026-05-31-at-40352-am-600x600.jpeg" alt="Zennova Fat Burne - Thermogenic formula" />
        </a>

                                            <div className="tp-product-badge">
                                                <span className="product-sale">-17%</span>
                                            </div>

                                            <div className="tp-product-action">
                                                <div className="d-flex flex-column tp-product-action-item">
                                                    <button type="button" className="tp-product-compare-btn tp-product-action-btn" data-bb-toggle="add-to-compare" title="Add To Compare" data-url="/compare/148" data-remove-url="/compare/148"
                                                        data-add-text="Add To Compare" data-remove-text="Remove From Compare">
                <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.6666 1L16 4.33333L12.6666 7.66667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1 9.3335V7.66683C1 6.78277 1.35119 5.93493 1.97631 5.30981C2.60143 4.68469 3.44928 4.3335 4.33333 4.3335H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.33333 19.3332L1 15.9998L4.33333 12.6665" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 11V12.6667C16 13.5507 15.6488 14.3986 15.0237 15.0237C14.3986 15.6488 13.5507 16 12.6667 16H1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="tp-product-tooltip">
                                            Add To Compare
                                    </span>
            </button>
                                                    <button type="button" className="tp-product-quick-view-btn tp-product-action-btn" title="Quick View" data-bs-toggle="modal" data-bs-target="#product-quick-view-modal" data-url="/ajax/quick-view/148">
            <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.99938 5.64111C8.66938 5.64111 7.58838 6.72311 7.58838 8.05311C7.58838 9.38211 8.66938 10.4631 9.99938 10.4631C11.3294 10.4631 12.4114 9.38211 12.4114 8.05311C12.4114 6.72311 11.3294 5.64111 9.99938 5.64111ZM9.99938 11.9631C7.84238 11.9631 6.08838 10.2091 6.08838 8.05311C6.08838 5.89611 7.84238 4.14111 9.99938 4.14111C12.1564 4.14111 13.9114 5.89611 13.9114 8.05311C13.9114 10.2091 12.1564 11.9631 9.99938 11.9631Z" fill="currentColor"/>
                <g mask="url(#mask0_1211_721)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.56975 8.05226C3.42975 12.1613 6.56275 14.6043 9.99975 14.6053C13.4368 14.6043 16.5697 12.1613 18.4298 8.05226C16.5697 3.94426 13.4368 1.50126 9.99975 1.50026C6.56375 1.50126 3.42975 3.94426 1.56975 8.05226ZM10.0017 16.1053H9.99775H9.99675C5.86075 16.1023 2.14675 13.2033 0.06075 8.34826C-0.02025 8.15926 -0.02025 7.94526 0.06075 7.75626C2.14675 2.90226 5.86175 0.00326172 9.99675 0.000261719C9.99875 -0.000738281 9.99875 -0.000738281 9.99975 0.000261719C10.0017 -0.000738281 10.0017 -0.000738281 10.0028 0.000261719C14.1388 0.00326172 17.8527 2.90226 19.9387 7.75626C20.0208 7.94526 20.0208 8.15926 19.9387 8.34826C17.8537 13.2033 14.1388 16.1023 10.0028 16.1053H10.0017Z" fill="currentColor"/>
                </g>
            </svg>
            <span className="tp-product-tooltip">Quick View</span>
        </button>
                                                    <button type="button" className="tp-product-add-to-wishlist-btn tp-product-action-btn" data-bb-toggle="add-to-wishlist" title="Add To Wishlist" data-url="/wishlist/148" data-add-text="Add To Wishlist"
                                                        data-remove-text="Remove From Wishlist">
                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.78158 8.88867C3.15121 13.1386 8.5623 16.5749 10.0003 17.4255C11.4432 16.5662 16.8934 13.0918 18.219 8.89257C19.0894 6.17816 18.2815 2.73984 15.0714 1.70806C13.5162 1.21019 11.7021 1.5132 10.4497 2.4797C10.1879 2.68041 9.82446 2.68431 9.56069 2.48555C8.23405 1.49079 6.50102 1.19947 4.92136 1.70806C1.71613 2.73887 0.911158 6.17718 1.78158 8.88867ZM10.0013 19C9.88015 19 9.75999 18.9708 9.65058 18.9113C9.34481 18.7447 2.14207 14.7852 0.386569 9.33491C0.385592 9.33491 0.385592 9.33394 0.385592 9.33394C-0.71636 5.90244 0.510636 1.59018 4.47199 0.316764C6.33203 -0.283407 8.35911 -0.019371 9.99836 1.01242C11.5868 0.0108324 13.6969 -0.26587 15.5198 0.316764C19.4851 1.59213 20.716 5.90342 19.615 9.33394C17.9162 14.7218 10.6607 18.7408 10.353 18.9094C10.2436 18.9698 10.1224 19 10.0013 19Z" fill="currentColor"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.7806 7.42904C15.4025 7.42904 15.0821 7.13968 15.0508 6.75775C14.9864 5.95687 14.4491 5.2807 13.6841 5.03421C13.2983 4.9095 13.0873 4.49737 13.2113 4.11446C13.3373 3.73059 13.7467 3.52209 14.1335 3.6429C15.4651 4.07257 16.398 5.24855 16.5123 6.63888C16.5445 7.04127 16.2446 7.39397 15.8412 7.42612C15.8206 7.42807 15.8011 7.42904 15.7806 7.42904Z" fill="currentColor"/>
                </svg>
                <span className="tp-product-tooltip">
                                            Add To Wishlist
                                    </span>
            </button>
                                                </div>
                                            </div>

                                            <div className="tp-product-add-cart-btn-large-wrapper">
                                                <button type="button" className="tp-product-add-cart-btn-large" data-bb-toggle="quick-shop" data-url="/ajax/quick-shop/zennova-fat-burne"  data-product-id="148" data-product-name="Zennova Fat Burne - Thermogenic formula"
                                                    data-product-price="1360" data-product-sku="SF-2443-HDD9" title="Quick Shop">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.93795 5.34749L4.54095 12.5195C4.58495 13.0715 5.03594 13.4855 5.58695 13.4855H5.59095H16.5019H16.5039C17.0249 13.4855 17.4699 13.0975 17.5439 12.5825L18.4939 6.02349C18.5159 5.86749 18.4769 5.71149 18.3819 5.58549C18.2879 5.45849 18.1499 5.37649 17.9939 5.35449C17.7849 5.36249 9.11195 5.35049 3.93795 5.34749ZM5.58495 14.9855C4.26795 14.9855 3.15295 13.9575 3.04595 12.6425L2.12995 1.74849L0.622945 1.48849C0.213945 1.41649 -0.0590549 1.02949 0.0109451 0.620487C0.082945 0.211487 0.477945 -0.054513 0.877945 0.00948704L2.95795 0.369487C3.29295 0.428487 3.54795 0.706487 3.57695 1.04649L3.81194 3.84749C18.0879 3.85349 18.1339 3.86049 18.2029 3.86849C18.7599 3.94949 19.2499 4.24049 19.5839 4.68849C19.9179 5.13549 20.0579 5.68649 19.9779 6.23849L19.0289 12.7965C18.8499 14.0445 17.7659 14.9855 16.5059 14.9855H16.5009H5.59295H5.58495Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M14.8979 9.04382H12.1259C11.7109 9.04382 11.3759 8.70782 11.3759 8.29382C11.3759 7.87982 11.7109 7.54382 12.1259 7.54382H14.8979C15.3119 7.54382 15.6479 7.87982 15.6479 8.29382C15.6479 8.70782 15.3119 9.04382 14.8979 9.04382Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M5.15474 17.702C5.45574 17.702 5.69874 17.945 5.69874 18.246C5.69874 18.547 5.45574 18.791 5.15474 18.791C4.85274 18.791 4.60974 18.547 4.60974 18.246C4.60974 17.945 4.85274 17.702 5.15474 17.702Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M5.15374 18.0409C5.04074 18.0409 4.94874 18.1329 4.94874 18.2459C4.94874 18.4729 5.35974 18.4729 5.35974 18.2459C5.35974 18.1329 5.26674 18.0409 5.15374 18.0409ZM5.15374 19.5409C4.43974 19.5409 3.85974 18.9599 3.85974 18.2459C3.85974 17.5319 4.43974 16.9519 5.15374 16.9519C5.86774 16.9519 6.44874 17.5319 6.44874 18.2459C6.44874 18.9599 5.86774 19.5409 5.15374 19.5409Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M16.435 17.702C16.736 17.702 16.98 17.945 16.98 18.246C16.98 18.547 16.736 18.791 16.435 18.791C16.133 18.791 15.89 18.547 15.89 18.246C15.89 17.945 16.133 17.702 16.435 17.702Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M16.434 18.0409C16.322 18.0409 16.23 18.1329 16.23 18.2459C16.231 18.4749 16.641 18.4729 16.64 18.2459C16.64 18.1329 16.547 18.0409 16.434 18.0409ZM16.434 19.5409C15.72 19.5409 15.14 18.9599 15.14 18.2459C15.14 17.5319 15.72 16.9519 16.434 16.9519C17.149 16.9519 17.73 17.5319 17.73 18.2459C17.73 18.9599 17.149 19.5409 16.434 19.5409Z" fill="currentColor"/>
            </svg>
                            Select Options
                    </button>
                                            </div>
                                        </div>

                                        <div className="tp-product-content">


                                            <h3 className="text-truncate tp-product-title">
                                                <a href="/products/zennova-fat-burne" title="Zennova Fat Burne - Thermogenic formula">
                Zennova Fat Burne - Thermogenic formula
            </a>
                                            </h3>

                                            <div className="">
                                                <div className="tp-product-rating d-flex align-items-center">
                                                    <div className="tp-product-rating-icon">
                                                        <div className="bb-product-rating" style={{"--bb-rating-size":"70px"} as React.CSSProperties}>
                                                            <span style={{"width":"0% !important"} as React.CSSProperties}></span>
                                                        </div>
                                                    </div>
                                                    <div className="tp-product-rating-text">
                                                        <a href="/products/zennova-fat-burne#product-review" data-bb-toggle="scroll-to-review">
                    <span className="d-none d-sm-block">(0 reviews)</span>
                    <span className="d-block d-sm-none">(0)</span>
                </a>
                                                    </div>
                                                </div>

                                                <div className="tp-product-price-wrapper">
                                                    <span className="tp-product-price new-price" data-bb-value="product-price">₹1,120</span>

                                                    <span className="">
    <small>
        <del
            className="tp-product-price old-price"
            data-bb-value="product-original-price"
        >₹1,360</del>
    </small>
</span>
                                                </div>
                                            </div>



                                        </div>
                                    </div>
                                    <div className="tp-product-item transition-3 mb-25 swiper-slide">
                                        <div className="tp-product-thumb p-relative fix m-img">
                                            <a href="/products/zennova-ashwagandha-premium-stress-immune-support">
            <img src="/storage/loader.png" data-bb-lazy="true" loading="lazy" data-src="/storage/whatsapp-image-2026-05-31-at-42031-am-600x600.jpeg" alt="Zennova Ashwagandha – Premium Stress &amp; Immune Support" />
        </a>

                                            <div className="tp-product-badge">
                                                <span className="product-sale">-25%</span>
                                            </div>

                                            <div className="tp-product-action">
                                                <div className="d-flex flex-column tp-product-action-item">
                                                    <button type="button" className="tp-product-compare-btn tp-product-action-btn" data-bb-toggle="add-to-compare" title="Add To Compare" data-url="/compare/144" data-remove-url="/compare/144"
                                                        data-add-text="Add To Compare" data-remove-text="Remove From Compare">
                <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.6666 1L16 4.33333L12.6666 7.66667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1 9.3335V7.66683C1 6.78277 1.35119 5.93493 1.97631 5.30981C2.60143 4.68469 3.44928 4.3335 4.33333 4.3335H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.33333 19.3332L1 15.9998L4.33333 12.6665" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 11V12.6667C16 13.5507 15.6488 14.3986 15.0237 15.0237C14.3986 15.6488 13.5507 16 12.6667 16H1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="tp-product-tooltip">
                                            Add To Compare
                                    </span>
            </button>
                                                    <button type="button" className="tp-product-quick-view-btn tp-product-action-btn" title="Quick View" data-bs-toggle="modal" data-bs-target="#product-quick-view-modal" data-url="/ajax/quick-view/144">
            <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.99938 5.64111C8.66938 5.64111 7.58838 6.72311 7.58838 8.05311C7.58838 9.38211 8.66938 10.4631 9.99938 10.4631C11.3294 10.4631 12.4114 9.38211 12.4114 8.05311C12.4114 6.72311 11.3294 5.64111 9.99938 5.64111ZM9.99938 11.9631C7.84238 11.9631 6.08838 10.2091 6.08838 8.05311C6.08838 5.89611 7.84238 4.14111 9.99938 4.14111C12.1564 4.14111 13.9114 5.89611 13.9114 8.05311C13.9114 10.2091 12.1564 11.9631 9.99938 11.9631Z" fill="currentColor"/>
                <g mask="url(#mask0_1211_721)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.56975 8.05226C3.42975 12.1613 6.56275 14.6043 9.99975 14.6053C13.4368 14.6043 16.5697 12.1613 18.4298 8.05226C16.5697 3.94426 13.4368 1.50126 9.99975 1.50026C6.56375 1.50126 3.42975 3.94426 1.56975 8.05226ZM10.0017 16.1053H9.99775H9.99675C5.86075 16.1023 2.14675 13.2033 0.06075 8.34826C-0.02025 8.15926 -0.02025 7.94526 0.06075 7.75626C2.14675 2.90226 5.86175 0.00326172 9.99675 0.000261719C9.99875 -0.000738281 9.99875 -0.000738281 9.99975 0.000261719C10.0017 -0.000738281 10.0017 -0.000738281 10.0028 0.000261719C14.1388 0.00326172 17.8527 2.90226 19.9387 7.75626C20.0208 7.94526 20.0208 8.15926 19.9387 8.34826C17.8537 13.2033 14.1388 16.1023 10.0028 16.1053H10.0017Z" fill="currentColor"/>
                </g>
            </svg>
            <span className="tp-product-tooltip">Quick View</span>
        </button>
                                                    <button type="button" className="tp-product-add-to-wishlist-btn tp-product-action-btn" data-bb-toggle="add-to-wishlist" title="Add To Wishlist" data-url="/wishlist/144" data-add-text="Add To Wishlist"
                                                        data-remove-text="Remove From Wishlist">
                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.78158 8.88867C3.15121 13.1386 8.5623 16.5749 10.0003 17.4255C11.4432 16.5662 16.8934 13.0918 18.219 8.89257C19.0894 6.17816 18.2815 2.73984 15.0714 1.70806C13.5162 1.21019 11.7021 1.5132 10.4497 2.4797C10.1879 2.68041 9.82446 2.68431 9.56069 2.48555C8.23405 1.49079 6.50102 1.19947 4.92136 1.70806C1.71613 2.73887 0.911158 6.17718 1.78158 8.88867ZM10.0013 19C9.88015 19 9.75999 18.9708 9.65058 18.9113C9.34481 18.7447 2.14207 14.7852 0.386569 9.33491C0.385592 9.33491 0.385592 9.33394 0.385592 9.33394C-0.71636 5.90244 0.510636 1.59018 4.47199 0.316764C6.33203 -0.283407 8.35911 -0.019371 9.99836 1.01242C11.5868 0.0108324 13.6969 -0.26587 15.5198 0.316764C19.4851 1.59213 20.716 5.90342 19.615 9.33394C17.9162 14.7218 10.6607 18.7408 10.353 18.9094C10.2436 18.9698 10.1224 19 10.0013 19Z" fill="currentColor"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.7806 7.42904C15.4025 7.42904 15.0821 7.13968 15.0508 6.75775C14.9864 5.95687 14.4491 5.2807 13.6841 5.03421C13.2983 4.9095 13.0873 4.49737 13.2113 4.11446C13.3373 3.73059 13.7467 3.52209 14.1335 3.6429C15.4651 4.07257 16.398 5.24855 16.5123 6.63888C16.5445 7.04127 16.2446 7.39397 15.8412 7.42612C15.8206 7.42807 15.8011 7.42904 15.7806 7.42904Z" fill="currentColor"/>
                </svg>
                <span className="tp-product-tooltip">
                                            Add To Wishlist
                                    </span>
            </button>
                                                </div>
                                            </div>

                                            <div className="tp-product-add-cart-btn-large-wrapper">
                                                <button type="button" className="tp-product-add-cart-btn-large" data-bb-toggle="quick-shop" data-url="/ajax/quick-shop/zennova-ashwagandha-premium-stress-immune-support"  data-product-id="144"
                                                    data-product-name="Zennova Ashwagandha – Premium Stress &amp; Immune Support" data-product-price="800" data-product-sku="SF-2443-RZBB" data-product-category="Body" data-product-categories="Body" title="Quick Shop">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.93795 5.34749L4.54095 12.5195C4.58495 13.0715 5.03594 13.4855 5.58695 13.4855H5.59095H16.5019H16.5039C17.0249 13.4855 17.4699 13.0975 17.5439 12.5825L18.4939 6.02349C18.5159 5.86749 18.4769 5.71149 18.3819 5.58549C18.2879 5.45849 18.1499 5.37649 17.9939 5.35449C17.7849 5.36249 9.11195 5.35049 3.93795 5.34749ZM5.58495 14.9855C4.26795 14.9855 3.15295 13.9575 3.04595 12.6425L2.12995 1.74849L0.622945 1.48849C0.213945 1.41649 -0.0590549 1.02949 0.0109451 0.620487C0.082945 0.211487 0.477945 -0.054513 0.877945 0.00948704L2.95795 0.369487C3.29295 0.428487 3.54795 0.706487 3.57695 1.04649L3.81194 3.84749C18.0879 3.85349 18.1339 3.86049 18.2029 3.86849C18.7599 3.94949 19.2499 4.24049 19.5839 4.68849C19.9179 5.13549 20.0579 5.68649 19.9779 6.23849L19.0289 12.7965C18.8499 14.0445 17.7659 14.9855 16.5059 14.9855H16.5009H5.59295H5.58495Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M14.8979 9.04382H12.1259C11.7109 9.04382 11.3759 8.70782 11.3759 8.29382C11.3759 7.87982 11.7109 7.54382 12.1259 7.54382H14.8979C15.3119 7.54382 15.6479 7.87982 15.6479 8.29382C15.6479 8.70782 15.3119 9.04382 14.8979 9.04382Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M5.15474 17.702C5.45574 17.702 5.69874 17.945 5.69874 18.246C5.69874 18.547 5.45574 18.791 5.15474 18.791C4.85274 18.791 4.60974 18.547 4.60974 18.246C4.60974 17.945 4.85274 17.702 5.15474 17.702Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M5.15374 18.0409C5.04074 18.0409 4.94874 18.1329 4.94874 18.2459C4.94874 18.4729 5.35974 18.4729 5.35974 18.2459C5.35974 18.1329 5.26674 18.0409 5.15374 18.0409ZM5.15374 19.5409C4.43974 19.5409 3.85974 18.9599 3.85974 18.2459C3.85974 17.5319 4.43974 16.9519 5.15374 16.9519C5.86774 16.9519 6.44874 17.5319 6.44874 18.2459C6.44874 18.9599 5.86774 19.5409 5.15374 19.5409Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M16.435 17.702C16.736 17.702 16.98 17.945 16.98 18.246C16.98 18.547 16.736 18.791 16.435 18.791C16.133 18.791 15.89 18.547 15.89 18.246C15.89 17.945 16.133 17.702 16.435 17.702Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M16.434 18.0409C16.322 18.0409 16.23 18.1329 16.23 18.2459C16.231 18.4749 16.641 18.4729 16.64 18.2459C16.64 18.1329 16.547 18.0409 16.434 18.0409ZM16.434 19.5409C15.72 19.5409 15.14 18.9599 15.14 18.2459C15.14 17.5319 15.72 16.9519 16.434 16.9519C17.149 16.9519 17.73 17.5319 17.73 18.2459C17.73 18.9599 17.149 19.5409 16.434 19.5409Z" fill="currentColor"/>
            </svg>
                            Select Options
                    </button>
                                            </div>
                                        </div>

                                        <div className="tp-product-content">


                                            <h3 className="text-truncate tp-product-title">
                                                <a href="/products/zennova-ashwagandha-premium-stress-immune-support" title="Zennova Ashwagandha – Premium Stress &amp; Immune Support">
                Zennova Ashwagandha – Premium Stress &amp; Immune Support
            </a>
                                            </h3>

                                            <div className="">
                                                <div className="tp-product-rating d-flex align-items-center">
                                                    <div className="tp-product-rating-icon">
                                                        <div className="bb-product-rating" style={{"--bb-rating-size":"70px"} as React.CSSProperties}>
                                                            <span style={{"width":"0% !important"} as React.CSSProperties}></span>
                                                        </div>
                                                    </div>
                                                    <div className="tp-product-rating-text">
                                                        <a href="/products/zennova-ashwagandha-premium-stress-immune-support#product-review" data-bb-toggle="scroll-to-review">
                    <span className="d-none d-sm-block">(0 reviews)</span>
                    <span className="d-block d-sm-none">(0)</span>
                </a>
                                                    </div>
                                                </div>

                                                <div className="tp-product-price-wrapper">
                                                    <span className="tp-product-price new-price" data-bb-value="product-price">₹600</span>

                                                    <span className="">
    <small>
        <del
            className="tp-product-price old-price"
            data-bb-value="product-original-price"
        >₹800</del>
    </small>
</span>
                                                </div>
                                            </div>



                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <section className="tp-banner-area pt-30 pb-30">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="tp-banner-item tp-banner-height p-relative mb-30 z-index-1 fix">
                            <div className="tp-banner-thumb include-bg transition-3">
                                <a href="/products/zennova-shilajit-pure-himalayan-power-advanced-gold-grade-formula">
                                    <picture>
                                        <source srcSet="/storage/untitled-design-3.webp" media="(min-width: 1200px)" />
                                        <source srcSet="/storage/untitled-design-3.webp" media="(min-width: 768px)" />
                                        <source srcSet="/storage/untitled-design-3.webp" media="(max-width: 767px)" />
                                        <img src="/storage/untitled-design-3.webp" style={{"width":"100%"} as React.CSSProperties} loading="lazy" alt="Ads 1" />
                                    </picture>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="tp-banner-item tp-banner-height p-relative mb-30 z-index-1 fix">
                            <div className="tp-banner-thumb include-bg transition-3">
                                <a href="/products/zennova-lungs-detox">
                                    <picture>
                                        <source srcSet="/storage/chatgpt-image-may-20-2026-12-37-31-am.webp" media="(min-width: 1200px)" />
                                        <source srcSet="/storage/chatgpt-image-may-20-2026-12-37-31-am.webp" media="(min-width: 768px)" />
                                        <source srcSet="/storage/chatgpt-image-may-20-2026-12-37-31-am.webp" media="(max-width: 767px)" />
                                        <img src="/storage/chatgpt-image-may-20-2026-12-37-31-am.webp" style={{"width":"100%"} as React.CSSProperties} loading="lazy" alt="Ads 2" />
                                    </picture>
                                </a>
                            </div>
                            <div className="tp-banner-content">
                                <div className="tp-banner-btn">
                                    <a href="/products/zennova-lungs-detox" className="tp-link-btn">
                                        Shop Now
                                        <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.9998 6.19656L1 6.19656" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M8.75674 0.975394L14 6.19613L8.75674 11.4177" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="tp-deal-area pt-50 pb-50" style={{ backgroundColor: '#F3F3F3' }}>
            <div className="container">
                <div className="row align-items-center mb-40">
                    <div className="col-xl-6 col-lg-5 col-md-6">
                        <div className="tp-section-title-wrapper d-flex align-items-center">
                            <h3 className="section-title tp-section-title mb-0" style={{ marginRight: '30px' }}>
                                Deal of The Day
                            </h3>
                            <div className="tp-product-countdown-inner">
                                <ul className="d-flex align-items-center mb-0 pl-0" style={{ listStyle: 'none' }}>
                                    <li style={{ marginRight: '5px', backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '5px', width: '50px', height: '50px', textAlign: 'center', paddingTop: '8px' }}>
                                        <span style={{ fontSize: '18px', fontWeight: 'bold', display: 'block', color: '#000', lineHeight: 1 }}>{timeLeft.days}</span>
                                        <span style={{ fontSize: '9px', textTransform: 'uppercase', color: '#666' }}>Days</span>
                                    </li>
                                    <li style={{ marginRight: '5px', backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '5px', width: '50px', height: '50px', textAlign: 'center', paddingTop: '8px' }}>
                                        <span style={{ fontSize: '18px', fontWeight: 'bold', display: 'block', color: '#000', lineHeight: 1 }}>{timeLeft.hours}</span>
                                        <span style={{ fontSize: '9px', textTransform: 'uppercase', color: '#666' }}>Hrs</span>
                                    </li>
                                    <li style={{ marginRight: '5px', backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '5px', width: '50px', height: '50px', textAlign: 'center', paddingTop: '8px' }}>
                                        <span style={{ fontSize: '18px', fontWeight: 'bold', display: 'block', color: '#000', lineHeight: 1 }}>{timeLeft.minutes}</span>
                                        <span style={{ fontSize: '9px', textTransform: 'uppercase', color: '#666' }}>Mins</span>
                                    </li>
                                    <li style={{ backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '5px', width: '50px', height: '50px', textAlign: 'center', paddingTop: '8px' }}>
                                        <span style={{ fontSize: '18px', fontWeight: 'bold', display: 'block', color: '#000', lineHeight: 1 }}>{timeLeft.seconds}</span>
                                        <span style={{ fontSize: '9px', textTransform: 'uppercase', color: '#666' }}>Secs</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7 col-md-6 text-md-end mt-3 mt-md-0">
                        <a href="/products" className="tp-btn text-white bg-warning hover-dark-btn py-2 px-4 rounded d-inline-block" style={{ backgroundColor: 'var(--primary-color) !important' }}>
                            View All Deals
                        </a>
                    </div>
                </div>
                
                <div className="row">
                    {PRODUCTS.map(product => (
                        <div className="col-xl-3 col-lg-4 col-sm-6 mb-30" key={product.id}>
                            <div className="tp-product-item transition-3 p-relative fix m-img bg-white rounded shadow-sm" style={{ border: "1px solid #eee", overflow: "hidden" }}>
                                <div className="tp-product-thumb p-relative fix">
                                    <a href={`/products/${product.slug}`}>
                                        <img src={product.image} alt={product.name} className="w-100" />
                                    </a>
                                    <div className="tp-product-badge">
                                        <span style={{"backgroundColor":"var(--primary-color)"} as React.CSSProperties}>Sale</span>
                                    </div>
                                    <div className="tp-product-action">
                                        <div className="d-flex flex-column tp-product-action-item">
                                            <button type="button" className="tp-product-quick-view-btn tp-product-action-btn" title="Quick View" data-bs-toggle="modal" data-bs-target="#product-quick-view-modal" data-url={`/ajax/quick-view/${product.id}`}>
                                                <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.99938 5.64111C8.66938 5.64111 7.58838 6.72311 7.58838 8.05311C7.58838 9.38211 8.66938 10.4631 9.99938 10.4631C11.3294 10.4631 12.4114 9.38211 12.4114 8.05311C12.4114 6.72311 11.3294 5.64111 9.99938 5.64111ZM9.99938 11.9631C7.84238 11.9631 6.08838 10.2091 6.08838 8.05311C6.08838 5.89611 7.84238 4.14111 9.99938 4.14111C12.1564 4.14111 13.9114 5.89611 13.9114 8.05311C13.9114 10.2091 12.1564 11.9631 9.99938 11.9631Z" fill="currentColor"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="tp-product-add-cart-btn-large-wrapper">
                                        <button type="button" className="tp-product-add-cart-btn-large" data-product-id={product.id} data-product-name={product.name}>
                                            Select Options
                                        </button>
                                    </div>
                                </div>
                                <div className="tp-product-content p-3">
                                    <h3 className="text-truncate tp-product-title mb-2">
                                        <a href={`/products/${product.slug}`} title={product.name} style={{ color: "#000", fontWeight: 500 }}>
                                            {product.name}
                                        </a>
                                    </h3>
                                    <div className="tp-product-price-wrapper">
                                        <span className="tp-product-price new-price" style={{ color: "var(--primary-color)", fontWeight: "bold" }}>₹{product.price}</span>
                                        <span className="tp-product-price old-price" style={{ marginLeft: "10px", color: "#999" }}><del>₹{product.oldPrice}</del></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <div className="tp-product-banner-area pt-30 pb-30">
            <div className="container">
                <picture>
                    <source srcSet="/storage/whatsapp-image-2026-05-21-at-44038-pm.webp" media="(min-width: 1200px)" />
                    <source srcSet="/storage/whatsapp-image-2026-05-21-at-44038-pm.webp" media="(min-width: 768px)" />
                    <source srcSet="/storage/whatsapp-image-2026-05-21-at-44038-pm.webp" media="(max-width: 767px)" />

                    <img src="/storage/whatsapp-image-2026-05-21-at-44038-pm.webp" style={{"width":"100%"} as React.CSSProperties} loading="lazy"
                        alt="Certification" />
                </picture>

            </div>
        </div>

        <section className="tp-blog-area pt-50 pb-50">
            <div className="container">
                <div className="row align-items-center mb-40">
                    <div className="col-xl-4 col-md-6">
                        <div className="tp-section-title-wrapper ">
                            <h3 className="section-title tp-section-title">
                                <span>Latest</span> News &amp; Offers
                            </h3>
                        </div>

                    </div>
                    <div className="col-xl-8 col-md-6">
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="tp-blog-main-slider">
                            <div className="tp-blog-main-slider-active swiper-container">
                                <div className="swiper-wrapper">
                                    <div className="tp-blog-item mb-30 swiper-slide">
                                        <div className="tp-blog-thumb p-relative fix">
                                            <a href="/blog/the-real-stories-of-crushing-fatigue-with-zennova-pure-himalayan-shilajit">
                                            <img src="/storage/loader.png" data-bb-lazy="true" loading="lazy" data-src="/storage/whatsapp-image-2026-05-21-at-43405-pm-1-420x270.webp" alt="The Real Stories of Crushing Fatigue with Zennova Pure Himalayan Shilajit" />
                                        </a>
                                            <div className="tp-blog-meta tp-blog-meta-date">
                                                <span>May 21, 2026</span>
                                            </div>
                                        </div>
                                        <div className="tp-blog-content">
                                            <h3 className="tp-blog-title text-truncate">
                                                <a href="/blog/the-real-stories-of-crushing-fatigue-with-zennova-pure-himalayan-shilajit" title="The Real Stories of Crushing Fatigue with Zennova Pure Himalayan Shilajit">
                                                The Real Stories of Crushing Fatigue with Zennova Pure Himalayan Shilajit
                                            </a>
                                            </h3>


                                            <p>We have all been there. It is 3:00 PM, you are staring at your laptop screen, and your brain feels...</p>
                                        </div>
                                    </div>
                                    <div className="tp-blog-item mb-30 swiper-slide">
                                        <div className="tp-blog-thumb p-relative fix">
                                            <a href="/blog/burn-fat-smarter-feel-stronger-every-day">
                                            <img src="/storage/loader.png" data-bb-lazy="true" loading="lazy" data-src="/storage/whatsapp-image-2026-05-21-at-43458-pm-1-420x270.webp" alt="Burn Fat Smarter, Feel Stronger Every Day" />
                                        </a>
                                            <div className="tp-blog-meta tp-blog-meta-date">
                                                <span>May 21, 2026</span>
                                            </div>
                                        </div>
                                        <div className="tp-blog-content">
                                            <h3 className="tp-blog-title text-truncate">
                                                <a href="/blog/burn-fat-smarter-feel-stronger-every-day" title="Burn Fat Smarter, Feel Stronger Every Day">
                                                Burn Fat Smarter, Feel Stronger Every Day
                                            </a>
                                            </h3>


                                            <p>Are you struggling with stubborn belly fat, low energy levels, or uncontrollable cravings? You’re not alone. Thousands of people work...</p>
                                        </div>
                                    </div>
                                    <div className="tp-blog-item mb-30 swiper-slide">
                                        <div className="tp-blog-thumb p-relative fix">
                                            <a href="/blog/the-sleep-that-actually-makes-you-glow-why-zennova-sleepglow-is-the-transformation-youve-been-praying-for">
                                            <img src="/storage/loader.png" data-bb-lazy="true" loading="lazy" data-src="/storage/whatsapp-image-2026-05-21-at-44059-pm-420x270.webp" alt="Why Zennova SLEEPGlow Is the Transformation You&#039;ve Been Praying For" />
                                        </a>
                                            <div className="tp-blog-meta tp-blog-meta-date">
                                                <span>May 21, 2026</span>
                                            </div>
                                        </div>
                                        <div className="tp-blog-content">
                                            <h3 className="tp-blog-title text-truncate">
                                                <a href="/blog/the-sleep-that-actually-makes-you-glow-why-zennova-sleepglow-is-the-transformation-youve-been-praying-for" title="Why Zennova SLEEPGlow Is the Transformation You&#039;ve Been Praying For">
                                                Why Zennova SLEEPGlow Is the Transformation You've Been Praying For
                                            </a>
                                            </h3>


                                            <p>What if I told you there’s a missing piece to your wellness puzzle that doesn&#039;t involve a prescription pad? What...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="tp-testimonial-area pt-30 pb-30">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="tp-section-title-wrapper-3 mb-45 text-center">
                            <h3 className="section-title tp-section-title-3">Customer Reviews</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="tp-testimonial-slider-3">
                            <div className="tp-testimoinal-slider-active-3 swiper-container">
                                <div className="swiper-wrapper">
                                    <div className="tp-testimonial-item-3 swiper-slide grey-bg-7 p-relative z-index-1">
                                        <div className="tp-testimonial-shape-3">
                                            <img className="tp-testimonial-shape-3-quote" src="/themes/shofy/images/testimonial-quote.png" alt="Meraz" />
                                        </div>
                                        <div className="tp-testimonial-rating tp-testimonial-rating-3  tp-testimonial-rating-filled ">
                                            <span><svg className="icon  svg-icon-ti-ti-star"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  >
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
</svg></span>
                                            <span><svg className="icon  svg-icon-ti-ti-star"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  >
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
</svg></span>
                                            <span><svg className="icon  svg-icon-ti-ti-star"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  >
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
</svg></span>
                                            <span><svg className="icon  svg-icon-ti-ti-star"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  >
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
</svg></span>
                                            <span><svg className="icon  svg-icon-ti-ti-star"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  >
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
</svg></span>
                                        </div>
                                        <div className="tp-testimonial-content-3">
                                            <p>"Main pichle 3 weeks se <b><strong>Zen Nova Green Fuel</strong></b> aur <b><strong>Shilajit</strong></b> use kar raha hoon. Honestly, jo afternoon fatigue hoti thi system pe baithte-baithte, wo ab bilkul
                                                    chali gayi hai. Clean energy milti hai pure din bina kisi crash ke. Highly recommended for working professionals who hit the gym!"</p>
                                        </div>
                                        <div className="tp-testimonial-user-wrapper-3 d-flex">
                                            <div className="tp-testimonial-user-3 d-flex align-items-center">
                                                <div className="tp-testimonial-avater-3 mr-10">
                                                    <img src="/storage/loader.png" data-bb-lazy="true" loading="lazy" data-src="/vendor/core/core/base/images/placeholder.png" alt="Meraz" />
                                                </div>
                                                <div className="tp-testimonial-user-3-info tp-testimonial-user-translate">
                                                    <h3 className="tp-testimonial-user-3-title">Meraz</h3>
                                                    <span className="tp-testimonial-3-designation">Software Engineer &amp; Fitness Enthusiast</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tp-testimonial-item-3 swiper-slide grey-bg-7 p-relative z-index-1">
                                        <div className="tp-testimonial-shape-3">
                                            <img className="tp-testimonial-shape-3-quote" src="/themes/shofy/images/testimonial-quote.png" alt="Priya Patel" />
                                        </div>
                                        <div className="tp-testimonial-rating tp-testimonial-rating-3  tp-testimonial-rating-filled ">
                                            <span><svg className="icon  svg-icon-ti-ti-star"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  >
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
</svg></span>
                                            <span><svg className="icon  svg-icon-ti-ti-star"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  >
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
</svg></span>
                                            <span><svg className="icon  svg-icon-ti-ti-star"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  >
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
</svg></span>
                                            <span><svg className="icon  svg-icon-ti-ti-star"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  >
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
</svg></span>
                                            <span><svg className="icon  svg-icon-ti-ti-star"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  >
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
</svg></span>
                                        </div>
                                        <div className="tp-testimonial-content-3">
                                            <p>"I was skeptical about <b><strong>Zennova Apple Cider Vinegar</strong></b> because of the harsh taste of other brands, but diluted in warm water, this one is actually smooth. Morning me empty stomach lene
                                                    se bloating bahut kam hui hai and it really promotes healthy skin, texture me improvement dikh raha hai. Plus, it has the Mother of Vinegar which is awesome!"</p>
                                        </div>
                                        <div className="tp-testimonial-user-wrapper-3 d-flex">
                                            <div className="tp-testimonial-user-3 d-flex align-items-center">
                                                <div className="tp-testimonial-avater-3 mr-10">
                                                    <img src="/storage/loader.png" data-bb-lazy="true" loading="lazy" data-src="/vendor/core/core/base/images/placeholder.png" alt="Priya Patel" />
                                                </div>
                                                <div className="tp-testimonial-user-3-info tp-testimonial-user-translate">
                                                    <h3 className="tp-testimonial-user-3-title">Priya Patel</h3>
                                                    <span className="tp-testimonial-3-designation">Student</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tp-testimonial-item-3 swiper-slide grey-bg-7 p-relative z-index-1">
                                        <div className="tp-testimonial-shape-3">
                                            <img className="tp-testimonial-shape-3-quote" src="/themes/shofy/images/testimonial-quote.png" alt="Neha Kapoor" />
                                        </div>
                                        <div className="tp-testimonial-rating tp-testimonial-rating-3  tp-testimonial-rating-filled ">
                                            <span><svg className="icon  svg-icon-ti-ti-star"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  >
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
</svg></span>
                                            <span><svg className="icon  svg-icon-ti-ti-star"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  >
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
</svg></span>
                                            <span><svg className="icon  svg-icon-ti-ti-star"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  >
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
</svg></span>
                                            <span><svg className="icon  svg-icon-ti-ti-star"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  >
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
</svg></span>
                                            <span><svg className="icon  svg-icon-ti-ti-star"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  >
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
</svg></span>
                                        </div>
                                        <div className="tp-testimonial-content-3">
                                            <p>"Work stress ki wajah se racing thoughts hote the aur neend nahi aati thi easily. But <b><strong>Zennova SLEEPGlow</strong></b> changed the game. 1 tablet before bed and I fall asleep so fast. Best part?
                                                    Agli subah koi groggy feeling ya sir dard nahi hota, fresh feeling ke saath wake up refresh hotey hain!"</p>
                                        </div>
                                        <div className="tp-testimonial-user-wrapper-3 d-flex">
                                            <div className="tp-testimonial-user-3 d-flex align-items-center">
                                                <div className="tp-testimonial-avater-3 mr-10">
                                                    <img src="/storage/loader.png" data-bb-lazy="true" loading="lazy" data-src="/vendor/core/core/base/images/placeholder.png" alt="Neha Kapoor" />
                                                </div>
                                                <div className="tp-testimonial-user-3-info tp-testimonial-user-translate">
                                                    <h3 className="tp-testimonial-user-3-title">Neha Kapoor</h3>
                                                    <span className="tp-testimonial-3-designation">Digital Marketing Lead</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tp-testimonial-item-3 swiper-slide grey-bg-7 p-relative z-index-1">
                                        <div className="tp-testimonial-shape-3">
                                            <img className="tp-testimonial-shape-3-quote" src="/themes/shofy/images/testimonial-quote.png" alt="Dr. Rohan Joshi" />
                                        </div>
                                        <div className="tp-testimonial-rating tp-testimonial-rating-3  tp-testimonial-rating-filled ">
                                            <span><svg className="icon  svg-icon-ti-ti-star"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  >
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
</svg></span>
                                            <span><svg className="icon  svg-icon-ti-ti-star"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  >
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
</svg></span>
                                            <span><svg className="icon  svg-icon-ti-ti-star"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  >
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
</svg></span>
                                            <span><svg className="icon  svg-icon-ti-ti-star"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  >
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
</svg></span>
                                            <span><svg className="icon  svg-icon-ti-ti-star"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  >
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
</svg></span>
                                        </div>
                                        <div className="tp-testimonial-content-3">
                                            <p>"Hamari modern busy diet me micro-nutrients miss ho jaate hain. I personally take <b><strong>Zennova Multivitamins</strong></b> daily. B-Complex, Vitamin D3, aur Zinc ka proper balance hai. Energy levels
                                                    sustained rehte hain and immune system robust feel hota hai. Great foundational supplement."</p>
                                        </div>
                                        <div className="tp-testimonial-user-wrapper-3 d-flex">
                                            <div className="tp-testimonial-user-3 d-flex align-items-center">
                                                <div className="tp-testimonial-avater-3 mr-10">
                                                    <img src="/storage/loader.png" data-bb-lazy="true" loading="lazy" data-src="/vendor/core/core/base/images/placeholder.png" alt="Dr. Rohan Joshi" />
                                                </div>
                                                <div className="tp-testimonial-user-3-info tp-testimonial-user-translate">
                                                    <h3 className="tp-testimonial-user-3-title">Dr. Rohan Joshi</h3>
                                                    <span className="tp-testimonial-3-designation">Consultant Physiotherapist</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tp-testimonial-item-3 swiper-slide grey-bg-7 p-relative z-index-1">
                                        <div className="tp-testimonial-shape-3">
                                            <img className="tp-testimonial-shape-3-quote" src="/themes/shofy/images/testimonial-quote.png" alt="Rahul Verma" />
                                        </div>
                                        <div className="tp-testimonial-rating tp-testimonial-rating-3  tp-testimonial-rating-filled ">
                                            <span><svg className="icon  svg-icon-ti-ti-star"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  >
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
</svg></span>
                                            <span><svg className="icon  svg-icon-ti-ti-star"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  >
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
</svg></span>
                                            <span><svg className="icon  svg-icon-ti-ti-star"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  >
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
</svg></span>
                                            <span><svg className="icon  svg-icon-ti-ti-star"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  >
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
</svg></span>
                                            <span><svg className="icon  svg-icon-ti-ti-star"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  >
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
</svg></span>
                                        </div>
                                        <div className="tp-testimonial-content-3">
                                            <p>"Work stress aur target pressure ki wajah se stamina aur drive low chal rahi thi. <b><strong>Zennova UPLIFT X</strong></b> start kiya and within 2 weeks performance aur endurance me bohot difference aaya
                                                    hai. It improves blood flow and naturally boosts testosterone levels. Total value for money product!"</p>
                                        </div>
                                        <div className="tp-testimonial-user-wrapper-3 d-flex">
                                            <div className="tp-testimonial-user-3 d-flex align-items-center">
                                                <div className="tp-testimonial-avater-3 mr-10">
                                                    <img src="/storage/loader.png" data-bb-lazy="true" loading="lazy" data-src="/vendor/core/core/base/images/placeholder.png" alt="Rahul Verma" />
                                                </div>
                                                <div className="tp-testimonial-user-3-info tp-testimonial-user-translate">
                                                    <h3 className="tp-testimonial-user-3-title">Rahul Verma</h3>
                                                    <span className="tp-testimonial-3-designation">Sales Manager</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tp-testimonial-item-3 swiper-slide grey-bg-7 p-relative z-index-1">
                                        <div className="tp-testimonial-shape-3">
                                            <img className="tp-testimonial-shape-3-quote" src="/themes/shofy/images/testimonial-quote.png" alt="Marcus Thorne" />
                                        </div>
                                        <div className="tp-testimonial-rating tp-testimonial-rating-3  tp-testimonial-rating-filled ">
                                            <span><svg className="icon  svg-icon-ti-ti-star"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  >
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
</svg></span>
                                            <span><svg className="icon  svg-icon-ti-ti-star"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  >
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
</svg></span>
                                            <span><svg className="icon  svg-icon-ti-ti-star"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  >
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
</svg></span>
                                            <span><svg className="icon  svg-icon-ti-ti-star"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  >
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
</svg></span>
                                            <span><svg className="icon  svg-icon-ti-ti-star"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  >
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
</svg></span>
                                        </div>
                                        <div className="tp-testimonial-content-3">
                                            <p>"High-impact training used to leave my knees and lower back feeling incredibly tight for days. <b><strong>Zennova Pain Relief</strong></b> has drastically shortened my recovery time. The natural anti-inflammatory
                                                    benefits are real, and my joint mobility feels fluid again. Perfect supplement for active lifestyles."</p>
                                        </div>
                                        <div className="tp-testimonial-user-wrapper-3 d-flex">
                                            <div className="tp-testimonial-user-3 d-flex align-items-center">
                                                <div className="tp-testimonial-avater-3 mr-10">
                                                    <img src="/storage/loader.png" data-bb-lazy="true" loading="lazy" data-src="/vendor/core/core/base/images/placeholder.png" alt="Marcus Thorne" />
                                                </div>
                                                <div className="tp-testimonial-user-3-info tp-testimonial-user-translate">
                                                    <h3 className="tp-testimonial-user-3-title">Marcus Thorne</h3>
                                                    <span className="tp-testimonial-3-designation">Financial Analyst</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tp-testimoinal-slider-dot-3 tp-swiper-dot-border text-center mt-50"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section container box-coming-soon pt-100 pb-100 overflow-hidden">
            <div className="row align-items-center">
                <div className="col-lg-5 mb-30">
                    <div className="tp-product-countdown" data-countdown data-date="2026-06-06 18:45:00">
                        <div className="tp-product-countdown-inner">
                            <ul>
                                <li><span data-days>0</span> Days</li>
                                <li><span data-hours>0</span> Hrs</li>
                                <li><span data-minutes>0</span> Mins</li>
                                <li><span data-seconds>0</span> Secs</li>
                            </ul>
                        </div>
                    </div>

                    <h3 className="color-brand-2 wow animate__animated animate__fadeIn">
                        Coming Soon
                    </h3>

                    <form method="POST" action="/newsletter/subscribe" acceptCharset="UTF-8" id="botble-newsletter-forms-fronts-newsletter-form" className="subscribe-form dirty-check"><input name="_token" type="hidden" value="rdL0i0fdEFahvYMTSodxTJYCXBStzgJOvDfvKzBo" />






                        <div className="input-group mb-3">







                            <input className="form-control" placeholder="Enter Your Email" id="newsletter-email" required={true} name="email" type="email" />









                            <button className="btn btn-primary" type="submit">Subscribe</button>



                        </div>







                        <div className="newsletter-message newsletter-success-message" style={{"display":"none"} as React.CSSProperties}></div>
                        <div className="newsletter-message newsletter-error-message" style={{"display":"none"} as React.CSSProperties}></div>











                    </form>



                    <div className="mt-30 footer-info">
                        <ul className="list-wrap">

                            <li>
                                <p>
                                    <svg className="icon me-1 svg-icon-ti-ti-phone" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
</svg> <a href="tel:254464646" dir="ltr">254464646</a>
                                </p>
                            </li>

                        </ul>
                    </div>

                    <div className="tp-footer-social gap-2">

                        <a href="https://www.facebook.com" title="Facebook" target="_blank"><svg className="icon  svg-icon-ti-ti-brand-facebook" 
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  >
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
</svg></a>

                        <a href="https://x.com" title="X (Twitter)" target="_blank"><svg className="icon  svg-icon-ti-ti-brand-x" 
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  >
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
</svg></a>

                        <a href="https://www.youtube.com" title="YouTube" target="_blank"><svg className="icon  svg-icon-ti-ti-brand-youtube" 
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  >
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
  <path d="M10 9l5 3l-5 3z" />
</svg></a>

                        <a href="https://www.linkedin.com" title="Instagram" target="_blank"><svg className="icon  svg-icon-ti-ti-brand-linkedin" 
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  >
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M8 11v5" />
  <path d="M8 8v.01" />
  <path d="M12 16v-5" />
  <path d="M16 16v-3a2 2 0 1 0 -4 0" />
  <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
</svg></a>
                    </div>

                </div>
                <div className="col-lg-7 mb-30">
                    <img src="/storage/loader.png" data-bb-lazy="true" className="coming-soon-image" loading="lazy" data-src="/storage/whatsapp-image-2026-05-30-at-13550-pm-removebg-preview.webp"
                        alt="Coming Soon" />
                </div>
            </div>
        </section>
        <p> </p>
        <figure className="image"></figure>

    </main>

    </>
  );
}
