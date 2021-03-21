import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "components/Footer";
import Header from "components/Header";
import CafeRestaurant from "views/Cafe_Restaurant";
import Company from "views/Company";
import Contact from "views/Contact";
import Mainpage from "views/Mainpage";
import Palikkala from "views/Palikkala";
import ServiceStation from "views/Service_station";

enum Routes {
  Main = "/",
  Company = "/yritys",
  CafeRestaurant = "/kahvila_ravintola",
  ServiceStation = "/huoltamo",
  Palikkala = "/palikkala",
  Contact = "/palaute",
}

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path={Routes.Company}>
          <Company />
        </Route>
        <Route path={Routes.CafeRestaurant}>
          <CafeRestaurant />
        </Route>
        <Route path={Routes.ServiceStation}>
          <ServiceStation />
        </Route>
        <Route path={Routes.Palikkala}>
          <Palikkala />
        </Route>
        <Route path={Routes.Contact}>
          <Contact />
        </Route>
        <Route path={Routes.Main}>
          <Mainpage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
