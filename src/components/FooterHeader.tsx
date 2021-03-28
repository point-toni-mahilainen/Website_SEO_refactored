interface Props {
  title: string;
}

const FooterHeader = (props: Props) => (
  <h2 style={{ marginBottom: 15 }}>{props.title}</h2>
);

export default FooterHeader;
