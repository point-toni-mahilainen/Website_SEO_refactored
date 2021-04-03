import { Grid } from "@material-ui/core";
import React from "react";
import Cafeteria from "views/Cafe_Restaurant/Subviews/Cafeteria";
import Kitchen from "views/Cafe_Restaurant/Subviews/Kitchen";
import LunchKoski from "views/Cafe_Restaurant/Subviews/Lunch";
import LunchPalikkala from "views/Palikkala/Subviews/Lunch";
import CarWash from "views/Service_station/Subviews/CarWash";
import MaintenanceServices from "views/Service_station/Subviews/MaintenanceServices";
import SpareParts from "views/Service_station/Subviews/SpareParts";
import CafeSpareParts from "views/Palikkala/Subviews/CafeSpareParts";
import FuelsGasses from "views/Palikkala/Subviews/FuelsGasses";

interface Props {
  children?: React.ReactNode;
  index?: number;
  value: number;
  view?: string;
}

const TabPanel = (props: Props) => {
  const { children, value, index } = props;

  return (
    <Grid hidden={value !== index} style={{ height: "100%" }}>
      {value === index && <>{children}</>}
    </Grid>
  );
};

const TabPanels = (props: Props) => {
  const { value, view } = props;
  switch (view) {
    case "CafeRestaurant":
      return (
        <>
          <TabPanel value={value} index={0}>
            <Cafeteria />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <LunchKoski />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Kitchen />
          </TabPanel>
        </>
      );

    case "ServiceStation":
      return (
        <>
          <TabPanel value={value} index={0}>
            <SpareParts />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <MaintenanceServices />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <CarWash />
          </TabPanel>
        </>
      );

    case "Palikkala":
      return (
        <>
          <TabPanel value={value} index={0}>
            <LunchPalikkala />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <CafeSpareParts />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <FuelsGasses />
          </TabPanel>
        </>
      );

    default:
      return <></>;
  }
};

export default TabPanels;
