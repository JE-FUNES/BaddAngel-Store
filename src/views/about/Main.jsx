import { useState } from "react";
import banner from "../../assets/images/badangel/tarjeta.jpg";

function Main() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 820);

  return (
    <>
      <section id="about">
        <h2 className="text-black dark:text-white font-semibold text-left sm:text-2xl xl:text-3xl my-10">
          ABOUT US
        </h2>

        {/* Grid: texto izquierda - imagen derecha */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
          {/* Columna izquierda - Texto */}
          <div>
            <p className="text-black dark:text-white text-left sm:text-lg xl:text-xl leading-relaxed">
              En un mundo donde lo correcto y lo prohibido se confunden,{" "}
              <span className="font-bold">BADD ANGEL</span> nace como un grito,
              como rebelión.
              <br />
              Cada prenda es armadura, manifiesto y contradicción.
              <br />
              Somos la unión de dos fuerzas opuestas
              <span className="font-bold mx-1">—ángel y demonio—</span>
              en constante choque.
              <br />
              Nuestra ropa busca provocar.
              <br />
              Inspirados en la
              <span className="font-bold mx-1">
                crudeza del punk, la intensidad del under y el pulso del techno,
              </span>
              diseñamos piezas que atraviesan el límite entre lo divino y lo
              profano.
              <br />
              Siluetas extremas, volúmenes desafiantes y símbolos cargados de
              poder espiritual dan forma a una identidad que se rehúsa a ser
              domesticada.
              <br />
              BADD ANGEL no dicta quién sos:{" "}
              <span className="font-bold">te da las armas para gritarlo.</span>
              <br />
              Somos ángeles con espinas, demonios con alas.
              <br />
              Somos Badd Angel.
            </p>
          </div>

          {/* Columna derecha - Imagen o Video */}
          <div className="flex justify-center">
              <img
                src={banner}
                alt="Badd Angel"
                className="w-full  object-cover"
              />
    
          </div>
        </div>
      </section>

      {/* Footer móvil */}
      {!isLargeScreen && (
        <h4 className="text-black dark:text-white text-center text-sm mt-5">
          Badd Angel ©2025 -{" "}
          <a href="https://www.jefa-web.com.ar">
            <span>Sitio diseñado por J.E.F.A. web</span>
          </a>
        </h4>
      )}
    </>
  );
}

export default Main;
