import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Avelino Fisioterapia | Cuidado Premium em Fisioterapia",
  description:
    "Transforme seu recomeço. Fisioterapia especializada com equipamento Ez Body e atendimento focado no bem-estar através do movimento inteligente.",
  keywords: [
    "fisioterapia",
    "ez body",
    "reabilitação",
    "bem-estar",
    "avelino fisioterapia",
    "liviane avelino",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
