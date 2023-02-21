import React from "react";

function Overall(props) {
  const { selectedNames } = props;

  return (
    <div>
      <h1>Selected Names:</h1>
      <ul>
        {selectedNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Overall;
