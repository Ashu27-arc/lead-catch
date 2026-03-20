import Link from "next/link";
import { Reveal } from "@/components/Reveal";

const serviceGroups = [
  {
    title: "Marketing",
    desc: "Meta + Google lead generation and Noida-focused SEO for real estate & interior design businesses.",
    items: [
      {
        title: "Digital Advertising",
        desc: "Meta + Google campaigns for property and interior leads: targeting, creatives direction, lead forms, and weekly optimization.",
      },
      {
        title: "SEO for Real Estate & Interiors",
        desc: "Technical SEO, on-page improvements, and content planning that compounds rankings and brings qualified local search traffic.",
      },
    ],
  },
  {
    title: "Development",
    desc: "Conversion-ready sites and apps designed to capture leads and track pipeline impact.",
    items: [
      {
        title: "Website Development",
        desc: "Fast marketing websites/landing pages for builders and interior studios with SEO-ready structure, UX, and lead capture.",
      },
      {
        title: "Mobile App Development",
        desc: "Android/iOS apps with clean UX, API integration, analytics events, and production-ready builds for your customer journey.",
      },
    ],
  },
] as const;

export default function ServicesPage() {
  return (
    <main className="bg-white text-black dark:bg-black dark:text-white">
      <section className="relative overflow-hidden border-b border-black/10 dark:border-white/10">
        <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(800px_circle_at_20%_20%,color-mix(in_oklab,var(--brand)_35%,transparent),transparent_60%),radial-gradient(800px_circle_at_80%_20%,color-mix(in_oklab,var(--accent)_28%,transparent),transparent_55%),radial-gradient(800px_circle_at_50%_80%,color-mix(in_oklab,var(--brand-2)_28%,transparent),transparent_55%)]" />
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-700 backdrop-blur dark:border-white/10 dark:bg-black/40 dark:text-zinc-200">
              Services for real estate & interiors
            </p>
          </Reveal>
          <Reveal delayMs={90}>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Built to generate qualified leads in Noida.
            </h1>
          </Reveal>
          <Reveal delayMs={150}>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-zinc-600 dark:text-zinc-300">
              Digital advertising, SEO, lead-capture websites, and mobile apps —
              delivered with clear scope, weekly reporting, and conversion-focused execution.
            </p>
          </Reveal>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/projects"
              className="inline-flex h-11 items-center justify-center rounded-full bg-(--brand) px-5 text-sm font-medium text-(--brand-contrast) transition-[transform,filter,background-color] hover:bg-(--brand-2) hover:brightness-105 active:translate-y-px"
            >
              See results
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex h-11 items-center justify-center rounded-full border border-black/15 bg-white px-5 text-sm font-medium text-black transition-[transform,background-color] hover:bg-[color-mix(in_oklab,var(--brand)_10%,transparent)] active:translate-y-px dark:border-white/15 dark:bg-black dark:text-white dark:hover:bg-[color-mix(in_oklab,var(--brand)_18%,transparent)]"
            >
              Get a free consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              What you get
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-300">
              Clear deliverables, weekly reporting, and fast iterations. We’ll
              align on KPIs and ship experiments every month.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { k: "Setup", v: "Tracking + offer/landing audit + baseline" },
              { k: "Cadence", v: "Weekly reporting + priority updates" },
              { k: "Execution", v: "Ads + creatives + lead pages" },
              { k: "Optimization", v: "CRO + scaling + SEO learning loop" },
            ].map((x) => (
              <div
                key={x.k}
                className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5"
              >
                <div className="text-xs font-semibold text-zinc-500">{x.k}</div>
                <div className="mt-2 text-lg font-semibold tracking-tight">
                  {x.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-zinc-50 dark:border-white/10 dark:bg-white/5">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
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
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {g.items.map((s) => (
                    <Reveal key={s.title} delayMs={120}>
                      <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-black">
                        <h3 className="text-lg font-semibold tracking-tight">
                          {s.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                          {s.desc}
                        </p>
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
                  Not sure what you need?
                </div>
                <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                  Share your business type, city (Noida), and lead goals. We’ll
                  recommend a plan that matches your funnel.
                </div>
              </div>
              <Link
                href="/contact-us"
                className="inline-flex h-11 items-center justify-center rounded-full bg-(--brand) px-5 text-sm font-medium text-(--brand-contrast) transition-colors hover:bg-(--brand-2)"
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