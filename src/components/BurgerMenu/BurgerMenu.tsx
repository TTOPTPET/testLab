function BurgerMenu() {
  return (
    <div className="menu">
      <ul className="menu__list">
        <li className="menu__list_item">
          <a
            href="index.html"
            className="menu__list_item_link menu__list_item_link-active"
          >
            Главная
          </a>
        </li>
        <li className="menu__list_item">
          <a href="pages/catalog.html" className="menu__list_item_link">
            Каталог
          </a>
        </li>
        <li className="menu__list_item">
          <a href="pages/consultation.html" className="menu__list_item_link">
            Заказать консультацию
          </a>
        </li>
        <li className="menu__list_item">
          <a href="pages/feedback.html" className="menu__list_item_link">
            Отзывы
          </a>
        </li>
        <li className="menu__list_item">
          <a href="pages/gallery.html" className="menu__list_item_link">
            Галерея
          </a>
        </li>
      </ul>
    </div>
  );
}

export default BurgerMenu;
