import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export default function AboutUsPage() {
  return (
    <main className="bg-white text-black dark:bg-black dark:text-white">
      <section className="relative overflow-hidden border-b border-black/10 dark:border-white/10">
        <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(800px_circle_at_20%_20%,color-mix(in_oklab,var(--brand)_35%,transparent),transparent_60%),radial-gradient(800px_circle_at_80%_20%,color-mix(in_oklab,var(--accent)_28%,transparent),transparent_55%),radial-gradient(800px_circle_at_50%_80%,color-mix(in_oklab,var(--brand-2)_28%,transparent),transparent_55%)]" />
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-700 backdrop-blur dark:border-white/10 dark:bg-black/40 dark:text-zinc-200">
              About LeadCatch Studio
            </p>
          </Reveal>
          <Reveal delayMs={90}>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              We build growth systems — marketing + development, together.
            </h1>
          </Reveal>
          <Reveal delayMs={150}>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-zinc-600 dark:text-zinc-300">
              We don’t just run campaigns. We design end-to-end pipeline: offer →
              ads/SEO → landing pages → tracking → conversion improvements — so
              growth is measurable and repeatable.
            </p>
          </Reveal>

          <Reveal delayMs={210}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/services"
                className="inline-flex h-11 items-center justify-center rounded-full bg-(--brand) px-5 text-sm font-medium text-(--brand-contrast) transition-[transform,filter,background-color] hover:bg-(--brand-2) hover:brightness-105 active:translate-y-px"
              >
                Explore services
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex h-11 items-center justify-center rounded-full border border-black/15 bg-white px-5 text-sm font-medium text-black transition-[transform,background-color] hover:bg-[color-mix(in_oklab,var(--brand)_10%,transparent)] active:translate-y-px dark:border-white/15 dark:bg-black dark:text-white dark:hover:bg-[color-mix(in_oklab,var(--brand)_18%,transparent)]"
              >
                Book a call
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
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
                data, fast shipping, and continuous testing.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Pipeline > vanity",
                desc: "Leads, meetings, revenue — not likes.",
              },
              {
                title: "Speed with quality",
                desc: "Landing pages & experiments ship fast.",
              },
              {
                title: "Clear reporting",
                desc: "Simple dashboards and weekly updates.",
              },
              {
                title: "Dev-friendly",
                desc: "Tracking, forms, pages — properly implemented.",
              },
            ].map((v) => (
              <Reveal key={v.title} delayMs={120}>
                <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5">
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

      <section className="border-y border-black/10 bg-zinc-50 dark:border-white/10 dark:bg-white/5">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Our process
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Audit",
                desc: "Current channels, tracking, landing pages, offer clarity.",
              },
              {
                step: "02",
                title: "Plan",
                desc: "90-day roadmap: experiments + priorities + KPIs.",
              },
              {
                step: "03",
                title: "Build",
                desc: "Campaigns, creatives, landing pages, tracking events.",
              },
              {
                step: "04",
                title: "Optimize",
                desc: "CRO, budget scaling, SEO iterations, weekly reporting.",
              },
            ].map((p) => (
              <div
                key={p.step}
                className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black"
              >
                <div className="text-xs font-semibold text-zinc-500">
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
                <div className="text-sm font-semibold">Want a quick audit?</div>
                <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                  Share your goal and budget range. We’ll send an action plan
                  within 48 hours.
                </div>
              </div>
              <Link
                href="/contact-us"
                className="inline-flex h-11 items-center justify-center rounded-full bg-(--brand) px-5 text-sm font-medium text-(--brand-contrast) transition-colors hover:bg-(--brand-2)"
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