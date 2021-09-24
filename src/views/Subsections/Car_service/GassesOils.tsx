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
  },
  wrapper: {
    margin: "15px 0",
    padding: "0 20px 20px 20px",
  },
  partSection: {},
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

const GassesOils = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.whiteWrapper} justifyContent="center">
      <Grid container item xs={9} className={classes.wrapper}>
        <Grid className={classes.stripe}></Grid>
        <Grid className={classes.header}>
          <h2>Kaasut ja öljyt</h2>
        </Grid>
        <Grid container item xs={12} className={classes.partSection}>
          <Grid container item xs={4} className={classes.images}>
            <Grid className={classes.imageTest}></Grid>
            <Grid className={classes.imageTest}></Grid>
          </Grid>
          <Grid container item xs={8} className={classes.content}>
            <Grid container item xs={12} className={classes.contentHeader}>
              <h3>Nestekaasut</h3>
            </Grid>
            <Grid container item xs={12} className={classes.contentList}>
              <ul>
                <h5>Grilliin</h5>
                <h5>Trukkiin</h5>
                <h5>Asuntoautoon</h5>
                <h5>Veneeseen</h5>
              </ul>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={12} className={classes.partSection}>
          <Grid container item xs={4} className={classes.images}>
            <Grid className={classes.imageTest}></Grid>
            <Grid className={classes.imageTest}></Grid>
          </Grid>
          <Grid container item xs={8} className={classes.content}>
            <Grid container item xs={12} className={classes.contentHeader}>
              <h3>Lämmitysöljyt</h3>
            </Grid>
            <Grid container item xs={12} className={classes.contentList}>
              <h5>Lisätietoja: Pekka 0400 - 826169</h5>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default React.memo(GassesOils);
