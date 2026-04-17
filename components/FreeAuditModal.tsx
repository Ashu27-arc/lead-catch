"use client";

import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  website: string;
  message: string;
};

export function FreeAuditModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const firstFieldRef = useRef<HTMLInputElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  useEffect(() => {
    if (!open) return;

    setStatus("idle");
    setForm({
      name: "",
      email: "",
      phone: "",
      website: "",
      message: "",
    });
    setFeedbackMessage("");

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    // Focus first field for accessibility.
    const t = window.setTimeout(() => {
      firstFieldRef.current?.focus?.();
    }, 0);

    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    if (status !== "success") return;

    // When success shows, keep focus on close button for keyboard users.
    const t = window.setTimeout(() => {
      closeButtonRef.current?.focus?.();
    }, 0);
    return () => window.clearTimeout(t);
  }, [open, status]);

  if (!open) return null;

  const setField =
    (key: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((v) => ({ ...v, [key]: e.target.value }));
    };

  const canSubmit =
    form.name.trim().length > 1 &&
    form.email.trim().includes("@") &&
    form.phone.trim().length >= 10;

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!canSubmit || status !== "idle") return;

    setStatus("submitting");
    setFeedbackMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        setStatus("error");
        setFeedbackMessage(data.message ?? "Unable to submit your request.");
        return;
      }

      setStatus("success");
      setFeedbackMessage(data.message ?? "Thanks! We received your request.");
    } catch {
      setStatus("error");
      setFeedbackMessage("Network error. Please try again.");
    }
  };

  return (
    <div
      className="fixed inset-0 z-60 flex items-center justify-center bg-background/60 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="free-audit-title"
      onMouseDown={(e) => {
        // Close only when user clicks outside the modal panel.
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-xl rounded-3xl border border-black/10 bg-white p-6 shadow-lg dark:border-white/10 dark:bg-black">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div
              id="free-audit-title"
              className="text-lg font-semibold tracking-tight"
            >
              Get a Free Audit
            </div>
            <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
              Share your project details. This is a UI-only demo form (no
              backend connected).
            </div>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white/60 text-sm hover:bg-white active:translate-y-px dark:border-white/10 dark:bg-white/5"
            onClick={onClose}
          >
            X
          </button>
        </div>

        {status === "success" ? (
          <div className="mt-6 rounded-2xl border border-black/10 bg-white/70 p-5 dark:border-white/10 dark:bg-white/5">
            <div className="text-sm font-semibold">Thanks! (Demo)</div>
            <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              {feedbackMessage ||
                "We will reach out within 48 hours with next steps for your audit."}
            </div>
            <div className="mt-5 flex gap-3">
              <button
                type="button"
                className="inline-flex h-11 flex-1 items-center justify-center rounded-full bg-(--brand) px-5 text-sm font-medium text-(--brand-contrast) transition-colors hover:bg-(--brand-2)"
                onClick={onClose}
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form className="mt-6 space-y-4" onSubmit={onSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-300">
                  Name
                </span>
                <input
                  ref={firstFieldRef}
                  className="mt-2 h-11 w-full rounded-xl border border-black/10 bg-white px-3 text-sm outline-none placeholder:text-zinc-400 focus:border-indigo-500/60 dark:border-white/10 dark:bg-black"
                  placeholder="Your name"
                  name="name"
                  value={form.name}
                  onChange={setField("name")}
                  autoComplete="name"
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
                  value={form.email}
                  onChange={setField("email")}
                  autoComplete="email"
                />
              </label>
              <label className="block">
                <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-300">
                  Phone Number
                </span>
                <input
                  className="mt-2 h-11 w-full rounded-xl border border-black/10 bg-white px-3 text-sm outline-none placeholder:text-zinc-400 focus:border-indigo-500/60 dark:border-white/10 dark:bg-black"
                  placeholder="+91 98765 43210"
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={setField("phone")}
                  autoComplete="tel"
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
                value={form.website}
                onChange={setField("website")}
                autoComplete="url"
              />
            </label>

            <label className="block">
              <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-300">
                What do you need help with?
              </span>
              <textarea
                className="mt-2 min-h-28 w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm outline-none placeholder:text-zinc-400 focus:border-indigo-500/60 dark:border-white/10 dark:bg-black"
                  placeholder="Ads / SEO / landing page / tracking / lead gen..."
                name="message"
                value={form.message}
                onChange={setField("message")}
              />
            </label>

            <button
              type="submit"
              disabled={!canSubmit || status === "submitting"}
              className="inline-flex h-11 w-full items-center justify-center rounded-full bg-(--brand) px-5 text-sm font-medium text-(--brand-contrast) transition-colors hover:bg-(--brand-2) disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "submitting" ? "Sending..." : "Get audit"}
            </button>

            {status === "error" && (
              <div className="text-xs text-red-600 dark:text-red-400">
                {feedbackMessage}
              </div>
            )}

            <div className="text-xs text-zinc-500">
              Want a faster start? Email us at{" "}
              <a
                className="underline decoration-black/20 underline-offset-4 hover:decoration-black/60 dark:decoration-white/20 dark:hover:decoration-white/60"
                href="mailto:info@leadcatch.in"
              >
                info@leadcatch.in
              </a>
              .
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

