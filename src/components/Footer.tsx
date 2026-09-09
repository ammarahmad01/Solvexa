import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full relative z-10 mt-space-4xl bg-surface-container-lowest border-t border-outline-variant/20 overflow-hidden">
      {/* Ambient background SVG waves */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full object-cover" preserveAspectRatio="none" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,160L40,176C80,192,160,224,240,218.7C320,213,400,171,480,160C560,149,640,171,720,186.7C800,203,880,213,960,197.3C1040,181,1120,139,1200,133.3C1280,128,1360,160,1400,176L1440,192" fill="none" stroke="#f2ca50" strokeDasharray="4,8" strokeWidth="0.8"></path>
          <path d="M0,64L48,96C96,128,192,192,288,208C384,224,480,192,576,165.3C672,139,768,117,864,133.3C960,149,1056,203,1152,213.3C1248,224,1344,192,1392,176L1440,160" fill="none" stroke="#dbb8ff" strokeWidth="0.6"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-3xl relative z-10 flex flex-col gap-space-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl">
          {/* Col 1: Brand & Tagline */}
          <div className="flex flex-col gap-space-md col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex flex-col gap-space-xs">
              <div className="flex items-center gap-space-xs">
                <Link href="/">
                  <img src="/assets/logo.png" alt="Solvexa Logo" className="h-14 w-auto object-contain drop-shadow-md hover:opacity-90 transition-opacity" />
                </Link>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                We design and build digital experiences, software, and AI solutions that help businesses grow.
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-space-md">
            <h3 className="font-title-lg text-title-lg font-bold text-on-surface">Quick Links</h3>
            <nav className="flex flex-col gap-space-xs">
              <Link href="/" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">Home</Link>
              <Link href="/about" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">About Us</Link>
              <Link href="/services" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">Services Hub</Link>
              <Link href="/work" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">Work &amp; Portfolio</Link>
              <Link href="/team" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">Our Team</Link>
              <Link href="/contact" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">Contact Us</Link>
            </nav>
          </div>

          {/* Col 3: Contact Info */}
          <div className="flex flex-col gap-space-md">
            <h3 className="font-title-lg text-title-lg font-bold text-on-surface">Contact Us</h3>
            <ul className="flex flex-col gap-space-xs">
              <li>
                <div className="flex items-center gap-space-xs font-body-md text-body-md text-on-surface-variant">
                  <span className="material-symbols-outlined text-base text-primary">location_on</span>
                  Rawalpindi, Punjab, Pakistan
                </div>
              </li>
              <li>
                <a href="tel:+923288521417" className="flex items-center gap-space-xs font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-base text-primary">call</span>
                  +92 328 8521417
                </a>
              </li>
              <li>
                <a href="mailto:info.solvexa@gmail.com" className="flex items-center gap-space-xs font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-base text-primary">mail</span>
                  info.solvexa@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Social & Connect */}
          <div className="flex flex-col gap-space-md">
            <h3 className="font-title-lg text-title-lg font-bold text-on-surface">Connect</h3>
            <p className="text-xs text-on-surface-variant">
              Follow our journey, view live project updates, and connect with our engineering team:
            </p>
            <div className="flex items-center gap-space-sm">
              <a
                className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-high/60 border border-outline-variant/30 text-on-surface-variant hover:text-primary hover:border-primary-container/60 hover:bg-surface-container-highest transition-all duration-300 shadow-sm"
                href="https://www.linkedin.com/company/solvexa1/posts/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              <a
                className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-high/60 border border-outline-variant/30 text-on-surface-variant hover:text-primary hover:border-primary-container/60 hover:bg-surface-container-highest transition-all duration-300 shadow-sm"
                href="https://www.facebook.com/profile.php?id=61573528962536"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
              </a>
              <a
                className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-high/60 border border-outline-variant/30 text-on-surface-variant hover:text-primary hover:border-primary-container/60 hover:bg-surface-container-highest transition-all duration-300 shadow-sm"
                href="https://www.instagram.com/solvexa_/?utm_source=ig_web_button_share_sheet"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-outline-variant/40 to-transparent"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm text-on-surface-variant">
          <div className="flex items-center gap-space-xs">
            <span>© {new Date().getFullYear()} Solvexa. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6 text-xs">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/402" className="hover:text-primary transition-colors">Security &amp; Billing (402)</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
