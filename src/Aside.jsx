import React, { Component } from "react";

class Aside extends Component {
  render() {
    return (
      <aside className=" flex-column mr-1 col p-0 sticky-top" id="delete-Aside">
        <nav className="nav flex-column navbar-light bg-light shadow">
          <ul className="navbar-nav p-4">
            <li className="nav-item col">
              <a href="#" className="nav-link font-weight-bold">
                Главная
              </a>
            </li>

            <li className="nav-item dropdown col">
              <a className="nav-link dropdown-toggle" role="button" href="#">
                Каталог
              </a>

              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  Контакты
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Атомайзеры
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Электронные парогенераторы
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Жидкость
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Запчасти и комплектующие
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Все для самозамеса
                </a>
              </div>
            </li>
            <li className="nav-item col">
              <a href="#" className="nav-link">
                Новости и предложения
              </a>
            </li>

            <li className="nav-item col">
              <a href="#" className="nav-link">
                Заказ
              </a>
            </li>

            <li className="nav-item col">
              <a href="#" className="nav-link">
                Гарантия
              </a>
            </li>

            <li className="nav-item col">
              <a href="#" className="nav-link">
                <span>Новинки и акции!</span>
              </a>
            </li>

            <li className="nav-item ml-1 row">
              <form className="form-inline">
                <input
                  className="form-control mr-sm-2 shadow-lg"
                  id="aside-Search"
                  type="search"
                  placeholder="Поиск"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-secondary my-2 my-sm-0 text-dark bg-light"
                  type="submit"
                  id="aside-Search-Btn"
                >
                  Поиск
                </button>
              </form>
            </li>
          </ul>
        </nav>
      </aside>
    );
  }
}

export default Aside;
