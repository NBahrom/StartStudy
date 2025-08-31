import LogoSvg from "../../images/logo-2.svg"
import HeaderMenu from "../header/HeaderMenu";
import Logo from "../header/Logo";
import ContactBlock from "./ContactsBlock";

import "./Footer.css"
import FooterBottom from "./FooterBottom";
import FooterForm from "./FooterForm";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="footer">
        <div className="container-wide">
            <div className="footer__inner">
                <div className="footer_menu_wrapper">
                    <Logo className="footer_logo" imgSrc={LogoSvg} />

                    <HeaderMenu />
                </div>

                <div className="footer_line footer_line-1"></div>

                <div className="footer_content section-row">

                    <div className="section-col footer-left">
                        <FooterForm />
                    </div>

                    <div className="section-col footer-right">

                        <div className="contact_wrapper">

                            <ContactBlock title="Офис в Чехии" text="Freyova 82/27, 190 00, Praha 9-Vysočany, Czechia" tel="(+420) 725-073-055" />

                            <ContactBlock title="Офис в Узбекистане" text="Узбекистан, г. Ташкент 3-я ул. Навнихол, 7" tel="(+998) 95 145-55-53" />
                        </div>

                        <div className="social_wrapper_scroll">
                            <SocialIcons />
                        </div>

                    </div>
                </div>
                <div className="footer_line"></div>
                <FooterBottom />
            </div>
        </div>
    </footer>
  );
}