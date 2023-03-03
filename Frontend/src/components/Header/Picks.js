import React from 'react';

function Picks() {
  return (
    <div>
      <h1>Weekly Picks</h1>
      <form>
        <label htmlFor="series">Series:</label>
        <input type="text" id="series" name="series" /><br />

        <label htmlFor="picks">Weekly Picks:</label>
        <textarea id="picks" name="picks" rows="4" /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Picks;



