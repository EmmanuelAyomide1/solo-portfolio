function PortfolioItem({ text, bgStyle }) {
  return (
    <div
      className={`relative aspect-[3/2] w-full rounded-xl bg-cover ${bgStyle ? bgStyle : ""}`}
    >
      <p className="absolute bottom-5 left-4 text-xl font-bold text-white md:text-3xl">
        {text}
      </p>
      <button className="border-primary-blue absolute top-3 right-3 flex h-15 w-15 rotate-45 items-center justify-center rounded-full border-2 bg-white">
        <svg
          className="h-10"
          xmlns="http://www.w3.org/2000/svg"
          width="53"
          height="53"
          viewBox="0 0 53 53"
          fill="none"
        >
          <path
            d="M15.6494 37.3618L37.1897 15.8215"
            stroke="#1572D3"
            stroke-width="2.87204"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.6494 15.8215H37.1897V37.3618"
            stroke="#1572D3"
            stroke-width="2.87204"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

export default PortfolioItem;
