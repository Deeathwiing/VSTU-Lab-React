import React, { Component } from "react";
import payments from "./images/payments.PNG";
import telephone from "./images/telephone.PNG";
import { NavLink } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <span>
        <footer className="container p-0 d-flex justify-content-center mt-3">
          <div className="navbar navbar-expand-lg navbar-light bg-light p-1 d-flex justify-content-center">
            <div className="row text-center d-flex justify-content-center">
              <div className="col-sm-3 col-md-3 .col-lg-3 .col-xl-3">
                <div className="row">
                  <img className="col" src={payments} alt="Visa etc" />
                </div>

                <div className="row">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  molestiae perferendis, reiciendis quas possimus aspernatur.
                </div>
              </div>

              <nav className="navbar-light bg-light navbar p-3 col-sm-6 .col-md-7 .col-lg-7 .col-xl-7 d-flex justify-content-center">
                <nav className="row navbar-nav d-flex justify-content-center">
                  <div>
                    <NavLink to="/news" className="nav-link">
                      Новости
                    </NavLink>
                  </div>

                  <div>
                    <NavLink to="/order" className="nav-link">
                      Заказ
                    </NavLink>
                  </div>

                  <div>
                    <NavLink to="warranty" className="nav-link">
                      Гарантия
                    </NavLink>
                  </div>

                  <div>
                    <NavLink to="about" className="nav-link">
                      Контакты
                    </NavLink>
                  </div>

                  <div>
                    <NavLink to="" className="nav-link">
                      Атомайзеры
                    </NavLink>
                  </div>

                  <div>
                    <NavLink to="" className="nav-link">
                      Вейпы
                    </NavLink>
                  </div>

                  <div>
                    <NavLink to="" className="nav-link">
                      Жидкости
                    </NavLink>
                  </div>

                  <div>
                    <NavLink to="" className="nav-link">
                      Запчасти
                    </NavLink>
                  </div>
                </nav>
              </nav>

              <div className="col-sm-2 col-md-2 .col-lg-2 .col-xl-2">
                <div className="row d-flex justify-content-center">
                  <img src={telephone} alt="Call me us" />
                </div>
                <div className="numbers">+375 (29) 999-99-99</div>
                <div className="numbers">+375 (29) 999-99-99</div>
              </div>
            </div>
          </div>
        </footer>
      </span>
    );
  }
}

export default Footer;
