import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Real Estate Marketing Agency in Noida | Lead Catch",
  description: "Learn about Lead Catch, your trusted digital marketing partner for real estate businesses in Noida. 10+ years of experience helping builders, interior designers, and architects grow through strategic lead generation.",
  keywords: "about Lead Catch, real estate marketing agency Noida, digital marketing company, lead generation experts, Noida marketing team, real estate marketing specialists, about our agency",
  openGraph: {
    title: "About Us | Real Estate Marketing Agency in Noida | Lead Catch",
    description: "Learn about Lead Catch, your trusted digital marketing partner for real estate businesses in Noida. 10+ years of experience helping businesses grow.",
    url: "https://www.leadcatch.in/about-us",
    type: "website",
  },
};

export default function AboutUsPage() {
  return (
    <main className="lc-page bg-white text-black dark:bg-black dark:text-white">
      <section className="relative overflow-hidden border-b border-black/10 bg-[color-mix(in_oklab,var(--accent)_10%,white)] dark:border-white/10 dark:bg-[color-mix(in_oklab,var(--accent)_14%,black)]">
        <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(900px_circle_at_15%_15%,color-mix(in_oklab,var(--accent)_34%,transparent),transparent_58%),radial-gradient(900px_circle_at_80%_10%,color-mix(in_oklab,var(--accent-2)_30%,transparent),transparent_56%),radial-gradient(800px_circle_at_50%_85%,color-mix(in_oklab,var(--brand-2)_18%,transparent),transparent_60%)]" />
        <div className="mx-auto w-full max-w-6xl px-3 py-16 sm:px-5 sm:py-20">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-(--accent)/30 bg-white/75 px-3 py-1 text-xs font-medium text-zinc-800 backdrop-blur dark:border-(--accent)/35 dark:bg-black/35 dark:text-zinc-100">
              Your Local Real Estate Marketing Experts
            </p>
          </Reveal>
          <Reveal delayMs={90}>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              We Build Complete Lead Generation Systems for Real Estate Success.
            </h1>
          </Reveal>
          <Reveal delayMs={150}>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-zinc-600 dark:text-zinc-300">
              We go beyond running campaigns. We design complete marketing pipelines for Noida businesses: from compelling offers and targeted ads to optimized landing pages and comprehensive tracking - ensuring your growth is both measurable and sustainable.
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
                Our Philosophy: Results-Driven Real Estate Marketing
              </h2>
            </Reveal>
            <Reveal delayMs={90}>
              <p className="mt-4 text-zinc-600 dark:text-zinc-300">
                The most effective path to real estate growth combines clear objectives, precise tracking, rapid implementation, and continuous optimization specifically for property and interior design markets.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Quality Leads Over Vanity Metrics",
                desc: "We focus on generating qualified leads, booked site visits, and measurable revenue impact for your real estate business.",
              },
              {
                title: "Speed Without Compromising Quality",
                desc: "We rapidly deploy landing pages, creatives, and marketing experiments while maintaining perfect tracking integrity.",
              },
              {
                title: "Transparent Performance Reporting",
                desc: "Clear dashboards and weekly updates focused on conversion rates, pipeline health, and ROI metrics that matter.",
              },
              {
                title: "Comprehensive Lead Tracking",
                desc: "Proper implementation of forms, call tracking, and analytics events to ensure every lead is captured and attributed correctly.",
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
            Our Proven Real Estate Marketing Process
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Audit",
                desc: "Comprehensive analysis of current advertising campaigns, SEO performance, tracking setup, and offer positioning for your real estate niche.",
              },
              {
                step: "02",
                title: "Plan",
                desc: "Strategic roadmap for real estate lead generation including testing priorities, campaign structure, and performance KPIs.",
              },
              {
                step: "03",
                title: "Build",
                desc: "Implementation of targeted campaigns, compelling creatives, high-converting landing pages, and comprehensive lead tracking.",
              },
              {
                step: "04",
                title: "Optimize",
                desc: "Continuous optimization through conversion rate testing, budget scaling, SEO improvements, and data-driven weekly reporting.",
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
                <div className="text-sm font-semibold">Ready for Your Free Real Estate Marketing Audit?</div>
                <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                  Share your business goals, target market, and budget. We'll deliver a customized action plan within 48 hours.
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