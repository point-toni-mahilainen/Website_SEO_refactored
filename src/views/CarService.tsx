import { Grid } from "@material-ui/core";
import MaintenanceServices from "./Subsections/Car_service/MaintenanceServices";
import GassesOils from "./Subsections/Car_service/GassesOils";
import CarWash from "./Subsections/Car_service/CarWash";
import TopImage from "components/TopImage";
import React from "react";

const CarService = () => {
  return (
    <Grid>
      <TopImage page="CarService" />
      <MaintenanceServices />
      <GassesOils />
      <CarWash />
    </Grid>
  );
};

export default React.memo(CarService);
