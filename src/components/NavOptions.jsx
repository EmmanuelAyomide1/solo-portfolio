import NavOption from "./NavOption";

function NavOptions({ className, onClick }) {
  return (
    <ul
      className={`${className ? className : "cmd:flex hidden w-100 items-center justify-between"} `}
    >
      <NavOption onClick={onClick} text="Hero" />
      <NavOption onClick={onClick} text="Service" />
      <NavOption onClick={onClick} text="About" />
      <NavOption onClick={onClick} text="Portfolio" />
      <NavOption onClick={onClick} text="Experience" />
    </ul>
  );
}

export default NavOptions;
