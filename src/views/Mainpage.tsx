import React from "react";
import { Grid } from "@material-ui/core";
import { createUseStyles } from "react-jss";
import Background from "img/back.jpg";

const useStyles = createUseStyles({
  container: {},
});

const Mainpage = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.container}>
      <h2>Mainpage</h2>
    </Grid>
  );
};

export default Mainpage;
