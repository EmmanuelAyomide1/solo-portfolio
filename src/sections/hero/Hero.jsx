import ButtomRightCircles from "../../components/ButtomRightCircle";
import Left from "./Left";
import Right from "./Right";

function Hero() {
  return (
    <section id="Hero" className="relative flex justify-center">
      <div className="flex w-full max-w-[1100px] flex-col overflow-clip px-5 md:h-[calc(dvh-44px)] md:max-h-[620px] md:px-20">
        <div className="flex h-full flex-col justify-between md:flex-row md:pt-10">
          <Left />
          <Right />
        </div>
        <ButtomRightCircles amount={6} />
      </div>
    </section>
  );
}

export default Hero;
