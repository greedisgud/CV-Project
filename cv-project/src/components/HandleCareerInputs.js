import React from "react";

const HandleCareerInputs = (props) => {
  const { careerInputs } = props;

  return (
    <div>
      {careerInputs.map((careerInfo) => {
        return <p key={careerInfo.id}>{careerInfo.text}</p>;
      })}
    </div>
  );
};

export default HandleCareerInputs;
