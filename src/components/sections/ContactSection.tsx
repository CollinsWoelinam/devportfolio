import type { Profile } from "@/types/portfolio";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/ui/CopyButton";
import { Section } from "@/components/ui/Section";

export function ContactSection({ profile }: { profile: Profile }) {
  const { email, socials } = profile;

  return (
    <Section id="contact" title="Get in touch">
      <div className="relative overflow-hidden rounded-3xl border border-ink-800 bg-ink-900/80 px-5 py-12 text-center backdrop-blur-sm sm:p-12 md:p-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[36rem] max-w-full -translate-x-1/2 rounded-full bg-ember-500/15 blur-3xl"
        />

        <div className="relative">
          <h3 className="text-2xl font-semibold tracking-tight text-snow sm:text-4xl">
            Let&apos;s work <span className="text-ember-500">together</span>.
          </h3>
          <p className="mx-auto mt-4 max-w-lg text-base text-ink-300 sm:text-lg">
            I&apos;m open to new opportunities and collaborations. Whether you
            have a question or just want to say hi, my inbox is open.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
            <Button href={`mailto:${email}`}>Say hello</Button>
            {socials.map(({ label, href }) => (
              <Button key={label} href={href} variant="outline" external>
                {label}
              </Button>
            ))}
          </div>

          <div className="mx-auto mt-10 flex max-w-sm items-center justify-center gap-3 border-t border-ink-800 pt-6">
            <a
              href={`mailto:${email}`}
              className="min-w-0 font-mono text-sm text-ink-300 transition-colors [overflow-wrap:anywhere] hover:text-ember-400"
            >
              {email}
            </a>
            <CopyButton value={email} label="Copy email address" />
          </div>
        </div>
      </div>
    </Section>
  );
}
