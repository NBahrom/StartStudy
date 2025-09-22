import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { setLanguage } from "../../store/languageSlice";


export default function DropDown() {
    const dispatch = useDispatch();
    const { current, languages  } = useSelector((state: RootState) => state.language);

    
  return (
    <div className="dropdown" data-select="">
        <button className="dropdown__btn">
            <span>{current}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" fill="none">
                <path stroke="#9A9A9A" strokeLinecap="round" strokeLinejoin="round"
                    strokeWidth="1.125" d="m7.764 1.25-3.5 3.5-3.5-3.5" /></svg>
        </button>
        <ul className="dropdown__list">
          {languages.map(lang => (
            <li onClick={() => dispatch(setLanguage(lang))} className={`dropdown__list-item ${lang == current ? "isActiveLangBtn" : ' '}`}>{lang}</li>
          ))}
        </ul>
        <input className="dropdown__input hidden" type="text"/>
    </div>
  );
}