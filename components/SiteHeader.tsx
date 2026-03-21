/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FreeAuditModal } from "@/components/FreeAuditModal";

const navItems = [
  { href: "/about-us", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact-us", label: "Contact" },
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

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
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

      <header className="sticky top-0 z-50 border-b border-black/10 bg-background/70 backdrop-blur dark:border-white/10">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 font-semibold tracking-tight"
          aria-label="Home"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-(--background)/80 ring-1 ring-black/10 backdrop-blur dark:ring-white/10">
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
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-background/70 text-foreground md:hidden"
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
            Get a Free Audit
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="fixed inset-0 z-55 md:hidden" role="dialog" aria-modal="true">
          <button
            type="button"
            className="absolute inset-0 bg-background/60 backdrop-blur-sm"
            aria-label="Close menu overlay"
            onClick={() => setIsMenuOpen(false)}
          />

          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm border-l border-black/10 bg-background/95 backdrop-blur p-4">
            <div className="flex items-center justify-between gap-3">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 font-semibold tracking-tight"
                aria-label="Home"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-(--background)/80 ring-1 ring-black/10 backdrop-blur dark:ring-white/10">
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
                    "rounded-xl border border-black/10 bg-white/70 px-4 py-3 font-medium text-foreground",
                    item.href === pathname ? "ring-1 ring-(--brand)" : "",
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
                Get a Free Audit
              </button>
              <div className="mt-3 text-xs text-(--foreground)/60">
                Tip: Press <span className="font-semibold">Esc</span> to close.
              </div>
            </div>
          </div>
        </div>
      ) : null}
      </header>
    </>
  );
}

