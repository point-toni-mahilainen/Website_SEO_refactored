import { Grid } from "@material-ui/core";
import ContactDetails from "components/ContactDetails";
import OpeningHours from "components/OpeningHours";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    backgroundColor: "#ffffff",
    justifyContent: "center",
  },
  contactInfo: {
    margin: "15px 0",
    padding: "0 20px",
    borderRight: "1px solid #2829A7",
    borderLeft: "1px solid #2829A7",
  },
});

const Company = () => {
  const classes = useStyles();

  return (
    <Grid style={{ minHeight: "100%", padding: "16em 0" }}>
      <Grid container item xs={12} className={classes.wrapper}>
        <Grid item xs={6} className={classes.contactInfo}>
          <ContactDetails />
          <br />
          <OpeningHours flexDirection="row" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Company;
