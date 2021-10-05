import { Grid } from "@material-ui/core";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  stripe: {
    minWidth: "calc(100% + 20px)",
    marginTop: "-10px",
    height: "2px",
    backgroundColor: "#2829A7",
  },
  whiteWrapper: {
    paddingBottom: "40px",
    backgroundColor: "#ffffff",
    // borderTop: "1px solid #2829A7",
  },
  wrapper: {
    height: "fit-content",
    margin: "15px 0",
    padding: "0 20px 20px 20px",
  },
  pizza: {
    minHeight: "100%",
  },
  pizzaHeader: {
    paddingBottom: 20,
    height: "fit-content",
  },
  fillings: {
    minHeight: "calc(100% - 70px)",
  },
  fillingsList: {
    minHeight: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  imageTest: {
    marginRight: 40,
    marginTop: 40,
    padding: "30%",
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

const Kitchen = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.whiteWrapper} justifyContent="center">
      <Grid container item xs={9} className={classes.wrapper}>
        <Grid className={classes.stripe}></Grid>
        <Grid className={classes.header}>
          <h2>Keittiö</h2>
        </Grid>
        <Grid container item xs={4} className={classes.pizza}>
          <Grid item xs={12} className={classes.pizzaHeader}>
            <h3 style={{ marginBottom: 10 }}>Pizzat</h3>
            <h4>4 täytettä oman valinnan mukaan</h4>
          </Grid>
          <Grid container item xs={12} className={classes.fillings}>
            <Grid container item xs={6} className={classes.fillingsList}>
              <h5>Ananas</h5>
              <h5>Aurajuusto</h5>
              <h5>Broileri</h5>
              <h5>Fetajuusto</h5>
              <h5>Herkkusieni</h5>
              <h5>Jalopeno</h5>
              <h5>Jauheliha</h5>
              <h5>Kananmuna</h5>
              <h5>Katkarapu</h5>
            </Grid>
            <Grid container item xs={6} className={classes.fillingsList}>
              <h5>Kebab</h5>
              <h5>Kinkku</h5>
              <h5>Paprika</h5>
              <h5>Salami</h5>
              <h5>Sipuli</h5>
              <h5>Suolakurkku</h5>
              <h5>Tomaatti</h5>
              <h5>Tonnikala</h5>
              <h5>Valkosipuli</h5>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={8}>
          <Grid item xs={6}>
            <h3>X Meal hampurilaiset ja ateriat</h3>
            <Grid className={classes.imageTest}></Grid>
          </Grid>
          <Grid item xs={6}>
            <h3>Seon possunleike pippurikastikkeella</h3>
            <Grid className={classes.imageTest}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default React.memo(Kitchen);
