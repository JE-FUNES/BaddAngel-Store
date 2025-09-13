// PRODUCTOS

import ART007R from "../assets/images/badangel/productos/buzos/art007r-spike-hoody-rojo.jpg";
import ART007RE from "../assets/images/badangel/productos/buzos/art007r-spike-hoody-rojo-espalda.jpg";

import ART007B from "../assets/images/badangel/productos/buzos/art007B-spike-hoody-blanco.jpg";
import ART007BE from "../assets/images/badangel/productos/buzos/art007B-spike-hoody-blanco-espalda.jpg";

import ART007BN from "../assets/images/badangel/productos/buzos/art007nB-spike-hoody-negroyblanco.jpg";
import ART007BNE from "../assets/images/badangel/productos/buzos/art007nB-spike-hoody-negroyblanco-espalda.jpg";

import ART007NR from "../assets/images/badangel/productos/buzos/art007nr-spike-hoody-negroyrojo.jpg";
import ART007NRE from "../assets/images/badangel/productos/buzos/art007nr-spike-hoody-negroyrojo-espalda.jpg";


import ART004 from "../assets/images/badangel/productos/pantalones/ART004-INFERNO-JOGGER.jpg";
import ART004E from "../assets/images/badangel/productos/pantalones/ART004-INFERNO-JOGGER2.jpg";

import ART003 from "../assets/images/badangel/productos/pantalones/ART003-BAGGY-TRIBAL-FLAME.jpg";
import ART003E from "../assets/images/badangel/productos/pantalones/ART003-BAGGY-TRIBAL-FLAME2.jpg";

import ART002 from "../assets/images/badangel/productos/pantalones/ART002-LEATHER-SPIKE.jpg";
import ART002E from "../assets/images/badangel/productos/pantalones/ART002-LEATHER-SPIKE2.jpg";



