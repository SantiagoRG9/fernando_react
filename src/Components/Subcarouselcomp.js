import React from "react";
import { Carousel } from "react-bootstrap";

import image1 from "../img/banner1.jpg";
import image2 from "../img/banner2.jpg";
import image3 from "../img/banner3.jpg";
import "./Subcarouselcomp.css";
const Subcarouselcomp = () => {
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
          class="responsive1"
        />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={image2}
          alt="Third slide"
          class="responsive1"
        />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
          class="responsive1"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Subcarouselcomp;
