import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SITE_META } from "@/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-foreground)] text-white/80 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/assets/logo.png"
              alt="Avelino Fisioterapia Logo"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
            <span className="font-serif text-2xl font-bold text-[var(--color-gold)]">
              Avelino Fisioterapia
            </span>
          </Link>
          <p className="text-sm leading-relaxed max-w-sm">
            Cuidado premium e reabilitação moderna. Movimento inteligente para
            transformar seu recomeço, com a dedicação da Dra. Liviane Avelino.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <a
              href={SITE_META.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--color-gold)] hover:text-[var(--color-foreground)] transition-all duration-300"
              aria-label="Siga-nos no Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold tracking-wider font-serif">
            Navegação
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="#sobre"
                className="hover:text-[var(--color-gold)] transition-colors"
              >
                Quem Somos
              </Link>
            </li>
            <li>
              <Link
                href="#servicos"
                className="hover:text-[var(--color-gold)] transition-colors"
              >
                Nossos Diferenciais
              </Link>
            </li>
            <li>
              <Link
                href="#depoimentos"
                className="hover:text-[var(--color-gold)] transition-colors"
              >
                Depoimentos
              </Link>
            </li>
            <li>
              <Link
                href="#faq"
                className="hover:text-[var(--color-gold)] transition-colors"
              >
                Dúvidas Frequentes
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold tracking-wider font-serif">
            Contato
          </h4>
          <ul className="space-y-3 text-sm flex flex-col">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[var(--color-gold)] shrink-0" />
              <span>Atendimento presencial sujeito a agendamento</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[var(--color-gold)] shrink-0" />
              <span>(48) 99630-3076</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[var(--color-gold)] shrink-0" />
              <span>contato@avelinofisioterapia.com.br</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-6xl mt-12 pt-8 border-t border-white/10 text-xs text-center flex flex-col items-center justify-center gap-2">
        <p>&copy; {year} Avelino Fisioterapia. Todos os direitos reservados.</p>
        <p className="text-white/40">
          Desenvolvido com excelência por{" "}
          <a
            href="https://pedrosouza.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-gold)] hover:underline"
          >
            Pedro Souza
          </a>
        </p>
      </div>
    </footer>
  );
}
