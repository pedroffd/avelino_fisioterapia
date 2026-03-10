import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SITE_META } from "@/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: SITE_META.title,
  description: SITE_META.description,
  keywords: [
    "fisioterapia",
    "ez body",
    "reabilitação",
    "bem-estar",
    "avelino fisioterapia",
    "liviane avelino",
    "fisioterapia florianopolis",
    "fisioterapia funcional",
    "fisioterapia palhoca",
    "fisioterapia palhoça",
  ],
  openGraph: {
    title: SITE_META.title,
    description: SITE_META.description,
    url: "https://avelinofisioterapia.com.br",
    siteName: "Avelino Fisioterapia",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/assets/Livi-Corporativa-19.webp",
        width: 1200,
        height: 630,
        alt: "Dra. Liviane Avelino - Avelino Fisioterapia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_META.title,
    description: SITE_META.description,
    images: ["/assets/Livi-Corporativa-19.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
