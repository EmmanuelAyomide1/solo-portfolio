import Service from "./Service";
import service2 from "./../../assets/service2.png";
import service3 from "./../../assets/service3.png";
import service1 from "./../../assets/service1.jpg";

function ServiceList() {
  return (
    <ul className="flex flex-col items-center md:flex-row md:justify-between">
      <Service key={1} picUrl={service1} />
      <Service key={2} picUrl={service3} />
      <Service key={3} picUrl={service2} />
    </ul>
  );
}

export default ServiceList;
