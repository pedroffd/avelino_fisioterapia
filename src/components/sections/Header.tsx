import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_LINK } from "@/constants";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-bold text-[var(--color-primary)]">
            Avelino Fisioterapia
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#sobre"
            className="text-gray-600 hover:text-[var(--color-primary)] font-medium transition-colors"
          >
            Quem Somos
          </Link>
          <Link
            href="#servicos"
            className="text-gray-600 hover:text-[var(--color-primary)] font-medium transition-colors"
          >
            Serviços
          </Link>
          <Link
            href="#depoimentos"
            className="text-gray-600 hover:text-[var(--color-primary)] font-medium transition-colors"
          >
            Depoimentos
          </Link>
          <Link
            href="#faq"
            className="text-gray-600 hover:text-[var(--color-primary)] font-medium transition-colors"
          >
            Dúvidas
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button
            href={WHATSAPP_LINK}
            size="sm"
            variant="secondary"
            className="hidden md:inline-flex"
          >
            Agendar Consulta
          </Button>
        </div>
      </div>
    </header>
  );
}
