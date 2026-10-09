import type { Profile } from "@/types/portfolio";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero({ profile }: { profile: Profile }) {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden pt-20 pb-12 sm:pt-28 sm:pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-ember-500/15 blur-3xl"
      />

      <Container className="relative grid items-center gap-7 sm:gap-14 lg:grid-cols-[1.25fr_1fr]">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-ink-700 bg-ink-900/60 px-4 py-1.5 text-xs text-ink-300 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ember-500" />
            </span>
            {profile.location}
          </p>

          <h1 className="mt-5 sm:mt-6 text-[2.5rem] leading-[1.05] font-bold tracking-tight text-snow sm:text-6xl lg:text-7xl">
            <span className="block text-xl font-medium text-ink-300 sm:text-3xl">
              Hi, I&apos;m
            </span>
            {profile.name}
          </h1>

          <p className="mt-5 bg-gradient-to-r from-ember-300 via-ember-500 to-ember-600 bg-clip-text text-lg font-semibold text-transparent sm:text-2xl">
            {profile.role}
          </p>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed sm:text-lg text-ink-300 lg:mx-0">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:mt-10 sm:gap-4 lg:justify-start">
            <Button href="#projects">View my work →</Button>
            <Button href="#contact" variant="outline">
              Get in touch
            </Button>
            {profile.resumeUrl && (
              <Button href={profile.resumeUrl} variant="outline" external>
                Résumé
              </Button>
            )}
          </div>

          <ul className="mt-10 flex justify-center gap-6 text-sm lg:justify-start">
            {profile.socials.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-300 underline-offset-4 transition-colors hover:text-ember-400 hover:underline"
                >
                  {label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="order-1 lg:order-2">
          <Avatar name={profile.name} src={profile.avatarUrl} />
        </div>
      </Container>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-ink-500 transition-colors hover:text-ember-400 sm:flex"
      >
        Scroll
        <span className="h-8 w-px animate-pulse bg-gradient-to-b from-ember-500 to-transparent" />
      </a>
    </section>
  );
}
