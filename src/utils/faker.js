// PRODUCTOS

import ART007R from "../assets/images/badangel/productos/buzos/ART007R-SPIKE-HOODY-ROJO.webp";
import ART007RE from "../assets/images/badangel/productos/buzos/ART007R-SPIKE-HOODY-ROJO-espalda.webp";

import ART007B from "../assets/images/badangel/productos/buzos/ART007B-SPIKE-HOODY-blanco.webp";
import ART007BE from "../assets/images/badangel/productos/buzos/ART007B-SPIKE-HOODY-blanco-espalda.webp";

import ART007BN from "../assets/images/badangel/productos/buzos/ART007NB-SPIKE-HOODY-NEGROYBLANCO.webp";
import ART007BNE from "../assets/images/badangel/productos/buzos/ART007NB-SPIKE-HOODY-NEGROYBLANCO-espalda.webp";

import ART007NR from "../assets/images/badangel/productos/buzos/ART007NR-SPIKE-HOODY-NEGROYROJO.webp";
import ART007NRE from "../assets/images/badangel/productos/buzos/ART007NR-SPIKE-HOODY-NEGROYROJO-espalda.webp";


import ART004 from "../assets/images/badangel/productos/pantalones/ART004-INFERNO-JOGGER.webp";
import ART004E from "../assets/images/badangel/productos/pantalones/ART004-INFERNO-JOGGER2.webp";

import ART003 from "../assets/images/badangel/productos/pantalones/ART003-BAGGY-TRIBAL-FLAME.webp";
import ART003E from "../assets/images/badangel/productos/pantalones/ART003-BAGGY-TRIBAL-FLAME2.webp";

import ART002 from "../assets/images/badangel/productos/pantalones/ART002-LEATHER-SPIKE.webp";
import ART002E from "../assets/images/badangel/productos/pantalones/ART002-LEATHER-SPIKE2.webp";

import ART008 from "../assets/images/badangel/productos/bolsos/bolso-1.webp";
import ART008E from "../assets/images/badangel/productos/bolsos/bolso-2.webp";

import ART001 from "../assets/images/badangel/productos/faldas/1.webp";
import ART001E from "../assets/images/badangel/productos/faldas/2.webp";

import ART005 from "../assets/images/badangel/productos/tops/1-1.webp";
import ART005E from "../assets/images/badangel/productos/tops/1-2.webp";
import ART005S1 from "../assets/images/badangel/productos/tops/1-espaldaV.webp";
import ART005S2 from "../assets/images/badangel/productos/tops/1-frenteV.webp";

import ART006 from "../assets/images/badangel/productos/tops/2-1.webp";
import ART006E from "../assets/images/badangel/productos/tops/2-2.webp";
import ART006S1 from "../assets/images/badangel/productos/tops/2-espaldaV.webp";

