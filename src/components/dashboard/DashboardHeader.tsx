import Image from "next/image";

export function DashboardHeader() {
  return (
    <header className="bg-white">
      <section className="flex items-start gap-4">
        <Image
          src="/assets/Livi-Corporativa-19.webp" //trocar foto
          alt="Logo"
          width={48}
          height={48}
          className="h-12 w-12 rounded-full object-cover"
        />

        <div>
          <h2 className="text-[#7c9a49] text-1xl font-serif font-semibold">
            DASHBOARD
          </h2>
          <h1 className="text-[#556b2f] text-2xl font-serif font-bold">
            Dra Liviane
          </h1>
        </div>
      </section>
    </header>
  );
}
