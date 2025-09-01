function Button({ children, className, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className={`rounded-full px-8 py-2 text-xs font-light hover:bg-black hover:text-white md:text-sm ${className ? className : ""}`}
    >
      {children}
    </button>
  );
}

export default Button;
