import { Link } from "react-router-dom";

export default function HeaderMenu({className}: {className?: string}) {
  return (
        <nav className={className}>
            <ul className="header-menu_wrapper">
                <li className="header-menu_item">
                    <Link to="/testimonals" className="header-menu_item_link">О нас</Link>
                </li>
                <li className="header-menu_item">
                    <Link to="/language-courses" className="header-menu_item_link">Поддержка</Link>
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