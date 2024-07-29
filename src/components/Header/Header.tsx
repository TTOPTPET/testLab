import { useState } from "react";
import "./header.scss";
import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";
import { useMediaQuery } from "react-responsive";

const menuData = [
  {
    id: 1,
    link: "#conseil",
    title: "Как это работает",
  },
  {
    id: 2,
    link: "#third",
    title: "3-й блок",
  },
  {
    id: 3,
    link: "#questions",
    title: "Вопросы и ответы",
  },
  {
    id: 4,
    link: "#form",
    title: "Форма",
  },
];

function Header() {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1250px)" });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">
      <div className="header_logo">
        <div className="header_logo_image">
          <div className="header_logo_image_circle header_logo_image_circle__blue"></div>
          <div className="header_logo_image_circle header_logo_image_circle__white"></div>
        </div>
        <div
          className={
            isOpen
              ? "header_logo_text header_logo_text__black"
              : "header_logo_text"
          }
        >
          testLab
        </div>
      </div>
      {isBigScreen ? (
        <div className="header_menu">
          <a href="#conseil" className="header_menu_item">
            Как это работает
          </a>
          <a href="#third" className="header_menu_item">
            3-й блок
          </a>
          <a href="#questions" className="header_menu_item">
            Вопросы и ответы
          </a>
          <a href="#form" className="header_menu_item">
            Форма
          </a>
        </div>
      ) : (
        <>
          <div
            className={
              isOpen
                ? "header_hamburger header_hamburger__active"
                : "header_hamburger"
            }
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <div className="header_hamburger_item"></div>
            <div className="header_hamburger_item"></div>
          </div>
          <div
            className={
              isOpen
                ? "header_hamburger_menu header_hamburger_menu__active"
                : "header_hamburger_menu"
            }
          >
            <div className="header_hamburger_menu_list">
              {menuData.map((item) => {
                return (
                  <div key={item.id}>
                    <div className="header_hamburger_menu_list_line"></div>
                    <a
                      href={"$" + item.link}
                      className="header_hamburger_menu_list_item"
                      onClick={() => {
                        setIsOpen((prev) => !prev);
                      }}
                    >
                      <div className="header_hamburger_menu_list_item_text">
                        {item.title}
                      </div>
                      <Arrow className="header_hamburger_menu_list_item_icon" />
                    </a>
                  </div>
                );
              })}
              <div className="header_hamburger_menu_list_line"></div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Header;
