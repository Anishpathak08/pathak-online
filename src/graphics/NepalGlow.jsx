export default function NepalMap() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 512"
      className="w-full h-auto"
    >
      <path
        d="M40,260 L120,250 L180,260 L260,250 L340,260 L420,250 L500,255 L580,250 L660,255 L740,250 L820,255 L900,250 L980,260"
        fill="none"
        stroke="#00ff99"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="2000"
        strokeDashoffset="2000"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="2000"
          to="0"
          dur="6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke"
          values="#00ff99;#00ffff;#00ff99"
          dur="4s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
}
