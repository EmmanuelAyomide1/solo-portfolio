import NavOption from "./NavOption";

function NavOptions() {
  return (
    <ul className="cmd:flex hidden w-100 items-center justify-between">
      <NavOption text="Hero" />
      <NavOption text="Service" />
      <NavOption text="About" />
      <NavOption text="Portfolio" />
      <NavOption text="Experience" />
    </ul>
  );
}

export default NavOptions;
