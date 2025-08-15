import Star from "./Star";

function StarList({ length, className }) {
  return (
    <ul className="flex">
      {Array.from({ length }, (_, i) => (
        <Star key={i} color="#FD853A" className={className} />
      ))}
    </ul>
  );
}

export default StarList;
