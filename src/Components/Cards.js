import React from "react";
import Card from "./Card";

import image1 from "../img/11.jpg";
import image2 from "../img/10.2.jpg";
import image3 from "../img/9.1.jpg";
import image4 from "../img/12.jpg";

const cards = [
  {
    id: 1,
    title: "Internet Ultra alta velocidad",
    image: image1,
    url: "https://www.youtube.com/watch?v=rYYjNUnrvTI",
  },
  {
    id: 2,
    title: "Television adaptativa",
    image: image2,
    url: "https://www.youtube.com/watch?v=rYYjNUnrvTI",
  },
  {
    id: 3,
    title: "Telefonía ilimitada",
    image: image3,
    url: "https://www.youtube.com/watch?v=rYYjNUnrvTI",
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
