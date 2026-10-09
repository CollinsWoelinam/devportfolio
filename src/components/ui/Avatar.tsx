import Image from "next/image";

interface AvatarProps {
  name: string;
  src?: string;
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : "")).toUpperCase();
}

// Shows the profile photo, or the person's initials until a photo is added.
export function Avatar({ name, src }: AvatarProps) {
  return (
    <div className="relative mx-auto aspect-[4/5] w-[9.5rem] sm:w-64 md:w-72 lg:w-full lg:max-w-sm">
      <div
        aria-hidden
        className="absolute inset-0 translate-x-2 translate-y-2 rotate-3 rounded-3xl sm:translate-x-4 sm:translate-y-4 sm:rounded-[2rem] border border-ember-500/40"
      />
      <div
        aria-hidden
        className="absolute -inset-6 rounded-full bg-ember-500/25 blur-3xl"
      />
      <div className="relative h-full w-full overflow-hidden rounded-3xl border border-ink-700 sm:rounded-[2rem] bg-gradient-to-br from-ember-600 via-ember-900 to-ink-900">
        {src ? (
          <Image
            src={src}
            alt={name}
            fill
            preload
            sizes="(min-width: 1024px) 384px, 288px"
            className="object-cover object-[center_25%]"
          />
        ) : (
          <span className="flex h-full items-center justify-center text-7xl font-bold tracking-tight text-snow/90">
            {initials(name)}
          </span>
        )}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink-950/70 to-transparent"
        />
      </div>
    </div>
  );
}
