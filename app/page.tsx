import Image from "next/image"
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import InstagramIcon from '@mui/icons-material/Instagram'
import Accordion from "./components/Accordion"
import AccordionItem from "./components/AccordionItem"
import ScrollLink from "./components/ScrollLink"
import { getImageSrc } from '../utils/getImageSrc'
import SvgLogo from "./components/SvgLogo"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0 m-0">
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center">
        <Image
          src={getImageSrc("/sunlight_sea.jpg")}
          alt="Paisaje costero con el sol brillando sobre el mar, creando reflejos de agua."
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="flex justify-center items-center w-full h-2/5 absolute top-2 drop-shadow-[0_0_0.6rem_#000000ff]">
          <SvgLogo width={300} height={300} className="object-contain w-full"/>
        </div>

        <div className="uppercase absolute inset-0 flex flex-col items-center justify-center mt-10 lg:mt-0">
          <br></br>
          <h1 className="md:px-5 text-t2fPrimary text-center text-2xl md:text-3xl lg:text-4xl font-bold drop-shadow-[0_0_0.6rem_#000000ff]">
            Bali y Crosstraining en un sólo viaje.</h1>
          <br></br>
          <br></br>
          <br></br>
          <h1 className="md:px-4 text-t2fPrimary text-center text-xl md:text-2xl lg:text-3xl font-bold drop-shadow-[0_0_0.6rem_#000000cc]">
            Creada para personas que comparten la pasión de viajar y entrenar crosstraining en comunidad</h1>
        </div>
        <ScrollLink targetId="second-section" className="animate-bounce absolute bottom-10 md:bottom-5 text-t2fPrimary text-5xl md:text-6xl lg:text-7xl drop-shadow-[0_0_0.6rem_#ffffffff]">
          <span className="sr-only">Desplazarse hacia abajo a la siguiente sección</span>
          <KeyboardArrowDown fontSize="inherit"/>
        </ScrollLink>
      </div>

      <div id="second-section" className="w-full min-h-screen flex flex-col items-center justify-center mt-12">
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
        <div className="w-full text-center uppercase lg:w-1/2 p-8">
          <h2 className="text-2xl md:text-4xl text-t2fSecondary font-bold text-left md:text-center">¿Por qué en <span className="text-t2fPrimary">grupos reducidos y filtrados?</span></h2>
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
          <div className="my-4 mx-auto w-full border-t-2 border-t2fPrimary border-dashed"></div>
          <p className="md:text-2xl lg:text-3xl text-t2fPrimary text-center">Si has llegado hasta aquí es porque te has
            sentido identificado con nuestro <span className="text-t2fSecondary">POR QUÉ</span>. 
            <br />
            Así que vamos con el <span className="text-t2fSecondary">QUÉ Y CÓMO</span> .
          </p>
          <h2 className="uppercase text-2xl md:text-3xl text-t2fSecondary font-extrabold text-center mt-8 p-4 bg-t2fPrimary max-w-md mx-auto rounded-lg">
            Del 2 al 15 de diciembre descubriendo bali
          </h2>
          <div className="my-4 mx-auto w-full border-t-2 border-t2fPrimary border-dashed"></div>
        </div>
      </div>

      {/* NUSA PENIDA */}
      <div className="w-full flex flex-col items-center justify-center mt-8">
        <div className="w-full text-center uppercase lg:w-1/2">
          <h2 className="text-2xl text-t2fPrimary font-bold text-center md:text-4xl">NUSA PENIDA</h2>
          <div className="flex justify-center items-center my-4">
            <span className="inline-block h-1 w-16 bg-t2fPrimary"></span>
            <span className="mx-2 text-t2fSecondary">✦✦✦</span>
            <span className="inline-block h-1 w-16 bg-t2fPrimary"></span>
          </div>
        </div>
        <p className="w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] text-justify lg:text-center text-base md:text-xl">
          Nos perderemos en sus aguas cristalinas y sus playas de arena blanca. Esta isla que pertenece a Bali es la protagonista de la playa
          más famosa de Indonesia: <strong>Kelingking Beach.</strong>
        </p>
        <div className="w-4/5 sm:w-1/2 md:w-[50vw] lg:w-[40vw] h-[30vh] sm:h-[60vh] md:h-[65vh] lg:h-[60vh] relative mt-8">
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
        <div className="w-full text-center uppercase lg:w-1/2">
          <h2 className="text-2xl text-t2fPrimary font-bold text-center md:text-4xl">SNORKEL</h2>
          <div className="flex justify-center items-center my-4">
            <span className="inline-block h-1 w-16 bg-t2fPrimary"></span>
            <span className="mx-2 text-t2fSecondary">✦✦✦</span>
            <span className="inline-block h-1 w-16 bg-t2fPrimary"></span>
          </div>
        </div>
        <p className="w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] text-justify lg:text-center text-base md:text-xl">
          Prepárate para descubrir la gran variedad de fauna marina que se extiende en Nusa Penida y, con un poquito de suerte,
          ver animales tan alucinantes como mantarrayas.
        </p>
        <div className="w-4/5 sm:w-1/2 md:w-[50vw] lg:w-[40vw] h-[30vh] sm:h-[60vh] md:h-[65vh] lg:h-[60vh] relative mt-8">
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
        <div className="w-full text-center uppercase lg:w-1/2">
          <h2 className="text-2xl text-t2fPrimary font-bold text-center md:text-4xl">CASCADAS</h2>
          <div className="flex justify-center items-center my-4">
            <span className="inline-block h-1 w-16 bg-t2fPrimary"></span>
            <span className="mx-2 text-t2fSecondary">✦✦✦</span>
            <span className="inline-block h-1 w-16 bg-t2fPrimary"></span>
          </div>
        </div>
        <p className="w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] text-justify lg:text-center text-base md:text-xl">
          Te quedarás sin palabras con lo impresionante que son las cascadas en Bali y la fuerza con la que desciende el agua no te dejará indiferente.
        </p>
        <div className="w-4/5 sm:w-1/2 md:w-[50vw] lg:w-[40vw] h-[30vh] sm:h-[60vh] md:h-[65vh] lg:h-[60vh] relative mt-8">
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
        <div className="w-full text-center uppercase lg:w-1/2">
          <h2 className="text-2xl text-t2fPrimary font-bold text-center md:text-4xl">AMANECER EN EL MONTE BATUR</h2>
          <div className="flex justify-center items-center my-4">
            <span className="inline-block h-1 w-16 bg-t2fPrimary"></span>
            <span className="mx-2 text-t2fSecondary">✦✦✦</span>
            <span className="inline-block h-1 w-16 bg-t2fPrimary"></span>
          </div>
        </div>
        <p className="w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] text-justify lg:text-center text-base md:text-xl">
          Vive una experiencia única amaneciendo a 1717 metros de altura, en el volcán activo Batur. Además de las increíbles vistas de toda la isla,
          podrás ver el pico más alto de Bali, el volcán Agung, con 3.142 metros sobre el nivel del mar.
        </p>
        <div className="w-4/5 sm:w-1/2 md:w-[50vw] lg:w-[40vw] h-[30vh] sm:h-[60vh] md:h-[65vh] lg:h-[60vh] relative mt-8">
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
        <div className="w-full text-center uppercase lg:w-1/2">
          <h2 className="text-2xl text-t2fPrimary font-bold text-center md:text-4xl">KILÓMETROS INFINITOS DE ARROZALES</h2>
          <div className="flex justify-center items-center my-4">
            <span className="inline-block h-1 w-16 bg-t2fPrimary"></span>
            <span className="mx-2 text-t2fSecondary">✦✦✦</span>
            <span className="inline-block h-1 w-16 bg-t2fPrimary"></span>
          </div>
        </div>
        <p className="w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] text-justify lg:text-center text-base md:text-xl">
          Uno de los paisajes característicos de Bali son sus enormes extensiones de campos de arroz, pintando de verde los senderos que iremos recorriendo
          a lo largo del viaje.
        </p>
        <div className="w-4/5 sm:w-1/2 md:w-[50vw] lg:w-[40vw] h-[30vh] sm:h-[60vh] md:h-[65vh] lg:h-[60vh] relative mt-8">
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
        <div className="w-full text-center uppercase lg:w-1/2">
          <h2 className="text-2xl text-t2fPrimary font-bold text-center md:text-4xl">BAUTISMO DE BUCEO EN AMED</h2>
          <div className="flex justify-center items-center my-4">
            <span className="inline-block h-1 w-16 bg-t2fPrimary"></span>
            <span className="mx-2 text-t2fSecondary">✦✦✦</span>
            <span className="inline-block h-1 w-16 bg-t2fPrimary"></span>
          </div>
        </div>
        <p className="w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] text-justify text-base md:text-xl">
          El lugar de Bali por excelencia para hacer inmersiones por su variedad de fauna marina. Nuestros instructores nos guiarán 
          para descubrir todos los rincones que esconden las playas de Amed.
        </p>
        <div className="w-4/5 sm:w-1/2 md:w-[50vw] lg:w-[40vw] h-[30vh] sm:h-[60vh] md:h-[65vh] lg:h-[60vh] relative mt-8">
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
        <div className="w-full text-center uppercase lg:w-1/2">
          <h2 className="text-2xl text-t2fPrimary font-bold text-center md:text-4xl">Y muchas actividades más que complementaremos con 
            <br />
            <span className="text-t2fSecondary"> nuestra gran pasión</span>
          </h2>
          <div className="flex justify-center items-center my-4">
            <span className="inline-block h-1 w-16 bg-t2fPrimary"></span>
            <span className="mx-2 text-t2fSecondary">✦✦✦</span>
            <span className="inline-block h-1 w-16 bg-t2fPrimary"></span>
          </div>
        </div>
        <p className="w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] text-justify lg:text-center text-base md:text-xl">
          Disfrutar entrenando y compartiendo este deporte con nuestra familia viajera.
        </p>
        <div className="w-4/5 sm:w-1/2 md:w-[50vw] lg:w-[40vw] h-[30vh] sm:h-[60vh] md:h-[65vh] lg:h-[60vh] relative mt-8">
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
              <li><strong>Otros gastos durante la estancia:</strong> el resto de almuerzos y cenas, los desplazamientos cortos que haremos en moto al gimnasio y alredores del alojamiento.
                La estimación no supera los 200€, pero esta cantidad depende de cada persona.
              </li>
            </ul>
          </div>
        </AccordionItem>
      </Accordion>

      <div className="w-full flex flex-col lg:flex-row items-center justify-center mt-12">
        <div className="w-full text-center p-6">
          <div className="my-4 mx-auto w-full border-t-2 border-t2fPrimary border-dashed"></div>
          <p className="md:text-2xl lg:text-3xl text-t2fPrimary font-bold text-center mt-8">
            Ya te habrás dado cuenta que este NO es el típico pack de viaje en masa que no tiene en cuenta tus gustos ni intereses, mucho menos aún que incluya Crosstraining en el itinerario.
          </p>
          <div className="flex justify-center items-center my-4">
            <span className="inline-block h-1 w-16 bg-t2fPrimary"></span>
            <span className="mx-2 text-t2fSecondary">✦✦✦</span>
            <span className="inline-block h-1 w-16 bg-t2fPrimary"></span>
          </div>
          <h2 className="text-2xl text-t2fSecondary font-bold text-center md:text-4xl">NUESTRA FILOSOFÍA DE VIAJE ES CLARA</h2>
          <h3 className="text-xl md:text-3xl text-t2fPrimary font-bold text-center mt-8">
            Hacer que nuestros viajeros vivan la experiencia de sus sueños con personas exhaustivamente
            seleccionadas para formar el mejor grupo y con ello, <span className="text-t2fSecondary"> la mejor familia crosstraveler</span>.
          </h3>
          <div className="flex justify-center items-center my-4">
            <span className="inline-block h-1 w-16 bg-t2fPrimary"></span>
            <span className="mx-2 text-t2fSecondary">✦✦✦</span>
            <span className="inline-block h-1 w-16 bg-t2fPrimary"></span>
          </div>
          <h3 className="uppercase text-xl md:text-3xl text-t2fSecondary font-bold text-center mt-8 p-4 bg-t2fPrimary max-w-2xl mx-auto rounded-lg">
            Tu decides. 
            <br />
            Vivirlo o soñarlo solo depende de ti.
          </h3>
          <div className="my-4 mx-auto w-full border-t-2 border-t2fPrimary border-dashed"></div>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row items-center justify-center">
        <div className="w-5/6 mx-auto bg-t2fSecondary bg-opacity-25 p-4 border-2 border-t2fSecondary rounded-lg shadow-xl">
          <h2 className="text-2xl text-t2fPrimary font-extrabold text-center md:text-4xl uppercase">
            <span className="text-t2fSecondary">4 Pasos</span> 
            <br />
            para tener tu plaza</h2>
          <div className="w-full p-8">
            <ol className="list-decimal text-justify text-base md:text-xl space-y-4">
              <li>Completar un sencillo formulario que te dejaremos a continuación para poder conocerte y asegurar que vivas la experiencia con esas personas afines de las que te hablamos anteriormente.
              </li>
              <li>Una vez recibido el formulario nos pondremos en contacto contigo para concertar una videollamada de unos 30 minutos. Resolveremos dudas,
                 daremos más información sobre el viaje y nos aseguraremos de que Travel To Feel es la decisión correcta para tu viaje de ensueño.
              </li>
              <li>Si ambos estamos de acuerdo en que sí es para ti el viaje, solo quedará reservar la plaza y listo ¡Bienvenido a la familia!.</li>
              <li>Cuando se complete el grupo mínimo, haremos un grupo de Whatsapp para dar toda la información necesaria, hacer videollamadas e irnos conociendo y tengan apoyo 24h desde ya para cualquier duda que tengan.
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="md:w-5/6 text-center mt-8 p-6">
        <p className="md:text-2xl lg:text-3xl font-medium text-gray-700">
         Aquí comienza tu viaje, únete a nosotros para rellenar el formulario.
        </p>
      </div>
      <div className="w-full flex justify-center mt-4">
        <a
          href="https://www.ejemplo.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Formulario para unirse a la familia T2F"
          className="bg-t2fSecondary text-white text-xl font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-t2fPrimary transition duration-300 inline-block"
        >
          ¡Únete ya a la familia T2F!
        </a>
      </div>

      <footer className="w-full bg-t2fSecondary text-t2fPrimary py-2 mt-12">
        <div className="w-full mx-auto flex flex-col items-center justify-between">

          <div className="w-full flex flex-col items-center justify-center">
            <SvgLogo width={200} height={200} className="object-contain w-2/5 drop-shadow-[0_0_0.6rem_#000000ff]"  />
            <p className="text-center md:text-left text-sm md:text-base">
              Uniendo la pasión por viajar y el crosstraining.
            </p>
          </div>

          <div className="w-full flex flex-col md:flex-row items-center justify-between mt-4 border-t border-opacity-50 border-t2fPrimary pt-4">
            <div className="w-1/2 flex flex-col items-center justify-center mb-8 md:mb-0">
              <h3 className="font-bold text-lg mb-4">Síguenos</h3>
              <div className="flex space-x-6">
                <a href="https://www.instagram.com/traveltofeel_" aria-label="Visitar nuestro perfil de Instagram" target="_blank" rel="noopener noreferrer">
                  <InstagramIcon className="hover:text-white transition duration-500" fontSize="large" />
                </a>
              </div>
            </div>

            <div className="w-1/2 flex flex-col items-center justify-center">
              <h3 className="font-bold text-lg mb-4">Contáctanos</h3>
              <p className="text-sm md:text-base">
                <a href="mailto:contacto@traveltofeel.com" aria-label="Enviar un correo a contacto@traveltofeel.com" className="underline hover:text-white transition duration-500">
                  contacto@traveltofeel.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-t2fPrimary border-opacity-50 pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Travel To Feel. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  )
}
