import React from 'react';
import "./NavBarComponent.css"
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

function NavBarComponent() {
	return(
	<nav>
		<NavLink className="navLinks" to="/" exact activeClassName="active">
			<div id="leftNavLogo">
				La Casa
			</div>
		</NavLink>
		
		<div id="rightNavLinks">


			<NavLink className="navLinks" to="/buy" exact activeClassName="active">
				<div className="linkElements">
					Buy
				</div>
			</NavLink>

			
			<NavLink className="navLinks" to="/rent" exact activeClassName="active">
				<div className="linkElements">
					Rent
				</div>
			</NavLink>



			<NavLink className="navLinks" to="/about" exact activeClassName="active">
				<div className="linkElements">
					About
				</div>
			</NavLink>


			<NavLink className="navLinks" to="/contact" exact activeClassName="active">
				<div className="linkElements">
					Contact
				</div>
			</NavLink>

		</div>
	</nav>

		);
};

export default NavBarComponent;