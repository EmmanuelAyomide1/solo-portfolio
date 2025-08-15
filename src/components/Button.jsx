function Button({ children, className }) {
  return (
    <button
      className={`rounded-full px-8 py-2 text-xs font-light md:text-sm ${className ? className : ""}`}
    >
      {children}
    </button>
  );
}

export default Button;
