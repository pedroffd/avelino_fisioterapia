import { Check } from "lucide-react";
import Link from "next/link";

const tiers = [
  {
    name: "Basic",
    id: "tier-basic",
    href: "/register?plan=basic",
    priceMonthly: "R$ 49",
    description:
      "Ideal para profissionais independentes iniciando sua jornada digital.",
    features: [
      "Agendamento Online",
      "Subdomínio Padrão (nome.seusistema.com)",
      "Lembretes (Limitados)",
      "Painel Financeiro Básico",
      "Suporte por Email",
    ],
    mostPopular: false,
  },
  {
    name: "Essential",
    id: "tier-essential",
    href: "/register?plan=essential",
    priceMonthly: "R$ 99",
    description:
      "Para clínicas em crescimento que precisam de automatização total.",
    features: [
      "Tudo do plano Basic",
      "Integração Completa WhatsApp",
      "Relatórios Financeiros Avançados",
      "Prontuário de Evolução",
      "Ferramentas de E-mail Marketing",
      "Créditos de IA (Assistente)",
    ],
    mostPopular: true,
  },
  {
    name: "Pro",
    id: "tier-pro",
    href: "/register?plan=pro",
    priceMonthly: "R$ 199",
    description:
      "A solução completa com White-Label para o seu estabelecimento.",
    features: [
      "Tudo do plano Essential",
      "Domínio Customizado (ex: www.suaclinica.com.br)",
      "Controles Avançados de Branding",
      "Pacote Alto de Créditos IA",
      "Suporte Prioritário",
    ],
    mostPopular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Escolha seu plano ideal
          </h2>
          <p className="text-lg text-gray-600 font-sans">
            Sem taxas escondidas. Cancele quando quiser.
          </p>
        </div>

        <div className="isolate mx-auto grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-3xl p-8 xl:p-10 ${
                tier.mostPopular
                  ? "ring-2 ring-[#556b2f] bg-[#fcfbf9] relative"
                  : "ring-1 ring-gray-200 bg-white"
              }`}
            >
              {tier.mostPopular && (
                <div className="absolute top-0 right-6 transform -translate-y-1/2">
                  <span className="bg-[#556b2f] text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-sm">
                    Mais Econômico
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={tier.id}
                  className={`text-xl font-bold font-sans ${
                    tier.mostPopular ? "text-[#556b2f]" : "text-gray-900"
                  }`}
                >
                  {tier.name}
                </h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600 min-h-[48px]">
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900 font-serif">
                  {tier.priceMonthly}
                </span>
                <span className="text-sm font-semibold leading-6 text-gray-600">
                  /mês
                </span>
              </p>

              <Link
                href={tier.href}
                aria-describedby={tier.id}
                className={`mt-6 block rounded-full py-3 px-3 text-center text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  tier.mostPopular
                    ? "bg-[#556b2f] text-white hover:bg-[#7e965a] shadow-md hover:shadow-lg focus-visible:outline-[#556b2f]"
                    : "text-[#556b2f] ring-1 ring-inset ring-[#556b2f] hover:bg-[#556b2f] hover:text-white"
                }`}
              >
                Começar agora
              </Link>

              <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10">
                {tier.features.map((feature) => (
                  <li key={`${tier.id}-${feature}`} className="flex gap-x-3">
                    <Check
                      className="h-6 w-5 flex-none text-[#556b2f]"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
