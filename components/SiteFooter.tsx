import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/about-us", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact-us", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-background dark:border-white/10">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-background/80 ring-1 ring-black/10 backdrop-blur dark:ring-white/10">
                <Image
                  src="/logo.png"
                  alt="LeadCatch logo"
                  width={28}
                  height={28}
                  className="h-7 w-7"
                />
              </span>
              <span className="font-semibold tracking-tight text-foreground">
                LeadCatch
              </span>
            </Link>
            <p className="mt-3 text-sm leading-6 text-(--foreground)/70">
              Digital marketing for real estate & interior design: lead-focused
              advertising, SEO, conversion-ready websites, and lead tracking —
              in Noida.
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
                Contact
              </div>
              <ul className="mt-3 space-y-2 text-sm text-(--foreground)/70">
                <li>
                  <a
                    href="mailto:info@leadcatch.in"
                    className="break-all transition-colors hover:text-(--brand)"
                  >
                    info@leadcatch.in
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919917677017"
                    className="transition-colors hover:text-(--brand)"
                  >
                    +91 9917677017
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919718435589"
                    className="transition-colors hover:text-(--brand)"
                  >
                    +91 9718435589
                  </a>
                </li>
                <li>Noida, Uttar Pradesh, India-201301</li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">
                Legal
              </div>
              <ul className="mt-3 space-y-2 text-sm text-(--foreground)/70">
                <li>
                  <a
                    href="#"
                    className="cursor-not-allowed opacity-70"
                    aria-disabled="true"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="cursor-not-allowed opacity-70"
                    aria-disabled="true"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-black/10 pt-6 text-xs text-(--foreground)/60 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} Lead Catch Private Limited. All
            rights reserved.
          </div>
          <div>Built with Next.js • Tailwind</div>
        </div>
      </div>
    </footer>
  );
}

