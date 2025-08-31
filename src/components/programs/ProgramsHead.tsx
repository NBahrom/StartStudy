type ProgramsHeadProps = {
  setIsFullPrice: React.Dispatch<React.SetStateAction<boolean>>;
  isFullPrice: boolean;
};


export default function ProgramsHead({setIsFullPrice, isFullPrice} : ProgramsHeadProps) {
    return(
        <div className="section-5_head">
            <div className="section-5_head_content">
                <h2 className="section-5_title section-title">Программы обучения</h2>
                <div className="section-5_text-1 section-text-2">Все программы реализуются в сотрудничестве
                    <br/>с государственными вузами</div>
            </div>

            <div className={`tariff-toggle ${!isFullPrice ? "toggle-right" : ""}`}>
                <div 
                    onClick={() => setIsFullPrice(true)}
                    className={`tariff-toggle_item ${isFullPrice ? "active" : ""}`}>
                    100% оплата
                </div>
                <div 
                    onClick={() => setIsFullPrice(false)} 
                    className={`tariff-toggle_item ${!isFullPrice ? "active" : ""}`}>
                    50/50 оплата
                </div>
            </div>
        </div>
    )
}