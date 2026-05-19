"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  /** Optional stagger before the fade begins, in ms. */
  delay?: number;
  className?: string;
}

/*
 * Fades children in (opacity 0->1, 20px rise) the first time they scroll into
 * view. One-shot per element — it does not re-fade on re-entry.
 *
 * SSR / no-JS: children are server-rendered at opacity-0. Without JavaScript
 * the observer never runs, so a <noscript> rule in app/layout.tsx forces every
 * [data-fade] element visible. Keep that rule in sync with the data-fade
 * attribute below.
 *
 * Reduced motion: rendered visible with no transition class — no animation.
 */
export default function FadeInOnScroll({
  children,
  delay = 0,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  // True for reduced-motion users — render visible with no transition at all.
  const [noAnimation, setNoAnimation] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Respect reduced motion — show immediately, no animation.
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setNoAnimation(true);
      setVisible(true);
      return;
    }

    // Guard for browsers without IntersectionObserver — show immediately.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger via delay prop.
            setTimeout(() => setVisible(true), delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      data-fade=""
      className={`${
        noAnimation
          ? ""
          : `transition-all duration-[700ms] ease-out ${
              visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`
      } ${className}`.trim()}
    >
      {children}
    </div>
  );
}
