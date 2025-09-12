import LogoSvg from "../../images/logo-2.svg"
import HeaderMenu from "../header/HeaderMenu";
import Logo from "../header/Logo";
import ContactBlock from "./ContactsBlock";

import "./Footer.css"
import FooterBottom from "./FooterBottom";
import FooterForm from "./FooterForm";
import SocialIcons from "./SocialIcons";

import maps from "../../data/maps.json"

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
                            {maps.map((location) => (
                                <ContactBlock key={location.id} title={location.title} text={location.textLocation} maps={location.maps} tel={location.telNumber} />
                            ))}
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