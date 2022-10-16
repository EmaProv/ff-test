import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { RiStarSFill } from "react-icons/ri";

function Product() {
  const location = useLocation();
  const prodId = Number(location.pathname.split("/")[1]);

  const storedProd = useSelector((state) =>
    state.products.products.products.find((p) => p.id === prodId)
  );

  return (
    <div className="prod-layout">
      <div className="prod-breadcrumb">
        <ul>
          <li>{storedProd?.category}</li>
          <li> {">"} </li>
          <li>{storedProd?.brand}</li>
          <li> {" > "} </li>
          <li>{storedProd?.title}</li>
        </ul>
      </div>

      <div className="prod-cont">
        <div className="prod-grid">
          <div className="prod-lft">
            <div className="prod-lft-carousel">
              <Carousel showThumbs={false}>
                {storedProd?.images.map((i, index) => (
                  <div key={index}>
                    <img src={i} alt="test img" />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>

          <div className="prod-rgt">
            <div className="prod-rgt-field">
              <h3>{storedProd?.title}</h3>
              <p>€ {storedProd?.price}</p>
            </div>
            <div className="prod-rgt-field">
              <h5>DESCRIZIONE</h5>
              <p>{storedProd?.description}</p>
            </div>
            <div className="prod-rgt-field">
              <h5>MARCA</h5>
              <p>{storedProd?.brand}</p>
            </div>
            <div className="prod-rgt-field">
              <h5>CATEGORIA</h5>
              <p>{storedProd?.category}</p>
            </div>
            <div className="prod-rgt-field">
              <h5>RECENSIONI</h5>
              <p>
                <RiStarSFill />
                {storedProd?.rating}
              </p>
            </div>

            <button>AGGIUNGI AL CARRELLO</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
