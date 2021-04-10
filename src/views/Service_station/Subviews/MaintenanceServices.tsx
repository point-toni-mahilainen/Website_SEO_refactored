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
  },
  servicesSection: {
    marginBottom: 20,
  },
  images: {
    margin: "2em 0",
    justifyContent: "space-around",
    alignContent: "center",
  },
  contentHeader: {
    margin: "0 20%",
    justifyContent: "center",
    alignContent: "center",
    borderBottom: "1px solid #2829A7",
  },
  content: {
    flexDirection: "row",
  },
  contentList: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "space-around",
    "& h5": {
      margin: "0 10px",
    },
  },
  imageTest: {
    height: 150,
    width: 150,
    border: "1px solid black",
  },
});

const MaintenanceServices = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.whiteWrapper} justifyContent="center">
      <Grid container item xs={9} className={classes.wrapper}>
        <Grid container item xs={12} className={classes.servicesSection}>
          <Grid container item xs={4} className={classes.images}>
            <Grid className={classes.imageTest}></Grid>
            <Grid className={classes.imageTest}></Grid>
          </Grid>
          <Grid container item xs={8} className={classes.content}>
            <Grid container item xs={12} className={classes.contentHeader}>
              <h3>Palvelut</h3>
            </Grid>
            <Grid container item xs={12} className={classes.contentList}>
              <h5>Määräaikaishuollot</h5>
              <h5>Öljynvaihdot</h5>
              <h5>Renkaanvaihdot</h5>
              <h5>Jarruhuollot</h5>
              <h5>Katsastuspalvelu</h5>
              <h5>Nelipyöräsuuntaukset</h5>
              <h5>Ilmastointihuollot</h5>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={12} className={classes.servicesSection}>
          <Grid container item xs={4} className={classes.images}>
            <Grid className={classes.imageTest}></Grid>
            <Grid className={classes.imageTest}></Grid>
          </Grid>
          <Grid container item xs={8} className={classes.content}>
            <Grid container item xs={12} className={classes.contentHeader}>
              <h3>Testit</h3>
            </Grid>
            <Grid container item xs={12} className={classes.contentList}>
              <h5>Jarrut</h5>
              <h5>Iskarit</h5>
              <h5>Pakokaasut</h5>
              <h5>OBD</h5>
              <h5>Vikakoodit</h5>
              <h5>Valot</h5>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MaintenanceServices;
