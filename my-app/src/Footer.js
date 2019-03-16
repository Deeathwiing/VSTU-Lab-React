import React, { Component } from "react";
import payments from "./images/payments.PNG";
import telephone from "./images/telephone.PNG";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="container p-0 d-flex justify-content-center mt-3 ">
          <nav className="navbar navbar-expand-lg navbar-light bg-light p-3 d-flex justify-content-center  ">
            <div className="row text-center d-flex justify-content-center">
              <div className="col-sm-3 col-md-3 .col-lg-3 .col-xl-3">
                <div className="row">
                  <h6>
                    <img className="col" src={payments} alt="Visa etc" />
                  </h6>
                </div>

                <div className="row">
                  <h6 className="col">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo molestiae perferendis, reiciendis quas possimus
                    aspernatur.
                  </h6>
                </div>
              </div>

              <div className="col-sm-6 .col-md-7 .col-lg-7 .col-xl-7 d-flex justify-content-center">
                <div className="row d-flex justify-content-center">
                  <div className=" ">
                    <a href="#" className="nav-link">
                      Новости
                    </a>
                  </div>

                  <div className="">
                    <a href="#" className="nav-link">
                      Заказ
                    </a>
                  </div>

                  <div className="">
                    <a href="#" className="nav-link">
                      Гарантия
                    </a>
                  </div>

                  <div className=" ">
                    <a href="#" className="nav-link">
                      Контакты
                    </a>
                  </div>

                  <div className="">
                    <a href="#" className="nav-link">
                      Атомайзеры
                    </a>
                  </div>

                  <div className="">
                    <a href="#" className="nav-link">
                      Вейпы
                    </a>
                  </div>

                  <div className=" ">
                    <a href="#" className="nav-link">
                      Жидкости
                    </a>
                  </div>

                  <div className="">
                    <a href="#" className="nav-link">
                      Запчасти
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-sm-2 col-md-2 .col-lg-2 .col-xl-2">
                <div className="row d-flex justify-content-center">
                  <img src={telephone} alt="Call me us" />
                </div>

                <div className="row">
                  <h6 className="col">9 (999) 999-99-99</h6>
                </div>

                <div className="row">
                  <h6 className="col">9 (999) 999-99-99</h6>
                </div>
              </div>
            </div>
          </nav>
        </footer>
      </div>
    );
  }
}

export default Footer;
