import Image from "next/image"
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import InstagramIcon from '@mui/icons-material/Instagram'
import Accordion from "./components/Accordion"
import AccordionItem from "./components/AccordionItem"
import ScrollLink from "./components/ScrollLink"
import { getImageSrc } from '../utils/getImageSrc'
import SvgLogo from "./components/SvgLogo"
import Footer from "./components/Footer.tsx"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0 m-0">
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center">
        <Image
          src={getImageSrc("/sunlight_sea.jpg")}
          alt="Paisaje costero con el sol brillando sobre el mar, creando reflejos de agua."
          fill
          className="object-cover w-full h-full"
          priority
          quality={100}
        />

        <div className="flex justify-center items-center w-full h-2/5 absolute top-2 drop-shadow-[0_0_0.6rem_#000000ff]">
          <SvgLogo width={300} height={300} className="object-contain w-full" />
        </div>

        <div className="uppercase absolute inset-0 flex flex-col items-center justify-center mt-10 lg:mt-0">
          <br></br>
          <h1 className="font-custom text-t2fPrimary text-center text-xl md:text-3xl lg:text-4xl font-bold drop-shadow-[0_0_0.3rem_#00000070]">
            Bali y Crosstraining en un sólo viaje.</h1>

          <br></br>
          <br></br>
          <br></br>
          <div
            className="relative rounded-lg"
            style={{
              background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0) 100%)",
              backdropFilter: "blur(1px)",
            }}
          >
            <h2 className="font-custom text-t2fPrimary text-center font-bold text-md md:text-2xl lg:text-3xl">
              Creada para personas que comparten la pasión de viajar y entrenar crosstraining en comunidad
            </h2>
          </div>
        </div>
        <ScrollLink targetId="second-section" className="animate-bounce absolute bottom-10 md:bottom-5 text-t2fPrimary text-5xl md:text-6xl lg:text-7xl">
          <span className="sr-only">Desplazarse hacia abajo a la siguiente sección</span>
          <KeyboardArrowDown fontSize="inherit" />
        </ScrollLink>
      </div>

      {/* Nuevas fechas */}
      <div id="second-section" className="w-full min-h-screen flex flex-col items-center justify-center mt-12">
        <div className="w-full text-center uppercase lg:w-3/4 p-6">
          <h2 className="font-custom text-xl text-t2fPrimary font-bold text-center md:text-4xl"><span className="text-t2fSecondary">Próximas Fechas</span> 2025</h2>
        </div>

        <div className="w-full lg:w-3/4 flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-6 mt-2 px-4">
          {/* Card 1: Bali Marzo */}
          <a href="https://forms.gle/tG4TjEKhx5MpMwAa9" target="_blank" rel="noopener noreferrer" className="w-full md:w-1/3 h-[200px] group">
            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-transform duration-300 group-hover:scale-105">
              <Image
                src={getImageSrc("/kelingking_beach_nusa_penida.jpg")}
                alt="Imagen de Kelingking Beach en Nusa Penida, Bali."
                fill
                className="object-cover transition-opacity duration-300 group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h3 className="font-custom text-white text-center text-xl md:text-2xl font-bold">
                  Bali <br /> 3 - 16 Marzo
                </h3>
              </div>
              <div className="absolute bottom-2 right-2 bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-md shadow-lg">
                Plazas disponibles
              </div>
            </div>
          </a>

          {/* Card 2: Bali Junio */}
          <a href="https://forms.gle/tG4TjEKhx5MpMwAa9" target="_blank" rel="noopener noreferrer" className="w-full md:w-1/3 h-[200px] group">
            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-transform duration-300 group-hover:scale-105">
              <Image
                src={getImageSrc("/aquarium_of_the_pacific.jpg")}
                alt="Imagen representativa de Snorkel en Nusa Penida, Bali."
                fill
                className="object-cover transition-opacity duration-300 group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h3 className="font-custom text-white text-center text-xl md:text-2xl font-bold">
                  Bali <br /> 2 - 15 Junio
                </h3>
              </div>
              <div className="absolute bottom-2 right-2 bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-md shadow-lg">
                Plazas disponibles
              </div>
            </div>
          </a>

          {/* Card 3: Bali Septiembre */}
          <a href="https://forms.gle/tG4TjEKhx5MpMwAa9" target="_blank" rel="noopener noreferrer" className="w-full md:w-1/3 h-[200px] group">
            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-transform duration-300 group-hover:scale-105">
              <Image
                src={getImageSrc("/mt_batur_sunrise_hike.jpg")}
                alt="Imagen del amanecer en el Monte Batur, Bali."
                fill
                className="object-cover transition-opacity duration-300 group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h3 className="font-custom text-white text-center text-xl md:text-2xl font-bold">
                  Bali <br /> 2 - 15 Septiembre
                </h3>
              </div>
              <div className="absolute bottom-2 right-2 bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-md shadow-lg">
                Plazas disponibles
              </div>
            </div>
          </a>
        </div>
        {/* Sección de contacto */}
        <div className="w-full flex flex-col items-center justify-center mt-12 p-4">
          <p className="text-lg md:text-xl text-center mb-4 text-gray-700">
            Si tienes cualquier duda al respecto, no dudes en contactarnos.
          </p>
          <a
            href="https://wa.me/34677311432"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-green-500 text-white text-lg font-semibold px-4 py-2 rounded-full shadow-lg transition duration-300 hover:bg-green-600"
          >
            ¡Hablemos por chat! &nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 432 432"><path fill="currentColor" d="M364.5 65Q427 127 427 214.5T364.5 364T214 426q-54 0-101-26L0 429l30-109Q2 271 2 214q0-87 62-149T214 3t150.5 62M214 390q73 0 125-51.5T391 214T339 89.5T214 38T89.5 89.5T38 214q0 51 27 94l4 6l-18 65l67-17l6 3q42 25 90 25m97-132q9 5 10 7q4 6-3 25q-3 8-15 15.5t-21 9.5q-18 2-33-2q-17-6-30-11q-8-4-15.5-8.5t-14.5-9t-13-9.5t-11.5-10t-10.5-10.5t-8.5-9.5t-7-8.5t-5.5-7t-3.5-5L128 222q-22-29-22-55q0-24 19-44q6-7 14-7q6 0 10 1q8 0 12 9q2 3 6 13l7 17.5l3 8.5q3 5 1 9q-3 7-5 9l-3 3l-3 3.5l-2 2.5q-6 6-3 11q13 22 30 37q13 11 43 26q7 3 11-1q12-15 17-21q4-6 12-3q6 3 36 17" /></svg>
          </a>
        </div>
      </div>

      <div className="w-full min-h-screen flex flex-col items-center justify-center mt-12">
        <div className="w-full text-center uppercase lg:w-3/4 p-8">
          <h2 className="font-custom text-xl text-t2fSecondary font-bold text-left md:text-center md:text-4xl">¿Por qué <span className="text-t2fPrimary">TRAVEL TO FEEL?</span></h2>
        </div>
        <p className="w-3/4 text-justify text-base md:text-xl">
          Travel to Feel nace de dos caminos que se unen. Por un lado, el <strong>Crosstraining</strong> y todo lo que ello conlleva.
          Acabar el WOD y darle la mano a tu compañero al borde del infarto, los ánimos cuando haces RM o te sale tu primer gimnástico y las amistades que se forjan en el box y que son para siempre.
          <br />
          <br />
          Por otro lado, nace de la sensación inexplicable pero increíble que surge al <strong>viajar y conocer un país nuevo, su cultura y costumbres. </strong>
          De enamorarte una y otra vez de los paisajes y sobre todo, de llevarte el souvenir más preciado que puedas conseguir, los momentos vividos y que recordarás para siempre.
        </p>
        <div className="w-11/12 md:w-3/4 lg:w-3/4 h-[250px] md:h-[400px] lg:h-[400px] mx-auto relative mt-12">
          <Image
            src={getImageSrc("/people_jumping.jpg")}
            alt="Grupo de personas saltando al mismo tiempo en la playa y con el atardecer detrás de ellas."
            fill
            className="object-cover rounded-xl"
            loading="lazy"
          />
        </div>
      </div>

      <div className="w-full min-h-screen flex flex-col items-center justify-center mt-12">
        <div className="w-full text-center uppercase lg:w-3/4 p-8">
          <h2 className="font-custom text-xl md:text-4xl text-t2fSecondary font-bold text-left md:text-center">¿Por qué en <span className="text-t2fPrimary">grupos reducidos y filtrados?</span></h2>
        </div>
        <p className="w-3/4 text-justify text-base md:text-xl">
          Sabemos que la conexión y la afinidad son dos aspectos imprescindibles para que la experiencia sea perfecta, y por ello, escogemos
          minuciosamente a personas compatibles que busquen vivir esta experiencia desde el compañerismo, la aventura, el respeto por una cultura
          diferente y quieran salir de su zona de confort. Esta es la clave para crear una verdadera familia viajera.
        </p>
        <div className="w-full lg:w-10/12 lg:flex lg:flex-row lg:justify-between lg:items-center text-center uppercase p-8">
          <div className="w-full md:w-3/4 lg:w-1/2 h-[250px] md:h-[400px] lg:h-[500px] mx-auto lg:mx-4 relative mb-4 lg:mb-0">
            <Image
              src={getImageSrc("/madrid_championship.jpg")}
              alt="Atletas participando en competencia de crosstraining, levantando pesas sobre sus cabezas en un estadio."
              fill
              className="object-cover rounded-xl"
              loading="lazy"
            />
          </div>
          <div className="w-full md:w-3/4 lg:w-1/2 h-[300px] md:h-[400px] lg:h-[500px] mx-auto lg:mx-4 relative">
            <Image
              src={getImageSrc("/froning_team.jpg")}
              alt="Equipo de atletas participando en los Crossfit Games"
              fill
              className="object-cover rounded-xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row items-center justify-center mt-12">
        <div className="w-full text-center p-6">
          <div className="my-2 mx-auto w-full border-t-2 border-t2fPrimary border-dashed"></div>
          <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full text-center uppercase lg:w-3/4 p-8">
              <h2 className="font-custom text-2xl text-t2fPrimary font-bold text-left md:text-center md:text-4xl">¿Qué <span className="text-t2fSecondary">actividades </span>te esperan?</h2>
            </div>
          </div>
          <div className="my-2 mx-auto w-full border-t-2 border-t2fPrimary border-dashed"></div>
        </div>
      </div>

      {/* NUSA PENIDA */}
      <div className="w-full flex flex-col items-center justify-center mt-8">
        <div className="w-full text-center uppercase lg:w-3/4">
          <h2 className="font-custom text-xl text-t2fPrimary font-bold text-center md:text-3xl">NUSA PENIDA</h2>
          <div className="flex justify-center items-center my-4">
            <span className="inline-block h-1 w-16 bg-t2fPrimary"></span>
            <span className="mx-2 text-t2fSecondary">✦✦✦</span>
            <span className="inline-block h-1 w-16 bg-t2fPrimary"></span>
          </div>
        </div>
        <p className="w-4/5 sm:w-1/2 md:w-[50vw] lg:w-[55vw] text-justify lg:text-center text-base md:text-xl">
          Nos perderemos en sus aguas cristalinas y sus playas de arena blanca. Esta isla que pertenece a Bali es la protagonista de la playa
          más famosa de Indonesia: <strong>Kelingking Beach.</strong>
        </p>
        <div className="w-4/5 sm:w-1/2 md:w-[50vw] lg:w-[55vw] h-[30vh] sm:h-[60vh] md:h-[65vh] lg:h-[65vh] relative mt-8">
          <Image
            src={getImageSrc("/kelingking_beach_nusa_penida.jpg")}
            alt="Kelingking Beach en Nusa Penida, Bali, con su icónica formación rocosa rodeada de aguas azules y arena blanca al atardecer."
            fill
            className="object-cover rounded-xl"
            loading="lazy"
          />
        </div>
      </div>

      {/* SNORKEL */}
      <div className="w-full flex flex-col items-center justify-center mt-8">
        <div className="w-full text-center uppercase lg:w-3/4">
          <h2 className="font-custom text-xl text-t2fPrimary font-bold text-center md:text-3xl">SNORKEL</h2>
          <div className="flex justify-center items-center my-4">
            <span className="inline-block h-1 w-16 bg-t2fPrimary"></span>
            <span className="mx-2 text-t2fSecondary">✦✦✦</span>
            <span className="inline-block h-1 w-16 bg-t2fPrimary"></span>
          </div>
        </div>
        <p className="w-4/5 sm:w-1/2 md:w-[50vw] lg:w-[55vw] text-justify lg:text-center text-base md:text-xl">
          Prepárate para descubrir la gran variedad de fauna marina que se extiende en Nusa Penida y, con un poquito de suerte,
          ver animales tan alucinantes como mantarrayas.
        </p>
        <div className="w-4/5 sm:w-1/2 md:w-[50vw] lg:w-[55vw] h-[30vh] sm:h-[60vh] md:h-[65vh] lg:h-[65vh] relative mt-8">
          <Image
            src={getImageSrc("/aquarium_of_the_pacific.jpg")}
            alt="Mantarraya nadando entre peces de colores en un acuario con un fondo de corales."
            fill
            className="object-cover object-left rounded-xl"
            loading="lazy"
          />
        </div>
      </div>

      {/* CASCADAS */}
      <div className="w-full flex flex-col items-center justify-center mt-8">
        <div className="w-full text-center uppercase lg:w-3/4">
          <h2 className="font-custom text-xl text-t2fPrimary font-bold text-center md:text-3xl">CASCADAS</h2>
          <div className="flex justify-center items-center my-4">
            <span className="inline-block h-1 w-16 bg-t2fPrimary"></span>
            <span className="mx-2 text-t2fSecondary">✦✦✦</span>
            <span className="inline-block h-1 w-16 bg-t2fPrimary"></span>
          </div>
        </div>
        <p className="w-4/5 sm:w-1/2 md:w-[50vw] lg:w-[55vw] text-justify lg:text-center text-base md:text-xl">
          Te quedarás sin palabras con lo impresionante que son las cascadas en Bali y la fuerza con la que desciende el agua no te dejará indiferente.
        </p>
        <div className="w-4/5 sm:w-1/2 md:w-[50vw] lg:w-[55vw] h-[30vh] sm:h-[60vh] md:h-[65vh] lg:h-[65vh] relative mt-8">
          <Image
            src={getImageSrc("/nungnun_waterfall.jpg")}
            alt="Cascada Nungnung cayendo desde lo alto de un acantilado rodeado de densa vegetación tropical en Bali."
            fill
            className="object-cover object-bottom w-full h-full rounded-xl"
            loading="lazy"
          />
        </div>
      </div>

      {/* AMANECER EN EL MONTE BATUR */}
      <div className="w-full flex flex-col items-center justify-center mt-8">
        <div className="w-full text-center uppercase lg:w-3/4">
          <h2 className="font-custom text-xl text-t2fPrimary font-bold text-center md:text-3xl">AMANECER EN EL MONTE BATUR</h2>
          <div className="flex justify-center items-center my-4">
            <span className="inline-block h-1 w-16 bg-t2fPrimary"></span>
            <span className="mx-2 text-t2fSecondary">✦✦✦</span>
            <span className="inline-block h-1 w-16 bg-t2fPrimary"></span>
          </div>
        </div>
        <p className="w-4/5 sm:w-1/2 md:w-[50vw] lg:w-[55vw] text-justify lg:text-center text-base md:text-xl">
          Vive una experiencia única amaneciendo a 1717 metros de altura, en el volcán activo Batur. Además de las increíbles vistas de toda la isla,
          podrás ver el pico más alto de Bali, el volcán Agung, con 3.142 metros sobre el nivel del mar.
        </p>
        <div className="w-4/5 sm:w-1/2 md:w-[50vw] lg:w-[55vw] h-[30vh] sm:h-[60vh] md:h-[65vh] lg:h-[65vh] relative mt-8">
          <Image
            src={getImageSrc("/mt_batur_sunrise_hike.jpg")}
            alt="Amanecer detrás del Monte Batur, un volcán activo en Bali, con un cielo iluminado por tonos naranjas y rosados y nubes bajas cubriendo el paisaje"
            fill
            className="object-cover rounded-xl"
            loading="lazy"
          />
        </div>
      </div>

      {/* KILÓMETROS INFINITOS DE ARROZALES */}
      <div className="w-full flex flex-col items-center justify-center mt-8">
        <div className="w-full text-center uppercase lg:w-3/4">
          <h2 className="font-custom text-xl text-t2fPrimary font-bold text-center md:text-3xl">KILÓMETROS INFINITOS DE ARROZALES</h2>
          <div className="flex justify-center items-center my-4">
            <span className="inline-block h-1 w-16 bg-t2fPrimary"></span>
            <span className="mx-2 text-t2fSecondary">✦✦✦</span>
            <span className="inline-block h-1 w-16 bg-t2fPrimary"></span>
          </div>
        </div>
        <p className="w-4/5 sm:w-1/2 md:w-[50vw] lg:w-[55vw] text-justify lg:text-center text-base md:text-xl">
          Uno de los paisajes característicos de Bali son sus enormes extensiones de campos de arroz, pintando de verde los senderos que iremos recorriendo
          a lo largo del viaje.
        </p>
        <div className="w-4/5 sm:w-1/2 md:w-[50vw] lg:w-[55vw] h-[30vh] sm:h-[60vh] md:h-[65vh] lg:h-[65vh] relative mt-8">
          <Image
            src={getImageSrc("/tegalalang_rice_terrace.jpg")}
            alt="Terrazas de arroz verdes en Tegalalang, Bali, con palmeras y un cielo parcialmente nublado."
            fill
            className="object-cover rounded-xl"
            loading="lazy"
          />
        </div>
      </div>

      {/* BAUTISMO DE BUCEO EN AMED */}
      <div className="w-full flex flex-col items-center justify-center mt-8">
        <div className="w-full text-center uppercase lg:w-3/4">
          <h2 className="font-custom text-xl text-t2fPrimary font-bold text-center md:text-3xl">BAUTISMO DE BUCEO EN AMED</h2>
          <div className="flex justify-center items-center my-4">
            <span className="inline-block h-1 w-16 bg-t2fPrimary"></span>
            <span className="mx-2 text-t2fSecondary">✦✦✦</span>
            <span className="inline-block h-1 w-16 bg-t2fPrimary"></span>
          </div>
        </div>
        <p className="w-4/5 sm:w-1/2 md:w-[50vw] lg:w-[55vw] text-justify text-base md:text-xl">
          El lugar de Bali por excelencia para hacer inmersiones por su variedad de fauna marina. Nuestros instructores nos guiarán
          para descubrir todos los rincones que esconden las playas de Amed.
        </p>
        <div className="w-4/5 sm:w-1/2 md:w-[50vw] lg:w-[55vw] h-[30vh] sm:h-[60vh] md:h-[65vh] lg:h-[65vh] relative mt-8">
          <Image
            src={getImageSrc("/scuba_diving_bali_nusa_lembongan.jpg")}
            alt="Buzo explorando el fondo marino en Nusa Lembongan, Bali, rodeado de peces coloridos y corales."
            fill
            className="object-cover rounded-xl"
            loading="lazy"
          />
        </div>
      </div>

      {/* Y muchas actividades más */}
      <div className="w-full flex flex-col items-center justify-center mt-8">
        <div className="w-full text-center uppercase lg:w-3/4">
          <h2 className="font-custom text-xl text-t2fPrimary font-bold text-center md:text-3xl">Y muchas actividades más que complementaremos con
            <br />
            <span className="text-t2fSecondary"> nuestra gran pasión</span>
          </h2>
          <div className="flex justify-center items-center my-4">
            <span className="inline-block h-1 w-16 bg-t2fPrimary"></span>
            <span className="mx-2 text-t2fSecondary">✦✦✦</span>
            <span className="inline-block h-1 w-16 bg-t2fPrimary"></span>
          </div>
        </div>
        <p className="w-4/5 sm:w-1/2 md:w-[50vw] lg:w-[55vw] text-justify lg:text-center text-base md:text-xl">
          Disfrutar entrenando y compartiendo este deporte con nuestra familia viajera.
        </p>
        <div className="w-4/5 sm:w-1/2 md:w-[50vw] lg:w-[55vw] h-[30vh] sm:h-[60vh] md:h-[65vh] lg:h-[65vh] relative mt-8">
          <Image
            src={getImageSrc("/tia_clair.jpg")}
            alt="Tia Clair Toomey haciendo un levantamiento de barra por encima de su cabeza."
            fill
            className="object-cover rounded-xl"
            loading="lazy"
          />
        </div>
      </div>

      <Accordion>
        <AccordionItem title="¿Qué incluye el viaje?">
          <div className="w-full p-8 bg-t2fPrimary bg-opacity-15">
            <ul className="list-disc text-justify text-base md:text-xl space-y-4">
              <li>Asesoramiento y apoyo continuo desde el momento que reservas la plaza, así como un PDF con toda la información necesaria para el viaje.</li>
              <li>Planificación del viaje desde cero con proveedores locales y la experiencia de estar viviendo en la isla.</li>
              <li>Actividades de aventura, de integración con la cultura balinesa y como no podía faltar, de deporte.</li>
              <li>Proceso de selección para crear un grupo de viajeros homogéneo y afin a tí.</li>
              <li>Acompañamiento y guía antes del viaje, ayudándote con la compra de vuelos y seguro de viaje.</li>
              <li>Grupo de Whatsapp con los demás viajeros, así como videollamadas antes del viaje para irnos conociendo antes de llegar al destino.</li>
              <li>Acompañamiento 24H durante los doce días del viaje.</li>
              <li>Todos los alojamientos con desayuno incluido de los diferentes hoteles donde nos quedaremos.</li>
              <li>Todos los transportes terrestres y acuáticos a las actividades y excursiones de larga distancia.</li>
              <li>Almuerzo en los días de estancia en Nusa Penida y el día de excursión de quads y rafting.</li>
            </ul>
          </div>
        </AccordionItem>
        <AccordionItem title="¿Qué NO incluye el viaje?">
          <div className="w-full p-8 bg-t2fPrimary bg-opacity-15">
            <ul className="list-disc text-justify text-base md:text-xl space-y-4">
              <li><strong>Vuelos internacionales ida y vuelta.</strong> Los precios oscilan entre 1000 y 1300€, dependiendo de la antelación con la que compremos los vuelos,
                aunque hemos elegido esas fechas por ser la mejor relación conexión-precio.
              </li>
              <li><strong>Seguro médico:</strong> 40-45€ dependiendo del seguro que cojas.</li>
              <li><strong>Visado:</strong> 30€.</li>
              <li><strong>Otros gastos durante la estancia:</strong> el resto de almuerzos y cenas, los desplazamientos cortos que haremos en moto al gimnasio y alrededores del alojamiento.
                La estimación no supera los 200€, pero esta cantidad depende de cada persona.
              </li>
            </ul>
          </div>
        </AccordionItem>
      </Accordion>

      <div className="w-full flex flex-col lg:flex-row items-center justify-center mt-12">
        <div className="w-full text-center p-6">
          <div className="my-4 mx-auto w-full border-t-2 border-t2fPrimary border-dashed"></div>
          <p className=" w-full md:w-3/4 mx-auto md:text-2xl lg:text-3xl text-t2fPrimary text-center mt-8">
            Ya te habrás dado cuenta que este <strong>NO</strong> es el típico pack de viaje en masa que no tiene en cuenta tus gustos ni intereses, mucho menos aún que incluya Crosstraining en el itinerario.
          </p>
          <div className="flex justify-center items-center my-4">
            <span className="inline-block h-1 w-16 bg-t2fPrimary"></span>
            <span className="mx-2 text-t2fSecondary">✦✦✦</span>
            <span className="inline-block h-1 w-16 bg-t2fPrimary"></span>
          </div>
          <h2 className="font-custom text-2xl text-t2fSecondary font-bold text-center md:text-4xl">NUESTRA FILOSOFÍA DE VIAJE ES CLARA</h2>
          <h3 className="w-full md:w-3/4 mx-auto text-xl md:text-3xl text-t2fPrimary text-center mt-8">
            Hacer que nuestros viajeros vivan la experiencia de sus sueños con personas exhaustivamente
            seleccionadas para formar el mejor grupo y con ello, <span className="text-t2fSecondary"> la mejor familia crosstraveler</span>.
          </h3>
          <div className="flex justify-center items-center my-4">
            <span className="inline-block h-1 w-16 bg-t2fPrimary"></span>
            <span className="mx-2 text-t2fSecondary">✦✦✦</span>
            <span className="inline-block h-1 w-16 bg-t2fPrimary"></span>
          </div>
          <h3 className="font-custom uppercase text-xl md:text-3xl text-t2fSecondary font-bold text-center mt-8 p-4 bg-t2fPrimary max-w-2xl mx-auto rounded-lg">
            Tu decides.
            <br />
            Vivirlo o soñarlo solo depende de ti.
          </h3>
          <div className="my-4 mx-auto w-full border-t-2 border-t2fPrimary border-dashed"></div>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row items-center justify-center">
        <div className="w-5/6 mx-auto bg-t2fSecondary bg-opacity-25 p-4 border-2 border-t2fSecondary rounded-lg shadow-xl">
          <h3 className="font-custom text-2xl text-t2fPrimary font-extrabold text-center md:text-4xl uppercase">
            <span className="text-t2fSecondary">4 Pasos</span>
            <br />
            para tener tu plaza</h3>
          <div className="w-full p-8">
            <ol className="list-decimal text-justify text-base md:text-xl space-y-4">
              <li>Completar un sencillo formulario que te dejaremos a continuación para poder conocerte y asegurar que vivas la experiencia con esas personas afines de las que te hablamos anteriormente.
              </li>
              <li>Una vez recibido el formulario nos pondremos en contacto contigo para concertar una videollamada de unos 30 minutos. Resolveremos dudas,
                daremos más información sobre el viaje y nos aseguraremos de que Travel To Feel es la decisión correcta para tu viaje de ensueño.
              </li>
              <li>Si ambos estamos de acuerdo en que sí es para ti el viaje, solo quedará reservar la plaza y listo ¡Bienvenido a la familia!.</li>
              <li>Cuando se complete el grupo mínimo, haremos un grupo de Whatsapp para dar toda la información necesaria, hacer videollamadas e irnos conociendo y tengan apoyo 24h para cualquier duda que tengan.
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="md:w-5/6 text-center mt-8 p-6">
        <p className="md:text-2xl lg:text-3xl font-medium text-gray-700">
          Aquí comienza tu viaje, rellena el formulario y únete a nosotros.
        </p>
      </div>
      <div className="w-full flex justify-center mt-4">
        <a
          href="https://forms.gle/tG4TjEKhx5MpMwAa9"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Formulario para unirse a la familia T2F"
          className="bg-t2fSecondary text-white text-xl font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-t2fPrimary transition duration-300 inline-block"
        >
          Iniciar formulario
        </a>
      </div>

      <Footer />
    </main>
  )
}
