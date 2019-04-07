let store = {
  _state: {
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
  },
  getState() {
    return this._state;
  },

  dispatch(action) {
    let state = this.getState();
    if (action.type === "ADD-ITEMS") {
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

      let lastElement = state.items[state.items.length - 1];
      const id = lastElement ? lastElement.id + 1 : 0;

      const newItem = new Item(
        id,
        action.picture,
        action.title,
        action.description,
        action.price,
        action.tags,
        action.rating
      );

      this._state.items.push(newItem);
      localStorage.setItem("items", JSON.stringify(this._state.items));
    } else if (action.type === "REGISTRATION") {
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

      const isTaken = users.some(user => user.email === action.email);
      if (isTaken) {
        alert("Данный email занят");
        return;
      }

      if (!action.firstName || !action.lastName || !action.password) {
        alert("Заполните все поля");
        return;
      }

      const newUser = new User(
        id,
        action.email,
        action.firstName,
        action.lastName,
        action.password
      );

      this._state.users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
    } else if (action.type === "LOGIN") {
      let checkLogin = false;
      let admin = false;
      let logEmail = action.logEmail;
      let usersBD = state.users;

      checkLogin = usersBD.some(
        user => logEmail === user.email && action.logPass === user.password
      );
      admin = usersBD.some(
        user =>
          logEmail === user.email &&
          action.logPass === user.password &&
          user.administration
      );
      if (!checkLogin & !admin) {
        alert("Введите правильный email и пароль");
      }
      if (checkLogin) {
        if (admin) {
          this._state.user = [{ logEmail, admin }];
          localStorage.setItem("user", JSON.stringify({ logEmail, admin }));
        } else {
          this._state.user = [{ logEmail, checkLogin }];
          localStorage.setItem(
            "user",
            JSON.stringify({ logEmail, checkLogin })
          );
        }
      }
    } else if (action.type === "DELETE-ITEMS") {
      state.items = state.items.filter(function(item) {
        return check(item);
      });

      function check(item) {
        if (item.id !== action.idToDelete) {
          return true;
        } else return false;
      }

      localStorage.setItem("items", JSON.stringify(state.items));
      this._state.items = state.items;

      return this.getState();
    } else if (action.type === "DELETE-USERS") {
      let users = state.users.filter(user => {
        if ((user.id === action.idToDelete) & user.deleteAccountRequest) {
          return false;
        } else return user;
      });
      this._state.users = users;
      localStorage.setItem("users", JSON.stringify(users));
      return { users: this._state.users };
    } else if (action.type === "ADD-RATING") {
      let user = state.user;
      const personalRating = {
        user: user.logEmail,
        ratingValue: action.ratingValue
      };

      state.items = state.items.map(item => {
        if (item.id === action.itemId) {
          let singleRating = item.rating;
          let checkRating = false;
          if (singleRating[0]) {
            singleRating.forEach(function(element, i, singleRating) {
              if (element.user === user.logEmail) {
                singleRating[i] = personalRating;
                checkRating = true;
              }
            });
            if (!checkRating) {
              singleRating.push(personalRating);
            }
          } else singleRating.push(personalRating);
          item.rating = singleRating;
        }
        return item;
      });
      localStorage.setItem("items", JSON.stringify(state.items));
      return;
    } else if (action.type === "REMOVE-REQUEST") {
      const user = state.user;
      const email = user.logEmail;
      let usersBD = state.users;
      usersBD = usersBD.map(user => {
        if (user.email === email) {
          user.deleteAccountRequest = true;
          return user;
        }
        return user;
      });
      this._state.users = usersBD;
      localStorage.setItem("users", JSON.stringify(usersBD));
    }
  }
};

export default store;
window.store = store;
