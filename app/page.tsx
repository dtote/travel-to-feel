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
        <div className="w-80 h-80 md:w-1/2 md:h-1/2 mx-auto absolute top-0 drop-shadow-[0_0_0.6rem_#000000ff]">
            <Image
                src={getImageSrc("/IMG_0148.PNG")}
                alt="Descripcion"
                fill
                className="object-contain"
              />
        </div>
        <div className="uppercase absolute inset-0 flex flex-col items-center justify-center mt-10">
          <br></br>
          <h1 className="md:px-5 text-t2fPrimary text-center text-2xl md:text-3xl lg:text-5xl font-bold drop-shadow-[0_0_0.6rem_#000000ff] ">
            Bali y Crosstraining en un sólo viaje.</h1>
          <br></br>
          <br></br>
          <br></br>
          <h1 className="md:px-4 text-t2fPrimary text-center text-xl md:text-2xl lg:text-4xl font-bold drop-shadow-[0_0_0.6rem_#000000cc]">
            Creada para personas que comparten la pasión de viajar y entrenar crosstraining en comunidad</h1>
        </div>
        <a href="#second-section" className="animate-bounce absolute bottom-10 md:bottom-5 text-t2fPrimary text-5xl md:text-6xl lg:text-7xl drop-shadow-[0_0_0.6rem_#ffffffff]">
          <KeyboardArrowDown fontSize="inherit" />
        </a>
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
        <div className="w-4/5 lg:w-3/4 h-[200px] md:h-[400px] lg:h-[600px] relative mt-8">
          <Image
            src={getImageSrc("/pexels-belle-co-99483-1000445.JPG")}
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
                src={getImageSrc("/IMG-20240805-WA0015.jpg")}
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

      <div className="w-full flex flex-col lg:flex-row items-center justify-center mt-12">
        <div className="w-full text-center lg:w-1/2 p-6">
          <div className="my-4 mx-auto w-full border-t-2 border-t2fPrimary border-dashed"></div>
          <p className="md:text-xl text-t2fPrimary  text-center">Si has llegado hasta aquí es porque te has
            sentido identificado con nuestro <span className="text-t2fSecondary">POR QUÉ</span>. 
            <br />
            Así que vamos con el <span className="text-t2fSecondary">QUÉ Y CÓMO</span> .
          </p>
          <h2 className="uppercase text-2xl md:text-3xl text-t2fSecondary font-extrabold text-center mt-8 p-4 bg-t2fPrimary rounded-lg">
            Del 2 al 15 de diciembre descubriendo bali
          </h2>
          <div className="my-4 mx-auto w-full border-t-2 border-t2fPrimary border-dashed"></div>
        </div>
      </div>

      {/* NUSA PENIDA */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-center mt-8">
        <div className="w-full text-center uppercase lg:w-1/2">
          <h2 className="text-2xl text-t2fPrimary font-bold text-center md:text-4xl">NUSA PENIDA</h2>
          <div className="flex justify-center items-center my-4">
            <span className="inline-block h-1 w-16 bg-t2fPrimary"></span>
            <span className="mx-2 text-t2fSecondary">✦✦✦</span>
            <span className="inline-block h-1 w-16 bg-t2fPrimary"></span>
          </div>
        </div>
        <p className="w-3/4 text-justify text-base md:text-xl">
          Nos perderemos en sus aguas cristalinas y sus playas de arena blanca. Esta isla que pertenece a Bali es la protagonista de la playa
          más famosa de Indonesia: <strong>Kelingking Beach.</strong>
        </p>
        <div className="w-4/5 lg:w-1/2 h-[200px] lg:h-auto relative mt-8 lg:mt-0">
          <Image
            src={getImageSrc("/kelingking-beach-sunset-nusa-penida-island-bali-indonesia.jpg")}
            alt="Descripcion"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>

      {/* SNORKEL */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-center mt-8">
        <div className="w-full text-center uppercase lg:w-1/2">
          <h2 className="text-2xl text-t2fPrimary font-bold text-center md:text-4xl">SNORKEL</h2>
          <div className="flex justify-center items-center my-4">
            <span className="inline-block h-1 w-16 bg-t2fPrimary"></span>
            <span className="mx-2 text-t2fSecondary">✦✦✦</span>
            <span className="inline-block h-1 w-16 bg-t2fPrimary"></span>
          </div>
        </div>
        <p className="w-3/4 text-justify text-base md:text-xl">
          Prepárate para descubrir la gran variedad de fauna marina que se extiende en Nusa Penida y, con un poquito de suerte,
          ver animales tan alucinantes como mantarrayas.
        </p>
        <div className="w-4/5 lg:w-1/2 h-[200px] lg:h-auto relative mt-8 lg:mt-0">
          <Image
            src={getImageSrc("/aquarium of the oacific!!!.jpg")}
            alt="Descripcion"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>

      {/* CASCADAS */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-center mt-8">
        <div className="w-full text-center uppercase lg:w-1/2">
          <h2 className="text-2xl text-t2fPrimary font-bold text-center md:text-4xl">CASCADAS</h2>
          <div className="flex justify-center items-center my-4">
            <span className="inline-block h-1 w-16 bg-t2fPrimary"></span>
            <span className="mx-2 text-t2fSecondary">✦✦✦</span>
            <span className="inline-block h-1 w-16 bg-t2fPrimary"></span>
          </div>
        </div>
        <p className="w-3/4 text-justify text-base md:text-xl">
          Te quedarás sin palabras con lo impresionante que son las cascadas en Bali y la fuerza con la que desciende el agua no te dejará indiferente.
        </p>
        <div className="w-4/5 lg:w-1/2 h-[200px] lg:h-auto relative mt-8 lg:mt-0">
          <Image
            src={getImageSrc("/nungnun_waterfall.jpg")}
            alt="Descripcion"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>

      {/* AMANECER EN EL MONTE BATUR */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-center mt-8">
        <div className="w-full text-center uppercase lg:w-1/2">
          <h2 className="text-2xl text-t2fPrimary font-bold text-center md:text-4xl">AMANECER EN EL MONTE BATUR</h2>
          <div className="flex justify-center items-center my-4">
            <span className="inline-block h-1 w-16 bg-t2fPrimary"></span>
            <span className="mx-2 text-t2fSecondary">✦✦✦</span>
            <span className="inline-block h-1 w-16 bg-t2fPrimary"></span>
          </div>
        </div>
        <p className="w-3/4 text-justify text-base md:text-xl">
          Vive una experiencia única amaneciendo a 1717 metros de altura, en el volcán activo Batur. Además de las increíbles vistas de toda la isla,
          podrás ver el pico más alto de Bali, el volcán Agung, con 3.142 metros sobre el nivel del mar.
        </p>
        <div className="w-4/5 lg:w-1/2 h-[200px] lg:h-auto relative mt-8 lg:mt-0">
          <Image
            src={getImageSrc("/Mt_ Batur Sunrise Hike.jpg")}
            alt="Descripcion"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>

      {/* KILÓMETROS INFINITOS DE ARROZALES */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-center mt-8">
        <div className="w-full text-center uppercase lg:w-1/2">
          <h2 className="text-2xl text-t2fPrimary font-bold text-center md:text-4xl">KILÓMETROS INFINITOS DE ARROZALES</h2>
          <div className="flex justify-center items-center my-4">
            <span className="inline-block h-1 w-16 bg-t2fPrimary"></span>
            <span className="mx-2 text-t2fSecondary">✦✦✦</span>
            <span className="inline-block h-1 w-16 bg-t2fPrimary"></span>
          </div>
        </div>
        <p className="w-3/4 text-justify text-base md:text-xl">
          Uno de los paisajes característicos de Bali son sus enormes extensiones de campos de arroz, pintando de verde los senderos que iremos recorriendo
          a lo largo del viaje.
        </p>
        <div className="w-4/5 lg:w-1/2 h-[200px] lg:h-auto relative mt-8 lg:mt-0">
          <Image
            src={getImageSrc("/Tegalalang Rice Terrace.jpg")}
            alt="Descripcion"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>

      {/* BAUTISMO DE BUCEO EN AMED */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-center mt-8">
        <div className="w-full text-center uppercase lg:w-1/2">
          <h2 className="text-2xl text-t2fPrimary font-bold text-center md:text-4xl">BAUTISMO DE BUCEO EN AMED</h2>
          <div className="flex justify-center items-center my-4">
            <span className="inline-block h-1 w-16 bg-t2fPrimary"></span>
            <span className="mx-2 text-t2fSecondary">✦✦✦</span>
            <span className="inline-block h-1 w-16 bg-t2fPrimary"></span>
          </div>
        </div>
        <p className="w-3/4 text-justify text-base md:text-xl">
          El lugar de Bali por excelencia para hacer inmersiones por su variedad de fauna marina. Nuestros instructores nos guiarán 
          para descubrir todos los rincones que esconden las playas de Amed.
        </p>
        <div className="w-4/5 lg:w-1/2 h-[200px] lg:h-auto relative mt-8 lg:mt-0">
          <Image
            src={getImageSrc("/Scuba diving Bali Nusa Lembongan.jpg")}
            alt="Descripcion"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>

      {/* BAUTISMO DE BUCEO EN AMED */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-center mt-8">
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
        <p className="w-3/4 text-justify text-base md:text-xl">
          Disfrutar entrenando y compartiendo este deporte con nuestra familia viajera.
        </p>
        <div className="w-4/5 lg:w-1/2 h-[200px] lg:h-auto relative mt-8 lg:mt-0">
          <Image
            src={getImageSrc("/Tia Clair Toomey.jpg")}
            alt="Descripcion"
            fill
            className="object-cover rounded-xl"
          />
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
              <li>Acompañamiento 24H durante los doce días del viaje.</li>
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

      <div className="w-full flex flex-col lg:flex-row items-center justify-center mt-12">
        <div className="w-full text-center lg:w-1/2 p-6">
          <div className="my-4 mx-auto w-full border-t-2 border-t2fPrimary border-dashed"></div>
          <p className="text-xl md:text-3xl text-t2fPrimary font-bold text-center mt-8">
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
          <h3 className="uppercase text-xl md:text-3xl text-t2fSecondary font-bold text-center mt-8 p-4 bg-t2fPrimary rounded-lg">
            Tu decides. Vivirlo o soñarlo solo depende de ti.
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
          <div className="w-full lg:w-1/2 p-8">
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

    </main>
  );
}
