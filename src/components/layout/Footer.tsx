import { Container } from "@/components/ui/Container";

async function getYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer({ name }: { name: string }) {
  const year = await getYear();

  return (
    <footer className="border-t border-ink-800 py-8">
      <Container className="flex flex-col items-center justify-between gap-2 text-sm text-ink-500 sm:flex-row">
        <p>
          © {year} {name}
        </p>
        <p>
          Built with Next.js <span className="text-ember-500">&</span> Tailwind
        </p>
      </Container>
    </footer>
  );
}
