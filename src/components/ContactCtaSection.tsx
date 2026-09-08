"use client";

import { useState } from "react";

export default function ContactCtaSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "Web Development",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section className="relative w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-14 sm:py-20" id="contact-cta">
      <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-br from-surface-container-low via-surface-container to-surface-container-lowest border border-primary/40 p-8 sm:p-12 lg:p-14 shadow-[0_25px_60px_-15px_rgba(12,3,30,0.9),0_0_35px_rgba(212,175,55,0.18)] relative overflow-hidden">
        
        {/* Ambient decorative glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-container/15 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Styled Headline, Body & Contact Points (No Badges) */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface leading-tight tracking-tight">
              Ready to Discuss Your Project With Us?{" "}
              <span className="bg-gradient-to-r from-primary-fixed via-primary to-primary-container bg-clip-text text-transparent">
                Get in Touch Today to Get Started.
              </span>
            </h2>

            <p className="font-body-lg text-base sm:text-lg text-on-surface-variant mt-4 leading-relaxed max-w-xl">
              Whether you are looking to build a high-performance web platform, launch an iOS/Android app, or hire a dedicated engineering pod — our team responds within 24 hours.
            </p>

            {/* Direct Contact Micro-Cards */}
            <div className="mt-8 space-y-3 w-full max-w-lg">
              <a
                href="mailto:info.solvexa@gmail.com"
                className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-surface-container-highest/40 border border-outline-variant/30 hover:border-primary/50 transition-all text-sm text-on-surface group shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-xl">mail</span>
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-on-surface-variant font-medium">Email our direct desk</p>
                  <p className="font-bold text-primary truncate">info.solvexa@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+923288521417"
                className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-surface-container-highest/40 border border-outline-variant/30 hover:border-primary/50 transition-all text-sm text-on-surface group shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-xl">call</span>
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-on-surface-variant font-medium">Direct phone &amp; WhatsApp</p>
                  <p className="font-bold text-on-surface">+92 328 8521417</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Perfectly Proportioned & Heighted Form */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {submitted ? (
              <div className="p-8 sm:p-12 rounded-3xl bg-surface-container-low/95 backdrop-blur-2xl border border-primary/50 text-center flex flex-col items-center justify-center shadow-2xl animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-4 shadow-inner">
                  <span className="material-symbols-outlined text-3xl">check_circle</span>
                </div>
                <h3 className="text-2xl font-bold text-on-surface">Message Received!</h3>
                <p className="text-sm text-on-surface-variant mt-2 max-w-sm leading-relaxed">
                  Thank you for reaching out to Solvexa. Our lead architect will review your project brief and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 rounded-full text-xs font-bold text-primary border border-primary/40 hover:bg-primary/10 transition-all active:scale-95 cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-6 sm:p-7 rounded-3xl bg-surface-container-low/90 backdrop-blur-2xl border border-outline-variant/30 shadow-2xl flex flex-col gap-3.5"
              >
                {/* Full Name & Work Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-on-surface-variant mb-1">
                      Full Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-highest/60 border border-outline-variant/40 focus:border-primary focus:outline-none text-sm text-on-surface placeholder:text-on-surface-variant/40 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-on-surface-variant mb-1">
                      Work Email <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-highest/60 border border-outline-variant/40 focus:border-primary focus:outline-none text-sm text-on-surface placeholder:text-on-surface-variant/40 transition-colors"
                    />
                  </div>
                </div>

                {/* Phone & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-on-surface-variant mb-1">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="+92 300 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-highest/60 border border-outline-variant/40 focus:border-primary focus:outline-none text-sm text-on-surface placeholder:text-on-surface-variant/40 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-on-surface-variant mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="Company Inc."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-highest/60 border border-outline-variant/40 focus:border-primary focus:outline-none text-sm text-on-surface placeholder:text-on-surface-variant/40 transition-colors"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1">
                    Service Needed <span className="text-primary">*</span>
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-highest/60 border border-outline-variant/40 focus:border-primary focus:outline-none text-sm text-on-surface transition-colors cursor-pointer"
                  >
                    <option value="Web Development" className="bg-surface-container-low text-on-surface">Web Development</option>
                    <option value="Mobile App Development" className="bg-surface-container-low text-on-surface">Mobile App Development</option>
                    <option value="AI & ML Solutions" className="bg-surface-container-low text-on-surface">AI & ML Solutions</option>
                    <option value="LLMs & Agentic AI" className="bg-surface-container-low text-on-surface">LLMs & Agentic AI</option>
                    <option value="UI/UX Design" className="bg-surface-container-low text-on-surface">UI/UX Design</option>
                    <option value="Backend Engineering" className="bg-surface-container-low text-on-surface">Backend Engineering</option>
                    <option value="Video Editing & Motion" className="bg-surface-container-low text-on-surface">Video Editing & Motion</option>
                    <option value="MVP Development" className="bg-surface-container-low text-on-surface">MVP Development</option>
                    <option value="Dedicated Engineering Pod" className="bg-surface-container-low text-on-surface">Dedicated Engineering Pod</option>
                  </select>
                </div>

                {/* Message Brief */}
                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1">
                    Project Brief &amp; Requirements <span className="text-primary">*</span>
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell us about your goals, timeline, and deliverables..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-highest/60 border border-outline-variant/40 focus:border-primary focus:outline-none text-sm text-on-surface placeholder:text-on-surface-variant/40 transition-colors resize-none"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-1 py-3.5 rounded-full font-label-md text-sm font-bold text-on-primary bg-gradient-to-r from-primary-fixed via-primary to-primary-container hover:shadow-[0_0_28px_rgba(242,202,80,0.65)] hover:scale-[1.01] active:scale-95 transition-all duration-300 shadow-xl border border-primary-fixed/40 disabled:opacity-50 cursor-pointer"
                >
                  {loading ? "Sending Brief..." : "Get In Touch →"}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
