interface Props {
  title: string;
}

const FooterHeader = (props: Props) => (
  <h2 style={{ marginBottom: 10 }}>{props.title}</h2>
);

export default FooterHeader;
