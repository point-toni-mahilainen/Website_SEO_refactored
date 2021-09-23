import { Facebook as FacebookIcon } from "@material-ui/icons";
import React from "react";

const Facebook = () => {
  return (
    <a
      href="https://www.facebook.com/koskenseo/"
      target="blank"
      style={{ position: "absolute", right: 0, marginRight: "1em" }}
    >
      <FacebookIcon style={{ color: "white", width: "2em", height: "2em" }} />
    </a>
  );
};

export default React.memo(Facebook);
