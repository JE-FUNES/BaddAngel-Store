import { atom } from "recoil";

const sideMenu = atom({
  key: "sideMenu",
  default: {
    menu: [
      {
        icon: "Home",
        title: "Inicio",
        pathname: "/",
      },

      {
        icon: "ShoppingBag",
        title: "Productos",
        subMenu: [
          {
            icon: "Palette",
            title: "Buzos",
            pathname: "/categories",
          },
          {
            icon: "Palette",
            title: "Pantalones",
            pathname: "/add-product",
          },
          {
            icon: "Palette",
            title: "Faldas y Tops",
            pathname: "/categories",
          },
          {
            icon: "Palette",
            title: "Bolsos",
            pathname: "/add-product",
          },
        ],
      },
      "devider",
      {
        icon: "MessageCircle",
        title: "Whatsapp",
        pathname: "/chat",
      },
      {
        icon: "Instagram",
        title: "Instagram",
        pathname: "/chat",
      },
      "devider",
      {
        icon: "CreditCard",
        title: "Formas de Pago",
        pathname: "/point-of-sale",
      },

      {
        icon: "Layers",
        title: "FAQ",
        pathname: "/faq-layout-1",
      },
      {
        icon: "Sun",
        title: "About",
        pathname: "/faq-layout-1",
      },
    ],
  },
});

export { sideMenu };
