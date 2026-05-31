import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/about-us", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/careers", label: "Careers" },
  { href: "/contact-us", label: "Contact" },
] as const;

const services = [
  { href: "/services", label: "PPC Ads" },
  { href: "/services", label: "Local SEO" },
  { href: "/services", label: "Web Design" },
  { href: "/services", label: "Mobile Apps" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-background dark:border-white/10">
      <div className="w-full px-3 py-10 sm:px-5">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-background/80 ring-1 ring-black/10 backdrop-blur dark:ring-white/10">
                <Image
                  src="/logo.png"
                  alt="Lead Catch - Real Estate Marketing Agency in Noida"
                  width={28}
                  height={28}
                  className="h-7 w-7"
                />
              </span>
              <span className="font-semibold tracking-tight text-foreground">
                LeadCatch
              </span>
            </Link>
            <p className="mt-3 text-sm leading-6 text-justify text-(--foreground)/70">
              We help real estate and interior design businesses in Noida get more qualified leads through digital marketing, SEO, and websites that actually convert. No fancy jargon—just real results.
            </p>
            <div className="mt-4 flex gap-4">
              <a
                href="https://www.facebook.com/people/Lead-Catch-Pvt-Ltd/61578123082806/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-(--foreground)/60 hover:text-(--brand) transition-colors"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/lead_catch_pvt_ltd_11/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-(--foreground)/60 hover:text-(--brand) transition-colors"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/lead-catch-pvt-ltd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-(--foreground)/60 hover:text-(--brand) transition-colors"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div>
              <div className="text-sm font-semibold text-foreground">
                Explore
              </div>
              <ul className="mt-3 space-y-2 text-sm text-(--foreground)/70">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="transition-colors hover:text-(--brand)"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">
                Services
              </div>
              <ul className="mt-3 space-y-2 text-sm text-(--foreground)/70">
                {services.map((s) => (
                  <li key={s.label}>
                    <Link
                      href={s.href}
                      className="transition-colors hover:text-(--brand)"
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">
                Contact
              </div>
              <ul className="mt-3 space-y-2 text-sm text-(--foreground)/70">
                <li>
                  <a
                    href="mailto:info@leadcatch.in"
                    className="inline-flex items-center gap-2 break-all transition-colors hover:text-(--brand)"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current shrink-0">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    info@leadcatch.in
                  </a>
                </li>
                <li className="inline-flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-2">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current shrink-0">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    <a href="tel:+919917677017" className="transition-colors hover:text-(--brand)">
                      +91 9917677017
                    </a>
                    <span className="text-(--foreground)/40">•</span>
                    <a href="tel:+919718435589" className="transition-colors hover:text-(--brand)">
                      +91 9718435589
                    </a>
                  </span>
                </li>
                <li className="inline-flex items-center gap-2">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current shrink-0">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  Noida, Uttar Pradesh, India-201301
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-black/10 pt-6 text-xs text-(--foreground)/60 dark:border-white/10 sm:flex-row sm:items-center sm:justify-center">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            <span>© {new Date().getFullYear()} Lead Catch Private Limited. All rights reserved.</span>
            <span className="text-(--foreground)/30">•</span>
            <a href="#" className="cursor-not-allowed opacity-70 hover:opacity-100" aria-disabled="true">
              Privacy Policy
            </a>
            <span className="text-(--foreground)/30">•</span>
            <a href="#" className="cursor-not-allowed opacity-70 hover:opacity-100" aria-disabled="true">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

