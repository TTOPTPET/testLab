import "./conseilItem.scss";

type ConseilItemProps = {
  icon: string;
  title: string;
  descr: string;
};

function ConseilItem({ descr, icon, title }: ConseilItemProps) {
  return (
    <div className="conseilItem">
      <div className="conseilItem_image">
        <img src={icon} alt="icon" className="conseilItem_icon" />
      </div>
      <div className="conseilItem_text">
        <div className="conseilItem_text_title">{title}</div>
        <div className="conseilItem_text_descr">{descr}</div>
      </div>
    </div>
  );
}

export default ConseilItem;
