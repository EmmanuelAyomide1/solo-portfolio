function ExpItem({ job }) {
  const { companyName, duration, jobTitle, jobDescription } = job;

  return (
    <div className="flex w-full justify-between text-black even:[&_circle]:bg-black nth-last-[1]:[&_hr]:hidden">
      <div className="w-2/5 min-w-20">
        <p className="text-xl font-semibold md:text-2xl md:font-bold">
          {companyName}
        </p>
        <p className="text-xs md:text-[16px]"> {duration}</p>
      </div>
      <div className="flex flex-col items-center justify-start">
        <div className="flex h-4 w-4 items-center justify-center rounded-full border-1 border-dashed md:h-5 md:w-5">
          <circle className="bg-primary-blue h-3 w-3 rounded-full md:h-4 md:w-4"></circle>
        </div>
        <hr className="h-[calc(100%-20px)] w-0 border-l-1 border-dashed"></hr>
      </div>
      <div className="w-45 md:w-2/5">
        <p className="text-xl font-semibold md:text-2xl md:font-bold">
          {jobTitle}
        </p>
        <p className="pb-5 text-justify text-[10px] md:text-sm">
          {jobDescription}
        </p>
      </div>
    </div>
  );
}

export default ExpItem;
