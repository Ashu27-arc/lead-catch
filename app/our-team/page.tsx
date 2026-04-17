import { Reveal } from "@/components/Reveal";

export default function OurTeam() {
  return (
    <main className="lc-page bg-white text-black dark:bg-black dark:text-white">
      <section className="mx-auto w-full max-w-6xl px-3 py-16 sm:px-5 sm:py-20">
        <Reveal>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Our Team
          </h1>
        </Reveal>
        <Reveal delayMs={80}>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
            Meet the experts who make it happen. Our team brings together decades of experience in real estate marketing, digital advertising, and business growth.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Founder & CEO",
              role: "Strategic Vision & Business Growth",
              description: "10+ years in real estate marketing, helping builders and developers scale their businesses through digital strategies.",
            },
            {
              name: "Digital Marketing Head",
              role: "PPC & Performance Marketing",
              description: "Expert in Meta Ads, Google Ads, and lead generation campaigns that deliver measurable ROI for real estate clients.",
            },
            {
              name: "SEO & Content Lead",
              role: "Search Engine Optimization",
              description: "Specializes in local SEO, technical SEO, and content strategies that help real estate businesses rank higher.",
            },
            {
              name: "Web Development Lead",
              role: "Website & App Development",
              description: "Builds high-converting websites and mobile applications tailored for real estate and interior design businesses.",
            },
            {
              name: "Creative Director",
              role: "Design & Branding",
              description: "Creates compelling visual content and brand identities that resonate with real estate audiences.",
            },
            {
              name: "Client Success Manager",
              role: "Account Management",
              description: "Ensures smooth communication and delivers exceptional service to all our real estate clients.",
            },
          ].map((member, index) => (
            <Reveal key={index} delayMs={index * 60}>
              <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
                <div className="h-16 w-16 rounded-full bg-linear-to-br from-(--brand) to-(--accent)" />
                <h3 className="mt-4 text-lg font-semibold tracking-tight">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-(--brand)">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  {member.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
