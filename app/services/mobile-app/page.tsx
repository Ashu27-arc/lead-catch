import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development for Real Estate in Noida | Lead Catch",
  description: "Custom mobile applications for real estate businesses in Noida. Property browsing, design visualization, and client management apps for builders, interior designers, and architects.",
  keywords: "mobile app development Noida, real estate mobile apps, property browsing app, interior design app, custom mobile applications, iOS Android development, real estate CRM app, property management app",
  openGraph: {
    title: "Mobile App Development for Real Estate in Noida | Lead Catch",
    description: "Custom mobile applications for real estate businesses in Noida. Property browsing, design visualization, and client management apps.",
    url: "https://www.leadcatch.in/services/mobile-app",
    type: "website",
  },
};

export default function MobileAppPage() {
  return (
    <main className="lc-page bg-white text-black dark:bg-black dark:text-white">
      <section className="relative overflow-hidden border-b border-black/10 bg-[color-mix(in_oklab,var(--brand)_8%,white)] dark:border-white/10 dark:bg-[color-mix(in_oklab,var(--brand)_12%,black)]">
        <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(800px_circle_at_20%_20%,color-mix(in_oklab,var(--brand)_35%,transparent),transparent_60%),radial-gradient(800px_circle_at_80%_20%,color-mix(in_oklab,var(--accent)_28%,transparent),transparent_55%),radial-gradient(800px_circle_at_50%_80%,color-mix(in_oklab,var(--brand-2)_28%,transparent),transparent_55%)]" />
        <div className="mx-auto w-full max-w-6xl px-3 py-16 sm:px-5 sm:py-20">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-(--brand)/30 bg-white/80 px-3 py-1 text-xs font-medium text-zinc-800 backdrop-blur dark:border-(--brand)/35 dark:bg-black/35 dark:text-zinc-100">
              Mobile App Development
            </p>
          </Reveal>
          <Reveal delayMs={90}>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Custom Mobile Apps for Real Estate & Interior Design
            </h1>
          </Reveal>
          <Reveal delayMs={150}>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-zinc-600 dark:text-zinc-300">
              Custom mobile applications that make it easy for clients to browse properties, visualize designs, and stay connected. We build user-friendly interfaces with analytics so you can understand how your clients are using the app and improve their experience.
            </p>
          </Reveal>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact-us"
              className="inline-flex h-11 w-full items-center justify-center rounded-full bg-(--brand) px-5 text-sm font-medium text-(--brand-contrast) transition-[transform,filter,background-color] hover:bg-(--brand-2) hover:brightness-105 active:translate-y-px sm:w-auto"
            >
              Get a free app consultation
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
                Why Real Estate Businesses Need Mobile Apps
              </h2>
            </Reveal>
            <Reveal delayMs={90}>
              <p className="mt-4 text-zinc-600 dark:text-zinc-300">
                Today's clients expect to browse properties, view designs, and connect with businesses on their phones. A custom mobile app gives you a direct channel to engage clients, provide personalized experiences, and capture leads on the go. We build apps specifically designed for real estate workflows and client needs.
              </p>
            </Reveal>
          </div>
          <Reveal delayMs={120}>
            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
              <h3 className="text-lg font-semibold tracking-tight">Our App Development Process</h3>
              <ul className="mt-5 space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
                {[
                  "Requirements analysis and feature planning",
                  "UI/UX design with focus on user experience",
                  "Native or cross-platform development",
                  "Integration with your existing systems",
                  "Rigorous testing and quality assurance",
                  "App store submission and launch",
                  "Analytics implementation",
                  "Ongoing support and updates",
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
              Mobile App Solutions We Build
            </h2>
          </Reveal>
          <Reveal delayMs={90}>
            <p className="mt-4 text-zinc-600 dark:text-zinc-300">
              Comprehensive mobile app solutions tailored for real estate and interior design businesses in Noida.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Property Browsing Apps",
                desc: "Apps that allow users to search, filter, and browse properties with detailed information, photos, and virtual tours. Includes saved searches and favorites.",
                features: ["Property search and filters", "Virtual tour integration", "Image galleries", "Saved searches", "Favorites list"],
              },
              {
                title: "Design Visualization Apps",
                desc: "Interactive apps for interior designers to showcase designs, allow clients to visualize changes, and provide feedback on projects in real-time.",
                features: ["3D visualization", "Before/after views", "Material selection", "Client feedback tools", "Project tracking"],
              },
              {
                title: "Client Management Apps",
                desc: "CRM-style apps for managing client relationships, tracking communications, scheduling visits, and organizing project documentation.",
                features: ["Client profiles", "Communication logs", "Visit scheduling", "Document storage", "Task management"],
              },
              {
                title: "Agent Portal Apps",
                desc: "Apps for real estate agents to manage listings, track leads, schedule viewings, and access property information on the go.",
                features: ["Listing management", "Lead tracking", "Viewing scheduler", "Performance analytics", "Team collaboration"],
              },
              {
                title: "Booking & Scheduling Apps",
                desc: "Apps that allow clients to book property viewings, design consultations, or meetings with integrated calendar management.",
                features: ["Online booking", "Calendar integration", "Automated reminders", "Availability management", "Confirmation notifications"],
              },
              {
                title: "Analytics Dashboard Apps",
                desc: "Admin apps for monitoring app usage, user engagement, lead generation, and conversion metrics in real-time.",
                features: ["User analytics", "Engagement tracking", "Lead metrics", "Conversion reports", "Performance insights"],
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
            Key Features of Our Mobile Apps
          </h2>
        </Reveal>
        <Reveal delayMs={90}>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300">
            Every app we build includes essential features for real estate success and user engagement.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Cross-Platform Support",
              desc: "Apps that work seamlessly on both iOS and Android devices, reaching all your potential clients.",
            },
            {
              title: "Push Notifications",
              desc: "Targeted notifications to keep users engaged with new properties, updates, and personalized offers.",
            },
            {
              title: "Offline Mode",
              desc: "Access to saved properties and essential features even without an internet connection.",
            },
            {
              title: "Secure Authentication",
              desc: "Safe and secure login systems with options for social media integration and biometric authentication.",
            },
            {
              title: "Analytics Integration",
              desc: "Built-in analytics to track user behavior, feature usage, and conversion metrics for optimization.",
            },
            {
              title: "CRM Integration",
              desc: "Seamless connection with your existing CRM to sync leads, contacts, and customer data.",
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
                  Ready to Build Your Mobile App?
                </h2>
                <p className="mt-2 text-zinc-600 dark:text-zinc-300">
                  Get a free consultation and see how we can build an app that engages your clients and drives results.
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
