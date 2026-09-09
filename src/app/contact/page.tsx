"use client";

import React, { useState } from "react";
import Link from "next/link";

interface FaqItem {
  q: string;
  a: string;
}

const CONTACT_FAQS: FaqItem[] = [
  {
    q: "How quickly can Solvexa start on my project?",
    a: "Following our initial discovery consultation and scoping review, we prepare a detailed statement of work (SOW) within 24–48 hours. Once approved, our team can kick off development within 3 to 5 business days.",
  },
  {
    q: "Do you sign a Non-Disclosure Agreement (NDA)?",
    a: "Yes, absolutely. We prioritize your privacy and intellectual property. We are always ready to execute a mutual NDA before reviewing proprietary wireframes, business logic, or technical requirements.",
  },
  {
    q: "What pricing and contract models do you offer?",
    a: "We offer fixed-price milestones with clearly defined deliverables and acceptance criteria, as well as dedicated monthly agile teams. Milestone payments are tied strictly to approved deliverables.",
  },
  {
    q: "Can I hire a dedicated team or individual developers?",
    a: "Yes. In addition to full end-to-end development, we provide dedicated engineering pods (lead architect, full-stack engineers, QA, and UI/UX designers) integrated directly into your workflow and communication channels.",
  },
  {
    q: "What post-launch support and maintenance do you provide?",
    a: "Every project includes post-launch hyper-care support and warranty. We also offer ongoing monthly maintenance packages covering cloud infrastructure, security updates, and continuous feature iterations.",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "Full-Stack Web Development",
    budget: "$5,000 – $15,000",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="flex flex-col w-full text-on-surface select-none relative overflow-x-hidden min-h-screen">
      {/* Background Ambience & Subtle Radial Glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[32rem] w-[min(95vw,75rem)] rounded-full bg-gradient-to-b from-primary/15 via-secondary/10 to-transparent blur-[140px]" />
      <div className="pointer-events-none absolute top-[35%] -left-48 h-80 w-80 rounded-full bg-primary/10 blur-[130px]" />
      <div className="pointer-events-none absolute top-[55%] -right-48 h-80 w-80 rounded-full bg-secondary/10 blur-[130px]" />

      {/* Hero Section - Clean, Perfectly Aligned, No Badges */}
      <section className="relative w-full pt-14 sm:pt-16 pb-10 px-margin-mobile md:px-margin-tablet lg:px-margin-desktop text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="font-headline-lg text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-primary-fixed via-primary to-primary-container bg-clip-text text-transparent">
              Great Together
            </span>
          </h1>
          <h2 className="font-title-lg text-xl sm:text-2xl font-semibold text-primary mt-3 tracking-wide">
            Have an Idea? Let&apos;s Turn It Into Reality.
          </h2>
          <p className="font-body-lg text-base sm:text-lg text-on-surface-variant mt-4 max-w-3xl leading-relaxed text-center">
            Whether you need a website, mobile app, custom software, or AI-powered solution, our team is ready to understand your vision, explore the possibilities, and build a solution tailored to your business.
          </p>
          <p className="font-body-md text-sm sm:text-base text-on-surface-variant/90 mt-2.5 max-w-2xl text-center">
            Tell us about your project, goals, and challenges. Let&apos;s start the conversation.
          </p>
        </div>
      </section>

      {/* Main Two-Column Contact Section */}
      <section className="relative w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-md mb-16">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* LEFT: Clean & Perfectly Styled Contact Form */}
          <div className="lg:col-span-7 flex flex-col h-full">
            <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-surface-container-low/90 backdrop-blur-2xl border border-outline-variant/30 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] flex-1 flex flex-col h-full">
              {submitted ? (
                <div className="py-16 text-center flex-1 flex flex-col items-center justify-center animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 border border-primary/40 text-primary flex items-center justify-center mb-5 shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined text-4xl">check_circle</span>
                  </div>
                  <h3 className="font-headline-sm text-2xl sm:text-3xl font-extrabold text-white">
                    Thank You, {formData.fullName.split(" ")[0]}!
                  </h3>
                  <p className="font-body-md text-sm sm:text-base text-on-surface-variant mt-3 max-w-md leading-relaxed">
                    Your message has been sent successfully. Our team will review your inquiry and get back to you shortly.
                  </p>

                  <div className="mt-8 flex items-center justify-center">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full text-xs font-bold text-primary border border-primary/40 hover:bg-primary/10 transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between gap-5 sm:gap-6 h-full">
                  <div className="pb-3 border-b border-outline-variant/20">
                    <h2 className="font-headline-sm text-2xl sm:text-3xl font-bold text-white">
                      Send Us a Message
                    </h2>
                    <p className="text-xs sm:text-sm text-on-surface-variant mt-1">
                      Fill out the form below and we will respond within 24 hours.
                    </p>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2">
                        Full Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-surface-container-highest/60 border border-outline-variant/40 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none text-sm text-white placeholder:text-on-surface-variant/40 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2">
                        Email Address <span className="text-primary">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-surface-container-highest/60 border border-outline-variant/40 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none text-sm text-white placeholder:text-on-surface-variant/40 transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+92 300 1234567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-surface-container-highest/60 border border-outline-variant/40 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none text-sm text-white placeholder:text-on-surface-variant/40 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-surface-container-highest/60 border border-outline-variant/40 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none text-sm text-white placeholder:text-on-surface-variant/40 transition-all"
                      />
                    </div>
                  </div>

                  {/* Service & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2">
                        Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-surface-container-highest/80 border border-outline-variant/40 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none text-sm text-white transition-all cursor-pointer"
                      >
                        <option value="Full-Stack Web Development">Full-Stack Web Development</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="UI/UX & Design Systems">UI/UX &amp; Design Systems</option>
                        <option value="AI & Machine Learning Solutions">AI &amp; Machine Learning Solutions</option>
                        <option value="MVP Development">MVP Development</option>
                        <option value="Branding & Digital Marketing">Branding &amp; Digital Marketing</option>
                        <option value="Video Production & 3D Motion">Video Production &amp; 3D Motion</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2">
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-surface-container-highest/80 border border-outline-variant/40 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none text-sm text-white transition-all cursor-pointer"
                      >
                        <option value="Under $5,000">Under $5,000</option>
                        <option value="$5,000 – $15,000">$5,000 – $15,000</option>
                        <option value="$15,000 – $35,000">$15,000 – $35,000</option>
                        <option value="$35,000+">$35,000+</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field (Properly Proportioned) */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2">
                      Your Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Tell us about your project requirements, goals, or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full h-28 px-4 py-3 rounded-xl bg-surface-container-highest/60 border border-outline-variant/40 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none text-sm text-white placeholder:text-on-surface-variant/40 transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-full font-bold text-sm text-on-primary bg-gradient-to-r from-primary-fixed via-primary to-primary-container hover:shadow-[0_0_24px_rgba(242,202,80,0.6)] active:scale-95 transition-all duration-300 shadow-lg border border-primary-fixed/40 cursor-pointer flex items-center justify-center gap-2 shrink-0"
                  >
                    {loading ? (
                      <>
                        <span className="h-4 w-4 rounded-full border-2 border-on-primary border-t-transparent animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <span className="material-symbols-outlined text-base">send</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* RIGHT: Direct Contact Details & Colorful Social Media Accounts */}
          <div className="lg:col-span-5 flex flex-col gap-6 h-full justify-between">
            
            {/* Contact Details Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-surface-container-low/90 backdrop-blur-2xl border border-outline-variant/30 shadow-xl">
              <h3 className="font-headline-sm text-2xl font-bold text-white">
                Contact Details
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant mt-1 mb-6">
                Get in touch directly with our team via phone or email.
              </p>

              <div className="space-y-4">
                {/* Phone Number */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-surface-container-highest/50 border border-outline-variant/20 hover:border-primary/40 transition-all group">
                  <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/30 text-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-2xl">call</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-[11px] text-on-surface-variant uppercase tracking-wider font-semibold">Phone Number</p>
                    <a
                      href="tel:+923288521417"
                      className="text-base font-bold text-white group-hover:text-primary transition-colors mt-0.5 block"
                    >
                      +92 328 8521417
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-surface-container-highest/50 border border-outline-variant/20 hover:border-primary/40 transition-all group">
                  <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/30 text-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-2xl">mail</span>
                  </div>
                  <div>
                    <p className="text-[11px] text-on-surface-variant uppercase tracking-wider font-semibold">Email Address</p>
                    <a
                      href="mailto:info.solvexa@gmail.com"
                      className="text-sm sm:text-base font-bold text-white group-hover:text-primary transition-colors mt-0.5 block"
                    >
                      info.solvexa@gmail.com
                    </a>
                    <p className="text-xs text-on-surface-variant mt-0.5">Quick response guaranteed</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-surface-container-highest/50 border border-outline-variant/20 hover:border-primary/40 transition-all group">
                  <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/30 text-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-2xl">location_on</span>
                  </div>
                  <div>
                    <p className="text-[11px] text-on-surface-variant uppercase tracking-wider font-semibold">Location</p>
                    <p className="text-sm sm:text-base font-bold text-white mt-0.5">Rawalpindi / Islamabad</p>
                    <p className="text-xs text-on-surface-variant mt-0.5">Punjab, Pakistan • Serving Clients Worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dedicated Social Media Accounts Section */}
            <div className="p-6 sm:p-8 rounded-3xl bg-surface-container-low/90 backdrop-blur-2xl border border-outline-variant/30 shadow-xl">
              <h3 className="font-headline-sm text-xl sm:text-2xl font-bold text-white">
                Social Media Accounts
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant mt-1 mb-5">
                Connect with us and follow our latest updates across our official social profiles.
              </p>

              <div className="grid grid-cols-1 gap-3">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/solvexa1/posts/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-surface-container-highest/40 hover:bg-[#0A66C2]/15 border border-outline-variant/20 hover:border-[#0A66C2]/50 transition-all duration-300 group shadow-sm"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#0A66C2] text-white flex items-center justify-center shadow-md shadow-[#0A66C2]/30 group-hover:scale-105 transition-transform">
                      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white group-hover:text-[#0A66C2] transition-colors">LinkedIn</p>
                      <p className="text-xs text-on-surface-variant">@solvexa1</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-[#0A66C2] group-hover:translate-x-1 transition-all text-xl">
                    arrow_forward
                  </span>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/solvexa_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-surface-container-highest/40 hover:bg-[#E1306C]/15 border border-outline-variant/20 hover:border-[#E1306C]/50 transition-all duration-300 group shadow-sm"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-md shadow-[#dc2743]/30 group-hover:scale-105 transition-transform">
                      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white group-hover:text-[#E1306C] transition-colors">Instagram</p>
                      <p className="text-xs text-on-surface-variant">@solvexa_</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-[#E1306C] group-hover:translate-x-1 transition-all text-xl">
                    arrow_forward
                  </span>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=61573528962536"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-surface-container-highest/40 hover:bg-[#1877F2]/15 border border-outline-variant/20 hover:border-[#1877F2]/50 transition-all duration-300 group shadow-sm"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#1877F2] text-white flex items-center justify-center shadow-md shadow-[#1877F2]/30 group-hover:scale-105 transition-transform">
                      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white group-hover:text-[#1877F2] transition-colors">Facebook</p>
                      <p className="text-xs text-on-surface-variant">Solvexa Official</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-[#1877F2] group-hover:translate-x-1 transition-all text-xl">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Clean Embedded Google Map Section */}
      <section className="relative w-full max-w-[1240px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop mb-20">
        <div className="relative rounded-3xl overflow-hidden border border-outline-variant/30 shadow-2xl bg-surface-container-lowest h-[420px] sm:h-[480px] lg:h-[520px]">
          <iframe
            title="Solvexa Location - Rawalpindi, Pakistan"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212727.18579998634!2d72.93043831872124!3d33.58552185458053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df948974419acb%3A0x984357e1632d30f!2sRawalpindi%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            className="w-full h-full"
            style={{
              border: 0,
              filter: "invert(92%) hue-rotate(180deg) brightness(88%) contrast(120%)",
            }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="relative w-full max-w-4xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop mb-24">
        <div className="text-center mb-10">
          <h2 className="font-headline-sm text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="font-body-md text-sm sm:text-base text-on-surface-variant mt-2 max-w-xl mx-auto">
            Quick answers to common questions about starting your project with Solvexa.
          </p>
        </div>

        <div className="space-y-3.5">
          {CONTACT_FAQS.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                key={i}
                className="overflow-hidden rounded-2xl bg-surface-container-low/90 border border-outline-variant/30 hover:border-primary/40 transition-all duration-300 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(i)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-title-md text-base sm:text-lg font-bold text-white transition-colors hover:text-primary">
                    {faq.q}
                  </span>
                  <span
                    className={`material-symbols-outlined text-primary text-xl shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm leading-relaxed text-on-surface-variant animate-in fade-in duration-200">
                    <div className="h-px bg-outline-variant/20 mb-3" />
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
