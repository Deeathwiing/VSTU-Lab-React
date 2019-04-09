import React from 'react';
import imgSlides1 from '../images/slide1.jpg';
import imgSlides2 from '../images/slide2.jpg';

const Slides = () => (
  <div>
    <header className="container my-3  p-0">
      <div className="row m-0 ">
        <div className="carousel slide pl-0 order-first col" data-ride="carousel" id="slides">
          <div className="carousel-inner">
            <div className="carousel-item active ">
              <a href="#">
                <img className="d-block w-100" src={imgSlides1} alt="blu-15BYN" />
              </a>
            </div>

            <div className="carousel-item ">
              <a href="#">
                <img
                  className="d-block w-100"
                  src={imgSlides2}
                  alt="30% CashBack for Happy Birthday"
                />
              </a>
            </div>

            <a className="carousel-control-prev" href="#slides" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#slides" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>

        <div className="image-right col p-0">
          <a href="#">
            <img className="d-block w-100" src={imgSlides2} alt="30% CashBack for Happy Birthday" />
          </a>
        </div>
      </div>
    </header>
  </div>
);

export default Slides;
