import { useState } from "react";
import Carousels from "../../components/Carousels";
import SkillList from "../../components/SkillList";
import Button from "../../components/Button";
import PortfolioGrid from "./PortfolioGrid";

function Portfolio() {
  const [active, setActive] = useState(0);
  const pages = 1;

  return (
    <section
      id="Portfolio"
      className="relative flex justify-center bg-[#001528] p-5 md:p-10"
    >
      <div className="flex w-full max-w-[1300px] flex-col space-y-5 overflow-clip pb-3 text-white md:px-20 md:py-7">
        <div className="flex justify-center">
          <p className="w-fit p-3 text-4xl font-bold">
            My <span className="text-primary-blue"> Portfolio </span>
          </p>
        </div>
        <div className="flex flex-col space-y-10">
          <div className="flex w-full items-center justify-around">
            <SkillList className="" />
            <Button className="bg-primary-blue hidden font-semibold md:block">
              See All
            </Button>
          </div>
          <PortfolioGrid />
          <Carousels pages={pages} onClick={setActive} />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
