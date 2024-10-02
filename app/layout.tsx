import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieBanner from "./components/CookieBanner.tsx";

const inter = Inter({ subsets: ["latin"] });

// Definición del objeto metadata
export const metadata: Metadata = {
  title: "Travel To Feel",
  description: "Descubre la combinación perfecta de viajes y crosstraining con Travel To Feel. Explora Bali mientras entrenas en comunidad, vive experiencias inolvidables en destinos exóticos y forma parte de una familia viajera apasionada por la aventura y el deporte.",
  applicationName: "Travel To Feel",
  authors: [{ name: "Travel To Feel", url: "https://www.traveltofeel.es" }],
  keywords: ["crosstraining", "crossfit", "viajes", "grupo", "Bali", "comunidad", "entrenar", "exóticos", "destinos"],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://www.traveltofeel.es",
    title: "Travel To Feel",
    description: "Descubre la combinación perfecta de viajes y crosstraining con Travel To Feel.",
    siteName: "Travel To Feel",
    images: [
      {
        url: "https://www.traveltofeel.es/sunlight_sea.jpg",
        width: 1920,
        height: 1200,
        alt: "Sunlight Sea",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel To Feel",
    description: "Descubre la combinación perfecta de viajes y crosstraining con Travel To Feel.",
    images: ["https://www.traveltofeel.es/sunlight_sea.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-48x48.ico", sizes: "48x48" },
      { url: "/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16" },
    ],
    apple: "/apple-touch-icon-180x180.png",
    other: [
      {
        rel: "icon",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
      },
    ],
  },
};

// Definición del viewport
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  {
    return (
      <html lang="es">
        <body className={inter.className}>
          {children}
          <CookieBanner />
        </body>
      </html>
    );
  }
}
