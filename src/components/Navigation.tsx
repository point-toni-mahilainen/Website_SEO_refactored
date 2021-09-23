import { Tab, Tabs, withStyles } from "@material-ui/core";
import { Routes } from "App";
import React from "react";
import { useHistory, useLocation } from "react-router";

const CustomTabs = withStyles({
  root: {
    height: 30,
    minHeight: 30,
  },
  fixed: {
    height: 30,
  },
  indicator: {
    backgroundColor: "transparent",
  },
})(Tabs);

const CustomTab = withStyles({
  root: {
    height: 30,
    minHeight: 30,
    color: "white",
    fontWeight: "normal",
    padding: "0 10px",
    "&$selected": {
      fontWeight: "bold",
      fontSize: "16px",
      color: "white",
    },
  },
  selected: {},
})((props: StyledTabProps) => <Tab disableRipple {...props} />);

interface StyledTabProps {
  label: string;
  value?: string;
  style?: object;
}

const Navigation = () => {
  const location = useLocation();
  const history = useHistory();

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: string) => {
    history.push(newValue);
  };

  return (
    <CustomTabs value={location.pathname} onChange={handleChange}>
      <CustomTab label={"Etusivu"} value={Routes.Main}></CustomTab>
      <CustomTab label={"Kahvila"} value={Routes.Cafeteria}></CustomTab>
      <CustomTab label={"Autohuolto"} value={Routes.CarService}></CustomTab>
      <CustomTab label={"SEO Palikkala"} value={Routes.Palikkala}></CustomTab>
      <CustomTab label={"Rekry"} value={Routes.Recruiting}></CustomTab>
      <CustomTab label={"Yhteystiedot"} value={Routes.ContactInfo}></CustomTab>
    </CustomTabs>
  );
};

export default React.memo(Navigation);
