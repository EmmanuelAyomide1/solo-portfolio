import NavOptions from "../components/NavOptions";

function Footer() {
  return (
    <div className="relative flex justify-center bg-white">
      <div className="flex w-full max-w-[1100px] flex-col overflow-clip px-5 py-7 md:px-20">
        <div className="cmd:justify-between flex w-full justify-end border-t-2 border-[#001528] px-2 py-3">
          <NavOptions />
          <p>Personal portfolio@2025</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
