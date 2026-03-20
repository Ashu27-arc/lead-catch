/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

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

  const handleNavSwitch = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href === pathname || isSwitching) {
      return;
    }

    event.preventDefault();
    setIsSwitching(true);

    // Show loader first, then navigate.
    window.setTimeout(() => {
      router.push(href);
      setIsSwitching(false);
    }, 420);
  };

  return (
    <>
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
          onClick={(e) => handleNavSwitch(e, "/")}
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
              onClick={(e) => handleNavSwitch(e, item.href)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact-us"
            className="inline-flex h-10 items-center justify-center rounded-full bg-linear-to-r from-(--accent) to-(--accent-2) px-4 text-sm font-semibold text-(--brand-contrast) ring-1 ring-black/10 transition-[filter,transform] hover:brightness-105 active:translate-y-px dark:ring-white/10"
            onClick={(e) => handleNavSwitch(e, "/contact-us")}
          >
            Get a Free Audit
          </Link>
        </div>
      </div>
      </header>
    </>
  );
}

