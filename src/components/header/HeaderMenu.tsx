export default function HeaderMenu({className}: {className?: string}) {
  return (
        <nav className={className}>
            <ul className="header-menu_wrapper">
                <li className="header-menu_item">
                    <a href="#" className="header-menu_item_link">О нас</a>
                </li>
                <li className="header-menu_item">
                    <a href="#" className="header-menu_item_link">Поддержка</a>
                </li>
                <li className="header-menu_item">
                    <a href="#" className="header-menu_item_link">Программы</a>
                </li>
                <li className="header-menu_item">
                    <a href="#" className="header-menu_item_link">Проживание</a>
                </li>
                <li className="header-menu_item">
                    <a href="#" className="header-menu_item_link">Обратная связь</a>
                </li>
            </ul>
        </nav>
  );
}