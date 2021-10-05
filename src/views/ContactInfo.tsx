import { Grid } from "@material-ui/core";
import ContactDetails from "components/ContactDetails";
import GoogleMaps from "components/GoogleMaps";
import OpeningHours from "components/OpeningHours";
import TopImage from "components/TopImage";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    width: "100%",
    backgroundColor: "#ffffff",
    justifyContent: "center",
  },
  contactInfo: {
    textAlign: "center",
    margin: "30px 0",
    padding: "0 45px",
    borderRight: "1px solid #2829A7",
    borderLeft: "1px solid #2829A7",
  },
});

const Company = () => {
  const { REACT_APP_GOOGLE_API_KEY } = process.env;
  const classes = useStyles();

  return (
    <>
      <TopImage page="ContactInfo" />
      <Grid container item xs={12} className={classes.wrapper}>
        <Grid container item xs={8} className={classes.contactInfo}>
          <Grid
            container
            item
            xs={6}
            flexDirection="column"
            alignItems="center"
          >
            <ContactDetails />
            <Grid style={{ height: 20 }}></Grid>
            <OpeningHours flexDirection="row" />
          </Grid>
          <Grid container item xs={6} justifyContent="center">
            <GoogleMaps
              isMarkerShown
              defaultZoom={10}
              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${REACT_APP_GOOGLE_API_KEY}`}
              loadingElement={<div style={{ height: "100%", width: "100%" }} />}
              containerElement={
                <div style={{ height: "100%", width: "100%" }} />
              }
              mapElement={<div style={{ height: "100%", width: "100%" }} />}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default React.memo(Company);
