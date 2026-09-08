"use client";

import { useState } from "react";
import { homeFaqs } from "../../data/faqs";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "Web Development",
    budget: "$5,000 – $15,000",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="flex flex-col w-full text-on-surface select-none relative overflow-x-hidden">
      {/* Hero Header */}
      <section className="relative w-full pt-12 pb-12 px-margin-mobile md:px-margin-tablet lg:px-margin-desktop text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary font-label-caps text-xs tracking-widest uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Direct Inquiries &amp; Discovery
          </div>
          <h1 className="font-headline-lg text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Get In Touch —{" "}
            <span className="bg-gradient-to-r from-primary-fixed via-primary to-primary-container bg-clip-text text-transparent">
              Have a Project in Mind? Let&apos;s Talk.
            </span>
          </h1>
          <p className="font-body-lg text-base sm:text-lg text-on-surface-variant mt-4 max-w-2xl leading-relaxed">
            Our directors and senior architects respond within 24 hours. Tell us about your vision, technical specs, and target launch window.
          </p>
        </div>
      </section>

      {/* Main Two-Column Contact Section */}
      <section className="relative w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT: Comprehensive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-surface-container-low/90 backdrop-blur-2xl border border-primary/30 shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center justify-center animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-4xl">check_circle</span>
                  </div>
                  <h3 className="font-headline-sm text-2xl font-bold text-on-surface">Thank You!</h3>
                  <p className="font-body-md text-sm text-on-surface-variant mt-2 max-w-md">
                    Your brief has been forwarded to our engineering desk. A dedicated project manager will follow up via email and WhatsApp.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-full text-xs font-bold text-primary border border-primary/40 hover:bg-primary/10 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1 mb-2">
                    <h2 className="font-headline-sm text-2xl font-bold text-on-surface">Send Us a Project Brief</h2>
                    <p className="text-xs text-on-surface-variant">Fill in the fields below and we&apos;ll schedule an introductory consultation.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-on-surface-variant mb-1.5">
                        Full Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Morgan"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-surface-container-highest/60 border border-outline-variant/40 focus:border-primary focus:outline-none text-sm text-on-surface transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-on-surface-variant mb-1.5">
                        Work Email <span className="text-primary">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-surface-container-highest/60 border border-outline-variant/40 focus:border-primary focus:outline-none text-sm text-on-surface transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-on-surface-variant mb-1.5">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+92 328 8521417"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-surface-container-highest/60 border border-outline-variant/40 focus:border-primary focus:outline-none text-sm text-on-surface transition-colors"
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
                        className="w-full px-4 py-3 rounded-xl bg-surface-container-highest/60 border border-outline-variant/40 focus:border-primary focus:outline-none text-sm text-on-surface transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-on-surface-variant mb-1.5">
                        Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-surface-container-highest/60 border border-outline-variant/40 focus:border-primary focus:outline-none text-sm text-on-surface transition-colors"
                      >
                        <option value="Web Development">Web Development</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Branding & Logo Design">Branding &amp; Logo Design</option>
                        <option value="Video Editing & Motion">Video Editing &amp; Motion</option>
                        <option value="MVP Development">MVP Development</option>
                        <option value="Dedicated Pod Outsourcing">Dedicated Pod Outsourcing</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-on-surface-variant mb-1.5">
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-surface-container-highest/60 border border-outline-variant/40 focus:border-primary focus:outline-none text-sm text-on-surface transition-colors"
                      >
                        <option value="Under $5,000">Under $5,000</option>
                        <option value="$5,000 – $15,000">$5,000 – $15,000</option>
                        <option value="$15,000 – $50,000">$15,000 – $50,000</option>
                        <option value="$50,000+">$50,000+ (Enterprise)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-on-surface-variant mb-1.5">
                      Tell Us About Your Project <span className="text-primary">*</span>
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Please share requirements, current website/app URLs, timeline, and key goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface-container-highest/60 border border-outline-variant/40 focus:border-primary focus:outline-none text-sm text-on-surface transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-full font-label-md text-sm font-bold text-on-primary bg-gradient-to-r from-primary-fixed via-primary to-primary-container hover:shadow-[0_0_28px_rgba(242,202,80,0.65)] active:scale-95 transition-all duration-300 shadow-xl border border-primary-fixed/40 mt-2"
                  >
                    {loading ? "Transmitting Brief..." : "Submit Inquiry →"}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* RIGHT: Direct Contact Details & Global Availability */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-8 rounded-3xl bg-surface-container-low/80 backdrop-blur-2xl border border-outline-variant/30 shadow-xl flex flex-col gap-6">
              <div>
                <span className="text-xs font-mono text-primary uppercase tracking-widest">Headquarters</span>
                <h3 className="font-headline-sm text-2xl font-bold text-on-surface mt-1">Direct Contact Details</h3>
                <p className="text-xs text-on-surface-variant mt-1">Reach our executive and engineering team directly:</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-surface-container-highest/40 border border-outline-variant/20">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xl">location_on</span>
                  </div>
                  <div>
                    <p className="text-xs text-on-surface-variant font-mono">Location</p>
                    <p className="text-sm font-bold text-on-surface mt-0.5">Rawalpindi, Punjab, Pakistan</p>
                    <p className="text-xs text-on-surface-variant">Operating globally with remote timezone alignment</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-surface-container-highest/40 border border-outline-variant/20">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xl">call</span>
                  </div>
                  <div>
                    <p className="text-xs text-on-surface-variant font-mono">Phone &amp; WhatsApp</p>
                    <a href="tel:+923288521417" className="text-sm font-bold text-primary hover:underline mt-0.5 block">
                      +92 328 8521417
                    </a>
                    <p className="text-xs text-on-surface-variant">Mon – Sat, 9:00 AM – 9:00 PM PKT</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-surface-container-highest/40 border border-outline-variant/20">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xl">mail</span>
                  </div>
                  <div>
                    <p className="text-xs text-on-surface-variant font-mono">Official Inquiries</p>
                    <a href="mailto:info.solvexa@gmail.com" className="text-sm font-bold text-primary hover:underline mt-0.5 block">
                      info.solvexa@gmail.com
                    </a>
                    <p className="text-xs text-on-surface-variant">Guaranteed reply within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between">
                <span className="text-xs font-mono text-on-surface-variant">Follow Our Channels</span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://www.linkedin.com/company/solvexa1/posts/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors text-xs"
                    aria-label="LinkedIn"
                  >
                    in
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61573528962536"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors text-xs"
                    aria-label="Facebook"
                  >
                    fb
                  </a>
                  <a
                    href="https://www.instagram.com/solvexa_/?utm_source=ig_web_button_share_sheet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors text-xs"
                    aria-label="Instagram"
                  >
                    ig
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Google Map */}
      <section className="relative w-full max-w-7xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-xl">
        <div className="rounded-3xl overflow-hidden border border-outline-variant/30 shadow-2xl h-[340px] sm:h-[400px]">
          <iframe
            title="Solvexa Location - Rawalpindi, Pakistan"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212727.18579998634!2d72.93043831872124!3d33.58552185458053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df948974419acb%3A0x984357e1632d30f!2sRawalpindi%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(85%) contrast(115%)" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Mini FAQ section */}
      <section className="relative w-full max-w-4xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-xl mb-12">
        <div className="text-center mb-6">
          <span className="text-xs font-mono text-primary uppercase tracking-widest">Discovery FAQs</span>
          <h2 className="font-headline-sm text-2xl font-bold text-on-surface mt-1">
            Questions Before Starting
          </h2>
        </div>
        <div className="space-y-3">
          {homeFaqs.slice(2, 5).map((faq, i) => (
            <div key={i} className="p-6 rounded-2xl bg-surface-container-low/70 border border-outline-variant/30">
              <h3 className="font-title-lg text-base font-bold text-on-surface">{faq.q}</h3>
              <p className="text-sm text-on-surface-variant mt-2 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
