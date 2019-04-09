/* eslint-disable no-underscore-dangle */
/* eslint-disable prefer-destructuring */
const store = {
  _state: {
    items: localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [],
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [],
    users: localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [],
    NavLinkAdministration: [
      {
        to: '/administration/admintable',
        classNames: 'nav-link mx-2',
        description: 'AdminTable',
      },
      {
        to: '/administration/adminitems',
        classNames: 'nav-link mx-2',
        description: 'Все товары',
      },
      {
        to: '/administration/adminitems',
        classNames: 'nav-link mx-2',
        description: 'Что то там еще',
      },
    ],
    NavLinkNavbar: [
      {
        to: '/newsAndPromotions',
        classNames: 'nav-link',
        description: 'Новости и предложения',
      },
      {
        to: '/order',
        classNames: 'nav-link',
        description: 'Заказ',
      },
      {
        to: '/warranty',
        classNames: 'nav-link',
        description: 'Гарантия',
      },
      {
        to: '/newsAndPromotions',
        classNames: 'nav-link text-danger',
        description: 'Новинки и акции!',
      },
    ],
    NavLinkPersonalArea: [
      {
        to: '/order',
        classNames: 'dropdown-item',
        description: 'Заказы',
      },
      {
        to: '#',
        classNames: 'dropdown-item',
        description: 'Скидки',
      },
      {
        to: '/order',
        classNames: 'dropdown-item',
        description: 'Корзина',
      },
      {
        to: '#',
        classNames: 'dropdown-item',
        description: 'Избранное',
      },
    ],
    NavLinkCatalog: [
      {
        to: '/items',
        classNames: 'dropdown-item',
        description: 'Все товары',
      },
      {
        to: '#',
        classNames: 'dropdown-item',
        description: 'Атомайзеры',
      },
      {
        to: '#',
        classNames: 'dropdown-item',
        description: 'Электронные парогенераторы',
      },
      {
        to: '#',
        classNames: 'dropdown-item',
        description: 'Жидкости',
      },
      {
        to: '#',
        classNames: 'dropdown-item',
        description: 'Запчасти и комплектующие',
      },
    ],
    NavLinkAside: [
      {
        to: '/newsAndPromotions',
        classNames: 'nav-link',
        description: 'Новости и предложения',
        liClass: 'col',
      },
      {
        to: '/order',
        classNames: 'nav-link',
        description: 'Заказ',
        liClass: 'col',
      },
      {
        to: '/warranty',
        classNames: 'nav-link',
        description: 'Гарантия',
        liClass: 'col',
      },
      {
        to: '/newsAndPromotions',
        classNames: 'nav-link text-danger',
        description: 'Новинки и акции!',
        liClass: 'col',
      },
    ],
    NavLinkFooter: [
      {
        to: '/news',
        classNames: 'nav-link',
        description: 'Новости',
      },
      {
        to: '/order',
        classNames: 'nav-link',
        description: 'Заказ',
      },
      {
        to: '/warranty',
        classNames: 'nav-link',
        description: 'Гарантия',
      },
      {
        to: '/about',
        classNames: 'nav-link',
        description: 'Контакты',
      },
      {
        to: '#',
        classNames: 'nav-link',
        description: 'Атомайзеры',
      },
      {
        to: '#',
        classNames: 'nav-link',
        description: 'Вейпы',
      },
      {
        to: '#',
        classNames: 'nav-link',
        description: 'Жидкости',
      },
      {
        to: '#',
        classNames: 'nav-link',
        description: 'Запчасти',
      },
    ],
  },
  getState() {
    return this._state;
  },

  dispatch(action) {
    const state = this.getState();
    if (action.type === 'ADD-ITEMS') {
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

      const lastElement = state.items[state.items.length - 1];
      const id = lastElement ? lastElement.id + 1 : 0;

      const newItem = new Item(
        id,
        action.picture,
        action.title,
        action.description,
        action.price,
        action.tags,
        action.rating,
      );

      this._state.items.push(newItem);
      localStorage.setItem('items', JSON.stringify(this._state.items));
    } else if (action.type === 'REGISTRATION') {
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

      const users = state.users;

      const lastElement = users[users.length - 1];
      const id = lastElement ? lastElement.id + 1 : 0;

      const isTaken = users.some(user => user.email === action.email);
      if (isTaken) {
        alert('Данный email занят');
        return;
      }

      if (!action.firstName || !action.lastName || !action.password) {
        alert('Заполните все поля');
        return;
      }

      const newUser = new User(
        id,
        action.email,
        action.firstName,
        action.lastName,
        action.password,
      );

      this._state.users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
    } else if (action.type === 'LOGIN') {
      let checkLogin = false;
      let admin = false;
      const logEmail = action.logEmail;
      const usersBD = state.users;

      checkLogin = usersBD.some(
        user => logEmail === user.email && action.logPass === user.password,
      );
      admin = usersBD.some(
        user => logEmail === user.email && action.logPass === user.password && user.administration,
      );
      if (!checkLogin && !admin) {
        alert('Введите правильный email и пароль');
      }
      if (checkLogin) {
        if (admin) {
          this._state.user = [{ logEmail, admin }];
          localStorage.setItem('user', JSON.stringify({ logEmail, admin }));
        } else {
          this._state.user = [{ logEmail, checkLogin }];
          localStorage.setItem('user', JSON.stringify({ logEmail, checkLogin }));
        }
      }
    } else if (action.type === 'DELETE-ITEMS') {
      const check = (item) => {
        if (item.id !== action.idToDelete) {
          return true;
        }
        return false;
      };
      state.items = state.items.filter(item => check(item));

      localStorage.setItem('items', JSON.stringify(state.items));
      this._state.items = state.items;

      return this.getState();
    } else if (action.type === 'DELETE-USERS') {
      const users = state.users.filter((user) => {
        if (user.id === action.idToDelete && user.deleteAccountRequest) {
          return false;
        }
        return user;
      });
      this._state.users = users;
      localStorage.setItem('users', JSON.stringify(users));
      return { users: this._state.users };
    } else if (action.type === 'ADD-RATING') {
      const user = state.user;
      const personalRating = {
        user: user.logEmail,
        ratingValue: action.ratingValue,
      };

      state.items = state.items.map((item) => {
        if (item.id === action.itemId) {
          const singleRating = item.rating;
          let checkRating = false;
          if (singleRating[0]) {
            singleRating.forEach((element, i, rating) => {
              if (element.user === user.logEmail) {
                rating[i] = personalRating;
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
      localStorage.setItem('items', JSON.stringify(state.items));
    } else if (action.type === 'REMOVE-REQUEST') {
      const user = state.user;
      const email = user.logEmail;
      let usersBD = state.users;
      usersBD = usersBD.map((element) => {
        if (element.email === email) {
          element.deleteAccountRequest = true;
          return element;
        }
        return element;
      });
      this._state.users = usersBD;
      localStorage.setItem('users', JSON.stringify(usersBD));
    }
  },
};

export default store;
window.store = store;
