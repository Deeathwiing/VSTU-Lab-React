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

export function addItems(picture, title, description, price, tags, rating) {
  class Item {
    constructor(id, picture, title, description, price, tags, rating) {
      this.id = id;
      this.picture = picture;
      this.title = title;
      this.description = description;
      this.price = price;
      this.tags = tags;
      this.rating = rating;
    }
  }

  let items = state.items;
  let lastElement = items[items.length - 1];
  const id = lastElement ? lastElement.id + 1 : 0;

  const newItem = new Item(
    id,
    picture,
    title,
    description,
    price,
    tags,
    rating
  );

  items.push(newItem);
  localStorage.setItem("items", JSON.stringify(items));
  state.items = items;
  reRender(state);
}

export function deleteItems(id) {
  let items = state.items;
  function check(item) {
    if (item.id !== id) {
      return true;
    } else return false;
  }
  items = items.filter(function(item) {
    return check(item);
  });

  localStorage.setItem("items", JSON.stringify(items));
  state.items = items;
  reRender(state);
}

export function addUser(email, firstName, lastName, password) {
  class User {
    constructor(id, email, firstName, lastName, password) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.password = password;
      this.deleteAccountRequest = false;
      this.administration = false;
    }
  }

  let users = state.users;

  let lastElement = users[users.length - 1];
  const id = lastElement ? lastElement.id + 1 : 0;

  const isTaken = users.some(user => user.email === email);
  if (isTaken) {
    alert("Данный email занят");
    return;
  }

  if (!firstName || !lastName || !password) {
    alert("Заполните все поля");
    return;
  }

  const newUser = new User(id, email, firstName, lastName, password);

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  state.users = users;
  reRender(state);
}

export function deleteUser(idToDelete) {
  let users = state.users.filter(user => {
    if ((user.id === idToDelete) & user.deleteAccountRequest) {
      return false;
    } else return user;
  });
  localStorage.setItem("users", JSON.stringify(users));
  state.users = users;
  reRender(state);
}

export function logIn(logEmail, logPass) {
  let checkLogin = false;
  let admin = false;
  let usersBD = state.users;

  checkLogin = usersBD.some(
    user => logEmail === user.email && logPass === user.password
  );
  admin = usersBD.some(
    user =>
      logEmail === user.email &&
      logPass === user.password &&
      user.administration
  );
  if (!checkLogin & !admin) {
    alert("Введите правильный email и пароль");
  }
  if (checkLogin) {
    if (admin) {
      state.user = [{ logEmail, admin }];
      localStorage.setItem("user", JSON.stringify({ logEmail, admin }));
    } else {
      state.user = [{ logEmail, checkLogin }];
      localStorage.setItem("user", JSON.stringify({ logEmail, checkLogin }));
    }
  }

  reRender(state);
}

export const subscribe = observer => {
  reRender = observer;
};

let reRender = () => {};
export default state;
