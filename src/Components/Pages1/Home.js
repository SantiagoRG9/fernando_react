import React, { Component } from "react";

import Carouselcomp from "../Carouselcomp";
import Card from "../Cards";
import Subcarouselcomp from "../Subcarouselcomp";
import Footer from "../footer";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Carouselcomp />
        <Card />
        <Subcarouselcomp />
        <Footer />
      </div>
    );
  }
}
