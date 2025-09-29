import Button from "../../components/Button";
import ExpItem from "./ExpItem";
import ExpList from "./ExpList";

function WorkExp() {
  return (
    <section
      id="Experience"
      className="relative flex justify-center bg-white p-5 md:p-10 md:pb-0"
    >
      <div className="flex w-full max-w-[1100px] flex-col space-y-5 overflow-clip bg-[url('assets/experience.svg')] bg-[length:90px_auto] bg-[position:top_right] bg-no-repeat text-white md:space-y-10 md:bg-[length:120px_auto] md:bg-[position:35%_0%] md:px-20 md:py-7">
        <div className="items-left flex flex-col text-black md:flex-row md:items-center md:justify-between">
          <p className="w-fit py-3 text-4xl font-bold">
            My{" "}
            <span className="text-primary-blue">
              Work <br /> Experience{" "}
            </span>
          </p>
          <p className="w-6/7 text-left text-[10px] md:w-100 md:text-left md:text-sm">
            Over the years, I've worked on projects that taught me how to design
            things people actually enjoy using — from websites and apps to
            graphics that stick in their minds.
          </p>
        </div>
        <ExpList />
        <Button className="bg-primary-blue mx-auto w-fit">See All</Button>
      </div>
    </section>
  );
}

export default WorkExp;
