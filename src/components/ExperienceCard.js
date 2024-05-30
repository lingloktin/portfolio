import React from "react";

export const ExperienceCard = ({ data, isEducation }) => {
  return (
    <div className="experience-box">
      {data.map((item, index) => (
        <div className="experience-content" key={index}>
          <div className="content">
            <div className="year">
              <i className="bx bxs-calendar"></i> {item.year}
            </div>
            <div className="experience-content-header">
              <div className="experience-icon">
                <img src={item.iconUrl} alt={item.shortName}></img>
              </div>
              <div className="experience-titles-div">
                <div className="experience-title">
                  <h3>{item.title}</h3>
                </div>
                <div className="experience-subtitle">
                  <h4>{item.subtitle}</h4>
                </div>
              </div>
            </div>
            <div>
              {isEducation ? (
                <p>{item.description}</p>
              ) : (
                <ul>
                  {item.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      ))}
      <span className="animate"></span>
    </div>
  );
};
