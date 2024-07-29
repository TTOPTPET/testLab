import "./conseil.scss";
import Title from "../Title/Title";
import Container from "../Container/Container";
import conseil1 from "../../assets/icons/conseil1.svg";
import conseil2 from "../../assets/icons/conseil2.svg";
import conseil3 from "../../assets/icons/conseil3.svg";
import conseil4 from "../../assets/icons/conseil4.svg";
import ConseilItem from "../ConseilItem/ConseilItem";

const conseilItems = [
  {
    id: 1,
    icon: conseil1,
    title: "Прочитай задание внимательно",
    descr: "Думаю у тебя не займет это больше двух-трех минут",
  },
  {
    id: 2,
    icon: conseil2,
    title: "Изучи весь макет заранее",
    descr: "Подумай как это будет работать на разных разрешениях и при скролле",
  },
  {
    id: 3,
    icon: conseil3,
    title: "Сделай хорошо",
    descr: "Чтобы мы могли тебе доверить подобные задачи в будущем",
  },
  {
    id: 4,
    icon: conseil4,
    title: "Получи предложение",
    descr: "Ну тут все просто, не я придумал правила, но думаю так и будет)))",
  },
];

function Conseil() {
  return (
    <Container>
      <div className="conseil" id="conseil">
        <Title title="Как это работает" />
        <div className="conseil_items">
          {conseilItems.map((item) => {
            return (
              <ConseilItem
                descr={item.descr}
                icon={item.icon}
                title={item.title}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
}

export default Conseil;
