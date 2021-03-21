import React, { useState } from "react";
import { Tab, Tabs, withStyles } from "@material-ui/core";
import TabPanels from "components/TabPanels";

const CustomTab = withStyles({
  root: {},
})(Tab);

const ServiceStation = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const tabNames = ["Huoltopalvelut", "Varaosat", "Autopesu"];

  return (
    <>
      <h2>ServiceStation</h2>
      <Tabs value={value} onChange={handleChange}>
        <CustomTab label={tabNames[0]} value={0}></CustomTab>
        <CustomTab label={tabNames[1]} value={1}></CustomTab>
        <CustomTab label={tabNames[2]} value={2}></CustomTab>
      </Tabs>
      <TabPanels value={value} view="Palikkala" />
    </>
  );
};

export default ServiceStation;
