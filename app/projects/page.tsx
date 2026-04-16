import Link from "next/link";
import { Reveal } from "@/components/Reveal";

interface Project {
  title: string;
  desc: string;
  tags: string[];
  outcome: string[];
  demoLink?: string;
}

const projects: Project[] = [
  {
    title: "Ashutosh Portfolio — Personal Branding Website",
    desc: "Professional portfolio website with modern design, smooth animations, and optimized performance for personal branding and client acquisition.",
    tags: ["Web Development", "Portfolio", "Personal Branding"],
    outcome: ["Fast loading performance", "Mobile-responsive design", "SEO optimized structure"],
    demoLink: "https://ashutosh.rf.gd/",
  },
  {
    title: "PC Games — Gaming Platform Development",
    desc: "Interactive gaming website with user accounts, game library, and community features for enhanced user engagement.",
    tags: ["Web Development", "Gaming Platform", "User Experience"],
    outcome: ["Seamless user navigation", "Community features", "Performance optimization"],
    demoLink: "https://pcgames.com.de/",
  },
  {
    title: "Binarama — E-commerce Platform",
    desc: "Complete e-commerce solution with product catalog, shopping cart, payment integration, and inventory management.",
    tags: ["E-commerce", "Web Development", "Payment Integration"],
    outcome: ["Secure payment processing", "User-friendly interface", "Inventory management"],
    demoLink: "https://binarama.com/",
  },
  {
    title: "Shewings — Business Website",
    desc: "Professional business website with service showcase, client testimonials, and lead capture forms for business growth.",
    tags: ["Business Website", "Lead Generation", "Professional Design"],
    outcome: ["Increased lead capture", "Professional branding", "Mobile optimization"],
    demoLink: "https://www.shewings.com/",
  },
  {
    title: "Shewings Foundation — Non-profit Website",
    desc: "Non-profit organization website with donation system, event management, and volunteer coordination features.",
    tags: ["Non-profit", "Donation System", "Community Platform"],
    outcome: ["Online donation system", "Event management", "Volunteer coordination"],
    demoLink: "https://shewingsfoundation.com/",
  },
  {
    title: "Kosha Organic — Organic Products E-commerce",
    desc: "Organic products marketplace with product categorization, secure checkout, and brand storytelling.",
    tags: ["E-commerce", "Organic Products", "Brand Development"],
    outcome: ["Brand storytelling", "Secure checkout", "Product categorization"],
    demoLink: "https://koshaorganic.com/",
  },
  {
    title: "Luxury Real Estate Developer — Meta Ads + Lead Funnel",
    desc: "Complete lead generation system including targeted Meta Ads, high-converting landing pages, and automated lead nurturing for premium property listings.",
    tags: ["Meta Ads", "Lead Funnels", "Premium Properties"],
    outcome: ["300% increase in qualified leads", "45% reduction in cost-per-lead", "Automated lead scoring system"],
  },
  {
    title: "Interior Design Studio — Local SEO + Content Marketing",
    desc: "Comprehensive SEO strategy with location-based optimization, portfolio content creation, and Google Business Profile management to attract high-value interior design clients.",
    tags: ["Local SEO", "Content Marketing", "Google Business"],
    outcome: ["First page ranking for 15+ keywords", "250% increase in organic traffic", "40 qualified monthly inquiries"],
  },
  {
    title: "Architecture Firm — Google Ads + Conversion Optimization",
    desc: "Targeted Google Search campaigns for architectural services with landing page optimization, call tracking, and A/B testing for maximum lead generation.",
    tags: ["Google Ads", "CRO", "Call Tracking"],
    outcome: ["180% ROI in first quarter", "60% increase in consultation bookings", "Reduced bounce rate by 35%"],
  },
  {
    title: "Real Estate Portal — Website Development + CRM Integration",
    desc: "Custom property portal with advanced search, virtual tours, lead management system, and seamless CRM integration for streamlined operations.",
    tags: ["Web Development", "CRM Integration", "Property Portal"],
    outcome: ["50% faster lead response time", "Automated lead nurturing", "Mobile-first responsive design"],
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
              Proven Real Estate Marketing Results
            </p>
          </Reveal>
          <Reveal delayMs={90}>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Real Estate Success Stories That Deliver Results.
            </h1>
          </Reveal>
          <Reveal delayMs={150}>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-zinc-600 dark:text-zinc-300">
              Discover how we've helped real estate companies, builders, and interior designers generate qualified leads through strategic digital marketing campaigns and conversion optimization.
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

                {p.demoLink && (
                  <div className="mt-4">
                    <a
                      href={p.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 items-center justify-center rounded-full border border-black/15 bg-white px-4 text-sm font-medium text-black transition-[transform,background-color] hover:bg-[color-mix(in_oklab,var(--brand)_10%,transparent)] active:translate-y-px dark:border-white/15 dark:bg-black dark:text-white dark:hover:bg-[color-mix(in_oklab,var(--brand)_18%,transparent)]"
                    >
                      View Demo →
                    </a>
                  </div>
                )}
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
                <div className="text-sm font-semibold">Have Similar Real Estate Marketing Goals?</div>
                <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                  Share your business type, target market, and growth objectives. We'll create a customized digital marketing strategy to achieve your lead generation targets.
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