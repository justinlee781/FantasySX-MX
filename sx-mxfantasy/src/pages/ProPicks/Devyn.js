import React, { useState } from "react";

const names = ["Devyn", "Brian", "Brando"];

const NameSelector = () => {
  const [selectedName, setSelectedName] = useState("");

  const handleClick = (name) => {
    setSelectedName(name);
  };

  return (
    <div>
      <h2>Pick a Name</h2>
      <div>
        {names.map((name) => (
          <button key={name} onClick={() => handleClick(name)}>
            {name}
          </button>
        ))}
      </div>
      <h2>Selected Name</h2>
      <div>{selectedName}</div>
    </div>
  );
};

export default NameSelector;
