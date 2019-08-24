import React from 'react';
import "./FooterComponent.css"
import AboutComponent from "./AboutComponent"
import HomeHeadComponent from "./HomeHeadComponent"
import BuyHeadComponent from "./BuyHeadComponent"
import RentHeadComponent from "./RentHeadComponent"
import ContactHeadComponent from "./ContactHeadComponent"
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

function FooterComponent() {
	return(
		<footer>
		<div id="container">
			
			<div id="topBox">


				<div className="elements">
					<ul className="list links">
						
						<NavLink className="navLinks" to="/" exact activeClassName="active">
							<li>
								Home
							</li>
						</NavLink>

						<NavLink className="navLinks" to="/about" exact activeClassName="active">
							<li>
								About
							</li>
						</NavLink>

						<NavLink className="navLinks" to="/buy" exact activeClassName="active">
							<li>
								Buy
							</li>
						</NavLink>

						<NavLink className="navLinks" to="/rent" exact activeClassName="active">
							<li>
								Rent
							</li>
						</NavLink>

						<NavLink className="navLinks" to="/contact" exact activeClassName="active">
							<li>
								Contact
							</li>
						</NavLink>
					</ul>

				</div>

				<div className="elements">
					<ul className="list">
						<li>Appartements</li>
						<li>Houses</li>
						<li>Villas</li>
						<li>Mansions</li>
						<li>...</li>
					</ul>

				</div>

				<div className="elements">
					<ul className="list">
						<li>New York</li>
						<li>Los Angeles</li>
						<li>Miami</li>
						<li>Washington</li>
						<li>...</li>
					</ul>

				</div>

				<div className="elements">

					<p id="footText">
						La Casa is real estate minimal html5 <br />
						website temblate, designed and coded by <br />
						pixelhint,  tellus varius, dictum erat vel, <br />
						maximus tellus. Sed vitae auctor ipsum <br />
					</p>

					<div>
						<i className="fa fa-facebook socialIcons"></i>
						<i className="fa fa-twitter socialIcons"></i>
						<i className="fa fa-skype socialIcons"></i>
						<i className="fa fa-instagram socialIcons"></i>
					</div>


				</div>




			</div>

			<div id="bottomBox">
				Copyright &copy 2019 Christoph Aigner All Rights Reserved.
			</div>





		</div>

	</footer>

		);
};

export default FooterComponent;