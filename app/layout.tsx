import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { GoogleAnalytics } from '@next/third-parties/google'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Travel To Feel",
  description: "Descubre la combinación perfecta de viajes y crosstraining con Travel To Feel. Explora Bali mientras entrenas en comunidad, vive experiencias inolvidables en destinos exóticos y forma parte de una familia viajera apasionada por la aventura y el deporte.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  {
    const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS
    const siteUrl = "https://www.traveltofeel.es"
    const ogImageUrl = "https://www.traveltofeel.es/sunlight_sea.jpg"

    return (
      <html lang="es">
        <Head>
          {/* Basic Meta Tags */}
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content={String(metadata.description) ?? ""} />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Travel To Feel" />
          <link rel="canonical" href={siteUrl} />
          <link rel="icon" href="/favicon.ico" />

          {/* Open Graph Tags */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content={String(metadata.title) ?? ""} />
          <meta property="og:description" content={String(metadata.description) ?? ""} />
          <meta property="og:url" content={siteUrl} />
          <meta property="og:site_name" content="Travel To Feel" />
          <meta property="og:image" content={ogImageUrl} />
          <meta property="og:image:width" content="1920" />
          <meta property="og:image:height" content="1200" />

          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={String(metadata.title) ?? ""} />
          <meta name="twitter:description" content={String(metadata.description) ?? ""} />
          <meta name="twitter:image" content={ogImageUrl} />

          {/* Optional Keywords Meta Tag */}
          <meta name="keywords" content="crosstraining, crossfit, viajes, grupo, Bali, comunidad, entrenar, exóticos, destinos" />
        </Head>

        <body className={inter.className}>{children}</body>
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </html>
  );
}
}
