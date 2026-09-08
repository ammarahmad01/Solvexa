"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { testimonialsData } from "../data/testimonials";
import { animate } from "animejs";

const ROTATION_INTERVAL = 2000; // Reduced time: moves every 2 seconds continuously

export default function ClientLoveSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const activeTestimonial = testimonialsData[activeIndex];

  const triggerAnimation = useCallback(() => {
    if (imageRef.current) {
      animate(imageRef.current, {
        opacity: [0.6, 1],
        scale: [0.97, 1],
        duration: 300,
        ease: "outQuad"
      });
    }
    if (quoteRef.current) {
      animate(quoteRef.current, {
        opacity: [0.5, 1],
        translateY: [6, 0],
        duration: 300,
        ease: "outQuad"
      });
    }
  }, []);

  const handleSelect = (idx: number) => {
    if (idx === activeIndex) return;
    setActiveIndex(idx);
    triggerAnimation();
  };

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    triggerAnimation();
  }, [triggerAnimation]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
    triggerAnimation();
  }, [triggerAnimation]);

  // Continuous auto-rotation every 3 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, ROTATION_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  return (
    <section
      className="relative w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-16 sm:py-20 overflow-hidden bg-surface-container-lowest/80 border-t border-outline-variant/20"
      id="testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-8 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Subtitle & Direct Action Button */}
          <div className="lg:col-span-4 flex flex-col justify-center text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface leading-[1.2] tracking-tight">
              Why{" "}
              <span className="bg-gradient-to-r from-primary-fixed via-primary to-primary-container bg-clip-text text-transparent">
                our clients
              </span>
              <br />
              love us?
            </h2>

            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed mt-5 max-w-md">
              Our clients love us because we prioritize effective communication and are committed to delivering high-quality software solutions that meet the highest standards of excellence.
            </p>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-on-primary font-bold text-sm tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:shadow-[0_0_28px_rgba(212,175,55,0.35)] active:scale-95"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Column: High-End Dual-Pane Showcase Card */}
          <div className="lg:col-span-8">
            <div className="relative rounded-3xl bg-surface-container-low/90 backdrop-blur-2xl border border-outline-variant/30 p-6 sm:p-8 lg:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85),0_0_30px_rgba(212,175,55,0.08)] overflow-hidden">
              
              {/* Main Content Layout: Side-by-Side Image and Message */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
                
                {/* 1. Client Image Pane - 100% Unobstructed, Studio Framed */}
                <div className="md:col-span-5 flex justify-center">
                  <div
                    ref={imageRef}
                    className="relative w-full max-w-[240px] sm:max-w-[260px] h-[300px] sm:h-[350px] rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/30 bg-surface-container-lowest shrink-0 ring-1 ring-white/10 group"
                  >
                    <img
                      key={`img-${activeTestimonial.id}`}
                      src={activeTestimonial.image}
                      alt={activeTestimonial.author}
                      className="w-full h-full object-cover object-top filter contrast-[1.02] group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Clean subtle edge gradient at the base */}
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* 2. Client Message & Info Pane - Clean, Solid & Highly Legible */}
                <div ref={quoteRef} className="md:col-span-7 flex flex-col justify-between h-full text-left">
                  <div>
                    {/* Quotation Mark & Slide Counter */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="material-symbols-outlined text-4xl sm:text-5xl text-primary font-serif select-none opacity-80">
                        format_quote
                      </span>
                      <span className="font-mono text-xs text-primary/70 tracking-widest uppercase font-semibold">
                        0{activeIndex + 1} / 0{testimonialsData.length}
                      </span>
                    </div>

                    {/* Testimonial Quote */}
                    <blockquote className="text-base sm:text-[17px] text-on-surface leading-relaxed italic font-normal text-gray-100 pl-1 border-l-2 border-primary/40">
                      &ldquo;{activeTestimonial.quote}&rdquo;
                    </blockquote>
                  </div>

                  {/* Author Signature & Navigation Controls */}
                  <div className="pt-5 mt-6 border-t border-outline-variant/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-primary font-bold text-lg sm:text-xl tracking-tight">
                        {activeTestimonial.author}
                      </h3>
                      <p className="text-on-surface-variant text-xs sm:text-sm font-medium mt-0.5">
                        {activeTestimonial.role} &bull; <span className="text-gray-300">{activeTestimonial.company}</span>
                      </p>
                    </div>

                    {/* Next / Prev Controls */}
                    <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                      <button
                        onClick={handlePrev}
                        className="w-8 h-8 rounded-full border border-outline-variant/40 hover:border-primary text-on-surface-variant hover:text-primary flex items-center justify-center transition-all cursor-pointer bg-surface-container-lowest/60 active:scale-90"
                        aria-label="Previous testimonial"
                      >
                        <span className="material-symbols-outlined text-base">arrow_back</span>
                      </button>
                      <button
                        onClick={handleNext}
                        className="w-8 h-8 rounded-full border border-outline-variant/40 hover:border-primary text-on-surface-variant hover:text-primary flex items-center justify-center transition-all cursor-pointer bg-surface-container-lowest/60 active:scale-90"
                        aria-label="Next testimonial"
                      >
                        <span className="material-symbols-outlined text-base">arrow_forward</span>
                      </button>
                    </div>
                  </div>

                </div>

              </div>

              {/* Dot Indicators */}
              <div className="flex items-center justify-center gap-2 mt-6 pt-2">
                {testimonialsData.map((client, idx) => (
                  <button
                    key={client.id}
                    onClick={() => handleSelect(idx)}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      activeIndex === idx
                        ? "w-8 h-2 bg-primary shadow-[0_0_10px_rgba(212,175,55,0.75)]"
                        : "w-2 h-2 bg-outline-variant/40 hover:bg-outline-variant/80"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
