import { Grid } from "@material-ui/core";
import TopImage from "components/TopImage";
import React from "react";
import Cafeteria from "./Subsections/Cafeteria/Cafeteria";
import Kitchen from "./Subsections/Cafeteria/Kitchen";
import Lunch from "./Subsections/Cafeteria/Lunch";

const CafeRestaurant = () => {
  return (
    <Grid>
      <TopImage page="Cafeteria" />
      <Cafeteria />
      <Lunch />
      <Kitchen />
    </Grid>
  );
};

export default React.memo(CafeRestaurant);