// Listado de productos. Cada prenda con todos los datos requeridos
// Alternar el orden de las imagenes principal y hover para que la animacion se muestre en frentes diferentes
export const products = [
  {
    codigo: "ART007R",
    categoria: "buzos",
    titulo: "SPIKE HOODY",
    imagenPrincipal: ART007R,
    imagenHover: ART007RE,
    precio: 6400,
    oferta: false,
    precioOferta: null,
    talle: "Único ( S al L )",
    detalle:
      "Buzo oversize con capucha cápsula, bolsillo canguro y mangas XL. Presenta bordados con púas en codos y hombros, más doble estampa en delantero y trasero.",
    disponibilidad: "Stock Limitado",
    coleccion: "",
    material: "100% algodón",
    color: "rojo",
  },
  {
    codigo: "ART007NR",
    categoria: "buzos",
    titulo: "SPIKE HOODY",
    imagenPrincipal: ART007NRE,
    imagenHover: ART007NR,
    precio: 6400,
    oferta: false,
    precioOferta: null,
    talle: "Único ( S al L )",
    detalle:
      "Buzo oversize con capucha cápsula, bolsillo canguro y mangas XL. Presenta bordados con púas en codos y hombros, más doble estampa en delantero y trasero.",
    disponibilidad: "Stock Limitado",
    coleccion: "",
    material: "100% algodón",
    color: "negro y rojo",
  },
  {
    codigo: "ART007BN",
    categoria: "buzos",
    titulo: "SPIKE HOODY",
    imagenPrincipal: ART007BN,
    imagenHover: ART007BNE,
    precio: 6400,
    oferta: false,
    precioOferta: null,
    talle: "Único ( S al L )",
    detalle:
      "Buzo oversize con capucha cápsula, bolsillo canguro y mangas XL. Presenta bordados con púas en codos y hombros, más doble estampa en delantero y trasero.",
    disponibilidad: "Stock Limitado",
    coleccion: "",
    material: "100% algodón",
    color: "negro y blanco",
  },
  
  {
    codigo: "ART007B",
    categoria: "buzos",
    titulo: "SPIKE HOODY",
    imagenPrincipal: ART007BE,
    imagenHover: ART007B,
    precio: 6400,
    oferta: false,
    precioOferta: null,
    talle: "Único ( S al L )",
    detalle:
      "Buzo oversize con capucha cápsula, bolsillo canguro y mangas XL. Presenta bordados con púas en codos y hombros, más doble estampa en delantero y trasero.",
    disponibilidad: "Stock Limitado",
    coleccion: "",
    material: "100% algodón",
    color: "blanco",
  },
  {
    codigo: "ART004",
    categoria: "pantalones",
    titulo: "INFERNO JOGGER",
    imagenPrincipal: ART004,
    imagenHover: ART004E,
    precio: 6400,
    oferta: false,
    precioOferta: 5000,
    talle: "40",
    detalle:
      "Jogger de frisa de algodón peinado, con detalles en bies al corte y estampas laterales. Diseño cómodo y sin bolsillos.",
    disponibilidad: "Stock Limitado",
    coleccion: "",
    material: "100% algodón",
    color: "rojo con estampas",
  },
  {
    codigo: "ART003",
    categoria: "pantalones",
    titulo: "BAGGY TRIBAL FLAME",
    imagenPrincipal: ART003E,
    imagenHover: ART003,
    precio: 9800,
    oferta: true,
    precioOferta: 7200,
    talle: "42",
    detalle:
      "Pantalón baggy de gabardina con bolsillos delanteros y traseros. Presenta roturas en rodillas y tribales rojos en laterales y bolsillos.",
    disponibilidad: "Stock Limitado",
    coleccion: "",
    material: "Gabardina",
    color: "negro con tribales rojos",
  },
 {
    codigo: "ART002",
    categoria: "pantalones",
    titulo: "LEATHER SPIKE",
    imagenPrincipal: ART002,
    imagenHover: ART002E,
    precio: 7500,
    oferta: false,
    precioOferta: null,
    talle: "40",
    detalle:
      "Bermuda baggy de cuerina elastizada con bolsillos delanteros. Incluye serigrafía hecha a mano con doble estampa en delantero y trasero.",
    disponibilidad: "Stock Limitado",
    coleccion: "",
    material: "Cuerina elastizada",
    color: "negro con tribales blancos",
  },
    
  {
    codigo: "ART005",
    categoria: "tops",
    titulo: "TOP DEAD TRIBAL",
    imagenPrincipal: ART007NR,
    //imagenHover: product4V,
    precio: 6400,
    oferta: false,
    precioOferta: null,
    talle: "S",
    detalle:
      "Top cruzado con estampas en delantero y trasero.",
    disponibilidad: "Stock Limitado",
    coleccion: "",
    material: "Jersey de algodón 100%",
    color: "negro con estampa tribal",
  },
    {
    codigo: "ART006",
    categoria: "tops",
    titulo: "TOP DEAD TOUCH",
    imagenPrincipal: ART007NR,
    //imagenHover: product4V,
    precio: 6400,
    oferta: false,
    precioOferta: null,
    talle: "S",
    detalle:
      "Top cruzado con estampas en delantero y trasero.",
    disponibilidad: "Stock Limitado",
    coleccion: "",
    material: "Jersey de algodón 100%",
    color: "negro con estampa exclusiva",
  },
  {
    codigo: "ART001",
    categoria: "faldas",
    titulo: "CRUCIFIX MINI SKIRT",
    imagenPrincipal: ART007R,
    //imagenHover: product1V,
    precio: 12000,
    oferta: true,
    precioOferta: 8900,
    talle: "40",
    detalle:
      "Mini falda tableada con estampas exclusivas en cada tabla. Diseño elastizado con ojales metálicos regulables en los laterales y bolsillos funcionales.",
    disponibilidad: "Stock Limitado",
    coleccion: "",
    material: "100% poliéster elastizado",
    color: "blanco con estampas,"
  },
  
   {
    codigo: "ART008",
    categoria: "bolsos",
    titulo: "SPIKY MINI BAG",
    imagenPrincipal: ART007NR,
    //imagenHover: product4V,
    precio: 6400,
    oferta: false,
    precioOferta: null,
    talle: "Mini",
    detalle:
      "Mini bolso de gabardina forrado, con botón de cierre, asa regulable con hebilla y ojales. Incluye serigrafía hecha a mano y detalles de desgaste.",
    disponibilidad: "Stock Limitado",
    coleccion: "",
    material: "100% poliéster elastizado",
    color: "blanco con estampas",
  },
];


// ✅ Exportar una función que devuelva el listado
export const faker = () => {
  return products;
};
