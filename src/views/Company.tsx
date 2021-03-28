import { Grid } from "@material-ui/core";
import React from "react";

const Company = () => {
  return (
    <Grid container justifyContent="center" style={{ minHeight: "100%" }}>
      <Grid
        item
        xs={6}
        style={{
          height: "fit-content",
          marginTop: "50px",
          backgroundColor: "rgba(5, 6, 154, .8)",
          borderRadius: "10px",
          color: "#ffffff",
          padding: "15px",
        }}
      >
        <h2>Meidän tarina</h2>
        <p>
          Asemiemme tarkoituksena on tarjota perinteistä sekä kokonaisvaltaista
          huoltoasemapalvelua alueen asukkaille sekä, satunnaiskävijöille.
          <br />
          <br />
          Kosken Autohuolto Oy on vuonna 1995 perustettu perheyritys. Pekka
          Kanasuo ja Kai Lepistö ostivat huoltoaseman Kosken keskustasta.
          Huoltamotoiminnan lisäksi kysyntää oli myös kahvilalle, joten pian
          alkoi myös kahvion suunnittelu ja rakennus. Laajennuksen valmistuttua
          kahvion ovet avattiin vuonna 1998. Samalla yritys sai uuden yrittäjän
          Aila Lepistön. Myöhemmin toimintaa laajennettiin vielä rakentamalla
          autojen pikapesula. Kosken Autohuolto Oy eli tuttavallisemmin Kosken
          SEO työllistää tällä hetkellä, yrittäjien itsensä lisäksi, kuusi
          vakituista ja useamman osa-aikaisen työntekijän.
          <br />
          <br />
          Kosken SEO ja nykyisin myös Palikkakan SEO sijaitsevat ihanteellisilla
          paikoilla Kosken asukkaiden sekä ohikulkevien asiakkaiden kannalta.
          Asemamme tarjoavat asiakkailleen suuren valikoiman erilaisia tuotteita
          ja palveluja arjen tarpeisiin. Olemme kilpailukykyisiä suurten
          liikenneasemien rinnalla, erityisesti asiantunteva ja avulias
          henkilökunta sekä hyvä palvelu yhdistettynä perinteiseen
          huoltoasematunnelmaan ovat vahvuuksiamme. Laadukkaan huoltamotoiminnan
          lisäksi kahvioistamme saa joka päivä tuoreita leivonnaisia, joita on
          myös mahdollista tilata erilaisiin tilaisuuksiin. Keittiöissämme
          teemme päivittäin runsaan valikoiman erilaisia ruokia, pieneen tai
          suureen nälkään. Arkisin tarjolla on tottakai myös perinteistä
          kotiruokaa noutopöytälounaan muodossa.
          <br />
          <br />
          Ystävällisin terveisin,
          <br />
          <br />
          Aila, Pekka, Kai
        </p>
      </Grid>
    </Grid>
  );
};

export default Company;
