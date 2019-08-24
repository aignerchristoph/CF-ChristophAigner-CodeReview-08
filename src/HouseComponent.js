import React from 'react';
import "./HouseComponent.css"

function HouseComponent() {
	return(

		<div className="buyMaincontainer">

		<figure class="buyFigureMain">
			<div id="buyImage1" class="buyImageHolder">
				<span class="buyPriceTag">1.500.000€</span>

			</div>
			
  			<figcaption class="buyFigText">
  				<p class="buyFigHeader">House</p>
  				<p class= "buyFigInfo">1 Kitchen, 4 Bedrooms, 5 Baths (800sqm)</p>

  			</figcaption>
		</figure>

		<figure class="buyFigureMain">
			<div id="buyImage2" class="buyImageHolder">
				<span class="buyPriceTag">1.500.000€</span>

			</div>
			
  			<figcaption class="buyFigText">
  				<p class="buyFigHeader">Appartement</p>
  				<p class= "buyFigInfo">1 Kitchen, 4 Bedrooms, 5 Baths (800sqm)</p>

  			</figcaption>
		</figure>



		<figure class="buyFigureMain">
			<div id="buyImage3" class="buyImageHolder">
				<span class="buyPriceTag">1.500.000€</span>

			</div>
			
  			<figcaption class="buyFigText">
  				<p class="buyFigHeader">Appartement</p>
  				<p class= "buyFigInfo">1 Kitchen, 4 Bedrooms, 5 Baths (800sqm)</p>

  			</figcaption>
		</figure>
	</div>
	
		);
};

export default HouseComponent;