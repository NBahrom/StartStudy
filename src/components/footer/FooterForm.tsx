export default function FooterForm() {  
    return (
        <>
            <h5 data-footer-title="" className="footer_title">Подписаться на новости</h5>
            
            <form className="subscribe-form" id="form_subscribe">
                <input data-footer-mail="" className="subscribe-form_input" placeholder="Электронная почта"
                    type="text" name="email" />

                <button className="subscribe-form_button" type="submit">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.216 5.71373L17.0032 12.501L10.2159 19.2863" stroke="#3F3D44"
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </button>


                <div data-success-block="" className="subscribe-form_success hidden">
                    <svg width="20" height="15" viewBox="0 0 20 15" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M19.1099 0.778315C18.3118 1.57646 17.5136 2.37461 16.7155 3.17276C15.7522 4.13604 14.7889 5.09932 13.8257 6.0626C13.0344 6.85386 12.2397 7.64857 11.4484 8.43984C10.7432 9.14509 10.0379 9.85035 9.33264 10.5556C8.3728 11.5155 7.40952 12.4787 6.44968 13.4386C6.43248 13.4558 6.41184 13.4764 6.39464 13.4936C6.6389 13.4936 6.87972 13.4936 7.12398 13.4936C6.41872 12.7849 5.71002 12.0797 5.00476 11.371C3.88667 10.2529 2.76857 9.13477 1.65048 8.01668C1.39246 7.75866 1.13444 7.50064 0.876414 7.24262C0.680317 7.04652 0.343169 7.04652 0.147072 7.24262C-0.0490241 7.43871 -0.0490241 7.77586 0.147072 7.97196C0.852331 8.68065 1.56103 9.38591 2.26629 10.0946C3.38438 11.2127 4.50248 12.3308 5.62057 13.4489C5.87859 13.7069 6.13661 13.9649 6.39464 14.223C6.59073 14.4191 6.92788 14.4191 7.12398 14.223C7.95997 13.387 8.79596 12.551 9.62851 11.7184C10.4335 10.9134 11.2351 10.1118 12.0401 9.30679C12.8521 8.49488 13.664 7.68297 14.4759 6.87106C15.3222 6.02475 16.1651 5.18188 17.0114 4.33557C17.9402 3.40669 18.8657 2.48126 19.7946 1.55238C19.8118 1.53518 19.829 1.51798 19.8462 1.50078C20.0423 1.30468 20.0423 0.967531 19.8462 0.771434C19.6432 0.582218 19.3095 0.582219 19.1099 0.778315Z"
                            fill="white"></path>
                    </svg>

                    <p data-footer-success="" className="footer_text">Вы подписаны на рассылку!</p>

                </div>

            </form>

            <div className="subscribe-form_policy section-text-2">
                <span data-footer-policy-1="">Нажимая кнопку Отправить, вы соглашаетесь <br/> с </span>
                <a data-footer-policy-2="" target="_blank"
                    href="https://startstudy.cz/privacy-policy.pdf">Политикой в отношении обработки <br/>
                    персональных данных</a>
            </div>
        </>
    )
}