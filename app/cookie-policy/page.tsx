import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Política de Cookies</h1>
      <p className="mb-6">
        En <strong>Travel To Feel</strong> (<a href="https://www.traveltofeel.es" className="underline text-t2fPrimary">https://www.traveltofeel.es</a>), utilizamos cookies para mejorar tu experiencia de navegación y analizar el tráfico en nuestro sitio web. Esta política de cookies explica qué son las cookies, cómo las usamos y cómo puedes gestionarlas.
      </p>

      <h2 className="text-3xl font-semibold mt-8 mb-4">¿Qué son las cookies?</h2>
      <p className="mb-6">
        Las cookies son pequeños archivos de texto que los sitios web colocan en tu dispositivo (ordenador, teléfono móvil o tableta) cuando los visitas. Estos archivos permiten al sitio web recordar tu información durante un periodo de tiempo, facilitando así tu experiencia en futuras visitas y permitiendo mejorar el rendimiento del sitio.
      </p>

      <h2 className="text-3xl font-semibold mt-8 mb-4">¿Qué tipos de cookies utilizamos?</h2>
      <p className="mb-4">Utilizamos los siguientes tipos de cookies en nuestro sitio web:</p>

      <ul className="list-disc ml-8 mb-6">
        <li className="mb-2"><strong>Cookies esenciales:</strong> Estas cookies son necesarias para el funcionamiento de nuestro sitio web.</li>
        <li className="mb-2"><strong>Cookies de análisis:</strong> Usamos Google Analytics para recopilar información sobre el uso de nuestro sitio web, como el tiempo que los usuarios pasan en nuestras páginas, las interacciones con el contenido y el comportamiento general de navegación.</li>
        <li className="mb-2"><strong>Cookies de funcionalidad:</strong> Estas cookies permiten que nuestro sitio web recuerde tus preferencias y proporcione características personalizadas.</li>
      </ul>

      <h2 className="text-3xl font-semibold mt-8 mb-4">Google Analytics</h2>
      <p className="mb-6">
        Utilizamos Google Analytics, un servicio de análisis proporcionado por Google Inc. Google Analytics recopila datos como la dirección IP del usuario, las páginas visitadas y la duración de la visita. Hemos activado la función de <strong>anonimización de IPs</strong> para garantizar que las direcciones IP se anonimicen antes de ser almacenadas por Google.
        <br /><br />
        Para más información sobre cómo Google maneja los datos recopilados mediante Google Analytics, puedes visitar la <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline text-t2fPrimary">Política de Privacidad de Google</a>.
      </p>

      <h2 className="text-3xl font-semibold mt-8 mb-4">Gestión del consentimiento</h2>
      <p className="mb-6">
        Puedes gestionar tus preferencias de cookies a través del banner de cookies o configurando tu navegador para bloquear o permitir las cookies. También puedes borrar las cookies almacenadas desde la configuración de tu navegador.
        <br />
        Si quieres saber más sobre cómo gestionar las cookies en tu navegador, puedes consultar la documentación específica:
      </p>

      <ul className="list-disc ml-8 mb-6">
        <li className="mb-2"><a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer" className="underline text-t2fPrimary">Google Chrome</a></li>
        <li className="mb-2"><a href="https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-" target="_blank" rel="noopener noreferrer" className="underline text-t2fPrimary">Mozilla Firefox</a></li>
        <li className="mb-2"><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="underline text-t2fPrimary">Safari</a></li>
        <li className="mb-2"><a href="https://support.microsoft.com/es-es/help/4027947/microsoft-edge-delete-cookies" target="_blank" rel="noopener noreferrer" className="underline text-t2fPrimary">Microsoft Edge</a></li>
      </ul>

      <h2 className="text-3xl font-semibold mt-8 mb-4">Duración de las cookies</h2>
      <p className="mb-6">
        Las cookies de análisis, como las de Google Analytics, pueden permanecer en tu dispositivo hasta un máximo de 2 años, dependiendo de su configuración. Las cookies de sesión, en cambio, se eliminan al cerrar el navegador.
      </p>

      <h2 className="text-3xl font-semibold mt-8 mb-4">Contacto</h2>
      <p className="mb-6">
        Si tienes alguna pregunta sobre nuestra política de cookies, puedes contactarnos a través del correo <a href="mailto:traveltofeelcompany@gmail.com" className="underline text-t2fPrimary">traveltofeelcompany@gmail.com</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
