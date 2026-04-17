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
                  Real Estate Lead Generation • Interior Design Marketing • Noida SEO Experts
                </p>
              </Reveal>
              <Reveal delayMs={80}>
                <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                  Premium Lead Generation for{" "}
                  <span className="underline decoration-(--brand)/60 underline-offset-4">
                    Real Estate
                  </span>{" "}
                  Businesses in{" "}
                  <span className="underline decoration-(--accent)/70 underline-offset-4">
                    Noida
                  </span>
                </h1>
              </Reveal>
              <Reveal delayMs={140}>
                <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-zinc-600 dark:text-zinc-300">
                  We know how tough it is to find the right clients in Noida's real estate market. That's why we've spent over 10 years helping builders, interior designers, and architects like you get more qualified leads. Our team runs targeted ads, improves your local SEO, and builds websites that actually convert. No fancy jargon—just real results that grow your business.
                </p>
              </Reveal>

              <Reveal delayMs={200}>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="/contact-us"
                    className="inline-flex h-11 items-center justify-center rounded-full bg-(--brand) px-5 text-sm font-medium text-(--brand-contrast) transition-[transform,filter,background-color] hover:bg-(--brand-2) hover:brightness-105 active:translate-y-px"
                  >
                    Get Your Free Marketing Strategy Session
                  </a>
                  <a
                    href="/projects"
                    className="inline-flex h-11 items-center justify-center rounded-full border border-black/15 bg-white px-5 text-sm font-medium text-black transition-[transform,background-color] hover:bg-[color-mix(in_oklab,var(--brand)_10%,transparent)] active:translate-y-px dark:border-white/15 dark:bg-black dark:text-white dark:hover:bg-[color-mix(in_oklab,var(--brand)_18%,transparent)]"
                  >
                    View Our Real Estate Success Stories
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
                      Years of Real Estate Marketing Experience
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
                      Average Lead Growth in 6 Months
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

            <div className="relative">
              <Reveal delayMs={220} className="rounded-3xl">
                <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
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
              Trusted by 200+ Leading Real Estate & Interior Design Companies in Noida
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
                Your Trusted Digital Marketing Partner for Real Estate Success
              </h2>
            </Reveal>
            <Reveal delayMs={140}>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base">
                Lead Catch is a digital marketing agency based in Noida that works exclusively with real estate, interior design, and architecture businesses. We're not a general marketing agency—we know your industry inside and out. From Meta Ads and Google Ads to local SEO and websites that convert, we help you get more qualified leads and grow your business.
              </p>
            </Reveal>
            <Reveal delayMs={140}>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base">
                We don't believe in one-size-fits-all solutions. We take the time to understand who your ideal clients are, create offers that actually make them pick up the phone, and optimize every step from their first click to becoming your customer. You'll get clear reports every week so you always know exactly how your marketing is performing.
              </p>
            </Reveal>
          </div>

          <Reveal delayMs={160}>
            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
              <h3 className="text-lg font-semibold tracking-tight">Why Real Estate Teams Choose Us</h3>
              <ul className="mt-5 space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
                {[
                  "We only work with real estate and interior design businesses - no generic marketing",
                  "Fast campaign setup with creative that actually works in your market",
                  "Weekly reports that show you exactly what's working and what's not",
                  "SEO that builds long-term traffic while ads bring leads today",
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
              Comprehensive Digital Marketing Services for Real Estate Excellence
            </h2>
          </Reveal>
          <Reveal delayMs={90}>
            <p className="mt-4 text-zinc-600 dark:text-zinc-300">
              We don't do generic marketing. Everything we build is specifically for real estate developers, interior designers, and architects here in Noida. Our strategies are practical and focused on getting you more qualified local clients who are actually ready to buy.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Facebook & Google Ads That Work",
              desc: "We run ads specifically for properties and interior design services. From designing the creatives to targeting the right audience and optimizing lead forms—we handle everything. Plus, we keep improving your campaigns every week based on real data.",
              tag: "PPC Ads",
            },
            {
              title: "Local SEO That Gets You Found",
              desc: "Complete SEO to help you rank higher in local searches. We fix technical issues, optimize your Google Business Profile, and create content that actually matters to your customers. More visibility means more qualified inquiries from people in Noida.",
              tag: "Local SEO",
            },
            {
              title: "Websites Built to Convert",
              desc: "Beautiful, fast websites designed specifically for builders and interior designers. Every site we build is optimized to capture leads, works perfectly on mobile, and is set up for SEO. Your website should be your best salesperson—ours are.",
              tag: "Web Design",
            },
            {
              title: "Mobile Apps for Your Clients",
              desc: "Custom apps that make it easy for clients to browse properties, visualize designs, and stay connected. We build user-friendly interfaces with analytics so you can understand how your clients are using the app and improve their experience.",
              tag: "Mobile Apps",
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
                Real Results We've Delivered
              </h2>
              <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-300">
                Every business is different, so results vary. Here are some examples of how we've helped real estate and interior design companies grow.
              </p>
            </div>
            <a
              href="/contact-us"
              className="inline-flex h-10 w-full items-center justify-center rounded-full border border-black/15 bg-white px-4 text-sm font-medium text-black transition-colors hover:bg-black/5 dark:border-white/15 dark:bg-black dark:text-white dark:hover:bg-white/10 sm:w-auto"
            >
              Get Your Custom Real Estate Marketing Plan →
            </a>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Real Estate Builder — More Quality Leads",
                bullets: ["Improved lead quality significantly", "Better tracking for calls and site visits", "Weekly creative testing and improvements"],
              },
              {
                title: "Interior Design Studio — SEO Growth",
                bullets: ["Ranked higher in Noida local searches", "Created content strategy for projects and services", "Fixed on-page issues to boost conversions"],
              },
              {
                title: "Architect/Renovation — Google Ads Success",
                bullets: ["Targeted high-intent search keywords", "Improved offer positioning and forms", "Continuous testing and optimization loop"],
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
          What Our Clients Say
        </h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            {
              quote:
                "Lead Catch transformed our real estate business with their exceptional digital marketing strategies. Their crystal-clear reporting and targeted approach helped us attract more qualified inquiries and significantly increase our booked site visits. Our pipeline has never been stronger!",
              name: "Managing Director, Premium Real Estate Development",
            },
            {
              quote:
                "The expertise Lead Catch brought to our interior design studio was remarkable. Their landing page optimization and strategic offer improvements immediately enhanced our conversion flow. We're now attracting higher-value clients consistently.",
              name: "Creative Director, Luxury Interior Design Studio",
            },
            {
              quote:
                "Working with Lead Catch has been a game-changer for our architecture firm. Their rapid testing approach and comprehensive digital strategy across ads, SEO, and analytics gave us the confidence to scale our operations. The ROI has been outstanding.",
              name: "Principal Architect, Leading Design & Build Firm",
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
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-300">
              Choose what works for your business. We also offer custom plans if you need something different.
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
                  Schedule Your Strategic Growth Call
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
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300">
            Got questions? We've got answers. If you don't see what you're looking for, just reach out to us directly.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            {
              q: "How does digital marketing actually help me get more leads?",
              a: "Digital marketing puts your business in front of people who are actively looking for what you offer. Through targeted ads, you reach buyers and sellers searching in Noida. SEO helps you show up in Google searches when people need your services. The result? More qualified inquiries from people who are actually ready to take action.",
            },
            {
              q: "Why should I choose Lead Catch over other agencies in Noida?",
              a: "We don't work with everyone—we only work with real estate, interior design, and architecture businesses. That means we understand your challenges better than anyone else. With over 10 years of experience and 200+ clients, we know what works in your market. Plus, our reporting is clear and honest—you always know exactly what you're getting.",
            },
            {
              q: "How long before I see results from SEO?",
              a: "SEO takes time—usually 3-6 months to start seeing improvements, with significant results between 6-12 months. But we don't make you wait. We combine SEO with ads so you get leads right away while building long-term organic growth. We send you monthly reports so you can track progress every step of the way.",
            },
            {
              q: "Do you build websites for real estate companies?",
              a: "Yes, and we've built many of them. Our websites are designed specifically for real estate and interior design businesses. They're mobile-friendly, fast, optimized for search engines, and built to capture leads. Every site we build includes analytics so you can see how visitors are interacting with your site.",
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
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Let's Talk About Your Business
              </h2>
              <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-300">
                Tell us what you're trying to achieve, your budget, and what you've tried so far. We'll send you a clear action plan within 48 hours—no pressure, no sales pitch.
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
                  Send Message
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
