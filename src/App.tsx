import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "components/Footer";
import Header from "components/Header";
import Cafeteria from "views/Cafeteria";
import ContactInfo from "views/ContactInfo";
import Recruiting from "views/Recruiting";
import Mainpage from "views/Mainpage";
import Palikkala from "views/Palikkala";
import CarService from "views/CarService";
import { Grid } from "@material-ui/core";
import { createUseStyles } from "react-jss";
import Background from "img/back.jpg";

export enum Routes {
  Main = "/",
  Cafeteria = "/kahvila",
  CarService = "/autohuolto",
  Palikkala = "/palikkala",
  Recruiting = "/rekry",
  ContactInfo = "/yhteystiedot",
}

const useStyles = createUseStyles({
  container: {
    minHeight: "calc(100vh - 70px)",
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <Router>
      <Header />
      <Grid className={classes.container}>
        <Switch>
          <Route path={Routes.Cafeteria}>
            <Cafeteria />
          </Route>
          <Route path={Routes.CarService}>
            <CarService />
          </Route>
          <Route path={Routes.Palikkala}>
            <Palikkala />
          </Route>
          <Route path={Routes.Recruiting}>
            <Recruiting />
          </Route>
          <Route path={Routes.ContactInfo}>
            <ContactInfo />
          </Route>
          <Route path={Routes.Main}>
            <Mainpage />
          </Route>
        </Switch>
      </Grid>
      <Footer />
    </Router>
  );
};

export default App;
