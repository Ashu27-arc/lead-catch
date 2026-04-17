import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Services for Real Estate in Noida | Lead Catch",
  description: "Comprehensive digital marketing services for real estate businesses in Noida. We offer Meta & Google Ads, local SEO, website development, and mobile apps for builders, interior designers, and architects.",
  keywords: "digital marketing services Noida, real estate marketing services, Google Ads for real estate, SEO services Noida, website development for builders, mobile app development for real estate, interior design marketing, property marketing services",
  openGraph: {
    title: "Digital Marketing Services for Real Estate in Noida | Lead Catch",
    description: "Comprehensive digital marketing services for real estate businesses in Noida. We offer Meta & Google Ads, local SEO, website development, and mobile apps.",
    url: "https://www.leadcatch.in/services",
    type: "website",
  },
};

const serviceGroups = [
  {
    title: "Marketing",
    desc: "Meta + Google lead generation and Noida-focused SEO for real estate & interior design businesses.",
    items: [
      {
        title: "Digital Advertising",
        desc: "Specialized Meta and Google advertising campaigns designed specifically for real estate listings, property developments, and interior design services. Includes audience targeting, creative development, lead form optimization, and continuous performance improvement.",
        href: "/services/ppc",
      },
      {
        title: "SEO for Real Estate & Interiors",
        desc: "Complete SEO solution for real estate businesses including technical optimization, local search enhancement, content strategy, and authority building to rank higher in Noida property searches.",
        href: "/services/local-seo",
      },
    ],
  },
  {
    title: "Development",
    desc: "Conversion-ready sites and apps designed to capture leads and track pipeline impact.",
    items: [
      {
        title: "Website Development",
        desc: "Professional website development for real estate companies featuring property showcases, lead capture forms, mobile optimization, and integration with CRM systems for maximum conversion.",
        href: "/services/web-design",
      },
      {
        title: "Mobile App Development",
        desc: "Custom mobile applications for real estate businesses including property browsing, virtual tours, client management, and push notifications to engage potential buyers throughout their journey.",
        href: "/services/mobile-app",
      },
    ],
  },
] as const;

export default function ServicesPage() {
  return (
    <main className="lc-page bg-white text-black dark:bg-black dark:text-white">
      <section className="relative overflow-hidden border-b border-black/10 bg-[color-mix(in_oklab,var(--brand)_8%,white)] dark:border-white/10 dark:bg-[color-mix(in_oklab,var(--brand)_12%,black)]">
        <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(800px_circle_at_20%_20%,color-mix(in_oklab,var(--brand)_35%,transparent),transparent_60%),radial-gradient(800px_circle_at_80%_20%,color-mix(in_oklab,var(--accent)_28%,transparent),transparent_55%),radial-gradient(800px_circle_at_50%_80%,color-mix(in_oklab,var(--brand-2)_28%,transparent),transparent_55%)]" />
        <div className="mx-auto w-full max-w-6xl px-3 py-16 sm:px-5 sm:py-20">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-(--brand)/30 bg-white/80 px-3 py-1 text-xs font-medium text-zinc-800 backdrop-blur dark:border-(--brand)/35 dark:bg-black/35 dark:text-zinc-100">
              Comprehensive Real Estate Marketing Solutions
            </p>
          </Reveal>
          <Reveal delayMs={90}>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Drive Real Estate Growth with Our Expert Marketing Services.
            </h1>
          </Reveal>
          <Reveal delayMs={150}>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-zinc-600 dark:text-zinc-300">
              From targeted advertising and local SEO to high-converting websites and mobile apps - we deliver comprehensive digital marketing solutions with clear reporting and proven results for real estate businesses.
            </p>
          </Reveal>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/projects"
              className="inline-flex h-11 w-full items-center justify-center rounded-full bg-(--brand) px-5 text-sm font-medium text-(--brand-contrast) transition-[transform,filter,background-color] hover:bg-(--brand-2) hover:brightness-105 active:translate-y-px sm:w-auto"
            >
              See results
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex h-11 w-full items-center justify-center rounded-full border border-black/15 bg-white px-5 text-sm font-medium text-black transition-[transform,background-color] hover:bg-[color-mix(in_oklab,var(--brand)_10%,transparent)] active:translate-y-px dark:border-white/15 dark:bg-black dark:text-white dark:hover:bg-[color-mix(in_oklab,var(--brand)_18%,transparent)] sm:w-auto"
            >
              Get a free consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-3 py-16 sm:px-5">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              What Makes Our Real Estate Marketing Different
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-300">
              We deliver measurable results through strategic planning, transparent reporting, rapid execution, and continuous optimization tailored specifically for real estate and interior design markets.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { k: "Strategic Foundation", v: "Comprehensive audit + tracking setup + performance baseline" },
              { k: "Weekly Progress", v: "Detailed reports + campaign optimization + strategy updates" },
              { k: "Targeted Execution", v: "Real estate ads + compelling creatives + optimized landing pages" },
              { k: "Continuous Growth", v: "Conversion optimization + budget scaling + SEO enhancement" },
            ].map((x) => (
              <div
                key={x.k}
                className="rounded-2xl border border-(--brand)/20 bg-[color-mix(in_oklab,var(--brand)_8%,white)] p-6 shadow-sm dark:border-(--brand)/25 dark:bg-[color-mix(in_oklab,var(--brand)_12%,black)]"
              >
                <div className="inline-flex rounded-full border border-(--brand)/25 bg-white px-2 py-0.5 text-xs font-semibold text-zinc-700 dark:bg-black dark:text-zinc-200">{x.k}</div>
                <div className="mt-2 text-lg font-semibold tracking-tight">
                  {x.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-zinc-50/80 dark:border-white/10 dark:bg-white/5">
        <div className="mx-auto w-full max-w-6xl px-3 py-16 sm:px-5">
          <div className="grid gap-12 lg:grid-cols-2">
            {serviceGroups.map((g) => (
              <div key={g.title}>
                <Reveal>
                  <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    {g.title}
                  </h2>
                </Reveal>
                <Reveal delayMs={90}>
                  <p className="mt-4 text-zinc-600 dark:text-zinc-300">
                    {g.desc}
                  </p>
                </Reveal>
                <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:items-stretch">
                  {g.items.map((s) => (
                    <Reveal key={s.title} delayMs={120}>
                      <div className="flex min-h-[280px] flex-col rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-(--brand)/35 hover:shadow-lg dark:border-white/10 dark:bg-black">
                        <h3 className="text-lg font-semibold tracking-tight">
                          {s.title}
                        </h3>
                        <p className="mt-2 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                          {s.desc}
                        </p>
                        <Link
                          href={s.href}
                          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-(--brand) transition-colors hover:text-(--brand-2)"
                        >
                          Read more
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-black">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-semibold">
                  Unsure Which Real Estate Marketing Service You Need?
                </div>
                <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                  Tell us about your real estate business type, target locations, and lead generation goals. We'll recommend the perfect marketing mix for your success.
                </div>
              </div>
              <Link
                href="/contact-us"
                className="inline-flex h-11 w-full items-center justify-center rounded-full bg-(--brand) px-5 text-sm font-medium text-(--brand-contrast) transition-colors hover:bg-(--brand-2) sm:w-auto"
              >
                Talk to us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}