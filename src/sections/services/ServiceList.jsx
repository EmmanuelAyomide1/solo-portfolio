import Service from "./Service";
import { useState } from "react";
import Carousels from "../../components/Carousels";

function ServiceList() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col items-center space-y-7 xl:space-y-27">
      <ul className="flex w-full flex-col items-center space-y-8 md:mt-0 md:flex-row md:justify-between md:space-y-0">
        <Service
          key={1}
          picUrl="assets/service1.jpg"
          serviceText="UI/UX Design"
        />
        <Service
          key={2}
          picUrl="assets/service3.png"
          serviceText="Web Design"
        />
        <Service
          key={3}
          picUrl="assets/service2.png"
          serviceText="Graphics Design"
        />
      </ul>
      {/* nav */}
      <Carousels pages={2} onClick={setActive} />
    </div>
  );
}

export default ServiceList;
