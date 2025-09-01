function PortfolioItem({ text, bgStyle }) {
  return (
    <div
      className={`group relative flex aspect-[3/2] w-full flex-col items-end justify-between rounded-xl bg-cover ${bgStyle ? bgStyle : ""} p-3`}
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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
          perspiciatis asperiores voluptatum, ab at temporibus corporis harum
          tempore nesciunt iure quibusdam incidunt rem quo repudiandae velit
          explicabo. Perspiciatis, quasi fugit.
        </p>
      </div>
    </div>
  );
}

export default PortfolioItem;
