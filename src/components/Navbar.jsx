import { sendWhatsappMessage } from "../../utils";
import Button from "./Button";
import Logo from "./Logo";
import Menu from "./Menu";
import NavOptions from "./NavOptions";

function Navbar({ className }) {
  function handleClick() {
    sendWhatsappMessage(
      "Hi Great, I saw your portfolio and i would like to hire you",
    );
  }

  return (
    <div
      className={`fixed z-50 flex h-7 w-full max-w-[1100px] items-center justify-between md:static md:z-0 md:mt-4 md:h-10 md:bg-transparent ${className ? className : ""}`}
    >
      <Logo />
      <NavOptions />
      <Button
        handleClick={handleClick}
        className="bg-primary-blue cmd:block hidden h-full text-white"
      >
        Hire
      </Button>
      <Menu />
    </div>
  );
}

export default Navbar;
