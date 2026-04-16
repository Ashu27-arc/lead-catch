/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FreeAuditModal } from "@/components/FreeAuditModal";

const navItems = [
  { href: "/about-us", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact-us", label: "Contact Us" },
] as const;

const contactDetails = {
  email: "info@leadcatch.in",
  phone: "+91 9917677017",
};

const socialLinks = [
  {
    href: "https://www.facebook.com/",
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
        <path d="M13.5 8H16V5h-2.5C10.46 5 9 6.79 9 9.57V12H7v3h2v4h3v-4h2.3l.7-3H12V9.8c0-1.1.29-1.8 1.5-1.8Z" />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/",
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
        <path d="M7.75 3h8.5A4.75 4.75 0 0 1 21 7.75v8.5A4.75 4.75 0 0 1 16.25 21h-8.5A4.75 4.75 0 0 1 3 16.25v-8.5A4.75 4.75 0 0 1 7.75 3Zm0 1.8A2.95 2.95 0 0 0 4.8 7.75v8.5a2.95 2.95 0 0 0 2.95 2.95h8.5a2.95 2.95 0 0 0 2.95-2.95v-8.5a2.95 2.95 0 0 0-2.95-2.95h-8.5Zm8.95 1.35a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3ZM12 7.9A4.1 4.1 0 1 1 7.9 12 4.1 4.1 0 0 1 12 7.9Zm0 1.8A2.3 2.3 0 1 0 14.3 12 2.3 2.3 0 0 0 12 9.7Z" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
        <path d="M6.2 8.2a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6ZM4.7 9.7h3v9.6h-3V9.7Zm5 0h2.9V11h.04c.4-.76 1.4-1.56 2.9-1.56 3.1 0 3.7 2 3.7 4.7v5.2h-3v-4.6c0-1.1-.02-2.5-1.56-2.5-1.56 0-1.8 1.2-1.8 2.4v4.7h-3V9.7Z" />
      </svg>
    ),
  },
] as const;

