import { Lucide } from "@/base-components";
import { faker as getProducts } from "@/utils";
import * as $_ from "lodash";
import classnames from "classnames";
import { useState } from "react";
import pagos from "../../assets/images/badangel/envio2.webp";

function Main() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 820);

  return (
    <>
      <section id="pagos">
        <h2 className="text-black dark:text-white font-semibold justify-left items-center text-left sm:text-2xl xl:text-3xl mt-10 mb-1">
          MÉTODOS DE PAGO
        </h2>
        <div className="flex items-start">
          <p className="text-black dark:text-white/10 justify-left items-start text-left sm:text-lg xl:text-xl mt-3">
            Por el momento las únicas formas de pago son TRANSFERENCIA, DEPÓSITO BANCARIO o EFECTIVO. 
          </p>
        </div>
      </section>

      <section id="envios" className="my-10">
  <h2 className="text-black dark:text-white font-semibold text-left sm:text-2xl xl:text-3xl mb-8">
    FORMAS DE ENTREGA
  </h2>

  <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 items-start">
    {/* Columna izquierda: lista (25%) */}
    <div className="text-black dark:text-white/10 text-lg xl:col-span-1">
      <ul className="space-y-4">
        <li className="flex items-center">
          <Lucide icon="Circle" className="w-5 h-5 mr-2" />
          Retiro personal: Córdoba, Alta Córdoba.
        </li>
        <li className="flex items-center">
          <Lucide icon="Circle" className="w-5 h-5 mr-2" />
          Cadetería a domicilio (Uber o Pedidos Ya).
        </li>
        <li className="flex items-center">
          <Lucide icon="Circle" className="w-5 h-5 mr-2" />
          Correo Argentino, a domicilio o a sucursal.
        </li>
      </ul>
    </div>

    {/* Columna derecha: imagen (75%) */}
    <div className="flex justify-center xl:col-span-3">
      <img
        src={pagos}
        alt="Formas de entrega"
        className="w-full  object-cover"
      />
    </div>
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
