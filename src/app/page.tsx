import { Features } from "@/components/landing/Features";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { Navbar } from "@/components/landing/Navbar";
import { Pricing } from "@/components/landing/Pricing";
import { TargetSegments } from "@/components/landing/TargetSegments";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcfbf9]">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <TargetSegments />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
