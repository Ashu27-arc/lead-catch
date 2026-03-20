"use client";

import { useEffect, useRef, useState } from "react";

type RevealVariant = "up" | "fade";

export function Reveal({
  children,
  className = "",
  delayMs = 0,
  variant = "up",
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  variant?: RevealVariant;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If reduced motion is enabled, show instantly.
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { root: null, threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={`lc-reveal ${className}`}
      data-visible={visible ? "true" : "false"}
      data-variant={variant}
      style={delayMs ? ({ animationDelay: `${delayMs}ms` } as const) : undefined}
    >
      {children}
    </div>
  );
}

