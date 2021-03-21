import { Tab, Tabs, withStyles } from "@material-ui/core";
import TabPanels from "components/TabPanels";
import React, { useState } from "react";

const CustomTab = withStyles({
  root: {},
})(Tab);

const CafeRestaurant = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const tabNames = ["Kahvila", "Lounas", "Keittiö"];

  return (
    <>
      <h2>CafeRestaurant</h2>
      <Tabs value={value} onChange={handleChange}>
        <CustomTab label={tabNames[0]} value={0}></CustomTab>
        <CustomTab label={tabNames[1]} value={1}></CustomTab>
        <CustomTab label={tabNames[2]} value={2}></CustomTab>
      </Tabs>
      <TabPanels value={value} view="CafeRestaurant" />
    </>
  );
};

export default CafeRestaurant;
