import { useEffect, useRef, useState } from "react";

import "./Header.css";
import LogoSvg from "../../images/logo.svg"
import Progress from "./Progress";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import DropDown from "./DropDown";
import BurgerMenu from "./BurgerMenu";

export default function Header() {

    const [isSticky, setIsSticky] = useState(false);
    const topRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!topRef.current) return;

        const observer = new IntersectionObserver(
        ([entry]) => {
            // when #top is out of view -> sticky active
            setIsSticky(!entry.isIntersecting);
        },
        { threshold: 0 }
        );

        observer.observe(topRef.current);

        return () => observer.disconnect();
    }, []);

  return (
   <header className="header">
        <div id="top" ref={topRef} className="header-main">

            <Progress className="header_progress-mobile" />
            
            <div className="container-wide">
                <div className="header__inner">
                    <Logo className="logo" imgSrc={LogoSvg} />

                    <HeaderMenu className="header-menu_desktop" />

                    <DropDown />

                    <BurgerMenu />
                </div>
            </div>
        </div>
        
        <div className={`header-sticky ${isSticky ? "active" : ""}`}>
            <Progress className="header_progress-desktop" />

            <div className="container-wide">
                <div className="header__inner">
                    <Logo className="logo" imgSrc={LogoSvg} />

                    <HeaderMenu />


                    <a data-open-modal-form className="header_btn">
                        Оставить заявку
                    </a>

                </div>
            </div>
        </div>

    </header>
  );
}