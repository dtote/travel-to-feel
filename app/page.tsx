import Image from "next/image";
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
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
        <div className="w-80 h-80 md:w-96 md:h-96 mx-auto absolute top-0 drop-shadow-[0_0_0.6rem_#000000ff]">
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
          <h2 className="text-2xl text-t2fSecondary font-bold text-left">¿Por qué <span className="text-t2fPrimary">TRAVEL TO FEEL?</span></h2>
        </div>
        <p className="w-3/4 text-justify">
          Travel to Feel nace de dos caminos que se unen. Por un lado, el <strong>Crosstraining</strong> y todo lo que ello conlleva.
          Acabar el WOD y darle la mano a tu compañero al borde del infarto, los ánimos cuando haces RM o te sale tu primer gimnástico y las amistades que se forjan en el box y que son para siempre.
          <br />
          <br />
          Por otro lado, nace de la sensación inexplicable pero increíble que surge al <strong>viajar y conocer un país nuevo, su cultura y costumbres. </strong> 
          De enamorarte una y otra vez de los paisajes y sobre todo, de llevarte el souvenir más preciado que puedas conseguir, los momentos vividos y que recordarás para siempre.
        </p>
        {/* Aqui probar a poner el w-full tambien a ver cual prefiere */}
        {/* redondeadas las esquinas o no */}
        <div className="w-4/5 lg:w-1/2 h-[600px] lg:h-auto relative mt-8 lg:mt-0">
          <Image
            src={getImageSrc("/IMG-20240805-WA0015.jpg")}
            alt="Descripcion"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>

      <div className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center mt-12">
        <div className="w-full text-center uppercase lg:w-1/2 p-8">
          <div className="w-full lg:w-3/4 h-[300px] mx-auto relative mb-4">
            <Image
                src={getImageSrc("/IMG-20240805-WA0017.jpg")}
                alt="Descripcion"
                fill
                className="object-cover"
              />
          </div>
          <div className="w-full lg:w-3/4 h-[300px] mx-auto relative">
            <Image
                src={getImageSrc("/IMG-20240805-WA0018.jpg")}
                alt="Descripcion"
                fill
                className="object-cover"
              />
          </div>
        </div>
        <div className="w-full text-center uppercase lg:w-1/2 p-8">
          <h2 className="text-3xl text-t2fPrimary text-shadow-custom shadow-black font-bold">¿Por qué en grupos <br></br> reducidos y filtrados?</h2>
        </div>
      </div>

      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        <div className="w-1/2 h-auto flex flex-col text-center p-4 mt-16 mb-8">
          <p className="text-t2fGrey">
            Sabemos que la conexión y la afinidad son dos aspectos imprescindibles para que la experiencia sea perfecta, y por ello, escogemos             
            minuciosamente a personas compatibles que busquen vivir lo mismo.
            <br></br> 
            <br></br>
            Crossfiteros que crean vínculos más allá de la amistad, convirtiéndose en <strong>familia</strong>.
          </p>
        </div>

        <div className="w-1/2 min-h-screen flex flex-col items-center justify-center text-center mt-8">
          <p className="">
            ¿Eres esa persona que tiene guardado en favoritos boxes de otras partes del mundo con paisajes increíbles a su alrededor?
            ¿Te gustaría tener un viaje sin huir de la rutina, sino volviendo a ella habiendo vivido y valorado cada momento? 
            ¿Estás en un proceso de cambio y necesitas ese viaje para dedicártelo a ti mismo y salir de la zona de confort?
            ¿O tal vez has intentado planificar ese viaje de ensueño y que todavía está únicamente en tu mente?
            ¿Y si te dijera que hay muchas personas que tienen los mismos gustos y aficiones que tú y están deseando compartir las mismas experiencias?
          </p>

          <br />
          <br />
          
          <h3 className="text-2xl font-black text-t2fSecondary uppercase text-shadow-custom shadow-black">Si te sientes identificado con alguna de estas preguntas, no eres raro, solo tienes que viajar con la familia t2f</h3>
        </div>
      </div>

    </main>
  );
}
