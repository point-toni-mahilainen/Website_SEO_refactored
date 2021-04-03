import { Grid } from "@material-ui/core";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    height: "calc(100% - 50px)",
  },
  lunch: {
    height: "70%",
    marginTop: "50px",
    backgroundColor: "rgba(5, 6, 154, .8)",
  },
  images: {
    height: "70%",
    marginTop: "50px",
    backgroundColor: "rgba(5, 6, 154, .8)",
  },
});

const Lunch = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid container item xs={4} justifyContent="center">
        <Grid item xs={9} className={classes.lunch}>
          Lounaslista
        </Grid>
      </Grid>
      <Grid container item xs={8} justifyContent="center">
        <Grid item xs={10} className={classes.images}>
          Kuvat
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Lunch;
