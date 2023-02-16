import React, { useState } from "react";
import "./DevynPage.css";

function DevynPage() {
  const [selectedNames, setSelectedNames] = useState([]);

  function handleNameClick(name) {
    if (selectedNames.includes(name)) {
      setSelectedNames(selectedNames.filter(selectedName => selectedName !== name));
    } else {
      setSelectedNames([...selectedNames, name]);
    }
  }

  function handleConfirmClick() {
    // Do something with the selected names, e.g. navigate to the final page
    console.log(selectedNames);
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>450</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td onClick={() => handleNameClick("Name 1")} style={{ cursor: "pointer" }}>
              Tomac
            </td>
            <td onClick={() => handleNameClick("Name 2")} style={{ cursor: "pointer" }}>
              Sexton
            </td>
            <td onClick={() => handleNameClick("Name 3")} style={{ cursor: "pointer" }}>
              Name 3
            </td>
            <td onClick={() => handleNameClick("Name 3")} style={{ cursor: "pointer" }}>
              Name 3
            </td>
            <td onClick={() => handleNameClick("Name 3")} style={{ cursor: "pointer" }}>
              Name 3
            </td>
            <td onClick={() => handleNameClick("Name 3")} style={{ cursor: "pointer" }}>
              Name 3
            </td>
            <td onClick={() => handleNameClick("Name 3")} style={{ cursor: "pointer" }}>
              Name 3
            </td>
            {/* Add more names here */}
          </tr>
          {/* Add more rows here */}
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th>250E</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td onClick={() => handleNameClick("Name 4")} style={{ cursor: "pointer" }}>
              Name 4
            </td>
            <td onClick={() => handleNameClick("Name 5")} style={{ cursor: "pointer" }}>
              Name 5
            </td>
            <td onClick={() => handleNameClick("Name 6")} style={{ cursor: "pointer" }}>
              Name 6
            </td>
            <td onClick={() => handleNameClick("Name 10")} style={{ cursor: "pointer" }}>
              Name 10
            </td>
            <td onClick={() => handleNameClick("Name 3")} style={{ cursor: "pointer" }}>
              Name 3
            </td>
            {/* Add more names here */}
          </tr>
          {/* Add more rows here */}
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th>250W</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td onClick={() => handleNameClick("Name 7")} style={{ cursor: "pointer" }}>
              Name 7
            </td>
            <td onClick={() => handleNameClick("Name 8")} style={{ cursor: "pointer" }}>
              Name 8
            </td>
            <td onClick={() => handleNameClick("Name 9")} style={{ cursor: "pointer" }}>
              Name 9
            </td>
            {/* Add more names here */}
          </tr>
          {/* Add more rows here */}
        </tbody>
      </table>

      <button onClick={handleConfirmClick} disabled={selectedNames.length !== 12}>
        Confirm ({selectedNames.length}/12)
      </button>
    </div>
  );
}

export default DevynPage;
