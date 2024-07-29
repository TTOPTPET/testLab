import "./sliderItem.scss";
import noPhoto from "../../assets/noPhoto.svg";

type SliderItemProps = {
  name: string;
  city: string;
  descr: string;
  photo?: string;
};

function SliderItem({ city, descr, name, photo }: SliderItemProps) {
  return (
    <div className="sliderItem">
      <div className="sliderItem_header">
        <div className="sliderItem_header_avatar">
          {photo ? (
            <img
              src={photo}
              alt="avatar"
              className="sliderItem_header_avatar_photo"
            />
          ) : (
            <img
              src={noPhoto}
              alt="no user avatar"
              className="sliderItem_header_avatar_noPhoto"
            />
          )}
        </div>
        <div className="sliderItem_header_info">
          <div className="sliderItem_header_info_name">{name}</div>
          <div className="sliderItem_header_info_city">{city}</div>
        </div>
      </div>
      <div className="sliderItem_descr">{descr}</div>
    </div>
  );
}

export default SliderItem;
