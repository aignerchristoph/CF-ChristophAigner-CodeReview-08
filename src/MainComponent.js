import React from 'react';
import "./MainComponent.css"
import AppartementComponent from "./AppartementComponent"
import HouseComponent from "./HouseComponent"


function MainComponent() {
	return(
		<div>
		<h1 className="headingAppMain"> Choose your Dream Appartement </h1>
		<AppartementComponent />
		<h1 className="headingAppMain"> ... or your Dream House </h1>
		<HouseComponent />
		</div>
		);
};

export default MainComponent;