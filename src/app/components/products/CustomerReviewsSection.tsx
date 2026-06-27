"use client";

import React from "react";
import { StarIcon } from "./ProductIcons";

export type Testimonial = {
  name: string;
  designation: string;
  review: string;
  avatar?: string;
};

type Props = {
  testimonials: Testimonial[];
};

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="tp-testimonial-item-3 swiper-slide grey-bg-7 p-relative z-index-1 zn-testimonial-card">
      <div className="tp-testimonial-shape-3">
        <span className="tp-testimonial-shape-3-quote zn-testimonial-quote" aria-hidden="true">
          &ldquo;
        </span>
      </div>

      <div className="tp-testimonial-rating tp-testimonial-rating-3 tp-testimonial-rating-filled">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index}>
            <StarIcon />
          </span>
        ))}
      </div>

      <div className="tp-testimonial-content-3">
        <p dangerouslySetInnerHTML={{ __html: testimonial.review }} />
      </div>

      <div className="tp-testimonial-user-wrapper-3 d-flex">
        <div className="tp-testimonial-user-3 d-flex align-items-center">
          <div className="tp-testimonial-avater-3 mr-10">
            <img
              src={
                testimonial.avatar ||
                "/storage/loader.png"
              }
              alt={testimonial.name}
              loading="lazy"
            />
          </div>
          <div className="tp-testimonial-user-3-info tp-testimonial-user-translate">
            <h3 className="tp-testimonial-user-3-title">{testimonial.name}</h3>
            <span className="tp-testimonial-3-designation">
              {testimonial.designation}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CustomerReviewsSection({ testimonials }: Props) {
  return (
    <section className="tp-testimonial-area pt-30 pb-30 zn-testimonial-area">
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
                  {testimonials.map((testimonial) => (
                    <TestimonialCard
                      key={testimonial.name}
                      testimonial={testimonial}
                    />
                  ))}
                </div>
              </div>
              <div className="tp-testimoinal-slider-dot-3 tp-swiper-dot-border text-center mt-50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
