import React, { useState } from "react";
import { Link } from "react-router-dom";
import Devyn from "../ProPicks/devyn";

function Overall(props) {
  const { selectedNames } = props;

  function handleConfirm(names) {
    console.log("Confirmed names:", names);
    // Do something with the confirmed names
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

