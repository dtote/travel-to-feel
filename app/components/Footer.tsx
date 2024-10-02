import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import SvgLogo from './SvgLogo';

const Footer = () => {
  return (
    <footer className="w-full bg-t2fSecondary text-t2fPrimary py-2 mt-12">
      <div className="w-full mx-auto flex flex-col items-center justify-between">
        <div className="w-full flex flex-col items-center justify-center">
          <SvgLogo width={200} height={200} className="object-contain scale-110 w-full drop-shadow-[0_0_0.6rem_#000000ff]" />
          <p className="text-center md:text-left text-sm md:text-base">
            Uniendo la pasión por viajar y el crosstraining.
          </p>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-between mt-4 border-t border-opacity-50 border-t2fPrimary pt-4">
          <div className="w-1/2 flex flex-col items-center justify-center mb-8 md:mb-0">
            <h3 className="font-bold text-lg mb-4">Síguenos</h3>
            <div className="flex space-x-6">
              <a
                href="https://www.instagram.com/traveltofeel_"
                aria-label="Visitar nuestro perfil de Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon className="hover:text-white transition duration-500" fontSize="large" />
              </a>
            </div>
          </div>

          <div className="w-1/2 flex flex-col items-center justify-center">
            <h3 className="font-bold text-lg mb-4">Contáctanos</h3>
            <p className="text-sm md:text-base">
              <a
                href="mailto:traveltofeelcompany@gmail.com"
                aria-label="Enviar un correo a traveltofeelcompany@gmail.com"
                className="underline hover:text-white transition duration-500"
              >
                traveltofeelcompany@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-t2fPrimary border-opacity-50 pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Travel To Feel. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
