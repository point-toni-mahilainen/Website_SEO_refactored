import { Tab, Tabs, withStyles } from "@material-ui/core";
import { Routes } from "App";
import React from "react";
import { useHistory, useLocation } from "react-router";

const CustomTab = withStyles({
  root: {
    color: "white",
  },
})(Tab);

const Navigation = () => {
  const location = useLocation();
  const history = useHistory();

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: string) => {
    history.push(newValue);
  };

  return (
    <Tabs value={location.pathname} onChange={handleChange}>
      <CustomTab label={"Etusivu"} value={Routes.Main}></CustomTab>
      <CustomTab label={"Yritys"} value={Routes.Company}></CustomTab>
      <CustomTab
        label={"Kahvila / Ravintola"}
        value={Routes.CafeRestaurant}
      ></CustomTab>
      <CustomTab label={"Huoltamo"} value={Routes.ServiceStation}></CustomTab>
      <CustomTab label={"SEO Palikkala"} value={Routes.Palikkala}></CustomTab>
      <CustomTab label={"Palaute"} value={Routes.Contact}></CustomTab>
    </Tabs>
  );
};

export default Navigation;
