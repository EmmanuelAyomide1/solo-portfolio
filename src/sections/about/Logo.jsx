function Logo({ children, className }) {
  return (
    <li
      className={`bg-primary-blue flex h-8 w-8 items-center justify-center rounded-full p-2 ${className ? className : ""}`}
    >
      {children}
    </li>
  );
}

export default Logo;
