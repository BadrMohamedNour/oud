import iconProps from "./types";

const SvgArrowLeft = ({ color }: iconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18"
      stroke={color ?? "#1A1C1D"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgArrowLeft;
