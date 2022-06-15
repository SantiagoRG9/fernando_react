import React from "react";
import { Carousel } from "react-bootstrap";

import image1 from "../img/16.png";
import image2 from "../img/17.png";
import image3 from "../img/18.png";
import "./carouselcomp.css";
const Carouselcomp = () => {
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
          class="responsive"
        />
        <Carousel.Caption>
          <button className="btn1">Comprar</button>
          <button className="btn2">Informacion</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={image2}
          alt="Third slide"
          class="responsive"
        />
        <Carousel.Caption>
          <button className="btn1">Comprar</button>
          <button className="btn2">Informacion</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
          class="responsive"
        />
        <Carousel.Caption>
          <button className="btn1">Comprar</button>
          <button className="btn2">Informacion</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carouselcomp;
