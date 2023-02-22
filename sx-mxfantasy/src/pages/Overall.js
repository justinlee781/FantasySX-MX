import React from "react";
import Devyn from "../ProPicks/devyn";

function Overall(props) {
  const { selectedNames } = props;

  function handleConfirm(confirmedNames) {
    console.log("Confirmed Names:", confirmedNames);
  }

  return (
    <div>
      <h1>Selected Names:</h1>
      <ul>
        {selectedNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <Devyn onConfirm={handleConfirm} />
    </div>
  );
}

export default Overall;
