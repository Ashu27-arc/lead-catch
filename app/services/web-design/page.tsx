import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Development for Real Estate in Noida | Lead Catch",
  description: "Professional website development for real estate businesses in Noida. Fast, mobile-optimized websites that capture leads and convert visitors for builders, interior designers, and architects.",
  keywords: "website development Noida, real estate website design, property website development, interior design website, builder website, architect website, mobile responsive websites, SEO optimized websites",
  openGraph: {
    title: "Website Development for Real Estate in Noida | Lead Catch",
    description: "Professional website development for real estate businesses in Noida. Fast, mobile-optimized websites that capture leads and convert visitors.",
    url: "https://www.leadcatch.in/services/web-design",
    type: "website",
  },
};

export default function WebDesignPage() {
  return (
    <main className="lc-page bg-white text-black dark:bg-black dark:text-white">
      <section className="relative overflow-hidden border-b border-black/10 bg-[color-mix(in_oklab,var(--brand)_8%,white)] dark:border-white/10 dark:bg-[color-mix(in_oklab,var(--brand)_12%,black)]">
        <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(800px_circle_at_20%_20%,color-mix(in_oklab,var(--brand)_35%,transparent),transparent_60%),radial-gradient(800px_circle_at_80%_20%,color-mix(in_oklab,var(--accent)_28%,transparent),transparent_55%),radial-gradient(800px_circle_at_50%_80%,color-mix(in_oklab,var(--brand-2)_28%,transparent),transparent_55%)]" />
        <div className="mx-auto w-full max-w-6xl px-3 py-16 sm:px-5 sm:py-20">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-(--brand)/30 bg-white/80 px-3 py-1 text-xs font-medium text-zinc-800 backdrop-blur dark:border-(--brand)/35 dark:bg-black/35 dark:text-zinc-100">
              Web Design Services
            </p>
          </Reveal>
          <Reveal delayMs={90}>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Websites Built to Convert for Real Estate Businesses
            </h1>
          </Reveal>
          <Reveal delayMs={150}>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-zinc-600 dark:text-zinc-300">
              Beautiful, fast websites designed specifically for builders, interior designers, and architects. Every site we build is optimized to capture leads, works perfectly on mobile, and is set up for SEO. Your website should be your best salesperson—ours are.
            </p>
          </Reveal>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact-us"
              className="inline-flex h-11 w-full items-center justify-center rounded-full bg-(--brand) px-5 text-sm font-medium text-(--brand-contrast) transition-[transform,filter,background-color] hover:bg-(--brand-2) hover:brightness-105 active:translate-y-px sm:w-auto"
            >
              Get a free website consultation
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
                Why Real Estate Websites Need Special Design
              </h2>
            </Reveal>
            <Reveal delayMs={90}>
              <p className="mt-4 text-zinc-600 dark:text-zinc-300">
                Generic website templates don't work for real estate. Your website needs to showcase properties, capture leads, integrate with CRM systems, and rank well in local searches. We specialize in building websites that are designed from the ground up for real estate success in Noida's competitive market.
              </p>
            </Reveal>
          </div>
          <Reveal delayMs={120}>
            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
              <h3 className="text-lg font-semibold tracking-tight">Our Web Design Process</h3>
              <ul className="mt-5 space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
                {[
                  "Discovery call to understand your business and goals",
                  "Competitor analysis and market research",
                  "UX/UI design with focus on lead conversion",
                  "Responsive development for all devices",
                  "SEO optimization from the ground up",
                  "Lead capture forms and CRM integration",
                  "Speed optimization and performance testing",
                  "Launch, training, and ongoing support",
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
              Web Design Services We Offer
            </h2>
          </Reveal>
          <Reveal delayMs={90}>
            <p className="mt-4 text-zinc-600 dark:text-zinc-300">
              Comprehensive web solutions tailored for real estate and interior design businesses in Noida.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Real Estate Property Websites",
                desc: "Property listing websites with advanced search filters, virtual tour integration, and lead capture forms designed to convert visitors into qualified leads.",
                features: ["Property search and filters", "Virtual tour integration", "Image galleries", "Lead capture forms", "CRM integration"],
              },
              {
                title: "Interior Design Portfolio Sites",
                desc: "Stunning portfolio websites that showcase your design work with beautiful galleries, client testimonials, and easy inquiry forms.",
                features: ["Project galleries", "Before/after showcases", "Client testimonials", "Service pages", "Inquiry forms"],
              },
              {
                title: "Architecture Firm Websites",
                desc: "Professional websites for architecture firms featuring project case studies, team profiles, and technical specifications presentations.",
                features: ["Project case studies", "Team profiles", "Technical drawings", "Award showcases", "Publication features"],
              },
              {
                title: "Landing Page Design",
                desc: "High-converting landing pages for specific campaigns, property launches, or service promotions with clear calls-to-action and lead capture.",
                features: ["Campaign-specific pages", "A/B testing ready", "Lead capture optimization", "Fast loading", "Mobile optimized"],
              },
              {
                title: "Website Redesign",
                desc: "Complete website overhauls to modernize your online presence, improve conversion rates, and enhance user experience.",
                features: ["Modern design refresh", "UX improvements", "Speed optimization", "Mobile responsiveness", "SEO enhancement"],
              },
              {
                title: "E-commerce for Real Estate",
                desc: "E-commerce solutions for selling real estate-related products, interior design items, or property booking systems.",
                features: ["Product catalogs", "Payment integration", "Booking systems", "Inventory management", "Order tracking"],
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
            Key Features of Our Websites
          </h2>
        </Reveal>
        <Reveal delayMs={90}>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300">
            Every website we build includes essential features for real estate success.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Mobile-First Design",
              desc: "Responsive websites that look great and work perfectly on all devices, from smartphones to desktops.",
            },
            {
              title: "Fast Loading Speed",
              desc: "Optimized for performance with fast load times that improve user experience and SEO rankings.",
            },
            {
              title: "SEO Optimized",
              desc: "Built with SEO best practices including proper meta tags, structured data, and optimized content.",
            },
            {
              title: "Lead Capture Forms",
              desc: "Strategically placed forms to capture visitor information and convert them into qualified leads.",
            },
            {
              title: "CRM Integration",
              desc: "Seamless integration with popular CRMs to automatically sync leads and streamline your sales process.",
            },
            {
              title: "Analytics Dashboard",
              desc: "Built-in analytics tracking to monitor visitor behavior, conversion rates, and campaign performance.",
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
                  Ready for a Website That Converts?
                </h2>
                <p className="mt-2 text-zinc-600 dark:text-zinc-300">
                  Get a free consultation and see how we can build a website that drives real results.
                </p>
              </div>
              <Link
                href="/contact-us"
                className="inline-flex h-11 w-full items-center justify-center rounded-full bg-(--brand) px-5 text-sm font-medium text-(--brand-contrast) transition-colors hover:bg-(--brand-2) sm:w-auto"
              >
                Schedule Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
