import ServiceList from "./ServiceList";
import Top from "./Top";

function Services() {
  return (
    <section
      id="Service"
      className="relative flex justify-center bg-[#001528] p-5 md:p-10"
    >
      <div className="flex w-full max-w-[1100px] flex-col space-y-8 overflow-clip pb-3 text-white md:space-y-15 md:px-20 md:py-7">
        <Top />
        <ServiceList />
      </div>
    </section>
  );
}

export default Services;
