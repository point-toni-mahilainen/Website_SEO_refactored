import React from "react";
import logo from "../img/seologo-3.png";

const Logo = () => {
  return (
    <a href="/" style={{ position: "absolute", left: 0, marginLeft: "1em" }}>
      <img src={logo} alt="SEO Logo" height="45px" />
    </a>
  );
};

export default React.memo(Logo);
