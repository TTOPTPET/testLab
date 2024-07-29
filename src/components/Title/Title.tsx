import "./title.scss";

type TitleProps = {
  title: string;
};

function Title({ title }: TitleProps) {
  return <div className="title">{title}</div>;
}

export default Title;
