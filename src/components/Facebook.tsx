import { Facebook as FacebookIcon } from "@material-ui/icons";

const Facebook = () => {
  return (
    <a
      href="https://www.facebook.com/koskenseo/"
      target="blank"
      style={{ position: "absolute", top: 0, right: 0, margin: "1em" }}
    >
      <FacebookIcon style={{ color: "white", width: "2em", height: "2em" }} />
    </a>
  );
};

export default Facebook;
