import type { Profile } from "@/types/portfolio";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function ContactSection({ profile }: { profile: Profile }) {
  return (
    <Section id="contact" title="Get in touch">
      <div className="rounded-3xl border border-ink-800 bg-ink-900/80 px-5 py-10 text-center backdrop-blur-sm sm:p-12 md:p-16">
        <p className="mx-auto max-w-lg text-base text-ink-300 sm:text-lg">
          I&apos;m open to new opportunities and collaborations. Whether you
          have a question or just want to say hi, my inbox is open.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
          <Button href={`mailto:${profile.email}`}>Say hello</Button>
          {profile.socials.map(({ label, href }) => (
            <Button key={label} href={href} variant="outline" external>
              {label}
            </Button>
          ))}
        </div>
      </div>
    </Section>
  );
}
