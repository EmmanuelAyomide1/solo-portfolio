import { useState } from "react";
import NavOptions from "./NavOptions";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((cur) => !cur);
  }

  return (
    <>
      <svg
        className={`h-full ${isOpen ? "opacity-0" : "opacity-100"} transition-opacity duration-500 md:hidden`}
        onClick={handleClick}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M28 10.3333H4C3.45333 10.3333 3 9.88 3 9.33334C3 8.78667 3.45333 8.33334 4 8.33334H28C28.5467 8.33334 29 8.78667 29 9.33334C29 9.88 28.5467 10.3333 28 10.3333Z"
          fill="black"
        />
        <path
          d="M28 17H4C3.45333 17 3 16.5467 3 16C3 15.4533 3.45333 15 4 15H28C28.5467 15 29 15.4533 29 16C29 16.5467 28.5467 17 28 17Z"
          fill="black"
        />
        <path
          d="M28 23.6667H4C3.45333 23.6667 3 23.2133 3 22.6667C3 22.12 3.45333 21.6667 4 21.6667H28C28.5467 21.6667 29 22.12 29 22.6667C29 23.2133 28.5467 23.6667 28 23.6667Z"
          fill="black"
        />
      </svg>
      <div
        className={`cmd:hidden fixed top-0 right-0 z-100 flex h-dvh w-9/10 gap-5 bg-white p-5 ${isOpen ? "translate-x-0" : "translate-x-full"} transform flex-col py-6 transition-transform duration-500 ease-in-out`}
      >
        <svg
          className={`${isOpen ? "opacity-100" : "opacity-0"} ml-3 transition-opacity duration-500 md:hidden`}
          onClick={handleClick}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.9175 1.83415L18.0834 0L9.95875 8.1375L1.83415 0L0 1.83415L8.1375 9.95875L0 18.0834L1.83415 19.9175L9.95875 11.78L18.0834 19.9175L19.9175 18.0834L11.78 9.95875L19.9175 1.83415Z"
            fill="black"
          />
        </svg>
        <NavOptions className={"flex flex-col gap-2"} />
      </div>
    </>
  );
}

export default Menu;
