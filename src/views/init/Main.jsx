import { Lucide } from "@/base-components";
import { faker as getProducts } from "@/utils";
import * as $_ from "lodash";
import classnames from "classnames";
import { useState, useEffect } from "react";
import banner from "../../assets/images/badangel/banner2.jpeg";
import banner2 from "../../assets/images/badangel/bannerV.jpg";
import tituloBuzos from "../../assets/images/badangel/productos/buzos/TITULO-BUZOS-dark.jpg";
import tituloTops from "../../assets/images/badangel/productos/tops/titulo-tops.jpg";
import tituloPantalones from "../../assets/images/badangel/productos/buzos/TITULO-PANTALONES-dark.jpg";
import tituloBolsos from "../../assets/images/badangel/productos/bolsos/titulo-bags.jpg";
import ProductsModal from "./ModalProductos";

function Main() {
  const productos = getProducts();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };
  const closeComponent = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 820);

  const [showHover, setShowHover] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowHover((prev) => !prev);
    }, 3000); // cambia cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <>
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
      <h2 className="text-black dark:text-white font-semibold justify-center items-center text-center sm:text-2xl xl:text-3xl my-10">
        DONDE LO DIVINO Y LO PERVERSO CONVERGEN
      </h2>
      <section id="buzos">
        <div className="flex justify-center">
          <img src={tituloBuzos} className="mb-3 mt-20 xl:mt-24" />
        </div>

        <div className="grid grid-cols-12 gap-6 xl:mt-5">
          {/* BEGIN: Products Layout */}

          {/* BUZOS */}
          {productos
            .filter((prod) => prod.categoria === "buzos")
            .map((prod) => (
              <div
                key={prod.codigo}
                className="intro-y col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3"
                onClick={() => openModal(prod)}
              >
                <div className="box">
                  <div className="p-5">
                    <div className="aspect-[4/6] rounded-md overflow-hidden relative group">
                      {/*Imagen Principal */}
                      <img
                        alt={prod.titulo}
                        className={`absolute inset-0 rounded-md object-contain w-full h-full transition-opacity duration-700 ${
                          showHover ? "opacity-0" : "opacity-100"
                        }`}
                        src={prod.imagenPrincipal}
                      />
                      {/* Imagen hover */}
                      <img
                        alt={prod.titulo}
                        className={`absolute inset-0 rounded-md object-contain w-full h-full transition-opacity duration-700 ${
                          showHover ? "opacity-100" : "opacity-0"
                        }`}
                        src={prod.imagenHover}
                      />
                      {/* Degradado overlay */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.7)_0%,transparent_50%)]"></div>

                      {prod.oferta ? (
                        <span className="absolute top-0 bg-pending text-white text-lg m-5 px-2 py-1 rounded z-10">
                          OFERTA
                        </span>
                      ) : (
                        ""
                      )}
                      <div className="absolute bottom-0  px-5 pb-6 z-10">
                        <a
                          href=""
                          className="block font-medium text-white sm:text-xl xl:text-2xl"
                        >
                          {prod.titulo}
                        </a>
                        <div className="flex items-center gap-2">
                          <Lucide icon="Palette" className="text-white/50" />
                          <span className="italic text-sm text-white/50">
                            {prod.color}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-slate-600 dark:text-slate-500 px-5 mt-5">
                      <div className="flex items-center">
                        {prod.oferta ? (
                          <p>
                            <div className="flex items-center mt-1 mb-3">
                              <span className=" xs:text-sm xl:text-base italic">
                                {prod.detalle1}
                              </span>
                            </div>
                            <span className="line-through mr-2 text-lg">
                              Precio: ${prod.precio}
                            </span>
                            <span className="text-red-500 font-bold text-xl">
                              ${prod.precioOferta}
                            </span>
                          </p>
                        ) : (
                          <p>
                            <div className="flex items-center mt-1 mb-3">
                              <span className=" text-lg italic">
                                {prod.detalle1}
                              </span>
                            </div>
                            <span className="font-bold text-lg">
                              Precio: ${prod.precio}
                            </span>
                          </p>
                        )}
                      </div>
                      <div className="flex items-center mt-2 text-lg">
                        <Lucide icon="Layers" className="w-4 h-4 mr-2" />
                        Disponibilidad: {prod.disponibilidad}
                      </div>
                      <div
                        className="flex items-center mt-2 text-lg cursor-pointer"
                        onClick={() => openModal(prod)}
                      >
                        Ver más
                        <Lucide icon="Plus" className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
      <section id="pantalones">
        <div className="flex justify-center">
          <img
            src={tituloPantalones}
            className="mb-3 xl:mb-10 mt-20 xl:mt-24"
          />
        </div>

        <div className="grid grid-cols-12 gap-6 mt-5">
          {/* BEGIN: Products Layout */}

          {/* PANTALONES */}
          {productos
            .filter((prod) => prod.categoria === "pantalones")
            .map((prod) => (
              <div
                key={prod.codigo}
                className="intro-y col-span-12 lg:col-span-4"
                onClick={() => openModal(prod)}
              >
                <div className="box">
                  <div className="p-5">
                    <div className="aspect-[4/6] rounded-md overflow-hidden relative group">
                      {/*Imagen Principal */}
                      <img
                        alt={prod.titulo}
                        className={`absolute inset-0 rounded-md object-contain w-full h-full transition-opacity duration-700 ${
                          showHover ? "opacity-0" : "opacity-100"
                        }`}
                        src={prod.imagenPrincipal}
                      />
                      {/* Imagen hover */}
                      <img
                        alt={prod.titulo}
                        className={`absolute inset-0 rounded-md object-contain w-full h-full transition-opacity duration-700 ${
                          showHover ? "opacity-100" : "opacity-0"
                        }`}
                        src={prod.imagenHover}
                      />
                      {/* Degradado overlay */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.7)_0%,transparent_50%)]"></div>

                      {prod.oferta ? (
                        <span className="absolute top-0 right-0 bg-pending text-white text-lg m-5 px-2 py-1 rounded z-10">
                          OFERTA
                        </span>
                      ) : (
                        ""
                      )}
                      <div className="absolute top-10  px-5 pb-6 z-10">
                        <a
                          href=""
                          className="block font-medium text-white sm:text-xl xl:text-2xl"
                        >
                          {prod.titulo}
                        </a>
                        <div className="flex items-center gap-2">
                          <Lucide icon="Palette" className="text-white/50" />
                          <span className="italic text-sm text-white/50">
                            {prod.color}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-slate-600 dark:text-slate-500 px-5 mt-5">
                      <div className="flex items-center">
                        {prod.oferta ? (
                          <p>
                            <div className="flex items-center mt-1 mb-3">
                              <span className=" xs:text-sm xl:text-base italic">
                                {prod.detalle1}
                              </span>
                            </div>
                            <span className="line-through mr-2 text-lg">
                              Precio: ${prod.precio}
                            </span>
                            <span className="text-red-500 font-bold text-xl">
                              ${prod.precioOferta}
                            </span>
                          </p>
                        ) : (
                          <p>
                            <div className="flex items-center mt-1 mb-3">
                              <span className=" text-lg italic">
                                {prod.detalle1}
                              </span>
                            </div>
                            <span className="font-bold text-lg">
                              Precio: ${prod.precio}
                            </span>
                          </p>
                        )}
                      </div>
                      <div className="flex items-center mt-2 text-lg">
                        <Lucide icon="Layers" className="w-4 h-4 mr-2" />
                        Disponibilidad: {prod.disponibilidad}
                      </div>
                      <div
                        className="flex items-center mt-2 text-lg cursor-pointer"
                        onClick={() => openModal(prod)}
                      >
                        Ver más
                        <Lucide icon="Plus" className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
      <section id="tops">
        <div className="flex justify-center">
          <img src={tituloTops} className="mb-3 xl:mb-10 mt-20 xl:mt-24" />
        </div>

        <div className="grid grid-cols-12 gap-6 mt-5">
          {/* BEGIN: Products Layout */}

          {/* FALDAS & TOPS */}
          {productos
            .filter((prod) => prod.categoria === "tops")
            .map((prod) => (
              <div
                key={prod.codigo}
                className="intro-y col-span-12 lg:col-span-4"
                onClick={() => openModal(prod)}
              >
                <div className="box">
                  <div className="p-5">
                    <div className="aspect-[4/6] rounded-md overflow-hidden relative group">
                      {/*Imagen Principal */}
                      <img
                        alt={prod.titulo}
                        className={`absolute inset-0 rounded-md object-contain w-full h-full transition-opacity duration-700 ${
                          showHover ? "opacity-0" : "opacity-100"
                        }`}
                        src={prod.imagenPrincipal}
                      />
                      {/* Imagen hover */}
                      <img
                        alt={prod.titulo}
                        className={`absolute inset-0 rounded-md object-contain w-full h-full transition-opacity duration-700 ${
                          showHover ? "opacity-100" : "opacity-0"
                        }`}
                        src={prod.imagenHover}
                      />
                      {/* Degradado overlay */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.7)_0%,transparent_50%)]"></div>

                      {prod.oferta ? (
                        <span className="absolute top-0 bg-pending text-white text-lg m-5 px-2 py-1 rounded z-10">
                          OFERTA
                        </span>
                      ) : (
                        ""
                      )}
                      <div className="absolute bottom-0  px-5 pb-6 z-10">
                        <a
                          href=""
                          className="block font-medium text-white sm:text-xl xl:text-2xl"
                        >
                          {prod.titulo}
                        </a>
                        <div className="flex items-center gap-2">
                          <Lucide icon="Palette" className="text-white/50" />
                          <span className="italic text-sm text-white/50">
                            {prod.color}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-slate-600 dark:text-slate-500 px-5 mt-5">
                      <div className="flex items-center">
                        {prod.oferta ? (
                          <p>
                            <div className="flex items-center mt-1 mb-3">
                              <span className=" xs:text-sm xl:text-base italic">
                                {prod.detalle1}
                              </span>
                            </div>
                            <span className="line-through mr-2 text-lg">
                              Precio: ${prod.precio}
                            </span>
                            <span className="text-red-500 font-bold text-xl">
                              ${prod.precioOferta}
                            </span>
                          </p>
                        ) : (
                          <p>
                            <div className="flex items-center mt-1 mb-3">
                              <span className=" text-lg italic">
                                {prod.detalle1}
                              </span>
                            </div>
                            <span className="font-bold text-lg">
                              Precio: ${prod.precio}
                            </span>
                          </p>
                        )}
                      </div>
                      <div className="flex items-center mt-2 text-lg">
                        <Lucide icon="Layers" className="w-4 h-4 mr-2" />
                        Disponibilidad: {prod.disponibilidad}
                      </div>
                      <div
                        className="flex items-center mt-2 text-lg cursor-pointer"
                        onClick={() => openModal(prod)}
                      >
                        Ver más
                        <Lucide icon="Plus" className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
      <section id="bolsos">
        <div className="flex justify-center">
          <img src={tituloBolsos} className="mb-3 xl:mb-10 mt-20 xl:mt-24" />
        </div>

        <div className="grid grid-cols-12 gap-6 mt-5">
          {/* BEGIN: Products Layout */}

          {/* BOLSOS */}
          {productos
            .filter((prod) => prod.categoria === "bolsos")
            .map((prod) => (
              <div
                key={prod.codigo}
                className="intro-y col-span-12 "
                onClick={() => openModal(prod)}
              >
                <div className="box">
                  <div className="p-5">
                    <div className="aspect-[9/5] rounded-md overflow-hidden relative group">
                      {/*Imagen Principal */}
                      <img
                        alt={prod.titulo}
                        className={`absolute inset-0 rounded-md object-cover object-bottom w-full h-full transition-opacity duration-700 ${
                          showHover ? "opacity-0" : "opacity-100"
                        }`}
                        src={prod.imagenPrincipal}
                      />
                      {/* Imagen hover */}
                      <img
                        alt={prod.titulo}
                        className={`absolute inset-0 rounded-md object-cover object-bottom w-full h-full transition-opacity duration-700 ${
                          showHover ? "opacity-100" : "opacity-0"
                        }`}
                        src={prod.imagenHover}
                      />
                      {/* Degradado overlay */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.7)_0%,transparent_50%)]"></div>

                      {prod.oferta ? (
                        <span className="absolute top-0 bg-pending text-white text-lg m-5 px-2 py-1 rounded z-10">
                          OFERTA
                        </span>
                      ) : (
                        ""
                      )}
                      <div className="absolute bottom-0  px-5 pb-6 z-10">
                        <a
                          href=""
                          className="block font-medium text-white sm:text-xl xl:text-2xl"
                        >
                          {prod.titulo}
                        </a>
                        <div className="flex items-center gap-2">
                          <Lucide icon="Palette" className="text-white/50" />
                          <span className="italic text-sm text-white/50">
                            {prod.color}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-slate-600 dark:text-slate-500 px-5 mt-5">
                      <div className="flex items-center">
                        {prod.oferta ? (
                          <p>
                            <div className="flex items-center mt-1 mb-3">
                              <span className=" xs:text-sm xl:text-base italic">
                                {prod.detalle1}
                              </span>
                            </div>
                            <span className="line-through mr-2 text-lg">
                              Precio: ${prod.precio}
                            </span>
                            <span className="text-red-500 font-bold text-xl">
                              ${prod.precioOferta}
                            </span>
                          </p>
                        ) : (
                          <p>
                            <div className="flex items-center mt-1 mb-3">
                              <span className=" text-lg italic">
                                {prod.detalle1}
                              </span>
                            </div>
                            <span className="font-bold text-lg">
                              Precio: ${prod.precio}
                            </span>
                          </p>
                        )}
                      </div>
                      <div className="flex items-center mt-2 text-lg">
                        <Lucide icon="Layers" className="w-4 h-4 mr-2" />
                        Disponibilidad: {prod.disponibilidad}
                      </div>
                      <div
                        className="flex items-center mt-2 text-lg cursor-pointer"
                        onClick={() => openModal(prod)}
                      >
                        Ver más
                        <Lucide icon="Plus" className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
      {/* BEGIN: Products Modal */}
      {isModalOpen && selectedProduct && (
        <ProductsModal 
        product={selectedProduct} 
        show={isModalOpen}
        onClose={closeComponent} />
      )}
      {/* END: Products Modal */}
    </>
  );
}

export default Main;
