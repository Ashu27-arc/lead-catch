import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <main className="lc-page bg-white text-black dark:bg-black dark:text-white">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(800px_circle_at_20%_20%,color-mix(in_oklab,var(--brand)_35%,transparent),transparent_60%),radial-gradient(800px_circle_at_80%_20%,color-mix(in_oklab,var(--accent)_28%,transparent),transparent_55%),radial-gradient(800px_circle_at_50%_80%,color-mix(in_oklab,var(--brand-2)_28%,transparent),transparent_55%)]" />
        <div className="mx-auto w-full max-w-6xl px-3 py-16 sm:px-5 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <Reveal>
                <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-700 backdrop-blur dark:border-white/10 dark:bg-black/40 dark:text-zinc-200">
                  Real estate & interior • Leads • SEO • Ads
                </p>
              </Reveal>
              <Reveal delayMs={80}>
                <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                  Grow your{" "}
                  <span className="underline decoration-(--brand)/60 underline-offset-4">
                    real estate & interior
                  </span>{" "}
                  business with{" "}
                  <span className="underline decoration-(--accent)/70 underline-offset-4">
                    predictable leads
                  </span>{" "}
                  in Noida.
                </h1>
              </Reveal>
              <Reveal delayMs={140}>
                <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-zinc-600 dark:text-zinc-300">
                  We help builders, interior studios, and architects turn traffic into
                  inquiries using Meta Ads, SEO, conversion-ready websites, and
                  lead tracking with clear weekly reporting.
                </p>
              </Reveal>

              <Reveal delayMs={200}>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="/contact-us"
                    className="inline-flex h-11 items-center justify-center rounded-full bg-(--brand) px-5 text-sm font-medium text-(--brand-contrast) transition-[transform,filter,background-color] hover:bg-(--brand-2) hover:brightness-105 active:translate-y-px"
                  >
                    Get Free Consultation
                  </a>
                  <a
                    href="/projects"
                    className="inline-flex h-11 items-center justify-center rounded-full border border-black/15 bg-white px-5 text-sm font-medium text-black transition-[transform,background-color] hover:bg-[color-mix(in_oklab,var(--brand)_10%,transparent)] active:translate-y-px dark:border-white/15 dark:bg-black dark:text-white dark:hover:bg-[color-mix(in_oklab,var(--brand)_18%,transparent)]"
                  >
                    See results
                  </a>
                </div>
              </Reveal>

              <div className="mt-10 grid grid-cols-1 gap-4 text-sm sm:grid-cols-3">
                <Reveal delayMs={260}>
                  <div className="rounded-2xl border border-black/10 bg-white/60 p-4 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5">
                    <div className="text-2xl font-semibold tracking-tight">
                      10+
                    </div>
                    <div className="mt-1 text-zinc-600 dark:text-zinc-400">
                      years focused on your niche
                    </div>
                  </div>
                </Reveal>
                <Reveal delayMs={320}>
                  <div className="rounded-2xl border border-black/10 bg-white/60 p-4 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5">
                    <div className="text-2xl font-semibold tracking-tight">
                      200+
                    </div>
                    <div className="mt-1 text-zinc-600 dark:text-zinc-400">
                      satisfied real clients
                    </div>
                  </div>
                </Reveal>
                <Reveal delayMs={380}>
                  <div className="rounded-2xl border border-black/10 bg-white/60 p-4 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5">
                    <div className="text-2xl font-semibold tracking-tight">
                      150%
                    </div>
                    <div className="mt-1 text-zinc-600 dark:text-zinc-400">
                      avg lead lift (6 months)
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

            <div className="relative">
              <Reveal delayMs={220} className="rounded-3xl">
                <div className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold">Pipeline Snapshot</div>
                  <div className="rounded-full border border-black/10 px-3 py-1 text-xs text-zinc-600 dark:border-white/10 dark:text-zinc-400">
                    Last 30 days
                  </div>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-black">
                    <div className="text-xs text-zinc-500">Leads</div>
                    <div className="mt-1 text-2xl font-semibold">286</div>
                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-white/10">
                      <div className="h-full w-full rounded-full bg-(--brand)" />
                    </div>
                  </div>
                  <div className="rounded-2xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-black">
                    <div className="text-xs text-zinc-500">Qualified</div>
                    <div className="mt-1 text-2xl font-semibold">124</div>
                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-white/10">
                      <div className="h-full w-[43%] rounded-full bg-(--brand-2)" />
                    </div>
                  </div>
                  <div className="rounded-2xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-black">
                    <div className="text-xs text-zinc-500">Meetings</div>
                    <div className="mt-1 text-2xl font-semibold">58</div>
                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-white/10">
                      <div className="h-full w-[20%] rounded-full bg-(--accent)" />
                    </div>
                  </div>
                  <div className="rounded-2xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-black">
                    <div className="text-xs text-zinc-500">Revenue</div>
                    <div className="mt-1 text-2xl font-semibold">Rs 24L</div>
                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-white/10">
                      <div className="h-full w-[64%] rounded-full bg-(--accent-2)" />
                    </div>
                  </div>
                </div>
                <div className="mt-6 rounded-2xl border border-black/10 bg-white p-4 text-sm leading-6 text-zinc-600 dark:border-white/10 dark:bg-black dark:text-zinc-300">
                  “Illustrative 30-day snapshot: optimized for pipeline quality
                  from inquiries to qualified meetings and revenue.”
                </div>
              </div>
              </Reveal>
              <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[color-mix(in_oklab,var(--brand)_18%,transparent)] blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-zinc-50 dark:border-white/10 dark:bg-white/5">
        <div className="mx-auto w-full max-w-6xl px-3 py-10 sm:px-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              Trusted by real estate & interior teams in Noida
            </p>
            <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-end">
              {[
                "Builders",
                "Interior Studios",
                "Architects",
                "Renovation Teams",
                "Property Developers",
                "Dealers & Agents",
              ].map((name) => (
                <div
                  key={name}
                  className="flex h-10 items-center justify-center rounded-xl border border-black/10 bg-white px-4 text-xs font-semibold text-zinc-700 dark:border-white/10 dark:bg-black dark:text-zinc-200"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto w-full max-w-6xl px-3 py-16 sm:px-5">
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
                About Us
              </p>
            </Reveal>
            <Reveal delayMs={80}>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                We build predictable growth for real estate and interior brands.
              </h2>
            </Reveal>
            <Reveal delayMs={140}>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base">
                Lead Catch is a Noida-based digital growth partner focused on real
                estate, interiors, and architecture businesses. We combine paid ads,
                SEO, conversion-first websites, and clean lead tracking so your team
                gets better inquiries and clearer pipeline visibility.
              </p>
            </Reveal>
            <Reveal delayMs={200}>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base">
                Our approach is practical: understand your audience, create offers
                that convert, optimize every step from click to call, and share
                reporting your team can actually act on.
              </p>
            </Reveal>
          </div>

          <Reveal delayMs={160}>
            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
              <h3 className="text-lg font-semibold tracking-tight">Why teams choose us</h3>
              <ul className="mt-5 space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
                {[
                  "Niche-first strategy for real estate and interior demand generation",
                  "Fast execution loops across creatives, landing pages, and forms",
                  "Transparent weekly reporting with lead quality insights",
                  "Long-term SEO foundation plus short-term lead momentum",
                ].map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-(--accent)" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/about-us"
                className="mt-6 inline-flex h-10 items-center justify-center rounded-full border border-black/15 bg-white px-4 text-sm font-medium text-black transition-colors hover:bg-[color-mix(in_oklab,var(--brand)_10%,transparent)] dark:border-white/15 dark:bg-black dark:text-white dark:hover:bg-[color-mix(in_oklab,var(--brand)_18%,transparent)]"
              >
                Learn more about us
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="services"
        className="mx-auto w-full max-w-6xl px-3 py-16 sm:px-5"
      >
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Services
            </h2>
          </Reveal>
          <Reveal delayMs={90}>
            <p className="mt-4 text-zinc-600 dark:text-zinc-300">
              Focused scope. Clear execution. Measurable outcomes.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Digital Advertising",
              desc: "Meta + Google ads for property and interior leads: creatives direction, targeting, lead forms, and weekly optimization.",
              tag: "Ads",
            },
            {
              title: "SEO for Real Estate & Interiors",
              desc: "Technical SEO, on-page improvements, and content planning for projects, services, and local search in Noida.",
              tag: "Organic",
            },
            {
              title: "Website Development",
              desc: "Conversion-ready websites/landing pages for builders and interior studios with speed, UX, and SEO hygiene.",
              tag: "Web",
            },
            {
              title: "Mobile App Development",
              desc: "Android/iOS apps with clean UX, API integration, analytics events, and production-ready builds for your customer journey.",
              tag: "App",
              center: true,
            },
          ].map((s) => (
            <Reveal
              key={s.title}
              delayMs={s.center ? 180 : 120}
              className={[
                s.center
                  ? "md:col-span-2 md:justify-self-center md:max-w-xl lg:col-span-1 lg:col-start-2 lg:max-w-none"
                  : "",
              ].join(" ")}
            >
              <div
                className={[
                  "group rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5",
                  "hover:[box-shadow:0_18px_60px_-35px_color-mix(in_oklab,var(--brand)_55%,transparent)]",
                ].join(" ")}
              >
                <div className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-zinc-700 transition-colors group-hover:border-black/15 dark:border-white/10 dark:bg-black dark:text-zinc-200">
                  {s.tag}
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        id="work"
        className="border-t border-black/10 bg-zinc-50 dark:border-white/10 dark:bg-white/5"
      >
        <div className="mx-auto w-full max-w-6xl px-3 py-16 sm:px-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Case studies (sample)
              </h2>
              <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-300">
                Results vary by niche and offer — these are sample formats to
                show how we present work.
              </p>
            </div>
            <a
              href="/contact-us"
              className="inline-flex h-10 w-full items-center justify-center rounded-full border border-black/15 bg-white px-4 text-sm font-medium text-black transition-colors hover:bg-black/5 dark:border-white/15 dark:bg-black dark:text-white dark:hover:bg-white/10 sm:w-auto"
            >
              Get your plan →
            </a>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Real Estate Builder — Ads + Lead Landing Pages",
                bullets: ["Lead quality improvements", "Better call/site-visit tracking", "Weekly creative iterations"],
              },
              {
                title: "Interior Design Studio — SEO + Offer Pages",
                bullets: ["Local SEO growth in Noida", "Project/service content strategy", "Conversion-focused on-page fixes"],
              },
              {
                title: "Architect/Renovation — Google Ads + CRO",
                bullets: ["High-intent search targeting", "Offer positioning and forms", "Tracking + CRO learning loop"],
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black"
              >
                <h3 className="text-lg font-semibold tracking-tight">
                  {c.title}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-(--accent)" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-3 py-16 sm:px-5">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Clients say it best
        </h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            {
              quote:
                "Reporting was crystal clear. We started seeing more relevant inquiries and better booked site visits.",
              name: "Founder, Real Estate Team",
            },
            {
              quote:
                "The landing page structure and offer tweaks improved our conversion flow right away.",
              name: "Marketing Lead, Interior Studio",
            },
            {
              quote:
                "Lead Catch tests quickly. Ads, SEO, and tracking improvements helped us scale with confidence.",
              name: "Growth Lead, Developer/Architect",
            },
          ].map((t) => (
            <figure
              key={t.name}
              className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5"
            >
              <blockquote className="text-sm leading-6 text-zinc-700 dark:text-zinc-200">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-4 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section
        id="pricing"
        className="border-y border-black/10 bg-zinc-50 dark:border-white/10 dark:bg-white/5"
      >
        <div className="mx-auto w-full max-w-6xl px-3 py-16 sm:px-5">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Simple pricing
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-300">
              Choose a plan that matches your stage. Custom retainers also
              available.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                name: "Lead Audit",
                price: "On request",
                desc: "For new campaigns: we audit tracking, offers, and lead capture flow.",
                items: ["Tracking + landing audit", "Noida-focused SEO checklist", "Action plan in 48 hours"],
              },
              {
                name: "Growth Plan",
                price: "On request",
                desc: "For consistent lead generation across ads + SEO with conversion improvements.",
                items: ["Meta + SEO execution", "Weekly reporting", "CRO experiments (landing + forms)"],
                highlight: true,
              },
              {
                name: "Scale",
                price: "Custom",
                desc: "For multi-project/multi-location growth with full-funnel measurement.",
                items: ["Full-funnel strategy", "Creative production support", "CRO + SEO + Ads coordination"],
              },
            ].map((p) => (
              <div
                key={p.name}
                className={[
                  "rounded-3xl border p-6 shadow-sm",
                  p.highlight
                    ? "border-indigo-500/40 bg-white dark:bg-black"
                    : "border-black/10 bg-white dark:border-white/10 dark:bg-white/5",
                ].join(" ")}
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="text-sm font-semibold">{p.name}</div>
                    <div className="mt-2 text-3xl font-semibold tracking-tight">
                      {p.price}
                    </div>
                  </div>
                  {p.highlight ? (
                    <span className="inline-flex w-fit rounded-full bg-(--brand) px-3 py-1 text-xs font-semibold text-(--brand-contrast)">
                      Most popular
                    </span>
                  ) : null}
                </div>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">
                  {p.desc}
                </p>
                <ul className="mt-6 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-(--accent)" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact-us"
                  className={[
                    "mt-7 inline-flex h-10 w-full items-center justify-center rounded-full text-sm font-medium transition-colors",
                    p.highlight
                      ? "bg-(--brand) text-(--brand-contrast) hover:bg-(--brand-2)"
                      : "border border-black/15 bg-white text-black hover:bg-[color-mix(in_oklab,var(--brand)_10%,transparent)] dark:border-white/15 dark:bg-black dark:text-white dark:hover:bg-[color-mix(in_oklab,var(--brand)_18%,transparent)]",
                  ].join(" ")}
                >
                  Talk to us
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="mx-auto w-full max-w-6xl px-3 py-16 sm:px-5"
      >
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            FAQ
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300">
            Quick answers. If you have a different question, send us a message.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            {
              q: "How can digital marketing help my real estate business?",
              a: "Digital marketing increases online visibility, generates quality leads through targeted ads, builds authority with SEO, and nurtures prospects with conversion-focused content. We focus on reaching serious buyers and sellers actively searching.",
            },
            {
              q: "What makes Lead Catch different?",
              a: "Lead Catch specializes in real estate and interior design marketing. With 10+ years of experience and 200+ successful client engagements, we bring niche insights, tailored strategy, and measurable ROI with clear reporting.",
            },
            {
              q: "How long does it take to see results from SEO?",
              a: "You may see initial improvements in 3–6 months, with more significant results typically between 6–12 months. We share monthly performance updates and optimization recommendations.",
            },
            {
              q: "Do you offer website design services?",
              a: "Yes. We create high-converting, mobile-responsive websites for real estate and interior design businesses. They are optimized for speed, UX, and lead generation with integrated tracking and analytics.",
            },
          ].map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-white/5"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 font-semibold tracking-tight">
                <span className="min-w-0">{f.q}</span>
                <span className="shrink-0 text-zinc-400 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-black/10 bg-zinc-50 dark:border-white/10 dark:bg-white/5"
      >
        <div className="mx-auto w-full max-w-6xl px-3 py-16 sm:px-5">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Get your free consultation
              </h2>
              <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-300">
                Share your business goal, budget range, and current channels.
                We’ll send a recommended action plan within 48 hours.
              </p>

              <div className="mt-6 space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
                <div>
                  <span className="font-semibold text-black dark:text-white">
                    Email:
                  </span>{" "}
                  <a
                    href="mailto:info@leadcatch.in"
                    className="underline decoration-black/20 underline-offset-4 hover:decoration-black/60 dark:decoration-white/20 dark:hover:decoration-white/60"
                  >
                    info@leadcatch.in
                  </a>
                </div>
                <div>
                  <span className="font-semibold text-black dark:text-white">
                    Call:
                  </span>{" "}
                  <span className="inline-flex flex-wrap gap-x-3 gap-y-1">
                    <a
                      href="tel:+919917677017"
                      className="underline decoration-black/20 underline-offset-4 hover:decoration-black/60 dark:decoration-white/20 dark:hover:decoration-white/60"
                    >
                      +91 9917677017
                    </a>
                    <a
                      href="tel:+919718435589"
                      className="underline decoration-black/20 underline-offset-4 hover:decoration-black/60 dark:decoration-white/20 dark:hover:decoration-white/60"
                    >
                      +91 9718435589
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-black">
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-300">
                      Name
                    </span>
                    <input
                      className="mt-2 h-11 w-full rounded-xl border border-black/10 bg-white px-3 text-sm outline-none ring-0 placeholder:text-zinc-400 focus:border-indigo-500/60 dark:border-white/10 dark:bg-black"
                      placeholder="Your name"
                      name="name"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-300">
                      Email
                    </span>
                    <input
                      className="mt-2 h-11 w-full rounded-xl border border-black/10 bg-white px-3 text-sm outline-none placeholder:text-zinc-400 focus:border-indigo-500/60 dark:border-white/10 dark:bg-black"
                      placeholder="you@company.com"
                      type="email"
                      name="email"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-300">
                    Website / Product
                  </span>
                  <input
                    className="mt-2 h-11 w-full rounded-xl border border-black/10 bg-white px-3 text-sm outline-none placeholder:text-zinc-400 focus:border-indigo-500/60 dark:border-white/10 dark:bg-black"
                    placeholder="https://"
                    name="website"
                  />
                </label>

                <label className="block">
                  <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-300">
                    What do you need help with?
                  </span>
                  <textarea
                    className="mt-2 min-h-28 w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm outline-none placeholder:text-zinc-400 focus:border-indigo-500/60 dark:border-white/10 dark:bg-black"
                    placeholder="Ads / SEO / landing page / tracking / lead gen…"
                    name="message"
                  />
                </label>

                <button
                  type="button"
                  className="inline-flex h-11 w-full items-center justify-center rounded-full bg-(--brand) px-5 text-sm font-medium text-(--brand-contrast) transition-colors hover:bg-(--brand-2)"
                >
                  Send message
                </button>
                <p className="text-xs text-zinc-500">
                  This demo form doesn’t submit yet. Use email/phone above or
                  visit the dedicated contact page.
                </p>
                <a
                  href="/contact-us"
                  className="inline-flex text-xs font-semibold underline decoration-black/20 underline-offset-4 hover:decoration-black/60 dark:decoration-white/20 dark:hover:decoration-white/60"
                >
                  Open contact page →
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
