let state = {
  items: localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [],
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : [],
  users: localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [],
  NavLinkAdministration: [
    {
      to: "/administration/admintable",
      classNames: "nav-link mx-2",
      description: "AdminTable"
    },
    {
      to: "/administration/adminitems",
      classNames: "nav-link mx-2",
      description: "Все товары"
    },
    {
      to: "/administration/adminitems",
      classNames: "nav-link mx-2",
      description: "Что то там еще"
    }
  ],
  NavLinkNavbar: [
    {
      to: "/newsAndPromotions",
      classNames: "nav-link",
      description: "Новости и предложения"
    },
    {
      to: "/order",
      classNames: "nav-link",
      description: "Заказ"
    },
    {
      to: "/warranty",
      classNames: "nav-link",
      description: "Гарантия"
    },
    {
      to: "/newsAndPromotions",
      classNames: "nav-link text-danger",
      description: "Новинки и акции!"
    }
  ],
  NavLinkPersonalArea: [
    {
      to: "/order",
      classNames: "dropdown-item",
      description: "Заказы"
    },
    {
      to: "#",
      classNames: "dropdown-item",
      description: "Скидки"
    },
    {
      to: "/order",
      classNames: "dropdown-item",
      description: "Корзина"
    },
    {
      to: "#",
      classNames: "dropdown-item",
      description: "Избранное"
    }
  ],
  NavLinkCatalog: [
    {
      to: "/items",
      classNames: "dropdown-item",
      description: "Все товары"
    },
    {
      to: "#",
      classNames: "dropdown-item",
      description: "Атомайзеры"
    },
    {
      to: "#",
      classNames: "dropdown-item",
      description: "Электронные парогенераторы"
    },
    {
      to: "#",
      classNames: "dropdown-item",
      description: "Жидкости"
    },
    {
      to: "#",
      classNames: "dropdown-item",
      description: "Запчасти и комплектующие"
    }
  ],
  NavLinkAside: [
    {
      to: "/newsAndPromotions",
      classNames: "nav-link",
      description: "Новости и предложения",
      liClass: "col"
    },
    {
      to: "/order",
      classNames: "nav-link",
      description: "Заказ",
      liClass: "col"
    },
    {
      to: "/warranty",
      classNames: "nav-link",
      description: "Гарантия",
      liClass: "col"
    },
    {
      to: "/newsAndPromotions",
      classNames: "nav-link text-danger",
      description: "Новинки и акции!",
      liClass: "col"
    }
  ],
  NavLinkFooter: [
    {
      to: "/news",
      classNames: "nav-link",
      description: "Новости"
    },
    {
      to: "/order",
      classNames: "nav-link",
      description: "Заказ"
    },
    {
      to: "/warranty",
      classNames: "nav-link",
      description: "Гарантия"
    },
    {
      to: "/about",
      classNames: "nav-link",
      description: "Контакты"
    },
    {
      to: "#",
      classNames: "nav-link",
      description: "Атомайзеры"
    },
    {
      to: "#",
      classNames: "nav-link",
      description: "Вейпы"
    },
    {
      to: "#",
      classNames: "nav-link",
      description: "Жидкости"
    },
    {
      to: "#",
      classNames: "nav-link",
      description: "Запчасти"
    }
  ]
};

export default state;
