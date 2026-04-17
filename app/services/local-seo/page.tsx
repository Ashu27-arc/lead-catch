import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Local SEO Services for Real Estate in Noida | Lead Catch",
  description: "Complete local SEO solution for real estate businesses in Noida. Improve your Google rankings, optimize Google Business Profile, and attract more qualified local leads.",
  keywords: "local SEO Noida, SEO for real estate, Google Business Profile optimization, local search ranking, real estate SEO services, Noida business listing, local SEO for builders, interior design SEO Noida",
  openGraph: {
    title: "Local SEO Services for Real Estate in Noida | Lead Catch",
    description: "Complete local SEO solution for real estate businesses in Noida. Improve your Google rankings and attract more qualified local leads.",
    url: "https://www.leadcatch.in/services/local-seo",
    type: "website",
  },
};

export default function LocalSEOPage() {
  return (
    <main className="lc-page bg-white text-black dark:bg-black dark:text-white">
      <section className="relative overflow-hidden border-b border-black/10 bg-[color-mix(in_oklab,var(--brand)_8%,white)] dark:border-white/10 dark:bg-[color-mix(in_oklab,var(--brand)_12%,black)]">
        <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(800px_circle_at_20%_20%,color-mix(in_oklab,var(--brand)_35%,transparent),transparent_60%),radial-gradient(800px_circle_at_80%_20%,color-mix(in_oklab,var(--accent)_28%,transparent),transparent_55%),radial-gradient(800px_circle_at_50%_80%,color-mix(in_oklab,var(--brand-2)_28%,transparent),transparent_55%)]" />
        <div className="mx-auto w-full max-w-6xl px-3 py-16 sm:px-5 sm:py-20">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-(--brand)/30 bg-white/80 px-3 py-1 text-xs font-medium text-zinc-800 backdrop-blur dark:border-(--brand)/35 dark:bg-black/35 dark:text-zinc-100">
              Local SEO Services
            </p>
          </Reveal>
          <Reveal delayMs={90}>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Local SEO That Gets Your Real Estate Business Found in Noida
            </h1>
          </Reveal>
          <Reveal delayMs={150}>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-zinc-600 dark:text-zinc-300">
              Complete SEO solution for real estate businesses including technical optimization, local search enhancement, content strategy, and authority building to rank higher in Noida property searches. We help you dominate local search results and attract qualified leads.
            </p>
          </Reveal>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact-us"
              className="inline-flex h-11 w-full items-center justify-center rounded-full bg-(--brand) px-5 text-sm font-medium text-(--brand-contrast) transition-[transform,filter,background-color] hover:bg-(--brand-2) hover:brightness-105 active:translate-y-px sm:w-auto"
            >
              Get your free SEO audit
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
                Why Local SEO Matters for Real Estate
              </h2>
            </Reveal>
            <Reveal delayMs={90}>
              <p className="mt-4 text-zinc-600 dark:text-zinc-300">
                When potential clients search for "real estate agents in Noida" or "interior designers near me," you need to appear at the top. Our local SEO strategies are specifically designed for Noida's real estate market, ensuring your business gets found by people actively looking for your services.
              </p>
            </Reveal>
          </div>
          <Reveal delayMs={120}>
            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
              <h3 className="text-lg font-semibold tracking-tight">Our Local SEO Process</h3>
              <ul className="mt-5 space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
                {[
                  "Complete website audit and technical SEO assessment",
                  "Google Business Profile optimization and verification",
                  "Local keyword research for Noida real estate market",
                  "On-page optimization for location-specific pages",
                  "Citation building on local business directories",
                  "Review management and reputation enhancement",
                  "Content strategy for local search visibility",
                  "Monthly performance tracking and reporting",
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
              Local SEO Services We Provide
            </h2>
          </Reveal>
          <Reveal delayMs={90}>
            <p className="mt-4 text-zinc-600 dark:text-zinc-300">
              Comprehensive local SEO solutions tailored for real estate and interior design businesses in Noida.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Google Business Profile Optimization",
                desc: "Complete setup and optimization of your Google Business Profile to improve local search visibility. We ensure accurate business information, appealing photos, and regular posts.",
                features: ["Profile verification", "Category optimization", "Photo uploads", "Post management", "Review response strategy"],
              },
              {
                title: "Local Keyword Research",
                desc: "In-depth research of local search terms that potential clients use when looking for real estate services in Noida. We target high-intent keywords that drive qualified traffic.",
                features: ["Location-based keywords", "Service-specific terms", "Competitor analysis", "Search volume assessment", "Keyword difficulty analysis"],
              },
              {
                title: "On-Page SEO Optimization",
                desc: "Optimization of your website's pages to rank higher in local search results. We improve meta tags, headings, content, and internal linking structure.",
                features: ["Title tag optimization", "Meta description updates", "Header tag structure", "Content optimization", "Internal linking"],
              },
              {
                title: "Local Citation Building",
                desc: "Building your business presence on local directories and citation sites to improve local search rankings and online visibility.",
                features: ["Directory submissions", "NAP consistency checks", "Local business listings", "Industry-specific citations", "Citation monitoring"],
              },
              {
                title: "Review Management",
                desc: "Strategic approach to managing and improving your online reviews. We help you get more positive reviews and respond effectively to feedback.",
                features: ["Review generation strategy", "Response templates", "Review monitoring", "Reputation management", "Negative review handling"],
              },
              {
                title: "Local Content Strategy",
                desc: "Creating location-specific content that targets local search queries and establishes your authority in Noida's real estate market.",
                features: ["Location-based blog posts", "Local market guides", "Neighborhood spotlights", "Case studies", "FAQ content"],
              },
            ].map((service, i) => (
              <Reveal key={service.title} delayMs={120 + i * 20}>
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
            Benefits of Our Local SEO Services
          </h2>
        </Reveal>
        <Reveal delayMs={90}>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300">
            Real results that translate into more qualified leads and business growth.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Higher Local Rankings",
              desc: "Improved visibility in Google's local pack and organic search results for Noida-based real estate searches.",
            },
            {
              title: "Increased Website Traffic",
              desc: "More qualified visitors to your website from people actively searching for real estate services in your area.",
            },
            {
              title: "Better Quality Leads",
              desc: "Attract clients who are specifically looking for real estate services in Noida, leading to higher conversion rates.",
            },
            {
              title: "Enhanced Online Reputation",
              desc: "Build trust and credibility through positive reviews and a strong online presence in local directories.",
            },
            {
              title: "Competitive Advantage",
              desc: "Stay ahead of competitors who aren't investing in local SEO, capturing market share in your target locations.",
            },
            {
              title: "Long-Term Results",
              desc: "SEO builds sustainable organic traffic that continues to deliver results over time, unlike paid advertising.",
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
                  Ready to Dominate Local Search?
                </h2>
                <p className="mt-2 text-zinc-600 dark:text-zinc-300">
                  Get a free local SEO audit and see how we can improve your search rankings.
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
