import { Grid, Tab, Tabs, withStyles } from "@material-ui/core";
import TabPanels from "components/TabPanels";
import React, { useState } from "react";

const CustomTab = withStyles({
  root: {
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
  value: number;
}

const CafeRestaurant = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const tabNames = ["Kahvila", "Lounas", "Keittiö"];

  return (
    <>
      <Grid
        container
        justifyContent="center"
        style={{
          backgroundColor: "rgba(5, 6, 154, .8)",
          borderTop: "2px solid #ffffff",
        }}
      >
        <Tabs value={value} onChange={handleChange}>
          <CustomTab label={tabNames[0]} value={0}></CustomTab>
          <CustomTab label={tabNames[1]} value={1}></CustomTab>
          <CustomTab label={tabNames[2]} value={2}></CustomTab>
        </Tabs>
      </Grid>
      <Grid>
        <TabPanels value={value} view="CafeRestaurant" />
      </Grid>
    </>
  );
};

export default CafeRestaurant;
