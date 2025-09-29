import { useState } from "react";
import Skill from "./Skill";

function SkillList({ className }) {
  const [active, setActive] = useState(null);

  return (
    <div
      className={`flex flex-col justify-center space-y-5 md:flex-row md:space-y-0 md:space-x-5 ${className ? className : ""}`}
    >
      <div className="flex justify-center space-x-5">
        <Skill index={1} active={active}>
          {" "}
          Landing Page
        </Skill>
        <Skill index={2} active={active}>
          {" "}
          Product Design
        </Skill>
      </div>
      <div className="flex justify-center space-x-5">
        <Skill index={3} active={active}>
          {" "}
          Flyer Design
        </Skill>
        <Skill index={4} active={active}>
          {" "}
          Web Design
        </Skill>
      </div>
    </div>
  );
}

export default SkillList;
