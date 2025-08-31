export default function FooterBottom() {
    return(
        <div className="footer_footer">
            <div className="footer_text">2019—<span className="year"></span>, <br/> BAKTRIA s.r.o. ID: 28227638. <br/>
                <span data-contact-copyright="">Все права защищены.</span></div>
            <div className="footer_text"><a target="_blank" href="https://startstudy.cz/privacy-policy.pdf"
                    data-contact-policy="">Политика обработки персональных данных</a></div>
            <a href="#top" className="footer_up">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="14" fill="none">
                    <path fill="#027169" stroke="#BFF61D"
                        d="m5.269 1.854-.25.249v-.596a.26.26 0 0 1 .25-.256.261.261 0 0 1 .245.205l.006.05v.598l-.251-.25ZM1.283 5.73a.251.251 0 0 1-.246-.245.253.253 0 0 1 .067-.175L4.02 2.396v.707L1.458 5.664a.25.25 0 0 1-.175.067Zm7.972 0a.251.251 0 0 1-.137-.038l-.039-.029-2.56-2.56v-.707l2.914 2.914c.033.035.055.08.063.127l.004.048a.25.25 0 0 1-.245.245ZM5.27 12.75a.25.25 0 0 1-.14-.042l-.037-.031a.25.25 0 0 1-.073-.177V3.517l.249-.25.25.252V12.5a.25.25 0 0 1-.041.139l-.032.038a.25.25 0 0 1-.128.068l-.048.005Z" />
                </svg>
            </a>
        </div>
    )
}