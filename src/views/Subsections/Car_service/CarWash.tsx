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
  carWashSection: {
    marginBottom: 20,
    borderBottom: "1px solid #2829A7",
  },
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
  common: {
    margin: 10,
    flexDirection: "row",
  },
  contentListLeft: {
    flexDirection: "row",
    "& h5": {
      margin: "0 10px",
    },
  },
  contentListRight: {
    flexDirection: "column",
    "& h6": {
      marginLeft: "10px",
    },
  },
  imageTest: {
    height: 150,
    width: 150,
    border: "1px solid black",
  },
});

const CarWash = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.whiteWrapper} justifyContent="center">
      <Grid container item xs={9} className={classes.wrapper}>
        <h2>Autopesu</h2>
        <Grid container item xs={12} className={classes.carWashSection}>
          <Grid container item xs={4} className={classes.images}>
            <Grid className={classes.imageTest}></Grid>
            <Grid className={classes.imageTest}></Grid>
          </Grid>
          <Grid container item xs={8} className={classes.content}>
            <Grid container item xs={12} className={classes.contentHeader}>
              <h3>Yleistä</h3>
            </Grid>
            <Grid container item xs={12} className={classes.common}>
              <Grid container item xs={5} className={classes.contentListRight}>
                <ul>
                  <h5>Esipesu korkeapaineella</h5>
                  <h5>Kaksikomponenttinen kuumavahaus</h5>
                  <h5>10 harjallista pesuohjelmaa</h5>
                  <h5>Pesupassilla joka kuudes (6.) peruspesu ilmainen</h5>
                  <h5>Kysy omaa passia kassalta!</h5>
                </ul>
                <h5>Ajoneuvon maksimi koko</h5>
                <ul>
                  <h6>Korkeus: 2.7 m</h6>
                  <h6>Leveys: 2.24 m</h6>
                  <h6>Pituus: 5.5 m</h6>
                </ul>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={12} className={classes.carWashSection}>
          <Grid container item xs={4} className={classes.images}>
            <Grid className={classes.imageTest}></Grid>
            <Grid className={classes.imageTest}></Grid>
          </Grid>
          <Grid container item xs={8} className={classes.content}>
            <Grid container item xs={12} className={classes.contentHeader}>
              <h3>Pesuohjelmat</h3>
            </Grid>
            <Grid container item xs={12} className={classes.contentList}>
              <ul>
                <h5>Perus</h5>
                <h5>Super</h5>
                <h5>Hyper</h5>
                <h5>Ekstra</h5>
              </ul>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CarWash;
