import SoloLogo from "../assets/SoloLogo.jpg";

function Logo() {
  return (
    <a href="#" className="flex h-10 cursor-pointer items-center">
      <img src={SoloLogo} alt="" className="h-6 w-auto md:h-10" />
      <p className="mt-2 -ml-1 text-sm md:mt-4 md:text-xl">
        <span>Great</span>
        <span className="text-primary-blue font-extrabold">Solo</span>
      </p>
    </a>
  );
}

export default Logo;
