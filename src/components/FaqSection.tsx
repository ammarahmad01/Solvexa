"use client";

import { useState } from "react";
import { homeFaqs } from "../data/faqs";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-10 sm:py-14" id="faqs">
      <div className="max-w-4xl mx-auto flex flex-col gap-6 sm:gap-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-2">
            Clear Answers
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface">
            FAQ&apos;s
          </h2>
          <p className="font-body-lg text-base sm:text-lg text-on-surface-variant mt-2 max-w-xl">
            Everything you need to know about partnering with Solvexa, our engagement process, and delivery standards.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-3">
          {homeFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden backdrop-blur-xl ${
                  isOpen
                    ? "bg-surface-container-low/90 border-primary/50 shadow-[0_4px_20px_rgba(212,175,55,0.1)]"
                    : "bg-surface-container-lowest/60 border-outline-variant/30 hover:border-outline-variant/60"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 transition-colors"
                >
                  <span className="font-title-lg text-base sm:text-lg font-bold text-on-surface">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "bg-primary text-on-primary rotate-180" : "bg-surface-container-highest text-on-surface-variant"
                    }`}
                  >
                    <span className="material-symbols-outlined text-base">expand_more</span>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 text-sm sm:text-base text-on-surface-variant leading-relaxed animate-in fade-in duration-200 border-t border-outline-variant/20 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
