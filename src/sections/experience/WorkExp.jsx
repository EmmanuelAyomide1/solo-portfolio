import Button from "../../components/Button";

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
        <div className="flex flex-col items-center">
          <div className="flex w-full justify-between text-black">
            <div className="w-2/5">
              <p className="text-xl font-semibold md:text-2xl md:font-bold">
                SystemTech
              </p>
              <p className="text-xs md:text-[16px]">Feb 2024- Jan 2025</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex h-4 w-4 items-center justify-center rounded-full border-1 border-dashed md:h-5 md:w-5">
                <div className="bg-primary-blue h-3 w-3 rounded-full md:h-4 md:w-4"></div>
              </div>
              <div className="h-[calc(100%-20px)] w-0 border-l-1 border-dashed"></div>
            </div>
            <div className="w-45 md:w-2/5">
              <p className="text-xl font-semibold md:text-2xl md:font-bold">
                UI/UX Designer
              </p>
              <p className="pb-5 text-[10px] md:text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                lacus nunc, posuere in justo vulputate, bibendum sodales{" "}
              </p>
            </div>
          </div>
          <div className="flex w-full justify-between text-black">
            <div className="w-2/5">
              <p className="text-xl font-semibold md:text-2xl md:font-bold">
                Progfams Tech
              </p>
              <p className="text-xs md:text-[16px]">Feb 2024- Jan 2025</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-4 w-4 items-center justify-center rounded-full border-1 border-dashed md:h-5 md:w-5">
                <div className="h-3 w-3 rounded-full bg-black md:h-4 md:w-4"></div>
              </div>
              <div className="h-[calc(100%-20px)] w-0 border-l-1 border-dashed"></div>
            </div>
            <div className="w-45 md:w-2/5">
              <p className="text-xl font-semibold md:text-2xl md:font-bold">
                UI/UX Designer
              </p>
              <p className="pb-5 text-[10px] md:text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                lacus nunc, posuere in justo vulputate, bibendum sodales{" "}
              </p>
            </div>
          </div>
          <div className="flex w-full justify-between text-black">
            <div className="w-2/5">
              <p className="text-xl font-semibold md:text-2xl md:font-bold">
                Progfams Tech
              </p>
              <p className="text-xs md:text-[16px]">Feb 2024- Jan 2025</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-4 w-4 items-center justify-center rounded-full border-1 border-dashed md:h-5 md:w-5">
                <div className="bg-primary-blue h-3 w-3 rounded-full md:h-4 md:w-4"></div>
              </div>
              <div className="h-[calc(100%-20px)] w-0 border-l-1 border-dashed"></div>
            </div>
            <div className="w-45 md:w-2/5">
              <p className="text-xl font-semibold md:text-2xl md:font-bold">
                UI/UX Designer
              </p>
              <p className="pb-5 text-[10px] md:text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                lacus nunc, posuere in justo vulputate, bibendum sodales{" "}
              </p>
            </div>
          </div>
          <div className="flex w-full justify-between text-black">
            <div className="w-2/5">
              <p className="text-xl font-semibold md:text-2xl md:font-bold">
                Progfams Tech
              </p>
              <p className="text-xs md:text-[16px]">Feb 2024- Jan 2025</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-4 w-4 items-center justify-center rounded-full border-1 border-dashed md:h-5 md:w-5">
                <div className="h-3 w-3 rounded-full bg-black md:h-4 md:w-4"></div>
              </div>
              <div className="hidden h-[calc(100%-20px)] w-0 border-l-1 border-dashed"></div>
            </div>
            <div className="w-45 md:w-2/5">
              <p className="text-xl font-semibold md:text-2xl md:font-bold">
                UI/UX Designer
              </p>
              <p className="pb-5 text-[10px] md:text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                lacus nunc, posuere in justo vulputate, bibendum sodales{" "}
              </p>
            </div>
          </div>
        </div>
        <Button className="bg-primary-blue mx-auto w-fit">See All</Button>
      </div>
    </section>
  );
}

export default WorkExp;
