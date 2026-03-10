import { Section } from "@/components/ui/Section";

const FAQS = [
  {
    question: "A avaliação inicial é gratuita?",
    answer:
      "A nossa avaliação inicial é uma consulta clínica aprofundada, onde entendemos seu histórico e desenvolvemos o protocolo. Por isso, ela tem um valor específico que pode ser abatido caso feche o pacote de sessões.",
  },
  {
    question: "A clínica aceita convênio ou plano de saúde?",
    answer:
      "Trabalhamos de forma particular para garantir um tempo adequado e um cuidado premium, mas emitimos recibo para que você possa solicitar reembolso junto ao seu plano de saúde.",
  },
  {
    question: "O aparelho Ez Body dói?",
    answer:
      "Não! O Ez Body é uma tecnologia moderna e indolor. Pelo contrário, muitos pacientes relatam alívio imediato e sensação de relaxamento durante seu uso.",
  },
  {
    question: "Quantas sessões vou precisar fazer?",
    answer:
      "O número de sessões varia de acordo com cada caso e a complexidade do diagnóstico. Tudo isso será conversado com transparência na sua primeira avaliação.",
  },
];

export function FAQ() {
  return (
    <Section id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-foreground)]">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-600 text-lg">
            Ainda tem dúvidas? Aqui estão as respostas para as perguntas mais
            comuns.
          </p>
        </div>

        <div className="space-y-6">
          {FAQS.map((faq) => (
            <div
              key={faq.question}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-serif text-xl font-bold text-[var(--color-primary)] mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
