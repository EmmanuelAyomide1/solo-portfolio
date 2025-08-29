function Arrow({
  width = 20,
  height = 16,
  color = "white",
  strokeWidth = 1.4,
}) {
  const arrowHeadX = width - 1;
  const arrowShaftEnd = width - 8;

  return (
    <svg
      className="-mx-2"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
    >
      <line
        x1="0"
        y1={height / 2}
        x2={arrowShaftEnd + 6}
        y2={height / 2}
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d={`M${arrowShaftEnd - 6} ${height / 2 - 6} L${arrowHeadX} ${height / 2} L${arrowShaftEnd - 6} ${height / 2 + 6}`}
        stroke={color}
        strokeWidth={strokeWidth - 0.5}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Arrow;
