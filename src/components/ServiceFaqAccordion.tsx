"use client";

import { useState } from "react";

interface ServiceFaqAccordionProps {
  faqs: { q: string; a: string }[];
  serviceTitle: string;
}

export default function ServiceFaqAccordion({ faqs, serviceTitle }: ServiceFaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="relative w-full border-t border-outline-variant/20 px-margin-mobile py-20 md:px-margin-tablet md:py-24 lg:px-margin-desktop" id="faqs">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Frequently Asked Questions</span>
          <h2 className="mt-2 font-headline-lg text-3xl font-extrabold text-white sm:text-4xl">
            {serviceTitle} FAQs
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-on-surface-variant sm:text-base">
            Detailed answers on architecture, production timelines, code governance, and engagement models.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`overflow-hidden rounded-2xl border backdrop-blur-xl transition-all duration-300 ${
                  isOpen
                    ? "border-primary/50 bg-surface-container-low/95 shadow-[0_8px_30px_rgba(212,175,55,0.12)]"
                    : "border-outline-variant/25 bg-surface-container-lowest/70 hover:border-outline-variant/50"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors sm:p-6"
                  aria-expanded={isOpen}
                >
                  <span className="font-title-lg text-base font-bold text-white sm:text-lg">
                    {faq.q}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
                      isOpen
                        ? "rotate-180 bg-primary text-on-primary"
                        : "bg-surface-container-highest text-on-surface-variant"
                    }`}
                  >
                    <span className="material-symbols-outlined text-base">expand_more</span>
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-outline-variant/20 px-5 pb-6 pt-4 text-sm leading-relaxed text-on-surface-variant sm:px-6 sm:text-base">
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
