import { Grid } from "@material-ui/core";
import ContactDetails from "./ContactDetails";
import FooterHeader from "./FooterHeader";
import GoogleMaps from "./GoogleMaps";
import OpeningHours from "./OpeningHours";

const Footer = () => {
  const { REACT_APP_GOOGLE_API_KEY } = process.env;
  console.log(REACT_APP_GOOGLE_API_KEY);
  return (
    <Grid
      container
      justifyContent="center"
      style={{
        height: "fit-content",
        backgroundColor: "#2829A7",
        padding: "15px 0",
      }}
    >
      <Grid
        container
        item
        xs={10}
        style={{ color: "white", textAlign: "center" }}
      >
        <Grid item xs={4}>
          <ContactDetails />
        </Grid>
        <Grid
          container
          flexDirection="column"
          item
          xs={4}
          style={{
            borderRight: "1px solid white",
            borderLeft: "1px solid white",
          }}
        >
          <OpeningHours flexDirection="row" />
        </Grid>
        <Grid
          container
          item
          xs={4}
          alignContent="center"
          flexDirection="column"
        >
          <FooterHeader title="Sijainti" />
          <GoogleMaps
            isMarkerShown
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${REACT_APP_GOOGLE_API_KEY}`}
            loadingElement={<div style={{ height: "180px", width: "400px" }} />}
            containerElement={
              <div style={{ height: "180px", width: "400px" }} />
            }
            mapElement={<div style={{ height: "180px", width: "400px" }} />}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
