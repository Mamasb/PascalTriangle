import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [triangle, setTriangle] = useState([]);
  const [rows, setRows] = useState(5);

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/api/triangle?rows=${rows}`)
      .then(res => res.json())
      .then(data => setTriangle(data));
  }, [rows]);

  return (
  
    <div className="App">
      <h1>🎲 Pascal's Triangle Game</h1>
      <label>Number of Rows:
        <input
          type="number"
          value={rows}
          onChange={e => setRows(e.target.value)}
          min="1"
        />
      </label>
      <div style={{ marginTop: '20px' }}>
        {triangle.map((row, i) => (
          <div key={i}>
            {row.map((num, j) => (
              <span key={j} style={{ margin: '0 5px' }}>{num}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
