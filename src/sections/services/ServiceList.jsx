import Service from "./Service";
import service2 from "./../../assets/service2.png";
import service3 from "./../../assets/service3.png";
import service1 from "./../../assets/service1.jpg";
import { useState } from "react";
import Carousels from "../../components/Carousels";

function ServiceList() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col items-center space-y-7 xl:space-y-27">
      <ul className="flex w-full flex-col items-center space-y-8 md:mt-0 md:flex-row md:justify-between md:space-y-0">
        <Service key={1} picUrl={service1} serviceText="UI/UX Design" />
        <Service key={2} picUrl={service3} serviceText="Web Design" />
        <Service key={3} picUrl={service2} serviceText="Graphics Design" />
      </ul>
      {/* nav */}
      <Carousels pages={2} onClick={setActive} />
    </div>
  );
}

export default ServiceList;
