import React from 'react';
import payments from '../public/images/payments.PNG';
import telephone from '../public/images/telephone.PNG';
import { NavLinksAdministration } from './navLinks';

const navLinks = {
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
};

const Footer = () => (
  <footer className="container p-0 justify-content-center mt-3">
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
          <ul className="row navbar-nav d-flex justify-content-center">
            <NavLinksAdministration state={navLinks.NavLinkFooter} />
          </ul>
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
);

export default Footer;
