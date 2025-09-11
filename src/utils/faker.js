// PRODUCTOS

import product1H from "../assets/images/preview-1.jpg";
//import product1V from "../assets/images/preview-1-vert.jpg";
import product2H from "../assets/images/preview-5.jpg";
//import product2V from "../assets/images/preview-5-vert.jpg";
import product3H from "../assets/images/preview-6.jpg";
//import product3V from "../assets/images/preview-6-vert.jpg";
import product4H from "../assets/images/preview-7.jpg";
//import product4V from "../assets/images/preview-7-vert.jpg";

// ✅ Listado de productos. Cada prenda con todos los datos requeridos
export const products = [
  {
    codigo: "ART001",
    titulo: "Vestido Noche Estrella",
    imagenHorizontal: product1H,
    //imagenVertical: product1V,
    precio: 12000,
    oferta: true,
    precioOferta: 8900,
    talle: "S, M, L",
    detalle:
      "Vestido elegante confeccionado en tela satinada con brillos. Ideal para eventos nocturnos.",
    disponibilidad: "Entrega inmediata",
    coleccion: "Glamour Nocturno",
  },
  {
    codigo: "ART002",
    titulo: "Corset Dark Angel",
    imagenHorizontal: product2H,
    //imagenVertical: product2V,
    precio: 7500,
    oferta: false,
    precioOferta: null,
    talle: "M, L",
    detalle:
      "Corset con detalles en encaje y broches metálicos. Inspirado en la estética gótica.",
    disponibilidad: "Demora de producción",
    coleccion: "Dark Romance",
  },
  {
    codigo: "ART003",
    titulo: "Camisa de Seda Roja",
    imagenHorizontal: product3H,
    //imagenVertical: product3V,
    precio: 9800,
    oferta: true,
    precioOferta: 7200,
    talle: "S, M",
    detalle:
      "Camisa de seda color rojo intenso, corte entallado. Perfecta para ocasiones especiales.",
    disponibilidad: "Entrega inmediata",
    coleccion: "Clásicos Eternos",
  },
  {
    codigo: "ART004",
    titulo: "Falda Midi Negra",
    imagenHorizontal: product4H,
    //imagenVertical: product4V,
    precio: 6400,
    oferta: false,
    precioOferta: null,
    talle: "M, L, XL",
    detalle:
      "Falda midi en tela de lino con caída suave. Versátil para looks de día o noche.",
    disponibilidad: "Demora de producción",
    coleccion: "Urban Chic",
  },
];

// ✅ Exportar una función que devuelva el listado
export const faker = () => {
  return products;
};
