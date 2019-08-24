import React from 'react';
import "./AppartementComponent.css"

function AppartementComponent() {
  return(
  <div className="maincontainer">
        <figure className="figureMain">
          <div id="image1" className="imageHolder">
            <span className="priceTag">2000€</span>
          </div>
          <figcaption className="figText">
            <p className="figHeader">Appartement</p>
            <p className="figInfo">1 Kitchen, 2 Bed, 2 Bath (100sqm)</p>
          </figcaption>
        </figure>
        <figure className="figureMain">
          <div id="image2" className="imageHolder">
            <span className="priceTag">2000€</span>
          </div>
          <figcaption className="figText">
            <p className="figHeader">Appartement</p>
            <p className="figInfo">1 Kitchen, 2 Bed, 2 Bath (100sqm)</p>
          </figcaption>
        </figure>
        <figure className="figureMain">
          <div id="image3" className="imageHolder">
            <span className="priceTag">2000€</span>
          </div>
          <figcaption className="figText">
            <p className="figHeader">Appartement</p>
            <p className="figInfo">1 Kitchen, 2 Bed, 2 Bath (100sqm)</p>
          </figcaption>
        </figure>
  </div>
    );
};

export default AppartementComponent;