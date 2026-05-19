import Link from "next/link";
import FadeInOnScroll from "@/components/utility/FadeInOnScroll";

export default function InquiryCta() {
  return (
    <section
      id="inquire"
      className="border-t border-[var(--color-hairline)] px-6 py-32 md:px-10 md:py-40"
      aria-label="Send an inquiry"
    >
      <FadeInOnScroll>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
            Get in touch
          </p>
          <h2 className="mt-6 font-[family-name:var(--font-display)] text-4xl leading-[1.1] md:text-5xl lg:text-6xl">
            Stay in touch about Lion House.
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
            We answer every inquiry personally, usually within four hours. Direct booking, no platform commission, no middlemen.
          </p>

          <div className="mt-12">
            <Link
              href="/contact"
              className="inline-block border-b border-[var(--color-ink)] pb-1 text-base text-[var(--color-ink)] transition-colors hover:border-[var(--color-muted)] hover:text-[var(--color-muted)] md:text-lg"
            >
              Send an inquiry →
            </Link>
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
}
