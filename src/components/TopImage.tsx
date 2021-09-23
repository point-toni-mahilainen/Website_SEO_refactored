import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import back from "../img/back.jpg";

const useStyles = createUseStyles({
  container: {
    height: "300px",
    backgroundColor: "white",
    borderBottom: "1px solid black",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
});

interface Props {
  page: string;
}

const TopImage = (props: Props) => {
  const { page } = props;
  const classes = useStyles();
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    switch (page) {
      case "CarService":
        setImageSrc(back);
        break;
      case "Cafeteria":
        setImageSrc(back);
        break;
      case "Palikkala":
        setImageSrc(back);
        break;
      case "Recruiting":
        setImageSrc(back);
        break;

      default:
    }
  }, [imageSrc, page]);

  return (
    <Grid container className={classes.container}>
      <h1>Kuva tähän</h1>
      {/* <img src={imageSrc} /> */}
    </Grid>
  );
};

export default React.memo(TopImage);
