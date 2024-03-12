import './App.css';
import BackGround from './JSComponent/BackGround';
import Home from './JSComponent/Home';
import './CSS/static.css'
import { useState, useEffect } from 'react';
import React from 'react';

function generateRandomArray(n) {
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr.push(i);
    }

    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    return arr;
}

function App() {
    const WIDTH = 6;
    const HEIGHT = 3;
    const nPuzzle = WIDTH * HEIGHT;
    const ArrayPosition = generateRandomArray(nPuzzle);
    const [home, setHome] = useState(true);

    function handleHomeClick() {
        setHome(prev => !prev);
    }

    return (
        <div className="BackGround">
            {home ? <Home onClick={handleHomeClick} /> : 
                    <BackGround 
                        WIDTH={WIDTH} HEIGHT={HEIGHT} nPuzzle={nPuzzle} 
                        generateRandomArray={generateRandomArray} ArrayPosition={ArrayPosition} 
                        handleHomeClick={handleHomeClick}
                    />}
        </div>
    );
}

export default App;
