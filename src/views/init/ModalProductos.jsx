import { Modal, ModalBody } from "@/base-components";
import { Lucide } from "@/base-components";

function ProductsModal({ product, onClose }) {
  if (!product) return null;

  return (
    <Modal 
    show={!!product} 
     onHidden={onClose}              // <-- ahora se ejecuta al cerrarse
      staticBackdrop={false}         // <-- asegura que no bloquee scroll
      key={product.codigo}  
      >
      <ModalBody className="p-6">
        {/* Botón de cierre */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-slate-500 hover:text-black"
        >
          <Lucide icon="X" className="w-6 h-6" />
        </button>

        {/* Contenido del modal */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Imagen */}
          <div className="flex-1">
            <img
              src={product.imagenPrincipal}
              alt={product.titulo}
              className="rounded-lg w-full object-contain"
            />
          </div>

          {/* Info del producto */}
          <div className="flex-1 text-slate-700 dark:text-slate-300">
            <h2 className="text-2xl font-bold mb-3">{product.titulo}</h2>
            <p className="italic mb-3">{product.detalle}</p>

            <div className="flex items-center gap-2 mb-3">
              <Lucide icon="Palette" className="w-5 h-5 text-slate-500" />
              <span>{product.color}</span>
            </div>

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

            <div className="flex items-center gap-2 mb-5">
              <Lucide icon="Layers" className="w-5 h-5" />
              <span>Disponibilidad: {product.disponibilidad}</span>
            </div>

            {/* Botón de acción */}
            <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-slate-800 transition">
              Añadir al carrito
            </button>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
}

export default ProductsModal;
