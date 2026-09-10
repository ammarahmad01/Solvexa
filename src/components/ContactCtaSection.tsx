"use client";

import { useState } from "react";

export default function ContactCtaSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "Web Development",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    try {
      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "project_brief",
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          message: formData.message,
          sourceUrl: typeof window !== "undefined" ? window.location.href : "",
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          company: "",
          service: "Web Development",
          message: ""
        });
      } else {
        setErrorMessage(data.error || "Failed to submit. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-16 sm:py-24" id="contact-cta">
      <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-br from-surface-container-low via-surface-container to-surface-container-lowest border border-primary/40 p-8 sm:p-12 lg:p-14 shadow-[0_25px_60px_-15px_rgba(12,3,30,0.9),0_0_35px_rgba(212,175,55,0.18)] relative overflow-hidden">
        
        {/* Ambient decorative glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-container/15 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* Left Column: Styled Headline, Body & Contact Points (No Badges) */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-on-surface leading-tight tracking-tight">
              Ready to Discuss Your Project With Us?{" "}
              <span className="bg-gradient-to-r from-primary-fixed via-primary to-primary-container bg-clip-text text-transparent">
                Get in Touch Today to Get Started.
              </span>
            </h2>

            <p className="font-body-lg text-base sm:text-lg text-on-surface-variant mt-4 leading-relaxed max-w-xl">
              Whether you are looking to build a high-performance web platform, launch an iOS/Android app, or want AI solutions — our team responds within 24 hours.
            </p>

            {/* Direct Contact Cards */}
            <div className="mt-8 space-y-3.5 w-full max-w-lg">
              <a
                href="mailto:info.solvexa@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-highest/40 border border-outline-variant/30 hover:border-primary/50 transition-all text-sm text-on-surface group shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/15 text-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-2xl">mail</span>
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-on-surface-variant font-medium">Email our direct desk</p>
                  <p className="font-bold text-primary truncate text-base mt-0.5">info.solvexa@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+923288521417"
                className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-highest/40 border border-outline-variant/30 hover:border-primary/50 transition-all text-sm text-on-surface group shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/15 text-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-2xl">call</span>
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-on-surface-variant font-medium">Direct phone number</p>
                  <p className="font-bold text-white text-base mt-0.5">+92 328 8521417</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Perfectly Proportioned & Heighted Form */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {submitted ? (
              <div className="h-full p-8 sm:p-12 rounded-3xl bg-surface-container-low/95 backdrop-blur-2xl border border-primary/50 text-center flex-1 flex flex-col items-center justify-center shadow-2xl animate-in zoom-in-95 duration-300">
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
                className="p-7 sm:p-9 lg:p-10 rounded-3xl bg-surface-container-low/90 backdrop-blur-2xl border border-outline-variant/30 shadow-2xl flex flex-col gap-5"
              >
                <div className="pb-1 border-b border-outline-variant/20">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Send Us a Project Brief</h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant mt-1">Fill out the details below and we will get back to you within 24 hours.</p>
                  {errorMessage && (
                    <div className="mt-3 p-3 rounded-xl bg-error/15 border border-error/40 text-error text-xs font-medium flex items-center gap-2 animate-in fade-in">
                      <span className="material-symbols-outlined text-base">error</span>
                      <span>{errorMessage}</span>
                    </div>
                  )}
                </div>

                {/* Full Name & Work Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-on-surface-variant mb-1.5">
                      Full Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface-container-highest/60 border border-outline-variant/40 focus:border-primary focus:outline-none text-sm text-on-surface placeholder:text-on-surface-variant/40 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-on-surface-variant mb-1.5">
                      Work Email <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface-container-highest/60 border border-outline-variant/40 focus:border-primary focus:outline-none text-sm text-on-surface placeholder:text-on-surface-variant/40 transition-colors"
                    />
                  </div>
                </div>

                {/* Phone & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-on-surface-variant mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+92 300 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface-container-highest/60 border border-outline-variant/40 focus:border-primary focus:outline-none text-sm text-on-surface placeholder:text-on-surface-variant/40 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-on-surface-variant mb-1.5">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="Company Inc."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface-container-highest/60 border border-outline-variant/40 focus:border-primary focus:outline-none text-sm text-on-surface placeholder:text-on-surface-variant/40 transition-colors"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1.5">
                    Service Needed <span className="text-primary">*</span>
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-surface-container-highest/70 border border-outline-variant/40 focus:border-primary focus:outline-none text-sm text-on-surface transition-colors cursor-pointer"
                  >
                    <option value="Web Development" className="bg-surface-container-low text-on-surface">Full-Stack Web Development</option>
                    <option value="Mobile App Development" className="bg-surface-container-low text-on-surface">Mobile App Development (iOS &amp; Android)</option>
                    <option value="Custom Software" className="bg-surface-container-low text-on-surface">Custom Software Engineering</option>
                    <option value="AI & ML Solutions" className="bg-surface-container-low text-on-surface">AI &amp; Machine Learning Solutions</option>
                    <option value="UI/UX Design" className="bg-surface-container-low text-on-surface">UI/UX &amp; Design Systems</option>
                    <option value="Digital Transformation" className="bg-surface-container-low text-on-surface">Digital Transformation</option>
                    <option value="MVP Development" className="bg-surface-container-low text-on-surface">MVP Development</option>
                  </select>
                </div>

                {/* Message Brief */}
                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1.5">
                    Project Brief &amp; Requirements <span className="text-primary">*</span>
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell us about your goals, timeline, and deliverables..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full h-24 px-4 py-3 rounded-xl bg-surface-container-highest/60 border border-outline-variant/40 focus:border-primary focus:outline-none text-sm text-on-surface placeholder:text-on-surface-variant/40 transition-colors resize-none"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-full font-label-md text-sm font-bold text-on-primary bg-gradient-to-r from-primary-fixed via-primary to-primary-container hover:shadow-[0_0_28px_rgba(242,202,80,0.65)] hover:scale-[1.01] active:scale-95 transition-all duration-300 shadow-xl border border-primary-fixed/40 disabled:opacity-50 cursor-pointer mt-auto"
                >
                  {loading ? "Sending Brief..." : "Submit Project Brief →"}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
