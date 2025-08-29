import NavOption from "./NavOption";

function NavOptions({ className }) {
  return (
    <ul
      className={`${className ? className : "cmd:flex hidden w-100 items-center justify-between"} `}
    >
      <NavOption text="Hero" />
      <NavOption text="Service" />
      <NavOption text="About" />
      <NavOption text="Portfolio" />
      <NavOption text="Experience" />
    </ul>
  );
}

export default NavOptions;