// Listado de productos. Cada prenda con todos los datos requeridos
// Alternar el orden de las imagenes principal y hover para que la animacion se muestre en frentes diferentes
export const products = [
  {
    codigo: "ART007R",
    categoria: "buzos",
    titulo: "SPIKE HOODY",
    imagenPrincipal: ART007R,
    imagenHover: ART007RE,
    image3Detail: "",
    image4Detail: "",
    precio: 85000,
    oferta: true,
    precioOferta: 65000,
    talle: "Único ( S al L )",
    detalle:
      "Buzo oversize con capucha cápsula, bolsillo canguro y mangas XL. Presenta bordados con púas en codos y hombros, más doble estampa en delantero y trasero.",
    detalle1: "Buzo oversize",
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
    image3Detail: "",
    image4Detail: "",
    precio: 85000,
    oferta: true,
    precioOferta: 65000,
    talle: "Único ( S al L )",
    detalle:
      "Buzo oversize con capucha cápsula, bolsillo canguro y mangas XL. Presenta bordados con púas en codos y hombros, más doble estampa en delantero y trasero.",
    detalle1: "Buzo oversize",
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
    image3Detail: "",
    image4Detail: "",
    precio: 85000,
    oferta: true,
    precioOferta: 65000,
    talle: "Único ( S al L )",
    detalle:
      "Buzo oversize con capucha cápsula, bolsillo canguro y mangas XL. Presenta bordados con púas en codos y hombros, más doble estampa en delantero y trasero.",
    detalle1: "Buzo oversize",
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
    image3Detail: "",
    image4Detail: "",
    precio: 85000,
    oferta: true,
    precioOferta: 65000,
    talle: "Único ( S al L )",
    detalle:
      "Buzo oversize con capucha cápsula, bolsillo canguro y mangas XL. Presenta bordados con púas en codos y hombros, más doble estampa en delantero y trasero.",
    detalle1: "Buzo oversize",
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
    image3Detail: "",
    image4Detail: "",
    precio: 40000,
    oferta: false,
    precioOferta: 5000,
    talle: "40",
    detalle:
      "Jogger de frisa de algodón peinado, con detalles en bies al corte y estampas laterales. Diseño cómodo y sin bolsillos.",
    detalle1: "Jogger",
      disponibilidad: "Stock Limitado",
    coleccion: "",
    material: "100% algodón",
    color: "rojo con detalles negros",
  },
  {
    codigo: "ART003",
    categoria: "pantalones",
    titulo: "BAGGY TRIBAL FLAME",
    imagenPrincipal: ART003E,
    imagenHover: ART003,
    image3Detail: "",
    image4Detail: "",
    precio: 40000,
    oferta: false,
    precioOferta: 7200,
    talle: "42",
    detalle:
      "Pantalón baggy de gabardina con bolsillos delanteros y traseros. Presenta roturas en rodillas y tribales rojos en laterales y bolsillos.",
    detalle1: "Pantalón baggy",
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
    image3Detail: "",
    image4Detail: "",
    precio: 40000,
    oferta: false,
    precioOferta: null,
    talle: "40",
    detalle:
      "Bermuda baggy de cuerina elastizada con bolsillos delanteros. Incluye serigrafía hecha a mano con doble estampa en delantero y trasero.",
    detalle1: "Bermuda baggy",
      disponibilidad: "Stock Limitado",
    coleccion: "",
    material: "Cuerina elastizada",
    color: "negro con tribales blancos",
  },
    
  {
    codigo: "ART005",
    categoria: "tops",
    titulo: "TOP DEAD TRIBAL",
    imagenPrincipal: ART005,
    imagenHover: ART005E,
    image3Detail: ART005S1,
    image4Detail:  ART005S2,
    precio: 14000,
    oferta: true,
    precioOferta: 7000,
    talle: "S",
    detalle:
      "Top cruzado con estampas en delantero y trasero.",
    detalle1: "Top cruzado",
      disponibilidad: "Stock Limitado",
    coleccion: "",
    material: "Jersey de algodón 100%",
    color: "negro con estampa tribal",
  },
  {
    codigo: "ART001",
    categoria: "tops",
    titulo: "CRUCIFIX MINI SKIRT",
    imagenPrincipal: ART001,
    imagenHover: ART001E,
    image3Detail: "",
    image4Detail: "",
    precio: 20000,
    oferta: false,
    precioOferta: 8900,
    talle: "40",
    detalle:
      "Mini falda tableada con estampas exclusivas en cada tabla. Diseño elastizado con ojales metálicos regulables en los laterales y bolsillos funcionales.",
    detalle1: "Mini falda tableada",
      disponibilidad: "Stock Limitado",
    coleccion: "",
    material: "100% poliéster elastizado",
    color: "blanco con estampas,"
  },
    {
    codigo: "ART006",
    categoria: "tops",
    titulo: "TOP DEAD TOUCH",
    imagenPrincipal: ART006E,
    imagenHover: ART006,
    image3Detail: ART006S1,
    image4Detail: "",
    precio: 14000,
    oferta: true,
    precioOferta: 7000,
    talle: "S",
    detalle:
      "Top cruzado con estampas en delantero y trasero.",
    detalle1: "Top cruzado",
      disponibilidad: "Stock Limitado",
    coleccion: "",
    material: "Jersey de algodón 100%",
    color: "negro con estampa exclusiva",
  },
  
  
   {
    codigo: "ART008",
    categoria: "bolsos",
    titulo: "SPIKY MINI BAG",
    imagenPrincipal: ART008,
    imagenHover: ART008E,
    image3Detail: "",
    image4Detail: "",
    precio: 6400,
    oferta: false,
    precioOferta: null,
    talle: "Mini",
    detalle:
      "Mini bolso de gabardina forrado, con botón de cierre, asa regulable con hebilla y ojales. Incluye serigrafía hecha a mano y detalles de desgaste.",
    detalle1: "Mini bolso",
      disponibilidad: "Stock Limitado",
    coleccion: "",
    material: "100% poliéster elastizado",
    color: "negro con tribales rojos y blancos",
  },
];


// ✅ Exportar una función que devuelva el listado
export const faker = () => {
  return products;
};
