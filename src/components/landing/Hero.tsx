import { ArrowRight, CalendarCheck } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fcfbf9] pt-16 md:pt-24 pb-20 lg:pt-32 lg:pb-28">
      {/* Decorative background blob */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-[#556b2f] opacity-5 rounded-full blur-3xl hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 text-[#556b2f] text-sm font-medium mb-6 border border-green-100">
              <CalendarCheck className="w-4 h-4 mr-2" />
              Plataforma para Clínicas e Profissionais
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight mb-6">
              <span className="tracking-tight">Autonomia para</span>{" "}
              <br className="hidden md:block" />
              <span className="text-[#556b2f] italic">Profissionais.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl font-sans">
              Economia de tempo e agendamento automatizado. Controle total da
              sua agenda, reduza faltas com lembretes no WhatsApp e encante seus
              pacientes desde o primeiro contato.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="/register"
                className="inline-flex justify-center items-center bg-[#556b2f] hover:bg-[#7e965a] text-white px-8 py-4 rounded-full font-medium text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Teste Grátis por 7 dias
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="#demo"
                className="inline-flex justify-center items-center bg-white border-2 border-gray-200 hover:border-[#556b2f] text-gray-700 hover:text-[#556b2f] px-8 py-4 rounded-full font-medium text-lg transition-all"
              >
                Agendar Demonstração
              </Link>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500">
              <div className="flex -space-x-2">
                {/* Fake user avatars for social proof */}
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"
                  />
                ))}
              </div>
              <p>
                Junte-se a{" "}
                <span className="font-bold text-gray-800">
                  +1.000 profissionais
                </span>
              </p>
            </div>
          </div>

          {/* Graphic/Image Container */}
          <div className="w-full lg:w-1/2 relative lg:h-[600px] flex justify-center items-center">
            {/* Abstract mockup representation */}
            <div className="relative w-full max-w-md aspect-[3/4] md:aspect-square lg:aspect-auto lg:h-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col">
              {/* Mockup Header */}
              <div className="bg-[#556b2f] h-20 w-full p-6 flex items-end">
                <div className="text-white font-serif text-2xl">
                  Olá, Dra. Liviane
                </div>
              </div>
              {/* Mockup body */}
              <div className="p-6 flex-1 bg-[#fcfbf9]">
                <div className="flex gap-4 mb-6">
                  <div className="w-1/2 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                    <div className="text-gray-400 text-xs mb-1">
                      Consultas Hoje
                    </div>
                    <div className="text-2xl font-bold text-gray-800">12</div>
                  </div>
                  <div className="w-1/2 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                    <div className="text-gray-400 text-xs mb-1">
                      Faturamento
                    </div>
                    <div className="text-2xl font-bold text-[#d4af37]">
                      R$ 1.2k
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  {[...Array(3)].map((_, index) => (
                    <div
                      key={`mockup-schedule-${index}`}
                      className="w-full bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-100"></div>
                        <div>
                          <div className="w-24 h-4 bg-gray-200 rounded mb-1"></div>
                          <div className="w-16 h-3 bg-gray-100 rounded"></div>
                        </div>
                      </div>
                      <div className="text-sm font-medium text-[#556b2f]">{`1${index}:00`}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 md:bottom-10 md:-left-12 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 animate-bounce">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-[#556b2f]">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-800">
                    Novo Agendamento!
                  </div>
                  <div className="text-xs text-gray-500">Há 2 minutos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
