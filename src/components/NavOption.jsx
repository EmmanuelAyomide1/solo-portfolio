function NavOption({ text }) {
  return (
    <div className="border-primary-blue md:hover:text-primary-blue w-full cursor-pointer rounded-md border py-3 text-center capitalize hover:bg-black hover:text-white md:w-fit md:border-0 md:py-0 md:hover:bg-transparent">
      {text}
    </div>
  );
}

export default NavOption;
