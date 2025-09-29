function Logo({ children, className, link }) {
  return (
    <li
      className={`bg-primary-blue h-8 w-8 rounded-full p-2 ${className ? className : ""}`}
    >
      <a
        href={link}
        target="_blank"
        className="flex h-full w-full items-center justify-center"
      >
        {children}
      </a>
    </li>
  );
}

export default Logo;
