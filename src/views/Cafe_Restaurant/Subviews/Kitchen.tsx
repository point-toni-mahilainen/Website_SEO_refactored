import { Grid } from "@material-ui/core";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  whiteWrapper: {
    backgroundColor: "#ffffff",
  },
  wrapper: {
    minHeight: "100%",
    margin: "15px 0",
    padding: "20px",
    borderRight: "1px solid #2829A7",
    borderLeft: "1px solid #2829A7",
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
});

const Kitchen = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.whiteWrapper} justifyContent="center">
      <Grid container item xs={9} className={classes.wrapper}>
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

export default Kitchen;
