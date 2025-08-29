import Button from "../../components/Button";

function FooterEmail() {
  return (
    <div className="max-w-120 space-y-4">
      <p className="px-5 text-center text-3xl font-bold md:text-4xl">
        Have an Awesome Project Idea?{" "}
        <span className="text-primary-blue">Let's Discuss</span>
      </p>
      <div className="border-primary-gray flex h-14 w-full justify-between rounded-full border-2 p-2">
        <div className="bg-primary-blue-100 rounded-full p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="21"
            viewBox="0 0 22 21"
            fill="none"
          >
            <path
              d="M15.375 3.0625H6.625C4 3.0625 2.25 4.375 2.25 7.4375V13.5625C2.25 16.625 4 17.9375 6.625 17.9375H15.375C18 17.9375 19.75 16.625 19.75 13.5625V7.4375C19.75 4.375 18 3.0625 15.375 3.0625ZM15.7862 8.39125L13.0475 10.5788C12.47 11.0425 11.735 11.27 11 11.27C10.265 11.27 9.52125 11.0425 8.9525 10.5788L6.21375 8.39125C5.93375 8.16375 5.89 7.74375 6.10875 7.46375C6.33625 7.18375 6.7475 7.13125 7.0275 7.35875L9.76625 9.54625C10.4313 10.08 11.56 10.08 12.225 9.54625L14.9638 7.35875C15.2438 7.13125 15.6637 7.175 15.8825 7.46375C16.11 7.74375 16.0662 8.16375 15.7862 8.39125Z"
              fill="#1572D3"
            />
          </svg>
        </div>
        <input
          className="w-full px-4 outline-0 placeholder:text-black"
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email Address"
        />
        <Button className="bg-primary-blue h-full text-white">Send</Button>
      </div>
    </div>
  );
}

export default FooterEmail;
