import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Facebook & Google Ads for Real Estate in Noida | PPC Services",
  description: "Targeted Meta and Google advertising campaigns for real estate businesses in Noida. Get more quality leads with our PPC services for builders, interior designers, and architects.",
  keywords: "Facebook Ads Noida, Google Ads for real estate, PPC advertising Noida, real estate lead generation, Meta Ads for properties, Google Ads for builders, PPC for interior designers, real estate advertising agency",
  openGraph: {
    title: "Facebook & Google Ads for Real Estate in Noida | PPC Services",
    description: "Targeted Meta and Google advertising campaigns for real estate businesses in Noida. Get more quality leads with our PPC services.",
    url: "https://www.leadcatch.in/services/ppc",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Facebook & Google Ads for Real Estate",
  description: "Targeted Meta and Google advertising campaigns for real estate businesses in Noida. Get more quality leads with our PPC services for builders, interior designers, and architects.",
  provider: {
    "@type": "LocalBusiness",
    name: "Lead Catch",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
  },
  areaServed: {
    "@type": "City",
    name: "Noida",
  },
  serviceType: "PPC Advertising Services",
};

export default function PPCPage() {
  return (
    <main className="lc-page bg-white text-black dark:bg-black dark:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="relative overflow-hidden border-b border-black/10 bg-[color-mix(in_oklab,var(--brand)_8%,white)] dark:border-white/10 dark:bg-[color-mix(in_oklab,var(--brand)_12%,black)]">
        <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(800px_circle_at_20%_20%,color-mix(in_oklab,var(--brand)_35%,transparent),transparent_60%),radial-gradient(800px_circle_at_80%_20%,color-mix(in_oklab,var(--accent)_28%,transparent),transparent_55%),radial-gradient(800px_circle_at_50%_80%,color-mix(in_oklab,var(--brand-2)_28%,transparent),transparent_55%)]" />
        <div className="mx-auto w-full max-w-6xl px-3 py-16 sm:px-5 sm:py-20">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-(--brand)/30 bg-white/80 px-3 py-1 text-xs font-medium text-zinc-800 backdrop-blur dark:border-(--brand)/35 dark:bg-black/35 dark:text-zinc-100">
              PPC Advertising Services
            </p>
          </Reveal>
          <Reveal delayMs={90}>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Facebook & Google Ads That Generate Quality Leads for Real Estate
            </h1>
          </Reveal>
          <Reveal delayMs={150}>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-zinc-600 dark:text-zinc-300">
              We run targeted Meta and Google advertising campaigns specifically designed for real estate listings, property developments, and interior design services. From audience targeting to creative development and lead form optimization—we handle everything.
            </p>
          </Reveal>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact-us"
              className="inline-flex h-11 w-full items-center justify-center rounded-full bg-(--brand) px-5 text-sm font-medium text-(--brand-contrast) transition-[transform,filter,background-color] hover:bg-(--brand-2) hover:brightness-105 active:translate-y-px sm:w-auto"
            >
              Get your free PPC audit
            </Link>
            <Link
              href="/services"
              className="inline-flex h-11 w-full items-center justify-center rounded-full border border-black/15 bg-white px-5 text-sm font-medium text-black transition-[transform,background-color] hover:bg-[color-mix(in_oklab,var(--brand)_10%,transparent)] active:translate-y-px dark:border-white/15 dark:bg-black dark:text-white dark:hover:bg-[color-mix(in_oklab,var(--brand)_18%,transparent)] sm:w-auto"
            >
              View all services
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-3 py-16 sm:px-5">
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Why Real Estate Businesses Choose Our PPC Services
              </h2>
            </Reveal>
            <Reveal delayMs={90}>
              <p className="mt-4 text-zinc-600 dark:text-zinc-300">
                Generic PPC agencies don't understand real estate. We specialize in property marketing, interior design promotion, and architectural services. Our campaigns are built on deep market knowledge of Noida's real estate landscape, ensuring your ads reach the right buyers at the right time.
              </p>
            </Reveal>
          </div>
          <Reveal delayMs={120}>
            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
              <h3 className="text-lg font-semibold tracking-tight">Our PPC Process</h3>
              <ul className="mt-5 space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
                {[
                  "Complete audit of your current ad campaigns and tracking setup",
                  "Target audience research based on property type, budget, and location",
                  "Custom creative development for property showcases and service promotions",
                  "A/B testing of ad copy, visuals, and landing pages for maximum conversion",
                  "Weekly performance reports with clear recommendations",
                  "Continuous optimization based on real-time data and market trends",
                ].map((point, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-(--accent)" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-black/10 bg-zinc-50/80 dark:border-white/10 dark:bg-white/5">
        <div className="mx-auto w-full max-w-6xl px-3 py-16 sm:px-5">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              PPC Services We Offer
            </h2>
          </Reveal>
          <Reveal delayMs={90}>
            <p className="mt-4 text-zinc-600 dark:text-zinc-300">
              Comprehensive PPC solutions tailored for real estate and interior design businesses in Noida.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Meta Ads (Facebook & Instagram)",
                desc: "Targeted advertising campaigns on Facebook and Instagram to reach potential homebuyers, property investors, and interior design clients. Includes custom audience building, retargeting, and creative optimization.",
                features: ["Property listing promotions", "Lead generation forms", "Lookalike audience targeting", "Retargeting campaigns", "Creative testing"],
              },
              {
                title: "Google Ads (Search & Display)",
                desc: "Strategic Google advertising to capture high-intent searches for properties, interior designers, and architectural services. Includes keyword research, ad copy optimization, and bid management.",
                features: ["Search ads for high-intent keywords", "Display ads for brand awareness", "Google My Business integration", "Negative keyword optimization", "Performance tracking"],
              },
              {
                title: "LinkedIn Ads for B2B",
                desc: "Professional advertising on LinkedIn to reach property developers, real estate agents, and corporate clients for interior design and architectural services.",
                features: ["Company targeting", "Job title targeting", "Sponsored content", "Lead gen forms", "Analytics dashboard"],
              },
              {
                title: "YouTube Video Ads",
                desc: "Engaging video advertisements showcasing property tours, design portfolios, and client testimonials to build trust and drive inquiries.",
                features: ["Property tour videos", "Client testimonial ads", "Design showcase videos", "Skippable and non-skippable formats", "Audience segmentation"],
              },
            ].map((service, i) => (
              <Reveal key={service.title} delayMs={120 + i * 30}>
                <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-black">
                  <h3 className="text-lg font-semibold tracking-tight">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    {service.desc}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
                    {service.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-(--brand)" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-3 py-16 sm:px-5">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            What You Get With Our PPC Services
          </h2>
        </Reveal>
        <Reveal delayMs={90}>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300">
            Transparent reporting and measurable results for every campaign we run.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Weekly Performance Reports",
              desc: "Detailed reports showing spend, impressions, clicks, leads, and cost per lead. We break down what's working and what needs improvement.",
            },
            {
              title: "Conversion Tracking Setup",
              desc: "Complete tracking implementation including Google Analytics, Facebook Pixel, and custom conversion events to measure every interaction.",
            },
            {
              title: "Continuous A/B Testing",
              desc: "Regular testing of ad creatives, copy, landing pages, and targeting options to improve performance and reduce cost per acquisition.",
            },
            {
              title: "Dedicated Account Manager",
              desc: "A single point of contact who understands your business and provides strategic recommendations for campaign optimization.",
            },
            {
              title: "ROI-Focused Strategy",
              desc: "Every campaign is designed with your return on investment in mind. We focus on quality leads that convert, not just vanity metrics.",
            },
            {
              title: "Market Insights",
              desc: "Regular updates on Noida's real estate market trends, competitor analysis, and opportunities to stay ahead of the competition.",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delayMs={120 + i * 30}>
              <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
                <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-black/10 bg-zinc-50/80 dark:border-white/10 dark:bg-white/5">
        <div className="mx-auto w-full max-w-6xl px-3 py-16 sm:px-5">
          <div className="rounded-3xl border border-black/10 bg-white p-8 dark:border-white/10 dark:bg-black">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">
                  Ready to Generate More Quality Leads?
                </h2>
                <p className="mt-2 text-zinc-600 dark:text-zinc-300">
                  Get a free PPC audit and see how we can improve your advertising performance.
                </p>
              </div>
              <Link
                href="/contact-us"
                className="inline-flex h-11 w-full items-center justify-center rounded-full bg-(--brand) px-5 text-sm font-medium text-(--brand-contrast) transition-colors hover:bg-(--brand-2) sm:w-auto"
              >
                Schedule Your Free Audit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
