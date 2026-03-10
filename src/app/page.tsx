import { About } from "@/components/sections/About";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col w-full bg-[var(--color-background)]">
      <Header />
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
