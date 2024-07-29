import "./infoItem.scss";

type InfoItemProps = {
  title: string;
  descr: string;
};

function InfoItem({ title, descr }: InfoItemProps) {
  return (
    <div className="infoItem">
      <div className="infoItem_title">{title}</div>
      <div className="infoItem_descr">{descr}</div>
    </div>
  );
}

export default InfoItem;
