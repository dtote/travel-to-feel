"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function CookieBanner() {
  const [cookiesAccepted, setCookiesAccepted] = useState<boolean | null>(null);
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
  const pathname = usePathname();

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === 'accepted') {
      setCookiesAccepted(true);
    } else if (consent === 'declined') {
      setCookiesAccepted(false);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setCookiesAccepted(true);
  };

  const handleDeclineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setCookiesAccepted(false);
  };

  // No mostrar el banner en la página de política de cookies
  if (pathname === "/cookie-policy") {
    return null;
  }

  return (
    <>
      {/* Cargar Google Analytics solo si las cookies fueron aceptadas */}
      {cookiesAccepted && gaId && <GoogleAnalytics gaId={gaId} />}

      {/* Mostrar el banner de cookies si no hay consentimiento */}
      {cookiesAccepted === null && (
        <div
          id="cookie-consent-banner"
          className="fixed bottom-0 left-0 w-full bg-gray-200 text-gray-800 p-4 shadow-lg border-t border-gray-300 flex flex-col justify-between items-center"
          style={{ zIndex: 1000 }}
        >
          <p className="text-center text-sm md:text-base mb-2 md:mb-4">
            Usamos cookies para mejorar tu experiencia y analizar el tráfico.{" "}
            <a href="/cookie-policy" className="underline text-t2fPrimary">
              Leer más
            </a>
          </p>

          <div className="flex space-x-2">
            <button
              onClick={handleAcceptCookies}
              className="bg-t2fPrimary text-white text-sm md:text-base px-4 py-2 rounded hover:bg-t2fSecondary transition"
            >
              Aceptar
            </button>
            <button
              onClick={handleDeclineCookies}
              className="bg-red-400 text-white text-sm md:text-base px-4 py-2 rounded hover:bg-red-500 transition"
            >
              Rechazar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
