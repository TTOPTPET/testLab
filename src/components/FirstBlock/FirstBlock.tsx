import "./firstBlock.scss";
import Header from "../Header/Header";
import Container from "../Container/Container";

function FirstBlock() {
  return (
    <div className="firstBlock">
      <div className="firstBlock_bg"></div>
      <div className="firstBlock_layout"></div>
      <Container>
        <Header />
        <div className="firstBlock_content">
          <div className="firstBlock_content_text">
            <div className="firstBlock_content_text_title">
              Говорят, никогда не поздно <br /> сменить профессию
            </div>
            <div className="firstBlock_content_text_subtitle">
              Сделай круто тестовое задание и у тебя получится
            </div>
          </div>
          <button className="firstBlock_content_button">Проще простого!</button>
        </div>
      </Container>
    </div>
  );
}

export default FirstBlock;
