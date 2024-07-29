import Slider from "react-slick";
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";

import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";

import "./mySlider.scss";
import SliderItem from "../SliderItem/SliderItem";
import { useMediaQuery } from "react-responsive";

const data = [
  {
    id: 1,
    name: "Константинов Михаил Павлович",
    city: "Санкт-Петербург",
    descr:
      "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы ",
  },
  {
    id: 2,
    photo: avatar1,
    name: "Иван Иванов",
    city: "Санкт-Петербург",
    descr:
      "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.",
  },
  {
    id: 3,
    photo: avatar2,
    name: "Артем Корнилов",
    city: "Самара",
    descr:
      "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.",
  },
];

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <Arrow
      fill="#C2C8CD"
      className={className + " " + "slider_button slider_button__next"}
      style={{ ...style, display: "block", width: "32px", height: "40px" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <Arrow
      fill="#C2C8CD"
      className={className + " " + "slider_button slider_button_prev"}
      style={{ ...style, display: "block", width: "32px", height: "40px" }}
      onClick={onClick}
    />
  );
}

function MySlider() {
  const moreThenBig = useMediaQuery({ query: "(min-width: 1250px)" });
  const lessThenMedium = useMediaQuery({ query: "(max-width: 768px)" });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: lessThenMedium ? 1 : moreThenBig ? 3 : 2,
    slidesToScroll: 1,
    dotsClass: "slick-dots slider_dots",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    className: "slider",
    arrows: moreThenBig ? true : false,
    adaptiveHeight: true,
  };
  return (
    <Slider {...settings}>
      {data.map((item) => {
        return (
          <SliderItem
            city={item.city}
            descr={item.descr}
            name={item.name}
            photo={item.photo}
            key={item.id}
          />
        );
      })}
    </Slider>
  );
}

export default MySlider;
