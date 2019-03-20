import React, { Component } from 'react';
import payments from './images/payments.PNG';
import telephone from './images/telephone.PNG';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="container p-0 d-flex justify-content-center mt-3">
          <div className="navbar navbar-expand-lg navbar-light bg-light p-3 d-flex justify-content-center">
            <div className="row text-center d-flex justify-content-center">
              <div className="col-sm-3 col-md-3 .col-lg-3 .col-xl-3">
                <div className="row">
                  <img className="col" src={payments} alt="Visa etc" />
                </div>

                <div className="row">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo molestiae
                  perferendis, reiciendis quas possimus aspernatur.
                </div>
              </div>

              <nav className="navbar-light bg-light navbar col-sm-6 .col-md-7 .col-lg-7 .col-xl-7 d-flex justify-content-center">
                <nav className="row navbar-nav d-flex justify-content-center">
                  <div>
                    <a href="#" className="nav-link">
                      Новости
                    </a>
                  </div>

                  <div>
                    <a href="#" className="nav-link">
                      Заказ
                    </a>
                  </div>

                  <div>
                    <a href="#" className="nav-link">
                      Гарантия
                    </a>
                  </div>

                  <div>
                    <a href="#" className="nav-link">
                      Контакты
                    </a>
                  </div>

                  <div>
                    <a href="#" className="nav-link">
                      Атомайзеры
                    </a>
                  </div>

                  <div>
                    <a href="#" className="nav-link">
                      Вейпы
                    </a>
                  </div>

                  <div>
                    <a href="#" className="nav-link">
                      Жидкости
                    </a>
                  </div>

                  <div>
                    <a href="#" className="nav-link">
                      Запчасти
                    </a>
                  </div>
                </nav>
              </nav>

              <div className="col-sm-2 col-md-2 .col-lg-2 .col-xl-2">
                <div className="row d-flex justify-content-center">
                  <img src={telephone} alt="Call me us" />
                </div>

                <div className="row">9 (999) 999-99-99</div>

                <div className="row">9 (999) 999-99-99</div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
