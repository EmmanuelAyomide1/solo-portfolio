import SkillList from "../../components/SkillList";
import Arrow from "./Arrow";

function Skills() {
  return (
    <div className="relative w-full space-y-10 overflow-clip rounded-4xl bg-[#001528] bg-[url('/assets/star4LowOpacity.svg')] bg-[length:90px] bg-[position:-5%_105%] bg-no-repeat px-10 pt-10 pb-20 md:bg-[length:150px] md:bg-[position:bottom_left] md:px-25">
      <div
        style={{
          filter: "blur(160px)",
        }}
        className="bg-primary-blue absolute -top-20 -left-20 h-50 w-50 rounded-full"
      ></div>
      <div className="flex w-full items-center space-x-7">
        <div className="flex w-full items-center">
          <div className="h-0 w-full rounded-full border-1 border-white bg-white"></div>
          <Arrow />
        </div>
        <p className="text-3xl font-bold text-white md:text-4xl">Skills</p>
      </div>
      <SkillList className="md:translate-x-[-12.5%]" />
      <SkillList className="md:translate-x-[0%]" />
      <SkillList className="md:translate-x-[12.5%]" />
    </div>
  );
}

export default Skills;
