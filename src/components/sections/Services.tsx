import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { WHATSAPP_LINK } from "@/constants";

const SERVICES = [
  {
    title: "Recuperação Pós-Operatória",
    description:
      "Protocolos rigorosos e seguros para acelerar sua recuperação após cirurgias ortopédicas ou gerais, devolvendo função e força.",
    icon: "⚕️",
  },
  {
    title: "Fisioterapia Ortopédica",
    description:
      "Tratamento especializado para lesões articulares, musculares e tendíneas usando as melhores evidências científicas.",
    icon: "🦴",
  },
  {
    title: "Reabilitação Funcional",
    description:
      "Foco em devolver sua capacidade de realizar atividades diárias e esportivas com confiança e sem dor.",
    icon: "🏃",
  },
  {
    title: "Correção Postural",
    description:
      "Avaliação biomecânica e exercícios focados no realinhamento corporal para tratamento e prevenção de dores crônicas.",
    icon: "🧘",
  },
];

export function Services() {
  return (
    <Section id="servicos">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h4 className="text-[var(--color-secondary)] uppercase tracking-widest font-semibold text-sm">
          Excelência em Reabilitação
        </h4>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-foreground)]">
          Nossos Diferenciais
        </h2>
        <p className="text-gray-600 text-lg">
          Tratamentos modernos e equipamento de ponta para garantir os melhores
          resultados.
        </p>
      </div>

      {/* Featured Service: Ez Body */}
      <div className="bg-[var(--color-primary)] rounded-3xl overflow-hidden shadow-2xl mb-16 text-white flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 p-8 md:p-12 space-y-6">
          <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-semibold tracking-wide backdrop-blur-sm">
            Tecnologia Exclusiva
          </div>
          <h3 className="font-serif text-3xl font-bold">Aparelho Ez Body</h3>
          <p className="text-white/90 text-lg leading-relaxed">
            O diferencial do nosso consultório. A tecnologia Ez Body proporciona
            estímulos precisos e potencializa o recrutamento muscular e a
            recuperação tecidual de forma segura e indolor.
          </p>
          <ul className="space-y-3 pt-4">
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm">
                ✓
              </span>
              Resultados acelerados
            </li>
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm">
                ✓
              </span>
              Alívio imediato de dores agudas
            </li>
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm">
                ✓
              </span>
              Aumento da performance muscular
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 relative h-[300px] md:h-[500px]">
          {/* Typically we'd use an image of the equipment here. Given the provided assets, we use one of Liviane treating someone or a clean photo */}
          <Image
            src="/assets/Livi-Corporativa-71.jpg"
            alt="Tratamento Ez Body Fisioterapia"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Other Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICES.map((service) => (
          <Card key={service.title} className="group">
            <div className="w-14 h-14 bg-[var(--color-gold-light)] rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>
            <CardTitle>{service.title}</CardTitle>
            <CardDescription>{service.description}</CardDescription>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Button href={WHATSAPP_LINK} size="lg" variant="primary">
          Descobrir Meu Tratamento
        </Button>
      </div>
    </Section>
  );
}
