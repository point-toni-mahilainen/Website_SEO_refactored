import React from "react";
import { Grid } from "@material-ui/core";
import Navigation from "./Navigation";
import Logo from "./Logo";
import Facebook from "./Facebook";

const Header = () => {
  return (
    <Grid
      container
      flexDirection="row"
      alignItems="center"
      justifyContent="space-around"
      style={{ height: "70px", backgroundColor: "#2829A7" }}
    >
      <Logo />
      <Navigation />
      <Facebook />
    </Grid>
  );
};

export default Header;
