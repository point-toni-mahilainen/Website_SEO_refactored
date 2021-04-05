import { Grid } from "@material-ui/core";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  whiteWrapper: {
    backgroundColor: "#ffffff",
  },
  story: {
    height: "fit-content",
    margin: "15px 0",
    padding: "0 20px",
    borderRight: "1px solid #2829A7",
    borderLeft: "1px solid #2829A7",
  },
});

const Company = () => {
  const classes = useStyles();

  return (
    <Grid style={{ minHeight: "100%", padding: "16em 0" }}>
      <Grid
        container
        item
        xs={12}
        className={classes.whiteWrapper}
        justifyContent="center"
      >
        <Grid item xs={6} className={classes.story}>
          <h2>Meidän tarina</h2>
          <p>
            Asemiemme tarkoituksena on tarjota perinteistä sekä
            kokonaisvaltaista huoltoasemapalvelua alueen asukkaille sekä,
            satunnaiskävijöille.
            <br />
            <br />
            Kosken Autohuolto Oy on vuonna 1995 perustettu perheyritys. Pekka
            Kanasuo ja Kai Lepistö ostivat huoltoaseman Kosken keskustasta.
            Huoltamotoiminnan lisäksi kysyntää oli myös kahvilalle, joten pian
            alkoi myös kahvion suunnittelu ja rakennus. Laajennuksen
            valmistuttua kahvion ovet avattiin vuonna 1998. Samalla yritys sai
            uuden yrittäjän Aila Lepistön. Myöhemmin toimintaa laajennettiin
            vielä rakentamalla autojen pikapesula. Kosken Autohuolto Oy eli
            tuttavallisemmin Kosken SEO työllistää tällä hetkellä, yrittäjien
            itsensä lisäksi, kuusi vakituista ja useamman osa-aikaisen
            työntekijän.
            <br />
            <br />
            Kosken SEO ja nykyisin myös Palikkakan SEO sijaitsevat
            ihanteellisilla paikoilla Kosken asukkaiden sekä ohikulkevien
            asiakkaiden kannalta. Asemamme tarjoavat asiakkailleen suuren
            valikoiman erilaisia tuotteita ja palveluja arjen tarpeisiin. Olemme
            kilpailukykyisiä suurten liikenneasemien rinnalla, erityisesti
            asiantunteva ja avulias henkilökunta sekä hyvä palvelu yhdistettynä
            perinteiseen huoltoasematunnelmaan ovat vahvuuksiamme. Laadukkaan
            huoltamotoiminnan lisäksi kahvioistamme saa joka päivä tuoreita
            leivonnaisia, joita on myös mahdollista tilata erilaisiin
            tilaisuuksiin. Keittiöissämme teemme päivittäin runsaan valikoiman
            erilaisia ruokia, pieneen tai suureen nälkään. Arkisin tarjolla on
            tottakai myös perinteistä kotiruokaa noutopöytälounaan muodossa.
            <br />
            <br />
            Ystävällisin terveisin,
            <br />
            <br />
            Aila, Pekka, Kai
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Company;
