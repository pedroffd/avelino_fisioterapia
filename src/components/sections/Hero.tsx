import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_LINK } from "@/constants";

export function Hero() {
  return (
    <section className="relative w-full bg-[var(--color-neutral-subtle)] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl min-h-[85vh] flex flex-col md:flex-row items-center justify-between py-12 md:py-0">
        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start space-y-6 z-10 pt-10 md:pt-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-gold-light)] text-[var(--color-primary)] text-sm font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[var(--color-secondary)]"></span>
            Cuidado Premium em Fisioterapia
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-foreground)] leading-tight">
            Transforme seu recomeço. <br />
            <span className="text-[var(--color-primary)]">
              Movimento inteligente
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-md leading-relaxed">
            Alcance o bem-estar e a recuperação plena através de um atendimento
            especializado, focado nas suas necessidades e com a tecnologia Ez
            Body.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button href={WHATSAPP_LINK} size="lg" variant="primary">
              Agendar Avaliação
            </Button>
            <Button href="#servicos" size="lg" variant="outline">
              Nossos Diferenciais
            </Button>
          </div>
        </div>

        {/* Image Content */}
        <div className="w-full md:w-1/2 relative mt-12 md:mt-0 flex justify-center md:justify-end h-[500px] md:h-[700px]">
          <div className="relative w-full h-full max-w-lg">
            {/* Aesthetic Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[var(--color-gold-light)] rounded-full blur-3xl opacity-50 z-0"></div>

            <Image
              src="/assets/Livi-Corporativa-19.webp"
              alt="Liviane Avelino Fisioterapeuta"
              fill
              className="object-cover object-top rounded-t-full rounded-b-[40px] shadow-2xl z-10 border-4 border-white"
              priority
            />

            {/* Floating Badge */}
            <div className="absolute bottom-10 -left-6 md:-left-12 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-4 animate-bounce-slow">
              <div className="bg-[var(--color-primary)] text-white w-12 h-12 flex items-center justify-center rounded-full font-bold text-xl">
                ✓
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[var(--color-foreground)]">
                  Especialista
                </span>
                <span className="text-sm text-gray-500">
                  Resultados Comprovados
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
