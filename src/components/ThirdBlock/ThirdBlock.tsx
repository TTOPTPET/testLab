import "./thirdBlock.scss";
import Container from "../Container/Container";
import thirdBlock1 from "../../assets/thirdBlock1.png";
import thirdBlock2 from "../../assets/thirdBlock2.png";

function ThirdBlock() {
  return (
    <Container>
      <div className="thirdBlock" id="third">
        <div className="thirdBlock_text">
          <div className="thirdBlock_text_title">
            Круто, ты дошел до третьего блока
          </div>
          <div className="thirdBlock_text_descr">
            63% опрошенных пользовались кредитами из-за того, что не могли
            покрыть непредвиденные расходы свыше 15 000 ₽.
            <br />
            <br />
            Доступ к заработанным деньгам помогает отказаться от кредитов и
            экономить деньги на процентах и штрафах.
          </div>
        </div>
        <div className="thirdBlock_image">
          <div className="thirdBlock_image_firstPlan">
            <img
              src={thirdBlock1}
              alt="phone"
              className="thirdBlock_image_photo"
            />
          </div>
          <div className="thirdBlock_image_secondPlan">
            <img
              src={thirdBlock2}
              alt="car"
              className="thirdBlock_image_photo"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ThirdBlock;
