function Carousel({ index, active, onClick }) {
  const isActive = index === active;
  const className = isActive
    ? "bg-primary-blue h-3 w-8 rounded-full"
    : "bg-primary-gray h-3 w-3 rounded-full";

  return (
    <div
      className={`${className} cursor-pointer transition-all duration-200`}
      onClick={() => onClick(index)}
    ></div>
  );
}

export default Carousel;
