import { CalendarClock, MessageCircle, TrendingUp } from "lucide-react";

const features = [
  {
    title: "Agenda em tempo real",
    description:
      "Controle absoluto da sua rotina. Atualizações instantâneas e visualização otimizada para celular.",
    icon: CalendarClock,
  },
  {
    title: "Lembretes Automáticos via WhatsApp",
    description:
      "Diga adeus às faltas e cancelamentos de última hora. Lembretes automáticos garantem a presença do seu paciente.",
    icon: MessageCircle,
  },
  {
    title: "Relatórios Financeiros",
    description:
      "Saiba exatamente quanto faturou no mês. Gráficos claros e fáceis de entender para a saúde do seu negócio.",
    icon: TrendingUp,
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[#556b2f] font-semibold tracking-wide uppercase text-sm mb-3">
            O Essencial para Clínicas
          </h2>
          <p className="mt-2 text-3xl leading-8 font-serif font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tudo o que você precisa, em um só lugar
          </p>
          <p className="mt-4 max-w-2xl text-lg text-gray-500 mx-auto font-sans">
            Desenhado para ser simples, rápido e direto ao ponto.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="pt-6 group">
                <div className="flow-root bg-white rounded-2xl px-6 pb-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-50 transition-all hover:shadow-lg hover:-translate-y-1 h-full">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-[#556b2f] rounded-xl shadow-lg group-hover:bg-[#7e965a] transition-colors">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-xl font-bold text-gray-900 tracking-tight font-sans">
                      {feature.title}
                    </h3>
                    <p className="mt-4 text-base text-gray-500 leading-relaxed font-sans">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
