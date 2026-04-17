"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  website: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  website: "",
  message: "",
};

export function ContactUsForm() {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFeedback(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        setFeedback({
          type: "error",
          message: data.message ?? "Unable to submit your request.",
        });
        return;
      }

      setFeedback({
        type: "success",
        message: data.message ?? "Thanks! We received your request.",
      });
      setFormData(initialState);
    } catch {
      setFeedback({
        type: "error",
        message: "Network error. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-300">
            Your Name
          </span>
          <input
            className="mt-2 h-11 w-full rounded-xl border border-black/10 bg-white px-3 text-sm outline-none placeholder:text-zinc-400 focus:border-indigo-500/60 dark:border-white/10 dark:bg-black"
            placeholder="Your name"
            name="name"
            value={formData.name}
            onChange={(event) =>
              setFormData((previous) => ({ ...previous, name: event.target.value }))
            }
            required
          />
        </label>
        <label className="block">
          <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-300">
            Email Address
          </span>
          <input
            className="mt-2 h-11 w-full rounded-xl border border-black/10 bg-white px-3 text-sm outline-none placeholder:text-zinc-400 focus:border-indigo-500/60 dark:border-white/10 dark:bg-black"
            placeholder="you@company.com"
            type="email"
            name="email"
            value={formData.email}
            onChange={(event) =>
              setFormData((previous) => ({ ...previous, email: event.target.value }))
            }
            required
          />
        </label>
      </div>

      <label className="block">
        <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-300">
          Company Website
        </span>
        <input
          className="mt-2 h-11 w-full rounded-xl border border-black/10 bg-white px-3 text-sm outline-none placeholder:text-zinc-400 focus:border-indigo-500/60 dark:border-white/10 dark:bg-black"
          placeholder="https://"
          name="website"
          value={formData.website}
          onChange={(event) =>
            setFormData((previous) => ({ ...previous, website: event.target.value }))
          }
        />
      </label>

      <label className="block">
        <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-300">
          Tell Us About Your Real Estate Business
        </span>
        <textarea
          className="mt-2 min-h-28 w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm outline-none placeholder:text-zinc-400 focus:border-indigo-500/60 dark:border-white/10 dark:bg-black"
          placeholder="Tell us about your property listings, target clients, current marketing efforts..."
          name="message"
          value={formData.message}
          onChange={(event) =>
            setFormData((previous) => ({ ...previous, message: event.target.value }))
          }
          required
        />
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex h-11 w-full items-center justify-center rounded-full bg-(--brand) px-5 text-sm font-medium text-(--brand-contrast) transition-colors hover:bg-(--brand-2) disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Submitting..." : "Start Your Growth Journey"}
      </button>

      <p
        className={`text-xs ${
          feedback?.type === "error"
            ? "text-red-600 dark:text-red-400"
            : "text-zinc-500"
        }`}
      >
        {feedback?.message ??
          "Prefer immediate assistance? Email us your business details and we'll respond within 24 hours with your personalized strategy."}
      </p>
    </form>
  );
}
