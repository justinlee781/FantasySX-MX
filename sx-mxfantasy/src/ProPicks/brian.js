import React, { useState } from "react";
import "./DevynPage.css";

function Brian(props) {
  const [selectedNames, setSelectedNames] = useState([]);

  function handleNameClick(name) {
    setSelectedNames((selectedNames) => {
      const isSelected = selectedNames.includes(name);
      return isSelected
        ? selectedNames.filter((selectedName) => selectedName !== name)
        : selectedNames.length < 12
        ? [...selectedNames, name]
        : selectedNames;
    });
  }

  function handleConfirmClick() {
    if (selectedNames.length === 12) {
      const confirmedNames = [selectedNames.slice(0, 6), selectedNames.slice(6)];
      props.onConfirm(confirmedNames);
      setSelectedNames([]);
    }
  }

  return (
    <div className="container">
      <div className="tables">
        <table>
          <thead>
            <tr>
              <th>450</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(Math.ceil(12 / 6))].map((_, rowIndex) => (
              <tr key={rowIndex}>
                {Array.from({ length: 6 }).map((_, colIndex) => {
                  const index = rowIndex * 6 + colIndex;
                  const name = "Name " + (index + 1);
                  return (
                    <td
                      key={name}
                      onClick={() => handleNameClick(name)}
                      style={{ cursor: "pointer" }}
                      className={selectedNames.includes(name) ? "selected" : ""}
                    >
                      {name}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="tables">
        <table>
          <thead>
            <tr>
              <th>250E</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(Math.ceil(12 / 6))].map((_, rowIndex) => (
              <tr key={rowIndex}>
                {Array.from({ length: 6 }).map((_, colIndex) => {
                  const index = 12 + rowIndex * 6 + colIndex;
                  const name = "Name " + (index + 1);
                  return (
                    <td
                      key={name}
                      onClick={() => handleNameClick(name)}
                      style={{ cursor: "pointer" }}
                      className={selectedNames.includes(name) ? "selected" : ""}
                    >
                      {name}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="tables">
        <table>
          <thead>
            <tr>
              <th>250W</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(Math.ceil(12 / 6))].map((_, rowIndex) => (
              <tr key={rowIndex}>
                {Array.from({ length: 6 }).map((_, colIndex) => {
                  const index = 24 + rowIndex * 6 + colIndex;
                  const name = "Name " + (index + 1);
                  return (
                    <td
                      key={name}
                      onClick={() => handleNameClick(name)}
                      style={{ cursor: "pointer" }}
                      className={selectedNames.includes(name) ? "selected" : ""}
                    >
                      {name}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="button-container">
      <button className="confirm-button" onClick={handleConfirmClick}>
        Confirm
      </button>
    </div>
  </div>
</div>
);
}

export default Brian;