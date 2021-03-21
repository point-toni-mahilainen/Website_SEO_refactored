import { Tab, Tabs, withStyles } from "@material-ui/core";
import { Routes } from "App";
import React from "react";
import { useHistory, useLocation } from "react-router";

interface StyledTabsProps {
  value: string;
  onChange: (event: React.ChangeEvent<{}>, newValue: string) => void;
}

const CustomTabs = withStyles({
  root: {
    height: 30,
    minHeight: 30,
  },
  fixed: {
    height: 30,
  },
  indicator: {
    backgroundColor: "white",
  },
})(Tabs);

const CustomTab = withStyles({
  root: {
    height: 30,
    minHeight: 30,
    color: "white",
    fontWeight: "bold",
    padding: "0 10px",
    "&$selected": {
      color: "white",
    },
  },
  selected: {},
})((props: StyledTabProps) => <Tab disableRipple {...props} />);

interface StyledTabProps {
  label: string;
  value?: string;
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
      <CustomTab label={"Yritys"} value={Routes.Company}></CustomTab>
      <CustomTab
        label={"Kahvila / Ravintola"}
        value={Routes.CafeRestaurant}
      ></CustomTab>
      <CustomTab label={"Huoltamo"} value={Routes.ServiceStation}></CustomTab>
      <CustomTab label={"SEO Palikkala"} value={Routes.Palikkala}></CustomTab>
      <CustomTab label={"Palaute"} value={Routes.Contact}></CustomTab>
    </CustomTabs>
  );
};

export default Navigation;
