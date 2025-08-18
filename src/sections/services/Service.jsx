function Service({ picUrl }) {
  return (
    <div className="relative h-70 w-67.5 scale-100 transform">
      <div
        style={{
          backgroundImage: `url(${picUrl})`,
          clipPath:
            "path('M 0 20 A 20,20 0,0,1 20,0 L 250 0 A 20,20 0,0,1 270,20 L 270,110 A 20,20 0,0,1 250,130 L 240,130 A 50,50 0,0,0 190,180 L 190,200 A 20,20 0,0,1 170,220 L 20,220 A 20,20 0,0,1 0,200 Z')",
        }}
        className="absolute top-16 h-60 w-70 bg-cover"
      ></div>
      <div
        style={{
          clipPath:
            "path('M 0 20 A 20,20 0,0,1 20,0 L 250 0 A 20,20 0,0,1 270,20 L 270,110 A 20,20 0,0,1 250,130 L 240,130 A 50,50 0,0,0 190,180 L 190,200 A 20,20 0,0,1 170,220 L 20,220 A 20,20 0,0,1 0,200 Z')",
        }}
        className="absolute top-13 -z-1 h-60 w-70 scale-x-90 transform bg-[#9E9D9D]"
      ></div>
      <div
        style={{
          clipPath:
            "path('M 0 20 A 20,20 0,0,1 20,0 L 250 0 A 20,20 0,0,1 270,20 L 270,110 A 20,20 0,0,1 250,130 L 240,130 A 50,50 0,0,0 190,180 L 190,200 A 20,20 0,0,1 170,220 L 20,220 A 20,20 0,0,1 0,200 Z')",
        }}
        className="absolute top-10 -z-2 h-60 w-70 scale-x-80 transform bg-[#757575a5]"
      ></div>
      <button className="absolute top-52 left-50 flex h-18 w-18 items-center justify-center rounded-full bg-white">
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
            stroke="#001528"
            stroke-width="2.87204"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.6494 15.8215H37.1897V37.3618"
            stroke="black"
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
