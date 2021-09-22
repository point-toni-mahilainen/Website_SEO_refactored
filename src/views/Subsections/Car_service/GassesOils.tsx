import { Grid } from "@material-ui/core";
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
        <h2>Kaasut ja öljyt</h2>
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

export default SpareParts;