export function SiteHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const [isSwitching, setIsSwitching] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!isMenuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  const handleNavSwitch = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href === pathname || isSwitching) {
      return;
    }

    event.preventDefault();
    setIsMenuOpen(false);
    setIsSwitching(true);

    // Show loader first, then navigate.
    window.setTimeout(() => {
      router.push(href);
      setIsSwitching(false);
    }, 420);
  };

  const openAuditModal = () => {
    setIsMenuOpen(false);
    setIsAuditModalOpen(true);
  };

  return (
    <>
      <FreeAuditModal
        open={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />
      {isSwitching ? (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-background/70 backdrop-blur-sm">
          <div className="lc-reveal rounded-full" data-visible="true" data-variant="fade">
            <div className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-background px-4 py-2 shadow-sm dark:border-white/10">
              <span className="h-5 w-5 animate-spin rounded-full border-2 border-(--brand)/30 border-t-(--accent)" />
              <span className="text-sm font-medium text-foreground/80">
                Switching...
              </span>
            </div>
          </div>
        </div>
      ) : null}

      <header className="sticky top-0 z-50 border-b border-black/10 bg-background/72 backdrop-blur-xl dark:border-white/10">
        <div className="border-b border-black/10 bg-[color-mix(in_oklab,var(--brand)_14%,var(--background))] px-3 py-2 text-xs text-foreground/85 dark:border-white/10 sm:px-5">
          <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-2 sm:gap-3">
            <div className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-1">
              <a
                href={`mailto:${contactDetails.email}`}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-(--brand)"
                aria-label={`Email ${contactDetails.email}`}
              >
                <span className="text-sm leading-none" aria-hidden="true">
                  @
                </span>
                <span className="truncate">{contactDetails.email}</span>
              </a>
              <a
                href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-(--brand)"
                aria-label={`Call ${contactDetails.phone}`}
              >
                <span className="text-sm leading-none" aria-hidden="true">
                  &#9742;
                </span>
                <span>{contactDetails.phone}</span>
              </a>
            </div>

            <div className="flex items-center gap-1">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-black/10 bg-background/75 text-foreground/80 transition-colors hover:border-(--brand)/45 hover:text-(--brand) dark:border-white/10"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto mt-2 flex w-full max-w-6xl items-center justify-between gap-4 rounded-2xl border border-black/10 bg-background/80 px-3 py-3 shadow-[0_10px_32px_-24px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:px-5 dark:border-white/10">
        <Link
          href="/"
          className="group inline-flex min-w-0 flex-1 items-center gap-2 font-semibold tracking-tight"
          aria-label="Home"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-background/80 ring-1 ring-black/10 backdrop-blur dark:ring-white/10">
            <Image
              src="/logo.png"
              alt="LeadCatch logo"
              width={28}
              height={28}
              className="h-7 w-7"
              priority
            />
          </span>
          <span className="text-base text-foreground">
            LeadCatch
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-foreground/75 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-(--brand)"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className={[
            "ml-3 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border text-foreground transition-colors md:hidden",
            isMenuOpen
              ? "border-(--brand)/40 bg-[color-mix(in_oklab,var(--brand)_22%,transparent)]"
              : "border-black/10 bg-[color-mix(in_oklab,var(--brand)_12%,transparent)]",
          ].join(" ")}
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="relative h-4 w-5">
            <span
              className={[
                "absolute left-0 top-0 h-[2px] w-full rounded-full bg-current transition-transform",
                isMenuOpen ? "translate-y-[6px] rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 top-[6px] h-[2px] w-full rounded-full bg-current transition-opacity",
                isMenuOpen ? "opacity-0" : "opacity-100",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 top-[12px] h-[2px] w-full rounded-full bg-current transition-transform",
                isMenuOpen ? "-translate-y-[6px] -rotate-45" : "",
              ].join(" ")}
            />
          </span>
        </button>

        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            className="inline-flex h-10 items-center justify-center rounded-full bg-linear-to-r from-(--accent) to-(--accent-2) px-4 text-sm font-semibold text-(--brand-contrast) ring-1 ring-black/10 transition-[filter,transform] hover:brightness-105 active:translate-y-px dark:ring-white/10"
            onClick={openAuditModal}
          >
            Get Your Free Consultation
          </button>
        </div>
      </div>

      </header>

      {isMenuOpen ? (
        <div className="fixed inset-0 z-55 md:hidden" role="dialog" aria-modal="true">
          <button
            type="button"
            className="absolute inset-0 bg-black/45 backdrop-blur-sm"
            aria-label="Close menu overlay"
            onClick={() => setIsMenuOpen(false)}
          />

          <div className="absolute left-0 top-0 h-full w-[85%] max-w-sm border-r border-(--brand)/30 bg-[color-mix(in_oklab,var(--brand)_18%,var(--background))] backdrop-blur p-4">
            <div className="flex items-center justify-between gap-3">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 font-semibold tracking-tight"
                aria-label="Home"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-background/80 ring-1 ring-black/10 backdrop-blur dark:ring-white/10">
                  <Image
                    src="/logo.png"
                    alt="LeadCatch logo"
                    width={28}
                    height={28}
                    className="h-7 w-7"
                    priority
                  />
                </span>
                <span className="text-base text-foreground">LeadCatch</span>
              </Link>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-background/80 text-foreground transition-colors hover:bg-black/5 dark:hover:bg-white/10"
                aria-label="Close menu"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <span aria-hidden="true" className="text-lg leading-none">
                  ×
                </span>
              </button>
            </div>

            <nav className="mt-6 flex flex-col gap-4 text-sm">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "rounded-xl border border-black/10 bg-white/70 px-4 py-3 font-medium text-foreground transition-[background-color,border-color,color,transform,box-shadow] hover:-translate-y-px hover:border-(--brand)/45 hover:bg-[color-mix(in_oklab,var(--brand)_24%,white)] hover:text-(--brand-contrast) hover:shadow-sm active:translate-y-0",
                    item.href === pathname
                      ? "border-(--brand)/55 bg-[color-mix(in_oklab,var(--brand)_30%,white)] text-(--brand-contrast) ring-1 ring-(--brand)/30"
                      : "",
                  ].join(" ")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-6">
              <button
                type="button"
                className="inline-flex h-11 w-full items-center justify-center rounded-full bg-linear-to-r from-(--accent) to-(--accent-2) px-5 text-sm font-semibold text-(--brand-contrast) ring-1 ring-black/10 transition-[filter,transform] hover:brightness-105 active:translate-y-px dark:ring-white/10"
                onClick={openAuditModal}
              >
                Get Your Free Consultation
              </button>
              <div className="mt-3 text-xs text-(--foreground)/60">
                Tip: Press <span className="font-semibold">Esc</span> to close.
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

