import Button from "./Button";
import Logo from "./Logo";
import Menu from "./Menu";
import NavOptions from "./NavOptions";

function Navbar({ className }) {
  return (
    <div
      className={`mt-4 flex h-7 w-full max-w-[1100px] items-center justify-between md:h-10 ${className ? className : ""}`}
    >
      <Logo />
      <NavOptions />
      <Button className="bg-primary-blue cmd:block hidden h-full text-white">
        Hire
      </Button>
      <Menu />
    </div>
  );
}

export default Navbar;
