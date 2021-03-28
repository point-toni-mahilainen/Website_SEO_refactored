import { Grid } from "@material-ui/core";
import ContactDetails from "components/ContactDetails";
import OpeningHours from "components/OpeningHours";
import { createUseStyles } from "react-jss";

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
    height: "fit-content",
    color: "#ffffff",
    padding: "15px",
    textAlign: "center",
    backgroundColor: "rgba(5, 6, 154, .8)",
    borderRadius: "10px 0 0 10px",
  },
});

const Mainpage = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid container item xs={10} className={classes.left}>
        <Grid
          container
          item
          xs={12}
          justifyContent="center"
          alignContent="center"
          className={classes.welcome}
        >
          <h1>
            Tervetuloa SEO Kosken
            <br />
            kotisivuille
          </h1>
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={2}
        alignContent="center"
        className={classes.right}
      >
        <Grid item className={classes.info}>
          <Grid style={{ borderBottom: "1px solid white" }}>
            <OpeningHours flexDirection="column" />
          </Grid>
          <Grid style={{ paddingTop: "15px" }}>
            <ContactDetails />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Mainpage;
