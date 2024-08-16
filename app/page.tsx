import Image from "next/image"
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import Accordion from "./components/Accordion"
import AccordionItem from "./components/AccordionItem"

import { getImageSrc } from '../utils/getImageSrc'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0 m-0">
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center">
        <Image
          src={getImageSrc("/sunlight-sea-bay-water-shore-sand-165774-wallhere.com.jpg")}
          alt="Descripción de la imagen"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="w-80 h-80 md:w-1/2 md:h-1/2  mx-auto absolute top-0 drop-shadow-[0_0_0.6rem_#000000ff]">
            <Image
                src={getImageSrc("/IMG_0148.PNG")}
                alt="Descripcion"
                fill
                className="object-contain"
              />
        </div>
        <div className="uppercase absolute inset-0 flex flex-col items-center justify-center mt-10">
          <br></br>
          <h1 className="md:px-5 text-t2fPrimary text-center text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-[0_0_0.6rem_#000000ff] ">
            Bali y Crosstraining en un sólo viaje.</h1>
          <br></br>
          <br></br>
          <br></br>
          <h1 className="md:px-5 text-t2fPrimary text-center text-2xl md:text-3xl lg:text-4xl font-bold drop-shadow-[0_0_0.6rem_#000000cc]">
            Creada para personas que comparten la pasión de viajar y entrenar crosstraining en comunidad</h1>
        </div>
        <a href="#second-section" className="animate-bounce absolute bottom-10 text-t2fPrimary text-7xl drop-shadow-[0_0_0.6rem_#ffffffff]">
          <KeyboardArrowDown fontSize="inherit" />
        </a>
      </div>

      <div id="second-section" className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center mt-12">
        <div className="w-full text-center uppercase lg:w-1/2 p-8">
          <h2 className="text-2xl text-t2fSecondary font-bold text-left md:text-center md:text-4xl">¿Por qué <span className="text-t2fPrimary">TRAVEL TO FEEL?</span></h2>
        </div>
        <p className="w-3/4 text-justify text-base md:text-xl">
          Travel to Feel nace de dos caminos que se unen. Por un lado, el <strong>Crosstraining</strong> y todo lo que ello conlleva.
          Acabar el WOD y darle la mano a tu compañero al borde del infarto, los ánimos cuando haces RM o te sale tu primer gimnástico y las amistades que se forjan en el box y que son para siempre.
          <br />
          <br />
          Por otro lado, nace de la sensación inexplicable pero increíble que surge al <strong>viajar y conocer un país nuevo, su cultura y costumbres. </strong> 
          De enamorarte una y otra vez de los paisajes y sobre todo, de llevarte el souvenir más preciado que puedas conseguir, los momentos vividos y que recordarás para siempre.
        </p>
        <div className="w-4/5 lg:w-1/2 h-[400px] lg:h-auto relative mt-8 lg:mt-0">
          <Image
            src={getImageSrc("/IMG-20240805-WA0015.jpg")}
            alt="Descripcion"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>

      <div className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center mt-12">
        <div className="w-full text-center uppercase lg:w-1/2 p-8">
          <h2 className="text-2xl md:text-4xl text-t2fSecondary font-bold text-left md:text-center">¿Por qué en <span className="text-t2fPrimary">grupos reducidos y filtrados?</span></h2>
        </div>
        <p className="w-3/4 text-justify text-base md:text-xl">
          Sabemos que la conexión y la afinidad son dos aspectos imprescindibles para que la experiencia sea perfecta, y por ello, escogemos 
          minuciosamente a personas compatibles que busquen vivir esta experiencia desde el compañerismo, la aventura, el respeto por una cultura
          diferente y quieran salir de su zona de confort. Esta es la clave para crear una verdadera familia viajera.
        </p>
        <div className="w-full text-center uppercase lg:w-1/2 p-8">
          <div className="w-full md:w-3/4 lg:w-3/4 h-[300px] md:h-[400px] lg:h-[400px] mx-auto relative mb-4">
            <Image
                src={getImageSrc("/IMG-20240805-WA0017.jpg")}
                alt="Descripcion"
                fill
                className="object-cover rounded-xl"
              />
          </div>
          <div className="w-full md:w-3/4 lg:w-3/4 h-[300px] md:h-[400px] lg:h-[400px] mx-auto relative">
            <Image
                src={getImageSrc("/IMG-20240805-WA0018.jpg")}
                alt="Descripcion"
                fill
                className="object-cover rounded-xl"
              />
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center mt-12">
        <div className="w-full text-center uppercase lg:w-1/2 p-8">
          <h2 className="text-2xl md:text-4xl text-t2fSecondary font-bold text-left md:text-center">¿Qué incluye el viaje?</h2>
        </div>
        <div className="w-full lg:w-1/2 p-8 bg-t2fPrimary bg-opacity-15">
          <ul className="list-disc text-justify text-base md:text-xl space-y-4">
            <li>Asesoramiento y apoyo continuo desde el momento que reservas la plaza, así como un PDF con toda la información necesaria para el viaje.</li>
            <li>Planificación del viaje desde cero con proveedores locales y la experiencia de estar viviendo en la isla.</li>
            <li>Actividades de aventura, de integración con la cultura balinesa y como no podía faltar, de deporte.</li>
            <li>Proceso de selección para crear un grupo de viajeros homogéneo y afin a tí.</li>
            <li>Acompañamiento y guía antes del viaje, ayudándote con la compra de vuelos y seguro de viaje.</li>
            <li>Grupo de Whatsapp con los demás viajeros, así como videollamadas antes del viaje para irnos conociendo antes de llegar al destino.</li>
            <li>Acompañamiento 24/12 durante los doce días del viaje.</li>
            <li>Todos los alojamientos con desayuno incluido de los diferentes hoteles donde nos quedaremos.</li>
            <li>Todos los transportes terrestres y acuáticos a las actividades y excursiones de larga distancia.</li>
            <li>Almuerzo en los días de estancia en Nusa Penida y el día de excursión de quads y rafting.</li>
          </ul>
        </div>
      </div>

      <div className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center mt-12">
        <div className="w-full text-center uppercase lg:w-1/2 p-8">
          <h2 className="text-2xl md:text-4xl text-t2fSecondary font-bold text-left md:text-center">¿Qué <span className="text-t2fPrimary">NO</span> incluye el viaje?</h2>
        </div>
        <div className="w-full lg:w-1/2 p-8 bg-t2fPrimary bg-opacity-15">
          <ul className="list-disc text-justify text-base md:text-xl space-y-4">
            <li><strong>Vuelos internacionales ida y vuelta.</strong> Los precios oscilan entre 1000 y 1300€, dependiendo de la antelación con la que compremos los vuelos,
              aunque hemos elegido esas fechas por ser la mejor relación conexión-precio.
            </li>
            <li><strong>Seguro médico:</strong> 40-45€ dependiendo del seguro que cojas.</li>
            <li><strong>Visado:</strong> 30€.</li>
            <li><strong>Otros gastos durante la estancia:</strong> el resto de almuerzos y cenas, los desplazamientos cortos que haremos en moto al gimnasio y alredores del alojamiento.
              La estimación no supera los 200€, pero esta cantidad depende de cada persona.
            </li>
          </ul>
        </div>
      </div>

      <Accordion>
        <AccordionItem title="¿Qué incluye el viaje?">
          <div className="w-full lg:w-1/2 p-8 bg-t2fPrimary bg-opacity-15">
            <ul className="list-disc text-justify text-base md:text-xl space-y-4">
              <li>Asesoramiento y apoyo continuo desde el momento que reservas la plaza, así como un PDF con toda la información necesaria para el viaje.</li>
              <li>Planificación del viaje desde cero con proveedores locales y la experiencia de estar viviendo en la isla.</li>
              <li>Actividades de aventura, de integración con la cultura balinesa y como no podía faltar, de deporte.</li>
              <li>Proceso de selección para crear un grupo de viajeros homogéneo y afin a tí.</li>
              <li>Acompañamiento y guía antes del viaje, ayudándote con la compra de vuelos y seguro de viaje.</li>
              <li>Grupo de Whatsapp con los demás viajeros, así como videollamadas antes del viaje para irnos conociendo antes de llegar al destino.</li>
              <li>Acompañamiento 24/12 durante los doce días del viaje.</li>
              <li>Todos los alojamientos con desayuno incluido de los diferentes hoteles donde nos quedaremos.</li>
              <li>Todos los transportes terrestres y acuáticos a las actividades y excursiones de larga distancia.</li>
              <li>Almuerzo en los días de estancia en Nusa Penida y el día de excursión de quads y rafting.</li>
            </ul>
          </div>
        </AccordionItem>
        <AccordionItem title="¿Qué NO incluye el viaje?">
          <div className="w-full lg:w-1/2 p-8 bg-t2fPrimary bg-opacity-15">
            <ul className="list-disc text-justify text-base md:text-xl space-y-4">
              <li><strong>Vuelos internacionales ida y vuelta.</strong> Los precios oscilan entre 1000 y 1300€, dependiendo de la antelación con la que compremos los vuelos,
                aunque hemos elegido esas fechas por ser la mejor relación conexión-precio.
              </li>
              <li><strong>Seguro médico:</strong> 40-45€ dependiendo del seguro que cojas.</li>
              <li><strong>Visado:</strong> 30€.</li>
              <li><strong>Otros gastos durante la estancia:</strong> el resto de almuerzos y cenas, los desplazamientos cortos que haremos en moto al gimnasio y alredores del alojamiento.
                La estimación no supera los 200€, pero esta cantidad depende de cada persona.
              </li>
            </ul>
          </div>
        </AccordionItem>
      </Accordion>

    </main>
  );
}
