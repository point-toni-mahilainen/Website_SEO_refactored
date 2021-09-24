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
  carWashSection: {},
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

const CarWash = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.whiteWrapper} justifyContent="center">
      <Grid container item xs={9} className={classes.wrapper}>
        <Grid className={classes.stripe}></Grid>
        <Grid className={classes.header}>
          <h2>Autopesu</h2>
        </Grid>
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

export default React.memo(CarWash);
