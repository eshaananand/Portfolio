import React from "react";
import SkillCard from "./SkillCard";
import skilldata from "../data/db/skilldata";
import "../css/skill.css";

function Skill() {
  return (
    <div className="skill-div" name="skill">
    <h2>Skillsets</h2>
      <div className="skill-section">
        {skilldata.map((item) => {
          return (
            <SkillCard
              image={item.image}
              alttext={item.alttext}
              title={item.title}
              content={item.content}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Skill;
