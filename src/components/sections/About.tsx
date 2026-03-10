import Image from "next/image";
import { Section } from "@/components/ui/Section";

export function About() {
  return (
    <Section id="sobre" bgWhite>
      <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        {/* Profile Image Column */}
        <div className="w-full md:w-1/2 relative flex justify-center">
          <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px]">
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-[var(--color-gold)] rounded-tl-3xl"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-[var(--color-primary)] rounded-br-3xl"></div>

            <Image
              src="/assets/Livi-Corporativa-19.jpg"
              alt="Liviane Avelino"
              fill
              className="object-cover rounded-2xl shadow-lg z-10"
            />
          </div>
        </div>

        {/* Text Content Column */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="space-y-2">
            <h4 className="text-[var(--color-secondary)] uppercase tracking-widest font-semibold text-sm">
              Quem Sou
            </h4>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-foreground)]">
              Dra. Liviane Avelino
            </h2>
          </div>

          <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
            <p>
              Sou apaixonada por proporcionar mais qualidade de vida e autonomia
              aos meus pacientes. Acredito em uma fisioterapia humanizada, onde
              o cuidado vai além dos sintomas, tratando o indivíduo como um
              todo.
            </p>
            <p>
              Com anos de experiência e constante atualização clínica, meu
              objetivo é devolver o seu movimento sem dor, utilizando técnicas
              modernas e protocolos personalizados de reabilitação.
            </p>
            <p>
              Minha missão é ser facilitadora no seu processo de cura e
              bem-estar, garantindo que cada sessão seja um passo consistente em
              direção à recuperação plena.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-100">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-[var(--color-primary)] font-serif">
                +5
              </span>
              <span className="text-sm text-gray-500 font-medium uppercase tracking-wider">
                Anos de Experiência
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-[var(--color-primary)] font-serif">
                +1000
              </span>
              <span className="text-sm text-gray-500 font-medium uppercase tracking-wider">
                Pacientes Atendidos
              </span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
