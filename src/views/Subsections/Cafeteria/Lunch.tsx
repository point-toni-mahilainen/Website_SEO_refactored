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
    // borderTop: "1px solid #2829A7",
  },
  wrapper: {
    margin: "15px 0",
    padding: "0 20px 20px 20px",
  },
  lunch: {
    width: 360,
    paddingRight: 20,
  },
  images: {
    width: "calc(100% - 360px)",
  },
  imageTest: {
    padding: "9%",
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

const Lunch = () => {
  const { REACT_APP_FACEBOOK_APP_ID } = process.env;
  const classes = useStyles();
  return (
    <Grid container className={classes.whiteWrapper} justifyContent="center">
      <Grid container item xs={9} className={classes.wrapper}>
        <Grid className={classes.stripe}></Grid>
        <Grid className={classes.header}>
          <h2>Lounas</h2>
        </Grid>
        <Grid container item className={classes.lunch}>
          <iframe
            src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fkoskenseo&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=${REACT_APP_FACEBOOK_APP_ID}`}
            width="340"
            height="500"
            style={{ border: "none", overflow: "hidden" }}
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            title="facebook-koski"
          ></iframe>
        </Grid>
        <Grid container item className={classes.images}>
          <Grid item xs={12}>
            <h3 style={{ fontStyle: "italic", margin: "0 0 20px 0" }}>
              "Kotitekoinen ja perinteinen lounas joka arkipäivä!"
            </h3>
            <hr style={{ width: "100%", margin: 0 }} />
          </Grid>
          <Grid container item xs={12}>
            <Grid
              container
              item
              xs={12}
              justifyContent="space-between"
              style={{ paddingTop: "20px" }}
            >
              <Grid className={classes.imageTest}></Grid>
              <Grid className={classes.imageTest}></Grid>
              <Grid className={classes.imageTest}></Grid>
              <Grid className={classes.imageTest}></Grid>
              <Grid className={classes.imageTest}></Grid>
            </Grid>
            <Grid
              container
              item
              xs={12}
              justifyContent="space-between"
              style={{ paddingTop: "20px" }}
            >
              <Grid className={classes.imageTest}></Grid>
              <Grid className={classes.imageTest}></Grid>
              <Grid className={classes.imageTest}></Grid>
              <Grid className={classes.imageTest}></Grid>
              <Grid className={classes.imageTest}></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default React.memo(Lunch);
