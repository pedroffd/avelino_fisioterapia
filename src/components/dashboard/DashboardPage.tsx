"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function DashboardPage() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const diaSemana = new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
  }).format(currentDate);

  const dia = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
  }).format(currentDate);

  const mes = new Intl.DateTimeFormat("pt-BR", {
    month: "short",
  })
    .format(currentDate)
    .replace(".", "");

  const ano = new Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
  }).format(currentDate);

  const capitalizar = (texto: string) =>
    texto.charAt(0).toUpperCase() + texto.slice(1);

  const formattedDate = `${capitalizar(diaSemana)}, ${dia} ${capitalizar(mes)}, ${ano}`;

  return (
    <section className="bg-yellow-50 font-serif font-semibold">
      <div className="container relative mx-auto px-4 pt-16 pb-16 md:pb-0">
        <article>
          <div>
            <h1 className="text-[#556b2f] text-3xl leading-10 md:text-4xl lg:text-5xl">
              Bem-vinda de volta!
            </h1>
            <p className="text-gray-500">Sua agenda para hoje está pronta.</p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <h2 className="text-[#556b2f] text-2xl">Hoje</h2>
            <p className="self-center text-right text-sm text-gray-500 capitalize">
              {formattedDate}
            </p>

            <div className="mt-6 flex gap-4">
              <div className="aspect-square rounded-2xl border border-gray-200 bg-white p-4">
                Consultas
              </div>

              <div className="aspect-square rounded-2xl border border-gray-200 bg-white p-4">
                Concluídas
              </div>
            </div>
          </div>

          <div className="mt-2">
            <p className="text-gray-500">Receita Estimada</p>
          </div>

          <div className="mt-8">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-[#556b2f] text-2xl">Próximos Pacientes</h3>

              <Link
                href="/admin/patients"
                className="text-sm font-medium text-[#556b2f]"
              >
                Ver Todos
              </Link>
            </div>

            <ul className="space-y-3">
              <li className="flex items-center gap-3 rounded-2xl bg-[#556b2f] p-4 text-white">
                <Image
                  src="/assets/paciente1.png" //Trocar imagem
                  alt="Marcos Oliveira"
                  width={48}
                  height={48}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p>Marcos Oliveira</p>
                  <p className="text-sm text-white/80">14:30</p>
                </div>
              </li>

              <li className="flex items-center gap-3 rounded-2xl bg-[#556b2f] p-4 text-white">
                <Image
                  src="/assets/paciente-2.png" //Trocar imagem
                  alt="Ana Beatriz Silva"
                  width={48}
                  height={48}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p>Ana Beatriz Silva</p>
                  <p className="text-sm text-white/80">15:45</p>
                </div>
              </li>

              <li className="flex items-center gap-3 rounded-2xl bg-[#556b2f] p-4 text-white">
                <Image
                  src="/assets/paciente3.png"
                  alt="Ricardo Santos"
                  width={60}
                  height={60}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p>Alexandra Mendes</p>
                  <p className="text-sm text-white/80">16:30</p>
                </div>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
