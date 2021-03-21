import React from "react";
import { Grid } from "@material-ui/core";
import logo from "../img/seologo-3.png";
import Navigation from "./Navigation";
import Logo from "./Logo";

const Header = () => {
  return (
    <Grid
      container
      flexDirection="column"
      alignItems="center"
      style={{ height: "100px", backgroundColor: "#2829A7" }}
    >
      <Logo />
      <Navigation />
    </Grid>
  );
};

export default Header;
