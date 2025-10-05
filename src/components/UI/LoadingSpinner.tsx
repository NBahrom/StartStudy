export default function LoadingSpinner() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="54px"
      height="54px"
      viewBox="0 0 200 200"
    >
      <radialGradient
        id="a8"
        cx=".66"
        fx=".66"
        cy=".3125"
        fy=".3125"
        gradientTransform="scale(1.5)"
      >
        <stop offset="0" stopColor="#000" />
        <stop offset=".3" stopColor="#000" stopOpacity=".9" />
        <stop offset=".6" stopColor="#000" stopOpacity=".6" />
        <stop offset=".8" stopColor="#000" stopOpacity=".3" />
        <stop offset="1" stopColor="#000" stopOpacity="0" />
      </radialGradient>

      <circle
        style={{ transformOrigin: "center" }} // ✅ use style, not attribute
        fill="none"
        stroke="url(#a8)"
        strokeWidth="15"
        strokeLinecap="round"
        strokeDasharray="200 1000"
        strokeDashoffset="0"
        cx="100"
        cy="100"
        r="70"
      >
        <animateTransform
          type="rotate"
          attributeName="transform"
          calcMode="spline"
          dur="2"
          values="360;0"
          keyTimes="0;1"
          keySplines="0 0 1 1"
          repeatCount="indefinite"
        />
      </circle>

      <circle
        style={{ transformOrigin: "center" }}
        fill="none"
        opacity=".2"
        stroke="#000"
        strokeWidth="15"
        strokeLinecap="round"
        cx="100"
        cy="100"
        r="70"
      />
    </svg>
  );
}
