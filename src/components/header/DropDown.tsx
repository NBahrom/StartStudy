export default function DropDown() {
  return (
    <div className="dropdown" data-select="">
        <button className="dropdown__btn">
            <span>RU</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" fill="none">
                <path stroke="#9A9A9A" strokeLinecap="round" strokeLinejoin="round"
                    strokeWidth="1.125" d="m7.764 1.25-3.5 3.5-3.5-3.5" /></svg>
        </button>
        <ul className="dropdown__list">
            <li className="dropdown__list-item">ru</li>
            <li className="dropdown__list-item">en</li>
            <li className="dropdown__list-item">uz</li>
            <li className="dropdown__list-item">cz</li>
        </ul>
        <input className="dropdown__input hidden" type="text"/>
    </div>
  );
}