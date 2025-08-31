import { useState } from "react"

export default function ContactBlock({title, text, tel}: {title: string, text: string, tel: string}) {

    const [mapsOpen, setMapsOpen] = useState(false);

    function openMaps() {
        setMapsOpen((prevVal) => !prevVal);
    }
    
    return (
        <div className="contact_item">

            <div data-contact-title-1 className="contact_title">{title}</div>
            <div data-contact-text-1 className="contact_text">{text}</div>
            
            <div className="spoiler footer-spoiler">
                <div className="spoiler_item footer-spoiler_item not-open">
                    <div className="spoiler_head footer-spoiler_head">
                        <div onClick={openMaps} data-section7-spoiler1-title className="spoiler_title footer-spoiler_title">
                            <span className="footer-spoiler_title_mobile">На картах</span>
                            <span className="footer-spoiler_title_desktop">Смотреть на картах</span>
                        </div>
                        <svg className="footer-spoiler_arrow" xmlns="http://www.w3.org/2000/svg"
                            width="10" height="7" fill="none">
                            <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeOpacity=".3" strokeWidth="1.5" d="m1 1.586 4 4 4-4" />
                        </svg>
                    </div>
                    <div className={"spoiler_body footer-spoiler_body" + (mapsOpen && " active-height")}>
                        <div className="footer-spoiler_body_content">
                            <a href="#" className="footer-spoiler_link">Google карты</a>
                            <a href="#" className="footer-spoiler_link">Яндекс карты</a>
                            <a href="#" className="footer-spoiler_link">2GIS</a>
                        </div>


                    </div>
                </div>
            </div>

            <a href={`tel:${tel}`} className="contact_text">{tel}</a>
        </div>
    )
}