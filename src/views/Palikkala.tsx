import { Grid } from "@material-ui/core";
import TopImage from "components/TopImage";

const Palikkala = () => {
  return (
    <Grid>
      <TopImage page="Palikkala" />
      <Grid
        container
        style={{
          width: "100%",
          minHeight: "calc(100vh - 70px - 300px)",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <h1>Sisältö tähän</h1>
      </Grid>
    </Grid>
  );
};

export default Palikkala;
