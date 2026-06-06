"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "/the-house", label: "The House" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about-llandudno", label: "Llandudno" },
  { href: "/contact", label: "Inquire" },
];

interface Props {
  /**
   * Homepage only: render transparent over the full-screen hero, switching to a
   * solid cream bar once the user scrolls roughly one viewport down. Other pages
   * omit this and keep the standard in-flow solid header.
   */
  transparentOverHero?: boolean;
}

export default function Navigation({ transparentOverHero = false }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!transparentOverHero) return;
    // "Scrolled" once the user has nearly cleared the full-screen hero.
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 80);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [transparentOverHero]);

  // True only while the header floats transparently over the hero photo.
  const overHero = transparentOverHero && !scrolled;

  const headerClass = transparentOverHero
    ? `fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-[var(--color-hairline)] bg-[var(--color-cream)]"
          : "bg-transparent"
      }`
    : "border-b border-[var(--color-hairline)]";

  const linkColor = overHero ? "text-[var(--color-cream)]" : "text-[var(--color-ink)]";
  const barColor = overHero ? "bg-[var(--color-cream)]" : "bg-[var(--color-ink)]";
  const logoFilter = overHero ? "brightness-0 invert" : "";

  return (
    <header className={headerClass}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 md:py-5">
        {/* Logo */}
        <Link href="/" aria-label="Lion House — home" className="flex items-center">
          <Image
            src="/images/logo/lion-house-logo.png"
            alt="Lion House"
            width={80}
            height={80}
            priority
            className={`h-14 w-auto transition-[filter] duration-300 md:h-16 ${logoFilter}`}
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden gap-12 text-base md:flex md:text-lg">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${linkColor} transition-colors hover:text-[var(--color-muted)]`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu trigger */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          <span className={`block h-px w-6 ${barColor}`} />
          <span className={`mt-1.5 block h-px w-6 ${barColor}`} />
          <span className={`mt-1.5 block h-px w-6 ${barColor}`} />
        </button>
      </nav>

      {/* Mobile menu panel — always solid cream + ink text so it stays readable
          even when the header is transparent over the hero. */}
      {open && (
        <div className="border-t border-[var(--color-hairline)] bg-[var(--color-cream)] md:hidden">
          <ul className="flex flex-col gap-6 px-6 py-8 text-base">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-[var(--color-ink)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
