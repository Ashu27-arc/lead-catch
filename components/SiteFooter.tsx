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

