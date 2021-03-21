import { Grid } from "@material-ui/core";
import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <Grid
      container
      flexDirection="column"
      alignContent="center"
      style={{ height: "100px", backgroundColor: "#2829A7" }}
    >
      <h2 style={{ margin: 0, textAlign: "center" }}>Header</h2>
      <Navigation />
    </Grid>
  );
};

export default Header;
