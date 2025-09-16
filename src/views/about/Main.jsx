import { Lucide } from "@/base-components";
import { faker as getProducts } from "@/utils";
import * as $_ from "lodash";
import classnames from "classnames";
import { useState } from "react";
import banner from "../../assets/images/badangel/tarjeta.jpg";

function Main() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 820);

  return (
    <>
      <section id="about">
        <h2 className="text-black dark:text-white font-semibold justify-left items-center text-left sm:text-2xl xl:text-3xl my-10">
          ABOUT US
        </h2>
        <div className="flex w-full justify-center xs:mb-6 xl:mb-10 mt-4 xl:mt-2">
          {isLargeScreen ? (
            <img src={banner} className="w-full border-black border-1" />
          ) : (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-2xl"
            >
              <source src="/animacion-init.mp4" type="video/mp4" />
              Tu navegador no soporta videos.
            </video>
          )}
        </div>
        <div className="flex justify-center">
          <p className="text-black dark:text-white justify-left items-center text-left sm:text-lg xl:text-xl my-10">
            En un mundo donde lo correcto y lo prohibido se confunden , 
            <span className="font-bold mr-1">
                BADD ANGEL 
                </span>
                 nace como un grito, como rebelión. 
                <br />
                Cada prenda es armadura, manifiesto y contradicción. 
                <br />
                Somos la unión de dos fuerzas opuestas 
                <span className="font-bold mx-1">
                    
                    —ángel y demonio— 
                    </span>
                en constante choque. 
                <br /> 
                Nuestra ropa busca provocar.
            <br / >
            Inspirados en la 
            <span className="font-bold mx-1">
                crudeza del punk, la intensidad del under y el pulso del techno, 
                </span>
            diseñamos piezas que atraviesan el límite entre lo divino y lo profano. 
            <br />
            Siluetas extremas, volúmenes desafiantes y símbolos cargados de poder espiritual 
            <br /> 
            dan forma a una identidad que se rehúsa a ser domesticada. 
            <br />
            BADD ANGEL no dicta quién sos: 
            <br />
            <span className="font-bold mx-1">
te da las armas para gritarlo. 
            </span>
<br />
Somos ángeles con espinas, demonios con alas. 
<br />
Somos Badd Angel.
          </p>
        </div>
      </section>

      {isLargeScreen ? (
        ""
      ) : (
        <h4 className="text-black dark:text-white justify-center items-center text-center text-sm mt-5">
          Badd Angel ©2025 -
          <a href="https://www.jefa-web.com.ar">
            <span>Sitio diseñado por J.E.F.A. web</span>
          </a>
        </h4>
      )}
    </>
  );
}

export default Main;
