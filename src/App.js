import React from 'react';
import './App.css';
import HeaderComponent from "./HeaderComponent"
import FooterComponent from "./FooterComponent"
import ContactComponent from "./ContactComponent"
import RentComponent from "./RentComponent"
import BuyComponent from "./BuyComponent"
import MainComponent from "./MainComponent"

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Router>
      <HeaderComponent />

      <Switch>
        <Route path="/" exact component={MainComponent} />
        <Route path="/contact" exact component={ContactComponent} />
        <Route path="/rent" exact component={RentComponent} />
        <Route path="/buy" exact component={BuyComponent} />
     </Switch>
      <FooterComponent />


    </Router>
    </div>
  );
}

export default App;
