"use client";

import { useCallback, useEffect, useState } from "react";
import type { Profile } from "@/types/portfolio";
import { sectionIndex, sections } from "@/lib/navigation";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";

const linkClass = "text-ink-300 transition-colors hover:text-ember-400";

function Logo({ name, onClick }: { name: string; onClick?: () => void }) {
  return (
    <a href="#" onClick={onClick} className="truncate font-semibold text-snow">
      {name}
      <span className="text-ember-500">.</span>
    </a>
  );
}

function MenuButton({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      aria-controls="mobile-menu"
      onClick={onClick}
      className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 rounded-full border border-ink-700 md:hidden"
    >
      <span className={cn("h-0.5 w-4 bg-snow transition-transform", open && "translate-y-1 rotate-45")} />
      <span className={cn("h-0.5 w-4 bg-snow transition-transform", open && "-translate-y-1 -rotate-45")} />
    </button>
  );
}

function MobileMenu({
  profile,
  open,
  onClose,
}: {
  profile: Profile;
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div className="md:hidden" inert={!open}>
      <div
        aria-hidden
        onClick={onClose}
        className={cn(
          "fixed inset-0 z-[60] bg-ink-950/70 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />
      <aside
        id="mobile-menu"
        aria-label="Menu"
        className={cn(
          "bg-grid fixed inset-y-0 right-0 z-[70] flex w-[min(20rem,85vw)] flex-col border-l border-ink-800 bg-ink-950 px-6 pt-4 pb-8 shadow-2xl shadow-ember-900/40 transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex h-12 items-center justify-end">
          <MenuButton open onClick={onClose} />
        </div>

        <nav className="mt-8 flex-1">
          <ul className="space-y-2">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={onClose}
                  className="group flex items-baseline gap-4 py-2 text-2xl font-semibold text-snow transition-colors hover:text-ember-400"
                >
                  <span className="font-mono text-xs text-ember-500">
                    {sectionIndex(id)}
                  </span>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-3 border-t border-ink-800 pt-6 text-sm">
          <a href={`mailto:${profile.email}`} className={cn("block break-all", linkClass)}>
            {profile.email}
          </a>
          <ul className="flex gap-5">
            {profile.socials.map(({ label, href }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}

export function Navbar({ profile }: { profile: Profile }) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-ink-800/80 bg-ink-950/70 backdrop-blur-md">
        <Container className="flex h-16 items-center justify-between gap-4">
          <Logo name={profile.name} />

          <nav className="hidden md:block">
            <ul className="flex gap-6 lg:gap-8">
              {sections.map(({ id, label }) => (
                <li key={id}>
                  <a href={`#${id}`} className={cn("text-sm", linkClass)}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <MenuButton open={open} onClick={() => setOpen(true)} />
        </Container>
      </header>

      <MobileMenu profile={profile} open={open} onClose={close} />
    </>
  );
}
