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
    if (!gaId) {
      console.error("Google Analytics ID no está configurado correctamente.");
    }
    return (
      <html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>{String(metadata.title) ?? ""}</title>
          <meta name="description" content={String(metadata.description) ?? ""} />
        </Head>
        <body className={inter.className}>{children}</body>
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </html>
  );
}
}
