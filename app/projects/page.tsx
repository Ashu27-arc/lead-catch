import Link from "next/link";
import { Reveal } from "@/components/Reveal";

const projects = [
  {
    title: "Real Estate Builder — Lead Landing Pages + Ads",
    desc: "Offer positioning, lead forms, and tracking-ready landing pages for property inquiries.",
    tags: ["Meta + Google Ads", "Landing pages", "Lead tracking"],
    outcome: ["Higher lead relevance", "Better call/site-visit attribution", "Weekly creative improvements"],
  },
  {
    title: "Interior Design Studio — SEO + CRO for Inquiries",
    desc: "Technical/on-page SEO and conversion-focused content & pages for interior leads.",
    tags: ["SEO", "CRO", "Content"],
    outcome: ["Compounding local visibility", "More qualified inquiries", "Clear reporting on pipeline quality"],
  },
  {
    title: "Architect/Renovation — Google Ads + Call Tracking",
    desc: "High-intent search targeting and call/lead tracking improvements for project bookings.",
    tags: ["Google Ads", "Call tracking", "Analytics"],
    outcome: ["Stronger lead intent match", "Clean tracking for calls/forms", "Faster experiment cycle"],
  },
  {
    title: "Lead Capture Website — UX + Performance Build",
    desc: "Mobile-first marketing website/landing page build with SEO-ready structure and conversion flow.",
    tags: ["Website Development", "UX/UI", "Performance"],
    outcome: ["Faster load times", "Clearer messaging", "Improved conversion path"],
  },
] as const;

export default function ProjectsPage() {
  return (
    <main className="lc-page bg-white text-black dark:bg-black dark:text-white">
      <section className="relative overflow-hidden border-b border-black/10 dark:border-white/10">
        <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(800px_circle_at_20%_20%,color-mix(in_oklab,var(--brand)_35%,transparent),transparent_60%),radial-gradient(800px_circle_at_80%_20%,color-mix(in_oklab,var(--accent)_28%,transparent),transparent_55%),radial-gradient(800px_circle_at_50%_80%,color-mix(in_oklab,var(--brand-2)_28%,transparent),transparent_55%)]" />
        <div className="mx-auto w-full max-w-6xl px-3 py-16 sm:px-5 sm:py-20">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-700 backdrop-blur dark:border-white/10 dark:bg-black/40 dark:text-zinc-200">
              Results & project formats
            </p>
          </Reveal>
          <Reveal delayMs={90}>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Work built for real estate & interior leads.
            </h1>
          </Reveal>
          <Reveal delayMs={150}>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-zinc-600 dark:text-zinc-300">
              We tailor ads, SEO, landing pages, and tracking to your project type
              and offer — so inquiries are measurable and repeatable.
            </p>
          </Reveal>
          <Reveal delayMs={210}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/services"
                className="inline-flex h-11 w-full items-center justify-center rounded-full border border-black/15 bg-white px-5 text-sm font-medium text-black transition-[transform,background-color] hover:bg-[color-mix(in_oklab,var(--brand)_10%,transparent)] active:translate-y-px dark:border-white/15 dark:bg-black dark:text-white dark:hover:bg-[color-mix(in_oklab,var(--brand)_18%,transparent)] sm:w-auto"
              >
                Explore services
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex h-11 w-full items-center justify-center rounded-full bg-(--brand) px-5 text-sm font-medium text-(--brand-contrast) transition-[transform,filter,background-color] hover:bg-(--brand-2) hover:brightness-105 active:translate-y-px sm:w-auto"
              >
                Get a proposal
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-3 py-16 sm:px-5">
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((p) => (
            <Reveal key={p.title}>
              <article className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5">
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-zinc-700 dark:border-white/10 dark:bg-black dark:text-zinc-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h2 className="mt-4 text-xl font-semibold tracking-tight">
                  {p.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  {p.desc}
                </p>

                <div className="mt-5 rounded-2xl border border-black/10 bg-zinc-50 p-4 text-sm text-zinc-700 dark:border-white/10 dark:bg-black dark:text-zinc-200">
                  <div className="text-xs font-semibold text-zinc-500">
                    Outcome
                  </div>
                  <ul className="mt-3 space-y-2">
                    {p.outcome.map((o) => (
                      <li key={o} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-(--accent)" />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-black/10 bg-zinc-50 dark:border-white/10 dark:bg-white/5">
        <div className="mx-auto w-full max-w-6xl px-3 py-16 sm:px-5">
          <div className="rounded-3xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-black">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-semibold">Have something similar?</div>
                <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                  Share your project type and target city. We’ll propose the best
                  channel mix plus lead-capture deliverables.
                </div>
              </div>
              <Link
                href="/contact-us"
                className="inline-flex h-11 w-full items-center justify-center rounded-full bg-(--brand) px-5 text-sm font-medium text-(--brand-contrast) transition-colors hover:bg-(--brand-2) sm:w-auto"
              >
                Get proposal
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}