import { sendWhatsappMessage } from "../../../utils";
import Button from "../../components/Button";
import Experience from "./Experience";

function Left() {
  function handleClick() {
    sendWhatsappMessage(
      "Hi Great Solomon, I saw your portfolio and I would like to [purpose]",
    );
  }

  return (
    <div className="mt-5 flex max-h-1/2 flex-col space-y-4 md:mt-0 md:h-full md:max-h-full md:w-1/2 md:space-y-8 md:pt-10">
      <div className="bg-primary-blue-100 flex w-30 items-center justify-center space-x-2 rounded-full py-2 md:w-45 md:text-xs xl:w-50">
        <div className="bg-primary-blue h-1 w-1 rounded-full md:h-2 md:w-2"></div>
        <p className="text-primary-blue h-2 text-[7px] font-semibold uppercase md:h-3.5 md:text-xs xl:text-sm/4">
          Available For work
        </p>
      </div>
      <div className="w-full space-y-4 md:w-100 md:space-y-8 xl:w-140">
        <p className="w-70 text-4xl font-bold md:w-full md:text-5xl xl:text-7xl">
          Hi, I'm Solomon Great{" "}
          <span className="relative">
            <span className="text-primary-blue">I'm a Visual</span>
            <svg
              className="absolute top-8 right-0 w-2/4 md:top-11 xl:top-19"
              xmlns="http://www.w3.org/2000/svg"
              width="171"
              height="22"
              viewBox="0 0 171 22"
              fill="none"
            >
              <path
                d="M170.76 2.65073C72.1608 -4.18678 29.8271 5.4308 1.38255 9.3112C0.974412 12.7645 1.17098 15.6098 0.754418 21.0983C76.9062 -1.09698 127.864 3.1363 170.727 4.99057C170.74 4.55585 170.721 3.9549 170.76 2.65073Z"
                fill="#1572D3"
              />
            </svg>
          </span>{" "}
          designer
        </p>
        <p className="w-70 text-xs md:w-90 md:text-sm xl:text-lg">
          Innovative visual storyteller with 4+ years’ experience in graphic
          design and UI/UX design.{" "}
        </p>
        <div className="flex w-full justify-between">
          <Button
            handleClick={handleClick}
            className="bg-primary-blue h- py-3 text-white"
          >
            Send a Dm
          </Button>
          <Experience className="md:hidden" />
        </div>
      </div>
    </div>
  );
}

export default Left;
