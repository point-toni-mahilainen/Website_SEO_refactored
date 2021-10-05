import { Grid } from "@material-ui/core";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  whiteWrapper: {
    paddingBottom: "40px",
    backgroundColor: "#ffffff",
    justifyContent: "center",
  },
  wrapper: {
    minHeight: "100%",
    margin: "15px 0",
    padding: "0 20px 20px 20px",
  },
  servicesSection: {},
  images: {
    margin: "2em 0",
    justifyContent: "space-around",
    alignContent: "center",
  },
  contentHeader: {
    alignContent: "center",
  },
  content: {
    padding: "0 0 0 50px",
    flexDirection: "row",
  },
  contentList: {
    flexDirection: "row",
    "& h5": {
      margin: "0 10px",
    },
  },
  imageTest: {
    height: 150,
    width: 150,
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

const MaintenanceServices = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.whiteWrapper}>
      <Grid container item xs={9} className={classes.wrapper}>
        <Grid className={classes.header}>
          <h2>Huoltopalvelut</h2>
        </Grid>
        <Grid container item xs={12} className={classes.servicesSection}>
          <Grid container item xs={4} className={classes.images}>
            <Grid className={classes.imageTest}></Grid>
            <Grid className={classes.imageTest}></Grid>
          </Grid>
          <Grid container item xs={8} className={classes.content}>
            <Grid container item xs={12} className={classes.contentHeader}>
              <h3>Varaosat</h3>
            </Grid>
            <Grid container item xs={12} className={classes.contentList}>
              <ul>
                <h5>Ajoneuvoon</h5>
                <h5>Pienkoneeseen</h5>
              </ul>
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
              <h3>Renkaat</h3>
            </Grid>
            <Grid container item xs={12} className={classes.contentList}>
              <ul>
                <h5>Henkilöauto</h5>
                <h5>Pakettiauto</h5>
                <h5>Maasturi</h5>
                <h5>Jotkin maatalouskoneet yms. Kysy lisätietoja!</h5>
              </ul>
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
              <h3>Palvelut</h3>
            </Grid>
            <Grid container item xs={12} className={classes.contentList}>
              <ul>
                <h5>Määräaikaishuollot</h5>
                <h5>Öljynvaihdot</h5>
                <h5>Renkaanvaihdot</h5>
                <h5>Jarruhuollot</h5>
                <h5>Katsastuspalvelu</h5>
                <h5>Nelipyöräsuuntaukset</h5>
                <h5>Ilmastointihuollot</h5>
              </ul>
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
              <ul>
                <h5>Jarrut</h5>
                <h5>Iskarit</h5>
                <h5>Pakokaasut</h5>
                <h5>OBD</h5>
                <h5>Vikakoodit</h5>
                <h5>Valot</h5>
              </ul>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default React.memo(MaintenanceServices);
