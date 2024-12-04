
import './random.css'
import React, { useState } from 'react';
import './App.css';

function App() {
  const [isSwapped, setIsSwapped] = useState(false);
  const [colors, setColors] = useState({
    sidebar: "#ffffff",
    top1: "#ffffff",
    top2: "#ffffff",
    top3: "#ffffff",
    bottom1: "#ffffff",
    bottom2: "#ffffff",
  });

  const handleSwap = () => {
    setIsSwapped((prevState) => !prevState); 
  };

  const handleRandomColors = () => {
    setColors({
      sidebar: getRandomColor(),
      top1: getRandomColor(),
      top2: getRandomColor(),
      top3: getRandomColor(),
      bottom1: getRandomColor(),
      bottom2: getRandomColor(),
    });
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="app-container">
      <div className="sidebar" style={{ backgroundColor: colors.sidebar }}>
      </div>

      <div className="main-content">
        <div className="navbar">
          <div>
            <button className="btn" onClick={handleSwap}>
              Swap Rows
            </button>
            <button className="btn" onClick={handleRandomColors}>
              Random Colors
            </button>
          </div>
        </div>

        <div className="fullscreen-container">
          {isSwapped ? (
            <>
            
              <div className="row">
                <div
                  className="cell"
                  style={{ backgroundColor: colors.bottom1 }}
                >
                  Bottom 1
                </div>
                <div
                  className="cell"
                  style={{ backgroundColor: colors.bottom2 }}
                >
                  Bottom 2
                </div>
              </div>
              <div className="row">
                <div className="cell" style={{ backgroundColor: colors.top1 }}>
                  Top 1
                </div>
                <div className="cell" style={{ backgroundColor: colors.top2 }}>
                  Top 2
                </div>
                <div className="cell" style={{ backgroundColor: colors.top3 }}>
                  Top 3
                </div>
              </div>
            </>
          ) : (
            <>
             
              <div className="row">
                <div className="cell" style={{ backgroundColor: colors.top1 }}>
                  Top 1
                </div>
                <div className="cell" style={{ backgroundColor: colors.top2 }}>
                  Top 2
                </div>
                <div className="cell" style={{ backgroundColor: colors.top3 }}>
                  Top 3
                </div>
              </div>
              <div className="row">
                <div
                  className="cell"
                  style={{ backgroundColor: colors.bottom1 }}
                >
                  Bottom 1
                </div>
                <div
                  className="cell"
                  style={{ backgroundColor: colors.bottom2 }}
                >
                  Bottom 2
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
































































