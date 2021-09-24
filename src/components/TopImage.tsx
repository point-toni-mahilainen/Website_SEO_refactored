import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import back from "../img/back_narrow.jpg";

const useStyles = createUseStyles({
  container: {
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    height: "300px",
    width: "100%",
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
      case "ContactInfo":
        setImageSrc(back);
        break;
      default:
    }
  }, [page]);

  return (
    <Grid
      container
      className={classes.container}
      style={{ backgroundImage: `url(${imageSrc})` }}
    ></Grid>
  );
};

export default React.memo(TopImage);
