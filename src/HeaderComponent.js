import React from 'react';
import "./HeaderComponent.css"
import NavBarComponent from "./NavBarComponent"
import AboutComponent from "./AboutComponent"
import HomeHeadComponent from "./HomeHeadComponent"
import BuyHeadComponent from "./BuyHeadComponent"
import RentHeadComponent from "./RentHeadComponent"
import ContactHeadComponent from "./ContactHeadComponent"
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function HeaderComponent() {
	return(
	<header>
		<NavBarComponent />

      <Switch>
        <Route path="/about" exact component={AboutComponent} />
        <Route path="/" exact component={HomeHeadComponent} />
        <Route path="/buy" exact component={BuyHeadComponent} />
        <Route path="/rent" exact component={RentHeadComponent} />
        <Route path="/contact" exact component={ContactHeadComponent} />

     </Switch>


	</header>

		);
};

export default HeaderComponent;