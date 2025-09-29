import ExpItem from "./ExpItem";
import { experiences } from "../../data";

function ExpList() {
  return (
    <div className="group flex flex-col items-center">
      {experiences.map((exp, index) => (
        <ExpItem key={index} job={exp} />
      ))}
    </div>
  );
}

export default ExpList;
