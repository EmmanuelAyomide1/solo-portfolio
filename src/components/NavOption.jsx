function NavOption({ text }) {
  return (
    <div className="border-primary-blue w-full rounded-md border py-3 text-center capitalize hover:bg-black hover:text-white md:w-fit md:border-0 md:py-0 md:hover:bg-transparent md:hover:text-black">
      {text}
    </div>
  );
}

export default NavOption;
