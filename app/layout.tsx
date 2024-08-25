import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
import type { Viewport } from 'next'

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://www.traveltofeel.es";
const ogImageUrl = "https://www.traveltofeel.es/sunlight_sea.jpg";
const description = "Descubre la combinación perfecta de viajes y crosstraining con Travel To Feel. Explora Bali mientras entrenas en comunidad, vive experiencias inolvidables en destinos exóticos y forma parte de una familia viajera apasionada por la aventura y el deporte.";

export const metadata: Metadata = {
  title: "Travel To Feel",
  description: description,
  applicationName: "Travel To Feel",
  authors: [{ name: "Travel To Feel", url: siteUrl }],
  keywords: ["crosstraining", "crossfit", "viajes", "grupo", "Bali", "comunidad", "entrenar", "exóticos", "destinos"],
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/icon.ico", sizes: "any" }, // .ico para compatibilidad máxima
      { url: "/favicon.png", type: "image/png" }, // PNG básico
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }, // Para dispositivos Apple
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
   },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Travel To Feel",
    description: description,
    siteName: "Travel To Feel",
    images: [
      {
        url: ogImageUrl,
        width: 1920,
        height: 1200,
        alt: "Sunlight Sea"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel To Feel",
    description: description,
    images: [ogImageUrl]
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  {
    const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS

    return (
      <html lang="es">
        <body className={inter.className}>{children}</body>
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </html>
  );
}
}
