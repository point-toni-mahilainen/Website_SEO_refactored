import { Grid } from "@material-ui/core";
import React from "react";

interface Props {
  children?: React.ReactNode;
  index?: number;
  value: number;
  view?: string;
}

const TabPanel = (props: Props) => {
  const { children, value, index } = props;

  return (
    <Grid
      item
      hidden={value !== index}
      style={{ minHeight: "calc(100vh - 170px)", padding: "12.875em 0" }}
    >
      {value === index && <>{children}</>}
    </Grid>
  );
};

const TabPanels = (props: Props) => {
  const { value, view } = props;
  switch (view) {
    default:
      return <></>;
  }
};

export default React.memo(TabPanels);
