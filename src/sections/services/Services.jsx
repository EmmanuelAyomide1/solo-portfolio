import ServiceList from "./ServiceList";
import Top from "./Top";

function Services() {
  return (
    <div className="relative flex justify-center bg-[#001528]">
      <div className="flex w-full max-w-[1100px] flex-col space-y-4 overflow-clip px-5 py-7 text-white md:px-20">
        <Top />
        <ServiceList />
      </div>
    </div>
  );
}

export default Services;
