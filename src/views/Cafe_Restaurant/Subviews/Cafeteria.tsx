import { Grid } from "@material-ui/core";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    height: "calc(100% - 50px)",
  },
  list: {
    width: "60%",
    height: "60%",
    marginTop: "50px",
    color: "#ffffff",
    backgroundColor: "rgba(5, 6, 154, .8)",
    borderRadius: "10px",
  },
  right: {},
});

const Cafeteria = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid container item xs={3} justifyContent="center">
        <Grid item className={classes.list}>
          <p>Tähän lista kahvilan tuotteista</p>
        </Grid>
      </Grid>
      <Grid item xs={9}>
        <p>
          Tähän otsikoksi: "Meiltä aamulla leivotut tuoreet leivonnaiset joka
          päivä!" <br />
          ja sen alle "Myymme leivonnaisia mukaan sekä myös tilauksesta!"
          <br />
          Näiden alle kuvia erilliseen diviin
        </p>
      </Grid>
    </Grid>
  );
};

export default Cafeteria;
