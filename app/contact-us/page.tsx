import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ContactUsForm } from "@/components/ContactUsForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Real Estate Marketing Services in Noida | Lead Catch",
  description: "Get in touch with Lead Catch for expert real estate marketing services in Noida. Free marketing audit and consultation for builders, interior designers, and architects. Call us or email today.",
  keywords: "contact Lead Catch, real estate marketing contact Noida, digital marketing consultation, lead generation consultation, marketing agency contact, Noida marketing services contact",
  openGraph: {
    title: "Contact Us | Real Estate Marketing Services in Noida | Lead Catch",
    description: "Get in touch with Lead Catch for expert real estate marketing services in Noida. Free marketing audit and consultation.",
    url: "https://www.leadcatch.in/contact-us",
    type: "website",
  },
};

export default function ContactUsPage() {
  return (
    <main className="lc-page bg-white text-black dark:bg-black dark:text-white">
      <section className="relative overflow-hidden border-b border-black/10 dark:border-white/10">
        <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(800px_circle_at_20%_20%,color-mix(in_oklab,var(--brand)_35%,transparent),transparent_60%),radial-gradient(800px_circle_at_80%_20%,color-mix(in_oklab,var(--accent)_28%,transparent),transparent_55%),radial-gradient(800px_circle_at_50%_80%,color-mix(in_oklab,var(--brand-2)_28%,transparent),transparent_55%)]" />
        <div className="mx-auto w-full max-w-6xl px-3 py-16 sm:px-5 sm:py-20">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-700 backdrop-blur dark:border-white/10 dark:bg-black/40 dark:text-zinc-200">
              Let's Grow Your Real Estate Business Together
            </p>
          </Reveal>
          <Reveal delayMs={90}>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Start Your Real Estate Lead Generation Journey Today.
            </h1>
          </Reveal>
          <Reveal delayMs={150}>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-zinc-600 dark:text-zinc-300">
              Tell us about your real estate business, target market, and current marketing challenges. Our team will analyze your needs and create a customized lead generation strategy within 48 hours.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-3 py-16 sm:px-5">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Connect With Our Real Estate Marketing Experts
              </h2>
            </Reveal>
            <Reveal delayMs={90}>
              <p className="mt-4 text-zinc-600 dark:text-zinc-300">
                We're here to help your real estate business thrive. Reach out through email or phone for immediate assistance with your lead generation needs.
              </p>
            </Reveal>

            <div className="mt-8 space-y-4 text-sm text-zinc-600 dark:text-zinc-300">
              <Reveal delayMs={140}>
                <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5">
                  <div className="text-xs font-semibold text-zinc-500">Email Us</div>
                  <a
                    href="mailto:info@leadcatch.in"
                    className="mt-2 inline-flex break-all underline decoration-black/20 underline-offset-4 hover:decoration-black/60 dark:decoration-white/20 dark:hover:decoration-white/60"
                  >
                    info@leadcatch.in
                  </a>
                </div>
              </Reveal>
              <Reveal delayMs={200}>
                <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5">
                  <div className="text-xs font-semibold text-zinc-500">Phone</div>
                  <div className="mt-2 flex flex-col gap-2">
                    <a
                      href="tel:+919917677017"
                      className="inline-flex underline decoration-black/20 underline-offset-4 hover:decoration-black/60 dark:decoration-white/20 dark:hover:decoration-white/60"
                    >
                      +91 9917677017
                    </a>
                    <a
                      href="tel:+919718435589"
                      className="inline-flex underline decoration-black/20 underline-offset-4 hover:decoration-black/60 dark:decoration-white/20 dark:hover:decoration-white/60"
                    >
                      +91 9718435589
                    </a>
                  </div>
                </div>
              </Reveal>
              <Reveal delayMs={260}>
                <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5">
                  <div className="text-xs font-semibold text-zinc-500">
                    Call Our Experts
                  </div>
                  <div className="mt-2">We respond within 24 hours</div>
                </div>
              </Reveal>

              <div className="pt-2">
                <Link
                  href="/services"
                  className="inline-flex text-sm font-medium underline decoration-black/20 underline-offset-4 hover:decoration-black/60 dark:decoration-white/20 dark:hover:decoration-white/60"
                >
                  See our services →
                </Link>
              </div>
            </div>
          </div>

          <Reveal delayMs={160}>
            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-black">
              <div className="text-sm font-semibold">Send Your Requirements (Free Marketing Audit)</div>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                Fill out the form below and our real estate marketing specialists will analyze your needs and create a personalized growth strategy.
              </p>

              <ContactUsForm />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}