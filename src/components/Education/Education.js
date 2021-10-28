import React, { useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";

import "./Education.css";
import EducationCard from "./EducationCard";

import { educationData } from "../../data/educationData";

function Education() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="education"
      id="resume"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="education-body">
        {educationData.map((edu) => (
          <EducationCard
            key={edu.id}
            id={edu.id}
            institution={edu.institution}
            course={edu.course}
            imgPath={edu.imgPath}
          />
        ))}
      </div>
    </div>
  );
}

export default Education;
