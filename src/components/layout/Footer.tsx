import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/#villa", label: "The villa" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about-llandudno", label: "Llandudno" },
  { href: "/season", label: "Your season" },
  { href: "/december", label: "December" },
  { href: "/contact", label: "Inquire" },
];

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-[var(--color-hairline)]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-16">
          {/* Identity */}
          <div>
            <Link href="/" aria-label="Lion House — home" className="inline-flex items-center">
              <Image
                src="/images/logo/lion-house-logo.png"
                alt="Lion House"
                width={56}
                height={56}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-5 font-[family-name:var(--font-display)] text-2xl text-[var(--color-ink)]">
              Lion House
            </p>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              Llandudno, Cape Town
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer">
            <p className="text-xs uppercase tracking-widest text-[var(--color-muted)]">
              Explore
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((link) => (
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
          </nav>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-widest text-[var(--color-muted)]">
              Inquiries
            </p>
            <a
              href="mailto:hello@lionhouse.co.za"
              className="mt-5 block text-sm text-[var(--color-ink)] transition-colors hover:text-[var(--color-muted)]"
            >
              hello@lionhouse.co.za
            </a>
            <p className="mt-3 text-sm text-[var(--color-muted)]">
              We respond personally within 4 hours.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-[var(--color-hairline)] pt-8">
          <div className="flex flex-col gap-4 text-xs text-[var(--color-muted)] md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} Lion House. Direct booking, no platform commission.
            </p>
            <p className="md:max-w-md md:text-right">
              A note: there are nearby building sites. No construction takes place during peak season.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
