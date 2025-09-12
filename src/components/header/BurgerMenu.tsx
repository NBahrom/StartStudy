import { useState } from "react";
import MobileMenuModal from "./MobileMenuModal";

export default function BurgerMenu() {
  const [mobileMenu, setmobileMenu] = useState<boolean>()

  return (
    <>
      <div onClick={() => setmobileMenu(prev => !prev)} className={`burger-menu ${mobileMenu ? "active" : ""}`}>
          <div className="burger-menu_line burger-menu_line-1"></div>
          <div className="burger-menu_line burger-menu_line-2"></div>
          <div className="burger-menu_line burger-menu_line-3"></div>
      </div>

      {mobileMenu && <MobileMenuModal />}
    </>
  );
}