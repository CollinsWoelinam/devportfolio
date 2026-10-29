"use client";

import { useState } from "react";
import { CheckIcon, CopyIcon } from "./Icons";

export function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked; the value is still visible to copy by hand.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Copied" : label}
      title={copied ? "Copied" : label}
      className="relative z-10 flex h-9 w-9 shrink-0 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-ink-700 text-ink-300 transition-colors hover:border-ember-500 hover:text-ember-400"
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
      <span aria-live="polite" className="sr-only">
        {copied ? "Email copied" : ""}
      </span>
    </button>
  );
}
