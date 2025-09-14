import {
  Lucide,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
  Modal,
  ModalBody,
} from "@/base-components";
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

function Main() {
  const productos = getProducts();

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 820);

  const [showHover, setShowHover] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowHover((prev) => !prev);
    }, 3000); // cambia cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);

  return (
    <>
      <div className="flex w-full justify-center xs:mb-6 xl:mb-10 mt-2">
        {isLargeScreen ? (
          <img src={banner} className="w-full border-black border-1" />
        ) : (
          <img
            src={banner2}
            className="w-full rounded-2xl border-black border-1 mt-2"
          />
        )}
      </div>
      <h2 className="text-black dark:text-white font-semibold justify-center items-center text-center sm:text-2xl xl:text-3xl my-10">
        DONDE LO DIVINO Y LO PERVERSO CONVERGEN
      </h2>
      <div className="flex justify-center">
        <img src={tituloBuzos} className="mb-10 mt-20" />
      </div>

      <div className="grid grid-cols-6 gap-6 mt-5">
        {/* BEGIN: Products Layout */}

        {/* BUZOS */}
        {productos
          .filter((prod) => prod.categoria === "buzos")
          .map((prod) => (
            <div
              key={prod.codigo}
              className="intro-y col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3"
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
                              {prod.detalle}
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
                              {prod.detalle}
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
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="flex justify-center">
        <img src={tituloPantalones} className="mb-10 mt-20" />
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
                              {prod.detalle}
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
                              {prod.detalle}
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
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="flex justify-center">
        <img src={tituloTops} className="mb-10 mt-20" />
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
                              {prod.detalle}
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
                              {prod.detalle}
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
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="flex justify-center">
        <img src={tituloBolsos} className="mb-10 mt-20" />
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
                              {prod.detalle}
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
                              {prod.detalle}
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
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="bg-fondoLogos flex w-full justify-center my-10 p-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="xs:w-full xl:w-90 h-full object-cover"
        >
          <source
            src="video-pasarela-mp4.mp4"
            type="video/mp4"
          />
          Tu navegador no soporta videos.
        </video>
      </div>
      <h3 className="text-black dark:text-white font-base justify-center items-center text-center text-xl mb-10">
        Alguna frase corta o detalle importante
      </h3>
      {/* BEGIN: Delete Confirmation Modal */}
      <Modal
        show={deleteConfirmationModal}
        onHidden={() => {
          setDeleteConfirmationModal(false);
        }}
      >
        <ModalBody className="p-0">
          <div className="p-5 text-center">
            <Lucide
              icon="XCircle"
              className="w-16 h-16 text-danger mx-auto mt-3"
            />
            <div className="text-3xl mt-5">Are you sure?</div>
            <div className="text-slate-500 mt-2">
              Do you really want to delete these records? <br />
              This process cannot be undone.
            </div>
          </div>
          <div className="px-5 pb-8 text-center">
            <button
              type="button"
              onClick={() => {
                setDeleteConfirmationModal(false);
              }}
              className="btn btn-outline-secondary w-24 mr-1"
            >
              Cancel
            </button>
            <button type="button" className="btn btn-danger w-24">
              Delete
            </button>
          </div>
        </ModalBody>
      </Modal>
      {/* END: Delete Confirmation Modal */}
    </>
  );
}

export default Main;
