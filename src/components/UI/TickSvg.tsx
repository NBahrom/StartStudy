export default function TickSvg() {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" fill="none">
            <path stroke="url(#a)" strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="1.333" d="m7 10.586 2 2 4-4" />
            <path stroke="url(#b)" strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="1.333" d="m7 10.586 2 2 4-4" />
            <path stroke="#02191D" strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="1.333" d="m7 10.586 2 2 4-4" />
            <defs>
                <linearGradient id="a" x1="3.334" x2="16.667" y1="17.253" y2="3.92"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#4DEF8E" />
                    <stop offset="1" stopColor="#FFEB3A" />
                </linearGradient>
                <linearGradient id="b" x1="3.334" x2="16.667" y1="17.253" y2="3.92"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#4300B1" />
                    <stop offset="1" stopColor="#A531DC" />
                </linearGradient>
            </defs>
        </svg>
    )
}