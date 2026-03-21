import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export default function AboutUsPage() {
  return (
    <main className="lc-page bg-white text-black dark:bg-black dark:text-white">
      <section className="relative overflow-hidden border-b border-black/10 bg-[color-mix(in_oklab,var(--accent)_10%,white)] dark:border-white/10 dark:bg-[color-mix(in_oklab,var(--accent)_14%,black)]">
        <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(900px_circle_at_15%_15%,color-mix(in_oklab,var(--accent)_34%,transparent),transparent_58%),radial-gradient(900px_circle_at_80%_10%,color-mix(in_oklab,var(--accent-2)_30%,transparent),transparent_56%),radial-gradient(800px_circle_at_50%_85%,color-mix(in_oklab,var(--brand-2)_18%,transparent),transparent_60%)]" />
        <div className="mx-auto w-full max-w-6xl px-3 py-16 sm:px-5 sm:py-20">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-(--accent)/30 bg-white/75 px-3 py-1 text-xs font-medium text-zinc-800 backdrop-blur dark:border-(--accent)/35 dark:bg-black/35 dark:text-zinc-100">
              Real estate & interior marketing, done end-to-end
            </p>
          </Reveal>
          <Reveal delayMs={90}>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              We build lead growth systems for real estate & interiors.
            </h1>
          </Reveal>
          <Reveal delayMs={150}>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-zinc-600 dark:text-zinc-300">
              We don’t just run campaigns. We design a complete pipeline for
              Noida businesses: offer → ads/SEO → lead landing pages → tracking →
              conversion improvements — so growth is measurable and repeatable.
            </p>
          </Reveal>

          <Reveal delayMs={210}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/services"
                className="inline-flex h-11 w-full items-center justify-center rounded-full bg-(--brand) px-5 text-sm font-medium text-(--brand-contrast) transition-[transform,filter,background-color] hover:bg-(--brand-2) hover:brightness-105 active:translate-y-px sm:w-auto"
              >
                Explore services
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex h-11 w-full items-center justify-center rounded-full border border-black/15 bg-white px-5 text-sm font-medium text-black transition-[transform,background-color] hover:bg-[color-mix(in_oklab,var(--brand)_10%,transparent)] active:translate-y-px dark:border-white/15 dark:bg-black dark:text-white dark:hover:bg-[color-mix(in_oklab,var(--brand)_18%,transparent)] sm:w-auto"
              >
                Get free consultation
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-3 py-16 sm:px-5">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                What we believe
              </h2>
            </Reveal>
            <Reveal delayMs={90}>
              <p className="mt-4 text-zinc-600 dark:text-zinc-300">
                The best “shortcut” to growth is discipline: clear goals, clean
                tracking, fast shipping, and continuous testing for real estate
                and interior leads.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Qualified inquiries > vanity",
                desc: "We optimize for lead quality, booked site visits, and revenue impact.",
              },
              {
                title: "Speed with quality",
                desc: "We ship lead pages, creatives, and experiments fast without breaking tracking.",
              },
              {
                title: "Clear reporting",
                desc: "Simple dashboards and weekly updates focused on conversion and pipeline.",
              },
              {
                title: "Lead tracking that works",
                desc: "Forms, calls, and analytics events implemented properly for measurable growth.",
              },
            ].map((v) => (
              <Reveal key={v.title} delayMs={120}>
                <div className="rounded-3xl border border-(--accent)/20 bg-[color-mix(in_oklab,var(--accent)_8%,white)] p-6 shadow-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-(--accent)/40 hover:shadow-lg dark:border-(--accent)/25 dark:bg-[color-mix(in_oklab,var(--accent)_12%,black)]">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    {v.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[color-mix(in_oklab,var(--accent)_8%,white)] dark:border-white/10 dark:bg-[color-mix(in_oklab,var(--accent)_12%,black)]">
        <div className="mx-auto w-full max-w-6xl px-3 py-16 sm:px-5">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Our process
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Audit",
                desc: "Current ads/SEO, tracking, landing pages, and offer clarity for your niche.",
              },
              {
                step: "02",
                title: "Plan",
                desc: "Roadmap for lead generation: experiments, priorities, and KPIs that matter.",
              },
              {
                step: "03",
                title: "Build",
                desc: "Campaigns, creatives, lead landing pages, and tracking events (calls/forms).",
              },
              {
                step: "04",
                title: "Optimize",
                desc: "CRO, budget scaling, SEO iterations, and weekly reporting based on pipeline quality.",
              },
            ].map((p) => (
              <div
                key={p.step}
                className="rounded-3xl border border-(--accent)/20 bg-white/90 p-6 shadow-sm dark:border-(--accent)/25 dark:bg-black/70"
              >
                <div className="inline-flex rounded-full border border-(--accent)/25 bg-[color-mix(in_oklab,var(--accent)_12%,white)] px-2 py-0.5 text-xs font-semibold text-zinc-700 dark:bg-[color-mix(in_oklab,var(--accent)_14%,black)] dark:text-zinc-200">
                  {p.step}
                </div>
                <div className="mt-2 text-lg font-semibold tracking-tight">
                  {p.title}
                </div>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-black">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-semibold">Want a free growth audit?</div>
                <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                  Share your goal, project type, and budget range. We’ll send an
                  action plan within 48 hours.
                </div>
              </div>
              <Link
                href="/contact-us"
                className="inline-flex h-11 w-full items-center justify-center rounded-full bg-(--brand) px-5 text-sm font-medium text-(--brand-contrast) transition-colors hover:bg-(--brand-2) sm:w-auto"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}