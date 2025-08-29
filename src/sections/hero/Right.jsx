import person from "../../assets/person.png";
import Experience from "./Experience";
import HeroBg from "./HeroBg";

function Right() {
  return (
    <div className="flex min-h-1/2 justify-center md:h-full md:w-1/2">
      <HeroBg />
      <div className="bg-[url('assets/star4.svg'),url('assets/star4.svg'),url('assets/shout.svg')] bg-[length:20px,10px,30px] bg-[position:85%_30%,0%_60%,0%_30%] bg-no-repeat px-5 md:bg-[length:20px,10px,60px] md:bg-[position:85%_30%,0%_60%,0%_30%]">
        <img
          src={person}
          alt="person"
          className="mt-2 h-full w-auto object-contain"
        />
      </div>
      <div className="absolute left-1/2 w-full max-w-[910px] -translate-x-1/2">
        <Experience
          starclass="md:h-4"
          className="right-0 mt-10 hidden md:absolute md:block"
        />
      </div>
    </div>
  );
}

export default Right;
