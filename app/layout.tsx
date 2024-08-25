import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { GoogleAnalytics } from '@next/third-parties/google'


const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://www.traveltofeel.es";
const ogImageUrl = "https://www.traveltofeel.es/sunlight_sea.jpg";
const description = "Descubre la combinación perfecta de viajes y crosstraining con Travel To Feel. Explora Bali mientras entrenas en comunidad, vive experiencias inolvidables en destinos exóticos y forma parte de una familia viajera apasionada por la aventura y el deporte.";

export const metadata: Metadata = {
  title: "Travel To Feel",
  description,
  applicationName: "Travel To Feel",
  authors: [{ name: "Travel To Feel", url: siteUrl }],
  keywords: ["crosstraining", "crossfit", "viajes", "grupo", "Bali", "comunidad", "entrenar", "exóticos", "destinos"],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  icons: { icon: "/favicon.png" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Travel To Feel",
    description,
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
    description,
    images: [ogImageUrl]
  }
};

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
