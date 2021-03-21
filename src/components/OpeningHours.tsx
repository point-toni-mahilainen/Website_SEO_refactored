import { Grid } from "@material-ui/core";
import React from "react";
import FooterHeader from "./FooterHeader";

const SeoKoski = () => {
  return (
    <>
      <h5>SEO Koski</h5>
      <ul>
        <li>Maanantai - Perjantai</li>
        <li>06.00 - 19.00</li>
        <li>Lauantai</li>
        <li>08.00 - 16.00</li>
        <li>Sunnuntai</li>
        <li>09.00 - 16.00</li>
      </ul>
    </>
  );
};

const SeoPalikkala = () => {
  return (
    <>
      <h5>SEO Palikkala</h5>
      <ul>
        <li>Maanantai - Perjantai</li>
        <li>07.30 - 16.00</li>
      </ul>
    </>
  );
};

const OpeningHours = () => {
  return (
    <>
      <FooterHeader title="Aukioloajat" />
      <Grid container item>
        <Grid item xs={6}>
          <SeoKoski />
        </Grid>
        <Grid item xs={6}>
          <SeoPalikkala />
        </Grid>
      </Grid>
    </>
  );
};

export default OpeningHours;
