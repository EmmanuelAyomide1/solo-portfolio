import PortfolioItem from "./PortfolioItem";
import { projects } from "../../data";

function PortfolioGrid() {
  return (
    <div className="grid w-full gap-6 md:grid-cols-2 md:space-y-0">
      {projects.map((project, index) => (
        <PortfolioItem key={index} project={project} />
      ))}
    </div>
  );
}

export default PortfolioGrid;
