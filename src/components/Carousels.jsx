import { useState } from "react";
import Carousel from "./Carousel";

function Carousels({ pages, onClick }) {
  const [active, setActive] = useState(0);

  function handleClick(newActive) {
    onClick(newActive);
    setActive(newActive);
  }
  return (
    <div className="m-auto flex space-x-1">
      {Array.from({ length: pages }, (_, i) => (
        <Carousel onClick={handleClick} index={i} active={active} />
      ))}
    </div>
  );
}

export default Carousels;
