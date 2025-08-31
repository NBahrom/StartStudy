import { useState } from "react";
import faqData from "../data/faq.json";
import Spoiler from "./UI/Spoiler";

import "./FAQ.css"

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [showAll, setShowAll] = useState(false);

    const visibleFaqs = showAll ? faqData : faqData.slice(0, 5);

  return (
    <section className="section-10">
      <div className="container-wide">
        <div className="section-10__inner">
          <h2 data-section7-title="" className="section-title section-10_title">
            Часто задаваемые вопросы
          </h2>

          <div className="section-10_spoiler spoiler">
            {visibleFaqs.map((faq, index) => (
                <Spoiler 
                    className="section-10_item" 
                    key={faq.id} 
                    index={index} 
                    title={faq.question} 
                    text={faq.answer}   
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    type="numbered"
                />
            ))}
          </div>
            
            {!showAll && (
                <div onClick={() => setShowAll(true)} className="section-10_more btn">
                    <span data-section7-more-btn="">Показать все вопросы</span>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="10"
                    fill="none"
                    >
                    <path
                        stroke="#02191D"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="m1 9 4-4-4-4"
                    />
                    </svg>
                </div>
            )}
        </div>
      </div>
    </section>
  );
}
