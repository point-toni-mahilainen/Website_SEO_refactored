import { Grid } from "@material-ui/core";
import ContactDetails from "components/ContactDetails";
import OpeningHours from "components/OpeningHours";
// import TopImage from "components/TopImage";
import { createUseStyles } from "react-jss";
import back from "../img/back_narrow.jpg";

const useStyles = createUseStyles({
  left: {
    height: "calc(100vh - 120px)",
    flexDirection: "column",
  },
  right: {
    height: "calc(100vh - 120px)",
  },
  welcome: {
    maxHeight: "30%",
    color: "#ffffff",
    fontSize: "2.2em",
    textAlign: "center",
    textShadow: "2px 2px #000000",
  },
  info: {
    padding: "50px 0",
    display: "flex",
    justifyContent: "center",
  },
  wrapper: {
    display: "flex",
    backgroundColor: "white",
    justifyContent: "center",
    alignContent: "center",
    width: "100%",
  },
  content: {
    margin: "20px 0",
    padding: "15px 45px",
    width: "70%",
    height: "fit-content",
    borderRight: "1px solid #2829A7",
    borderLeft: "1px solid #2829A7",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
  },
  image: {
    backgroundImage: `url(${back})`,
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    height: "300px",
    width: "100%",
  },
  lunchSection: {
    alignContent: "center",
    flexDirection: "column",
    "& h3": {
      padding: "15px 0",
    },
    "& a": {
      color: "black",
      fontSize: "1.5em",
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
  lunchLinks: {
    display: "flex",
    justifyContent: "space-around",
  },
});

const Mainpage = () => {
  const classes = useStyles();

  return (
    <Grid container>
      {/* <TopImage page="Mainpage" /> */}
      <Grid className={classes.image}></Grid>
      {/* <img src={back} alt="Etusivun kuva" width="100%" height="300px" /> */}
      <Grid className={classes.wrapper}>
        <Grid className={classes.content}>
          <h1>Tervetuloa SEO Kosken kotisivuille</h1>
          <Grid container item xs={12} className={classes.info}>
            <Grid item xs={5}>
              <OpeningHours flexDirection="row" />
            </Grid>
            <Grid item xs={5}>
              <ContactDetails />
            </Grid>
          </Grid>
          <Grid container item xs={12} className={classes.lunchSection}>
            <h2>Kotitekoinen ja perinteinen lounas joka arkipäivä!</h2>
            <h3>Katso viikon lounaslista:</h3>
            <Grid item xs={6} className={classes.lunchLinks}>
              <a href="/kahvila">Koski TL</a>
              <a href="/palikkala">Palikkala</a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Mainpage;
