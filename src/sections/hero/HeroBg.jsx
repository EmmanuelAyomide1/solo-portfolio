function HeroBg() {
  return (
    <>
      <div className="absolute -z-1 h-[120%] w-[170%] -translate-x-[15%] rotate-33 overflow-x-clip md:bottom-0 md:block md:h-[110%] md:w-[200%] md:-translate-x-[32%] md:rotate-0 md:overflow-y-visible">
        <div className="h-full w-full bg-[url('assets/herobg.png')] bg-cover"></div>
      </div>
    </>
  );
}

export default HeroBg;
