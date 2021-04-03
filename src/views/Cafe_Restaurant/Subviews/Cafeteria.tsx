import { Grid } from "@material-ui/core";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    height: "calc(100% - 50px)",
  },
  listContainer: {
    width: "60%",
    height: "60%",
    marginTop: "50px",
    padding: "20px",
    color: "#ffffff",
    backgroundColor: "rgba(5, 6, 154, .8)",
    borderRadius: "10px",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  nested: {
    paddingLeft: "10px",
  },
  right: {
    marginTop: "50px",
    display: "flex",
    padding: "20px",
    flexDirection: "column",
    color: "#ffffff",
    backgroundColor: "rgba(5, 6, 154, .8)",
    borderRadius: "10px",
    justifyContent: "center",
  },
  rightTop: {
    display: "flex",
    flexDirection: "column",
  },
  imageTest: {
    padding: "9%",
    border: "1px solid white",
  },
});

const Cafeteria = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid container item xs={3} justifyContent="center">
        <Grid container item className={classes.listContainer}>
          <h4>Munkit</h4>
          <h5 className={classes.nested}>Omena</h5>
          <h5 className={classes.nested}>Mustikka</h5>
          <h5 className={classes.nested}>Metsämansikka</h5>
          <h5 className={classes.nested}>Rinkilät</h5>
          <h4>Pullat</h4>
          <h4>Viinerit</h4>
          <h4>Täytetyt sämpylät</h4>
          <h4>Piirakat</h4>
          <h4>Kakut</h4>
        </Grid>
      </Grid>
      <Grid item xs={9}>
        <Grid item xs={9} className={classes.right}>
          <Grid item className={classes.rightTop}>
            <h3 style={{ margin: "0 0 20px 0" }}>
              Meiltä aamulla leivotut tuoreet leivonnaiset joka päivä!
            </h3>
            <hr style={{ width: "50%", margin: "0 0 0 35%" }} />
            <h3 style={{ margin: "20px 0 20px auto" }}>
              Myymme leivonnaisia mukaan sekä myös tilauksesta!
            </h3>
            <hr style={{ width: "100%", margin: 0 }} />
          </Grid>
          <Grid
            container
            item
            xs={12}
            justifyContent="space-between"
            style={{ paddingTop: "20px" }}
          >
            <Grid className={classes.imageTest}></Grid>
            <Grid className={classes.imageTest}></Grid>
            <Grid className={classes.imageTest}></Grid>
            <Grid className={classes.imageTest}></Grid>
            <Grid className={classes.imageTest}></Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            justifyContent="space-between"
            style={{ paddingTop: "20px" }}
          >
            <Grid className={classes.imageTest}></Grid>
            <Grid className={classes.imageTest}></Grid>
            <Grid className={classes.imageTest}></Grid>
            <Grid className={classes.imageTest}></Grid>
            <Grid className={classes.imageTest}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Cafeteria;
