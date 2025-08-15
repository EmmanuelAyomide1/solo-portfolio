import StarList from "./StarList";

function Experience({ className, starclass }) {
  return (
    <div className={`text-right md:space-y-1 ${className ? className : ""}`}>
      <StarList className={starclass} length={5} />
      <p className="h-5 font-semibold md:h-6 md:text-2xl">4+ Years</p>
      <p className="text-[8px] md:text-[10px]">Experience</p>
    </div>
  );
}

export default Experience;
