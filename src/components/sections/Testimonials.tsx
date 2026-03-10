import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

const TESTIMONIALS = [
  {
    name: "Mariana S.",
    text: '"O atendimento da Dra. Liviane foi um divisor de águas. Após meses com dor na lombar, o tratamento com o Ez Body acelerou muito minha recuperação."',
    role: "Paciente de Reabilitação",
  },
  {
    name: "Roberto F.",
    text: '"Fisioterapia focada e humanizada. A clínica tem um ambiente incrível, transmitindo paz e cuidado em cada sessão."',
    role: "Paciente Pós-Operatório",
  },
  {
    name: "Carolina M.",
    text: '"Achei que a dor no ombro nunca ia passar, mas com as sessões semanais e o cronograma de exercícios, hoje voltei a jogar tênis!"',
    role: "Paciente de Esportiva",
  },
];

export function Testimonials() {
  const _year = new Date().getFullYear();

  return (
    <Section id="depoimentos" bgWhite>
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h4 className="text-[var(--color-secondary)] uppercase tracking-widest font-semibold text-sm">
          Histórias Reais
        </h4>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-foreground)]">
          O que dizem os pacientes
        </h2>
        <p className="text-gray-600 text-lg">
          A maior recompensa é devolver a autonomia e o sorriso para quem confia
          em nosso trabalho.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((testimonial) => (
          <Card
            key={testimonial.name}
            bgWhite={false}
            className="relative mt-8 flex flex-col"
          >
            <span className="absolute -top-6 left-6 text-6xl text-[var(--color-gold)] font-serif rotate-180 opacity-50">
              "
            </span>
            <div className="pt-4 flex flex-col h-full">
              <p className="text-gray-700 italic mb-6 flex-grow">
                {testimonial.text}
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-[var(--color-gold-light)] flex items-center justify-center text-[var(--color-primary)] font-bold text-lg shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-foreground)] leading-tight">
                    {testimonial.name}
                  </h4>
                  <span className="text-sm text-gray-500">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
