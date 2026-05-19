"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "villa", label: "The villa" },
  { id: "featured", label: "Featured" },
  { id: "stays", label: "Stays" },
  { id: "house", label: "The house" },
  { id: "gallery", label: "Gallery" },
  { id: "amenities", label: "Amenities" },
  { id: "location", label: "Location" },
  { id: "inquire", label: "Inquire" },
];

export default function SectionNav() {
  const [activeId, setActiveId] = useState<string>("villa");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show the nav once the user has scrolled past the top of the hero (~600px).
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Track which section is currently in view. Use IntersectionObserver
    // with a margin that biases toward the top half of the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // The entry whose top is closest to the top of the viewport wins.
          const topMost = visibleEntries.reduce((closest, entry) =>
            entry.boundingClientRect.top < closest.boundingClientRect.top
              ? entry
              : closest
          );
          setActiveId(topMost.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      aria-label="Sections of this page"
      className={`fixed left-8 top-1/2 hidden -translate-y-1/2 transition-opacity duration-500 lg:block ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <ul className="space-y-4 border-l border-[var(--color-hairline)] py-2">
        {sections.map(({ id, label }) => {
          const isActive = activeId === id;
          return (
            <li key={id} className="relative">
              {isActive && (
                <span
                  aria-hidden="true"
                  className="absolute -left-[1px] top-0 h-full w-px bg-[var(--color-atlantic-blue)]"
                />
              )}
              <a
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                className={`block py-1 pl-5 text-xs transition-colors ${
                  isActive
                    ? "text-[var(--color-ink)]"
                    : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                }`}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
