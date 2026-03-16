import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AvelinoFisio | Gestão Autônoma para Profissionais",
  description:
    "Plataforma premium de agendamento e prontuário para clínicas e profissionais independentes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`scroll-smooth ${inter.variable} ${playfair.variable}`}
    >
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
