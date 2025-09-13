import { useState } from "react";
import ContactBlock from "../footer/ContactsBlock";
import SocialIcons from "../footer/SocialIcons";
import { createPortal } from 'react-dom';

import maps from "../../data/maps.json"
import FooterBottom from "../footer/FooterBottom";
import ModalForm from "../ModalForm";


export default function MobileMenuModal() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>()

    return createPortal(
            <div className="mobile-menu footer">
                <div className="container-wide">
                    <div className="footer__inner">
                       

                        <ul className="mobile-menu_item_wrapper">
                            <li className="mobile-menu_item isActiveLangBtn" data-value="ru">ru</li>
                            <li className="mobile-menu_item" data-value="en">en</li>
                            <li className="mobile-menu_item" data-value="uz">uz</li>
                            <li className="mobile-menu_item" data-value="cz">cz</li>
                        </ul>

                        <a onClick={() => setIsModalOpen(true)} className="header_btn">
                            Оставить заявку
                        </a>

                        {isModalOpen && <ModalForm onClose={() => setIsModalOpen(false)}  />}

                        {/* <div className="footer_line"></div> */}
                        <div className="footer_content section-row">
                            
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
            </div>,
            document.getElementById('modal') as HTMLElement
    )
}