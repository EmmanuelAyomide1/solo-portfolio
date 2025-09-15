import { sendWhatsappMessage } from "../../../utils";
import microsoft from "../../assets/microsoft.png";
import Button from "../../components/Button";
import Logo from "./Logo";

function About() {
  function handleClick() {
    sendWhatsappMessage("Hi Great, I saw your Portfolio");
  }

  return (
    <section
      id="About"
      className="relative flex justify-center bg-white py-5 md:py-10"
    >
      <div className="flex w-full max-w-[1300px] flex-col space-y-8 overflow-visible pb-3 text-white md:space-y-15 md:px-20 md:py-7 xl:px-0">
        <div className="flex h-full flex-col-reverse justify-between md:flex-row md:gap-5 xl:gap-10">
          <div className="flex md:w-7/13">
            <div className="relative flex w-full justify-center">
              <div className="z-2 aspect-1/1 h-95 w-full bg-[url('assets/person2.png'),url('assets/person2bg.png'),url('assets/person2bg2.png')] bg-[length:auto_95%,auto_80%,auto_100%] bg-[position:bottom,bottom,center_15px] bg-no-repeat"></div>
            </div>
          </div>
          <div className="md:w-6/13">
            <div className="flex flex-col items-center text-black md:items-start md:justify-between">
              <p className="w-fit py-3 text-4xl font-bold">
                About{" "}
                <span className="text-primary-blue bg-[url('assets/star4LowOpacity.svg')] bg-[length:20px_auto] bg-[position:top_right] bg-no-repeat pr-5">
                  Me
                </span>
              </p>
              <div className="w-9/10 space-y-5">
                <div>
                  <p className="text-normal font-bold">B.sc (ED)</p>
                  <p className="text-sm">Computer Science 2022 - 2025</p>
                </div>
                <div className="flex w-fit">
                  <img src={microsoft} className="h-10 w-10" alt="" />
                  <div>
                    <p className="font-bold">Microsoft</p>
                    <p className="text-sm">Microsoft Office Scientist</p>
                  </div>
                </div>
                <p className="text-justify text-sm">
                  I am Great Solomon, a Graphics and UI/UX Specialist who
                  creates clean, functional, and engaging designs for web,
                  mobile, and print. From branding to interfaces, I blend
                  creativity with strategy to make visuals that truly connect
                  with people. My toolkit includes Figma, Photoshop,
                  Illustrator, and After Effects — but my real skill is turning
                  ideas into designs that work.
                </p>
                <div className="flex items-center justify-between">
                  <ul className="flex gap-x-2">
                    <Logo>
                      <svg
                        className="h-auto w-full"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="19"
                        viewBox="0 0 18 19"
                        fill="none"
                      >
                        <path
                          d="M12.1699 2.4502H6.03613C3.3718 2.4502 1.78345 4.03855 1.78345 6.70288V12.8294C1.78345 15.501 3.3718 17.0894 6.03613 17.0894H12.1626C14.827 17.0894 16.4153 15.501 16.4153 12.8367V6.70288C16.4226 4.03855 14.8343 2.4502 12.1699 2.4502ZM9.10304 12.6098C7.53664 12.6098 6.26304 11.3362 6.26304 9.76978C6.26304 8.20339 7.53664 6.92978 9.10304 6.92978C10.6694 6.92978 11.943 8.20339 11.943 9.76978C11.943 11.3362 10.6694 12.6098 9.10304 12.6098ZM13.4362 6.02215C13.3996 6.10999 13.3484 6.19051 13.2825 6.2637C13.2093 6.32958 13.1288 6.38081 13.041 6.41741C12.9531 6.45401 12.858 6.47597 12.7628 6.47597C12.5652 6.47597 12.3822 6.40277 12.2431 6.2637C12.1773 6.19051 12.126 6.10999 12.0894 6.02215C12.0528 5.93432 12.0309 5.83916 12.0309 5.74401C12.0309 5.64886 12.0528 5.5537 12.0894 5.46587C12.126 5.37071 12.1773 5.29752 12.2431 5.22432C12.4115 5.05597 12.6677 4.97545 12.9019 5.02669C12.9531 5.03401 12.9971 5.04865 13.041 5.07061C13.0849 5.08525 13.1288 5.10721 13.1727 5.13648C13.2093 5.15844 13.2459 5.19504 13.2825 5.22432C13.3484 5.29752 13.3996 5.37071 13.4362 5.46587C13.4728 5.5537 13.4948 5.64886 13.4948 5.74401C13.4948 5.83916 13.4728 5.93432 13.4362 6.02215Z"
                          fill="white"
                        />
                      </svg>
                    </Logo>
                    <Logo>
                      <svg
                        className="h-auto w-full"
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                      >
                        <path
                          d="M14.0929 2.4502H11.8971C10.9264 2.4502 9.99553 2.83578 9.30919 3.52212C8.62284 4.20847 8.23726 5.13935 8.23726 6.10999V8.30587H6.04138V11.2337H8.23726V17.0894H11.1651V11.2337H13.361L14.0929 8.30587H11.1651V6.10999C11.1651 5.91586 11.2422 5.72969 11.3795 5.59242C11.5167 5.45515 11.7029 5.37803 11.8971 5.37803H14.0929V2.4502Z"
                          fill="white"
                        />
                      </svg>
                    </Logo>
                    <Logo>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                      >
                        <path
                          d="M17.3507 3.18192C16.6497 3.67634 15.8736 4.0545 15.0523 4.30182C14.6115 3.79494 14.0256 3.43569 13.3739 3.27263C12.7223 3.10957 12.0363 3.15059 11.4087 3.39013C10.7811 3.62967 10.2422 4.05617 9.8649 4.61196C9.4876 5.16775 9.2901 5.826 9.29911 6.49769V7.22965C8.01279 7.26301 6.73818 6.97772 5.58881 6.39921C4.43944 5.82069 3.45099 4.9669 2.71148 3.91388C2.71148 3.91388 -0.216359 10.5015 6.37127 13.4293C4.86382 14.4526 3.06806 14.9657 1.24756 14.8933C7.83519 18.5531 15.8867 14.8933 15.8867 6.47574C15.8861 6.27185 15.8665 6.06847 15.8282 5.86821C16.5752 5.13149 17.1024 4.20133 17.3507 3.18192Z"
                          fill="white"
                        />
                      </svg>
                    </Logo>
                    <Logo>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="19"
                        viewBox="0 0 18 19"
                        fill="none"
                      >
                        <path
                          d="M11.8247 6.8418C12.9895 6.8418 14.1066 7.3045 14.9302 8.12811C15.7538 8.95173 16.2165 10.0688 16.2165 11.2336V16.3573H13.2887V11.2336C13.2887 10.8453 13.1344 10.4729 12.8599 10.1984C12.5853 9.92387 12.213 9.76963 11.8247 9.76963C11.4365 9.76963 11.0641 9.92387 10.7896 10.1984C10.5151 10.4729 10.3608 10.8453 10.3608 11.2336V16.3573H7.43298V11.2336C7.43298 10.0688 7.89568 8.95173 8.7193 8.12811C9.54291 7.3045 10.66 6.8418 11.8247 6.8418Z"
                          fill="white"
                        />
                        <path
                          d="M4.50511 7.57373H1.57727V16.3572H4.50511V7.57373Z"
                          fill="white"
                        />
                        <path
                          d="M3.04119 5.37803C3.84969 5.37803 4.50511 4.72261 4.50511 3.91411C4.50511 3.10561 3.84969 2.4502 3.04119 2.4502C2.23269 2.4502 1.57727 3.10561 1.57727 3.91411C1.57727 4.72261 2.23269 5.37803 3.04119 5.37803Z"
                          fill="white"
                        />
                      </svg>
                    </Logo>
                  </ul>
                  <Button handleClick={handleClick} className="border py-5">
                    Contact Me
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
