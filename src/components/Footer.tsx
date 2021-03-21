import { Grid } from "@material-ui/core";
import ContactDetails from "./ContactDetails";
import FooterHeader from "./FooterHeader";
import OpeningHours from "./OpeningHours";

const Footer = () => {
  return (
    <Grid
      container
      justifyContent="center"
      style={{
        height: "fit-content",
        backgroundColor: "#2829A7",
        padding: "10px 0",
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
          <OpeningHours />
        </Grid>
        <Grid item xs={4}>
          <FooterHeader title="Sijainti" />
          <iframe
            title="Kosken autohuolto Oy:n toimipaikat kartalla"
            src="https://www.google.com/maps/d/u/0/embed?mid=1apQ8Ch6OQ0LNuxhRXjcUYb8NiMZplyak&ll=60.755132,23.320535&z=9"
          ></iframe>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
