function NavOption({ text, onClick }) {
  return (
    <a
      onClick={onClick}
      href={`#${text}`}
      className="border-primary-blue md:hover:text-primary-blue w-full cursor-pointer rounded-md border py-3 text-center capitalize hover:bg-black hover:text-white md:w-fit md:border-0 md:py-0 md:hover:bg-transparent"
    >
      {text}
    </a>
  );
}

export default NavOption;
