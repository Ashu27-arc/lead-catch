import { Reveal } from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Join Our Real Estate Marketing Team in Noida | Lead Catch",
  description: "Explore career opportunities at Lead Catch. Join our team of digital marketing experts helping real estate businesses grow. Open positions in Noida for marketing, development, and design roles.",
  keywords: "careers at Lead Catch, digital marketing jobs Noida, real estate marketing careers, marketing jobs in Noida, SEO jobs, PPC jobs, web development jobs, content writing jobs Noida",
  openGraph: {
    title: "Careers | Join Our Real Estate Marketing Team in Noida | Lead Catch",
    description: "Explore career opportunities at Lead Catch. Join our team of digital marketing experts helping real estate businesses grow.",
    url: "https://www.leadcatch.in/careers",
    type: "website",
  },
};

export default function Careers() {
  return (
    <main className="lc-page bg-white text-black dark:bg-black dark:text-white">
      <section className="mx-auto w-full max-w-6xl px-3 py-16 sm:px-5 sm:py-20">
        <Reveal>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Join Our Team
          </h1>
        </Reveal>
        <Reveal delayMs={80}>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
            We're always looking for talented people who are passionate about helping real estate businesses grow. If you're driven, creative, and ready to make an impact, we'd love to hear from you.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6">
          {[
            {
              title: "Digital Marketing Executive",
              type: "Full-time",
              location: "Noida",
              description: "We're looking for a digital marketing expert to manage PPC campaigns, SEO strategies, and lead generation for our real estate clients.",
            },
            {
              title: "Content Writer",
              type: "Full-time",
              location: "Noida",
              description: "Create compelling content for real estate websites, blogs, and marketing materials that drive engagement and conversions.",
            },
            {
              title: "Web Developer",
              type: "Full-time",
              location: "Noida",
              description: "Build high-converting websites and landing pages for real estate businesses using modern web technologies.",
            },
            {
              title: "Graphic Designer",
              type: "Full-time",
              location: "Noida",
              description: "Design stunning visuals, social media creatives, and brand materials that resonate with real estate audiences.",
            },
          ].map((job, index) => (
            <Reveal key={index} delayMs={index * 60}>
              <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">
                      {job.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <span className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-800">
                        {job.type}
                      </span>
                      <span className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-800">
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <a
                    href="/contact-us"
                    className="inline-flex h-10 items-center justify-center rounded-full bg-(--brand) px-5 text-sm font-medium text-(--brand-contrast) transition-colors hover:bg-(--brand-2)"
                  >
                    Apply Now
                  </a>
                </div>
                <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  {job.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={300} className="mt-12">
          <div className="rounded-3xl border border-black/10 bg-zinc-50 p-8 text-center dark:border-white/10 dark:bg-white/5">
            <h2 className="text-2xl font-semibold tracking-tight">
              Don't see a role that fits?
            </h2>
            <p className="mt-3 text-base text-zinc-600 dark:text-zinc-300">
              We're always interested in meeting talented people. Send us your resume and tell us how you can help us grow.
            </p>
            <a
              href="mailto:info@leadcatch.in"
              className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-(--brand) px-5 text-sm font-medium text-(--brand-contrast) transition-colors hover:bg-(--brand-2)"
            >
              Send Your Resume
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
