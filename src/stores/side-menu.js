import { atom } from "recoil";


const sideMenu = atom({
  key: "sideMenu",
  default: {
    menu: [
      {
        icon: "Home",
        title: "Inicio",
        pathname: "/",
        external: false,
      },

      {
        icon: "Layers",
        title: "Productos",
        subMenu: [
          {
            icon: "Shirt",
            title: "Buzos",
            pathname: "/#buzos",
            external: false,
          },
          {
            icon: "StretchVertical",
            title: "Pantalones",
            pathname: "/#pantalones",
            external: false,
          },
          {
            icon: "Triangle",
            title: "Faldas y Tops",
            pathname: "/#tops",
            external: false,
          },
          {
            icon: "ShoppingBag",
            title: "Bolsos",
            pathname: "/#bolsos",
            external: false,
          },
        ],
      },
      "devider",
      {
        icon: "MessageCircle",
        title: "Whatsapp",
        pathname: "https://wa.me/5493512920713",
        external: true,
      },

      {
        icon: "Instagram",
        title: "Instagram",
        pathname: "https://www.instagram.com/baddangel.store",
        external: true,
      },
      "devider",
      {
        icon: "CreditCard",
        title: "Formas de Pago",
        pathname: "/point-of-sale",
        external: false,
      },

      {
        icon: "HelpCircle",
        title: "FAQ",
        pathname: "/faq-layout-1",
        external: false,
      },
      {
        icon: "User",
        title: "About",
        pathname: "/faq-layout-1",
        external: false,
      },
    ],
  },
});

export { sideMenu };
