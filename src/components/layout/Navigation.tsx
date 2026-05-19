"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "/#villa", label: "The villa" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about-llandudno", label: "Llandudno" },
  { href: "/contact", label: "Inquire" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-[var(--color-hairline)]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        {/* Logo */}
        <Link href="/" aria-label="Lion House — home" className="flex items-center">
          <Image
            src="/images/logo/lion-house-logo.png"
            alt="Lion House"
            width={48}
            height={48}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden gap-10 text-sm md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
              href={link.href}
                className="text-[var(--color-ink)] transition-colors hover:text-[var(--color-muted)]"
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
          <span className="block h-px w-6 bg-[var(--color-ink)]" />
          <span className="mt-1.5 block h-px w-6 bg-[var(--color-ink)]" />
          <span className="mt-1.5 block h-px w-6 bg-[var(--color-ink)]" />
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div className="border-t border-[var(--color-hairline)] md:hidden">
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
