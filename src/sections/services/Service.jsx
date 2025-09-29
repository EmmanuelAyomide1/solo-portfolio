function Service({ picUrl, serviceText }) {
  return (
    <div className="group relative h-88 w-67.5 scale-100 transform xl:scale-120">
      <div
        style={{
          // backgroundImage: `url(${picUrl})`,
          clipPath:
            "path('M 0 20 A 20,20 0,0,1 20,0 L 250 0 A 20,20 0,0,1 270,20 L 270,110 A 20,20 0,0,1 250,130 L 240,130 A 50,50 0,0,0 190,180 L 190,200 A 20,20 0,0,1 170,220 L 20,220 A 20,20 0,0,1 0,200 Z')",
        }}
        className="absolute top-33 z-3 h-60 w-70 origin-bottom transform transition-all duration-100 group-hover:scale-y-105"
      >
        <div
          className="h-full w-full transform bg-cover transition-all duration-100 group-hover:scale-x-105"
          style={{
            backgroundImage: `url(${picUrl})`,
          }}
        ></div>
      </div>
      <div
        style={{
          clipPath:
            "path('M 0 20 A 20,20 0,0,1 20,0 L 250 0 A 20,20 0,0,1 270,20 L 270,110 A 20,20 0,0,1 250,130 L 240,130 A 50,50 0,0,0 190,180 L 190,200 A 20,20 0,0,1 170,220 L 20,220 A 20,20 0,0,1 0,200 Z')",
        }}
        className="absolute top-30 z-2 h-60 w-70 origin-bottom scale-x-90 transform bg-[#9E9D9D] transition-all duration-100 group-hover:scale-y-105"
      ></div>
      <div
        style={{
          clipPath:
            "path('M 0 20 A 20,20 0,0,1 20,0 L 250 0 A 20,20 0,0,1 270,20 L 270,110 A 20,20 0,0,1 250,130 L 240,130 A 50,50 0,0,0 190,180 L 190,200 A 20,20 0,0,1 170,220 L 20,220 A 20,20 0,0,1 0,200 Z')",
        }}
        className="absolute top-27 z-1 h-60 w-70 origin-bottom scale-x-80 transform bg-[#757575a5] transition-all duration-100 group-hover:scale-y-105"
      ></div>
      <div className="group-hover:bg-primary-blue -z-1 h-60 w-[270px] rounded-[20px] border-2 border-[#F9FAFB4D] bg-[#68686833]">
        <p className="w-full border-b-2 border-[#F9FAFB4D] p-5 text-2xl">
          {serviceText}
        </p>
      </div>
      <button className="group-hover:bg-primary-blue absolute top-69 left-50 flex h-18 w-18 items-center justify-center rounded-full bg-white">
        <svg
          className="h-10 stroke-black group-hover:stroke-white"
          xmlns="http://www.w3.org/2000/svg"
          width="53"
          height="53"
          viewBox="0 0 53 53"
          fill="none"
        >
          <path
            className=""
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
    </div>
  );
}

export default Service;
