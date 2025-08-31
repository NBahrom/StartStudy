import { useState } from "react"
import "./Banner.css"



export default function Banner() {
    const [activeTab, setActiveTab] = useState(1);

    function handleTabClick(tabIndex: number) {
        setActiveTab(tabIndex);
    }

    return(
        <section className="hero-section">
            <div className="container-wide">
                <div data-tab-block className="hero_inner">
                    <div className={"hero_content-1 hero_content" + (activeTab === 1 ? " active" : "")}>
                        <h1 className="section-title hero_title" data-hero-title="">
                            Курс чешского языка
                            <br/>университета <br/>Естесственных наук <br/>в Праге</h1>
                        <div className="hero_text_1">
                            Летняя школа в Праге представляет собой <br/> захватывающий опыт, сочетающий обучение <br/>и
                            путешествия для молодых людей.
                        </div>

                        <div className="hero_text_2">
                            Дилдора М. студентка Czech University <br/> of Life Sciences. Окончила <br/>языковые курсы
                            StartStudy в
                            г. Прага
                        </div>
                    </div>
                    <div className={"hero_content-2  hero_content" + (activeTab === 2 ? " active" : "")}>
                        2
                    </div>
                    <div className={"hero_content-3  hero_content" + (activeTab === 3 ? " active" : "")}>
                        3
                    </div>

                    <div className="hero_tabs_wrapper">
                        <div className="hero_tabs" data-tab-buttons="">
                            <button onClick={ () => handleTabClick(1)} className={"hero_tab" + (activeTab === 1 ? " active" : "")}>
                                <div className="hero_tab_text">Языковые курсы</div>
                            </button>
                            <button onClick={ () => handleTabClick(2)} className={"hero_tab" + (activeTab === 2 ? " active" : "")}>
                                <div className="hero_tab_text">Летняя школа в Праге</div>
                            </button>
                            <button onClick={ () => handleTabClick(3)} className={"hero_tab" + (activeTab === 3 ? " active" : "")}>
                                <div className="hero_tab_text">Выставка EduFair</div>
                            </button>
                        </div>
                    </div>
                    

                </div>
            </div>

        </section>
    )
}