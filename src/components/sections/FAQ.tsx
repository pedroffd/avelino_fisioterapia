import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
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
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-foreground)]">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-600 text-lg">
            Ainda tem dúvidas? Aqui estão as respostas para as perguntas mais
            comuns.
          </p>
        </div>

        <Accordion.Root type="single" collapsible className="space-y-4">
          {FAQS.map((faq) => (
            <Accordion.Item
              key={faq.question}
              value={faq.question}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <Accordion.Header>
                <Accordion.Trigger className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-gray-50 transition-colors group">
                  <span className="font-serif text-xl font-bold text-[var(--color-primary)]">
                    {faq.question}
                  </span>
                  <ChevronDown className="w-5 h-5 text-[var(--color-gold)] transition-transform duration-300 group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
                <div className="p-6 md:px-8 md:pb-8 pt-0 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </Section>
  );
}
