import { useRef, useState } from "react";
import { ReactComponent as Plus } from "../../assets/icons/plus.svg";
import "./accordion.scss";

type AccordionProps = {
  title: string;
  descr: string;
};

function Accordion({ title, descr }: AccordionProps) {
  const contentHeight = useRef<any>(null);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="line"></div>
      <div className="accordion">
        <button
          className="accordion_button"
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        >
          <div className="accordion_button_title">{title}</div>
          <Plus
            fill="#191C1F"
            className={
              isOpen
                ? "accordion_button_icon accordion_button_icon__active"
                : "accordion_button_icon "
            }
          />
        </button>

        <div
          ref={contentHeight}
          className={"accordion_descr"}
          style={
            isOpen
              ? {
                  height: contentHeight?.current?.scrollHeight + 15,
                }
              : { height: "0px" }
          }
        >
          <div className="accordion_descr_text">{descr}</div>
        </div>
      </div>
    </>
  );
}

export default Accordion;
