function Skill({ children, active, index }) {
  const isActive = active === index;
  return (
    <div
      className={`rounded-full border border-white px-5 py-3 text-xs text-white md:text-sm ${isActive ? "bg-primary-blue" : "bg-[#68686833]"}`}
    >
      {children}
    </div>
  );
}

export default Skill;
