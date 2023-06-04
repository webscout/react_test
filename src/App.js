import './App.css';
import {useEffect, useRef, useState} from 'react';

function LongRender() {
  const rows = [];

  for (let i = 0; i < 100; i++) {
    const row = [];

    for (let j = 0; j < 100; j++) {
      const color = `rgb(${155+i}, ${55+j+i}, ${155+j})`;

      row.push(
        <div className="item" style={{backgroundColor: color }}>{i}<br/>{j}</div>
      );
    }

    rows.push(
      <div className="row">
        {row}
      </div>
    );
  }

  return <>
    {rows}
  </>
}

function App() {
  const renderStart = useRef();
  const [renderTime, setRenderTime] = useState(null);

  renderStart.current = Date.now();
  useEffect(() => {
    setRenderTime(Date.now() - renderStart.current);
  }, [])

  return (
    <div className="App">
      <div className="renderTime">
        <div>
          {renderTime && renderTime}
        </div>
      </div>
      <LongRender/>
    </div>
  );
}

export default App;
