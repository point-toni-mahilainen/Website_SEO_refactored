import { Grid } from "@material-ui/core";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  whiteWrapper: {
    paddingBottom: "40px",
    backgroundColor: "#ffffff",
  },
  wrapper: {
    margin: "15px 0",
    padding: "0 20px 20px 20px",
  },
  listContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  nested: {
    paddingLeft: "10px",
  },
  right: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  rightTop: {
    display: "flex",
    flexDirection: "column",
  },
  imageTest: {
    padding: "9%",
    border: "1px solid black",
  },
  header: {
    width: "100%",
    paddingBottom: "50px",
    "& h2": {
      padding: "3px 100px 8px 10px",
      color: "white",
      width: "fit-content",
      backgroundColor: "#2829A7",
      margin: "-35px 0 0 -20px",
      boxShadow: "3px 3px 0px 0px #8978FF",
    },
  },
});

const Cafeteria = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.whiteWrapper} justifyContent="center">
      <Grid container item xs={9} className={classes.wrapper}>
        <Grid className={classes.header}>
          <h2>Kahvila</h2>
        </Grid>
        <Grid container item xs={2} justifyContent="center">
          <Grid container item className={classes.listContainer}>
            <h3>Kahvilatuotteet:</h3>
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
        <Grid item xs={10}>
          <Grid item xs={12} className={classes.right}>
            <Grid item className={classes.rightTop}>
              <h3 style={{ fontStyle: "italic" }}>
                "Meiltä aamulla leivotut tuoreet leivonnaiset joka päivä!"
              </h3>
              <h3 style={{ fontStyle: "italic", margin: "20px 0 20px auto" }}>
                "Myymme leivonnaisia mukaan sekä myös tilauksesta!"
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
    </Grid>
  );
};

export default React.memo(Cafeteria);
