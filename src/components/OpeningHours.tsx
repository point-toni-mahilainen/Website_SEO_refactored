import { Grid } from "@material-ui/core";
import React from "react";
import { createUseStyles } from "react-jss";
import FooterHeader from "./FooterHeader";

interface Props {
  flexDirection: "row" | "column";
}

const useStyles = createUseStyles({
  list: {
    lineHeight: "25px",
  },
});

const SeoKoski = () => {
  const classes = useStyles();
  return (
    <>
      <h4>SEO Koski</h4>
      <ul className={classes.list}>
        <li>
          <b>Maanantai - Perjantai</b>
        </li>
        <li>06.00 - 19.00</li>
        <li>
          <b>Lauantai</b>
        </li>
        <li>08.00 - 16.00</li>
        <li>
          <b>Sunnuntai</b>
        </li>
        <li>09.00 - 16.00</li>
      </ul>
    </>
  );
};

const SeoPalikkala = () => {
  const classes = useStyles();
  return (
    <>
      <h4>SEO Palikkala</h4>
      <ul className={classes.list}>
        <li>
          <b>Maanantai - Perjantai</b>
        </li>
        <li>07.30 - 16.00</li>
      </ul>
    </>
  );
};

const OpeningHours = (props: Props) => {
  const { flexDirection } = props;
  return (
    <Grid style={{ width: "fit-content" }}>
      <FooterHeader title="Aukioloajat" />
      <Grid container item flexDirection={flexDirection} spacing={5}>
        <Grid item xs={6}>
          <SeoKoski />
        </Grid>
        <Grid item xs={6}>
          <SeoPalikkala />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default React.memo(OpeningHours);
