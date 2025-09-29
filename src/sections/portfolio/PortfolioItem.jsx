function PortfolioItem({ project }) {
  const { text, image, description } = project;
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(207deg,rgba(0,0,0,0) 47.41%,rgba(0,0,0,0.36) 76.39%,rgba(0,0,0,0.5) 89.23%), url('src/${image}')`,
      }}
      className="group relative flex aspect-[3/2] w-full flex-col items-end justify-between rounded-xl bg-cover p-3"
    >
      <button className="border-primary-blue group-hover:bg-primary-blue flex h-12 w-12 rotate-45 items-center justify-center rounded-full border-2 bg-white md:h-15 md:w-15">
        <svg
          className="stroke-primary-blue h-10 group-hover:stroke-white"
          xmlns="http://www.w3.org/2000/svg"
          width="53"
          height="53"
          viewBox="0 0 53 53"
          fill="none"
        >
          <path
            d="M15.6494 37.3618L37.1897 15.8215"
            stroke-width="2.87204"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.6494 15.8215H37.1897V37.3618"
            stroke-width="2.87204"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <div className="w-full space-y-2 rounded-xl transition-all duration-300 ease-in-out group-hover:bg-[#0000004D] group-hover:p-3 group-hover:pt-5 group-hover:backdrop-blur-[12.5px]">
        <p className="text-xl font-bold text-white md:text-3xl">{text}</p>
        <p className="hidden text-sm font-light group-hover:block">
          {description}
        </p>
      </div>
    </div>
  );
}

export default PortfolioItem;
