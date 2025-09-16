import { Modal, ModalBody } from "@/base-components";
import { Lucide } from "@/base-components";
import { useState, useEffect } from "react";

function ProductsModal({ product, show, onClose }) {
  if (!product) return null;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reiniciar al abrir un nuevo producto
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [product]);

  const images = [
    product.imagenPrincipal,
    product.imagenHover,
    product.image3Detail,
    product.image4Detail,
  ].filter(Boolean);

  return (
    <Modal show={show} onHidden={onClose} size="xl:w-[1000px] w-full max-w-[95%]">
      <ModalBody className="p-6">
        {/* Botón de cierre */}
        <button
          className="absolute top-3 right-3 text-slate-500 hover:text-black"
          onClick={() => {
            const modalInstance = window.tailwind.Modal.getOrCreateInstance(
              document.querySelector(".modal")
            );
            modalInstance.hide();
          }}
        >
          <Lucide icon="X" className="w-6 h-6" />
        </button>

        {/* Título centrado */}
        <h2 className="text-2xl xl:text-3xl font-bold text-center mb-6">
          {product.titulo}
        </h2>

        {/* Contenido en dos columnas */}
        <div className="flex flex-col xl:flex-row gap-6">
          {/* Slider de imágenes */}
          <div className="flex-1 relative">
            <img
              src={images[currentImageIndex]}
              alt={product.titulo}
              className="rounded-lg w-full object-contain"
            />

            {images.length > 1 && (
              <>
                {/* Flecha izquierda */}
                <button
                  onClick={() =>
                    setCurrentImageIndex(
                      (prev) => (prev - 1 + images.length) % images.length
                    )
                  }
                  className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
                >
                  &#10094;
                </button>

                {/* Flecha derecha */}
                <button
                  onClick={() =>
                    setCurrentImageIndex((prev) => (prev + 1) % images.length)
                  }
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
                >
                  &#10095;
                </button>
              </>
            )}
          </div>

          {/* Info del producto */}
          <div className="flex-1 text-slate-700 dark:text-slate-300">
            <div className="flex items-center gap-2 mb-3">
              <Lucide icon="Palette" className="w-5 h-5 text-slate-500" />
              <span>{product.color}</span>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <Lucide icon="Tag" className="w-5 h-5 text-slate-500" />
              <span>{product.material}</span>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <Lucide icon="Ruler" className="w-5 h-5 text-slate-500" />
              <span>{product.talle}</span>
            </div>
            <div className="flex items-center gap-2 mb-5">
              <Lucide icon="Layers" className="w-5 h-5 text-slate-500" />
              <span>Disponibilidad: {product.disponibilidad}</span>
            </div>
            <p className="italic mb-3">{product.detalle}</p>

            {product.oferta ? (
              <div className="mb-3">
                <span className="line-through mr-2 text-lg">
                  ${product.precio}
                </span>
                <span className="text-red-500 font-bold text-xl">
                  ${product.precioOferta}
                </span>
              </div>
            ) : (
              <div className="mb-3 font-bold text-xl">
                Precio: ${product.precio}
              </div>
            )}
          </div>
        </div>

        {/* Botón de acción centrado */}
        <div className="flex justify-center mt-8">
          <a
            href={`https://wa.me/5493512920713?text=${encodeURIComponent(
              `Hola, quiero consultar por el producto "${product.titulo}" en color "${product.color}"`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition text-lg"
          >
            Consultá por este modelo
          </a>
        </div>
      </ModalBody>
    </Modal>
  );
}

export default ProductsModal;
