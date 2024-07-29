import Container from "../Container/Container";
import Title from "../Title/Title";

import "./feedback.scss";
import MySlider from "../MySlider/MySlider";

function Feedback() {
  return (
    <div className="feedback">
      <Container>
        <Title title="Отзывы" />
        <MySlider />
      </Container>
    </div>
  );
}

export default Feedback;
