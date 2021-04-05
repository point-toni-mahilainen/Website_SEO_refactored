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
  partSection: {
    marginBottom: 20,
    paddingBottom: 20,
    borderBottom: "1px solid #2829A7",
  },
  partSectionHeader: {
    margin: "2em 0",
    justifyContent: "center",
    alignContent: "center",
    borderRight: "1px solid #2829A7",
  },
  partSectionContent: {
    paddingLeft: "3em",
  },
  partSectionList: {
    flexDirection: "column",
    justifyContent: "space-around",
  },
  imageTest: {
    height: 150,
    width: 150,
    border: "1px solid black",
  },
});

const SpareParts = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.whiteWrapper} justifyContent="center">
      <Grid container item xs={9} className={classes.wrapper}>
        <Grid container item xs={12} className={classes.partSection}>
          <Grid container item xs={3} className={classes.partSectionHeader}>
            <h3>Varaosat</h3>
          </Grid>
          <Grid container item xs={9}>
            <Grid container item xs={7} justifyContent="space-evenly">
              <Grid className={classes.imageTest}></Grid>
              <Grid className={classes.imageTest}></Grid>
            </Grid>
            <Grid container item xs={5} className={classes.partSectionList}>
              <h5>Ajoneuvoon</h5>
              <h5>Pienkoneeseen</h5>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={12} className={classes.partSection}>
          <Grid container item xs={3} className={classes.partSectionHeader}>
            <h3>Renkaat</h3>
          </Grid>
          <Grid container item xs={9}>
            <Grid container item xs={7} justifyContent="space-evenly">
              <Grid className={classes.imageTest}></Grid>
              <Grid className={classes.imageTest}></Grid>
            </Grid>
            <Grid container item xs={5} className={classes.partSectionList}>
              <h5>Henkilöauto</h5>
              <h5>Pakettiauto</h5>
              <h5>Maasturi</h5>
              <h5>Jotkin maatalouskoneet yms. Kysy lisätietoja!</h5>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={12} className={classes.partSection}>
          <Grid container item xs={3} className={classes.partSectionHeader}>
            <h3>Nestekaasut</h3>
          </Grid>
          <Grid container item xs={9}>
            <Grid container item xs={7} justifyContent="space-evenly">
              <Grid className={classes.imageTest}></Grid>
              <Grid className={classes.imageTest}></Grid>
            </Grid>
            <Grid container item xs={5} className={classes.partSectionList}>
              <h5>Grilliin</h5>
              <h5>Trukkiin</h5>
              <h5>Asuntoautoon</h5>
              <h5>Veneeseen</h5>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={12}>
          <Grid container item xs={3} className={classes.partSectionHeader}>
            <h3>Lämmitysöljyt</h3>
          </Grid>
          <Grid container item xs={9}>
            <Grid container item xs={7} justifyContent="space-evenly">
              <Grid className={classes.imageTest}></Grid>
              <Grid className={classes.imageTest}></Grid>
            </Grid>
            <Grid container item xs={5} className={classes.partSectionList}>
              <h5>Lisätietoja: Pekka 0400 - 826169</h5>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SpareParts;
