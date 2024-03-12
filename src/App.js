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

const images = require.context('./IMG', true);
const imageList = images.keys().map(image => images(image));
const LevelGame = [
    {
        Level: "Esay",
        WIDTH: 4,
        HEIGHT: 2
    },
    {
        Level: "Normal",
        WIDTH: 6,
        HEIGHT: 3
    },
    {
        Level: "Hard",
        WIDTH: 8,
        HEIGHT: 4
    },
    {
        Level: "Very Hard",
        WIDTH: 10,
        HEIGHT: 5
    }
]

function App() {
    const [home, setHome] = useState(true);
    const [index, setIndex] = useState(0);
    const [level, setLevel] = useState(LevelGame[0]);

    const WIDTH = level.WIDTH;
    const HEIGHT = level.HEIGHT;
    const nPuzzle = WIDTH * HEIGHT;
    const ArrayPosition = generateRandomArray(nPuzzle);

    function handleLevelClick() {
        setLevel(level =>{
            const index = (LevelGame.indexOf(level) + 1) % LevelGame.length;
            return LevelGame[index];
        });
    }

    function handleLeftClick() {
        setIndex(prev => (prev - 1 + imageList.length) % imageList.length);
    }

    function handleRightClick() {
        setIndex(prev => (prev + 1) % imageList.length);
    }

    function handleHomeClick() {
        setHome(prev => !prev);
    }

    return (
        <div className="BackGround">
            {home ? <Home imageList={imageList} handleRightClick={handleRightClick}
                        handleLeftClick={handleLeftClick} onClick={handleHomeClick} index={index}
                        handleLevelClick={handleLevelClick} level={level}    
                    /> : 
                    <BackGround 
                        WIDTH={WIDTH} HEIGHT={HEIGHT} nPuzzle={nPuzzle} 
                        generateRandomArray={generateRandomArray} ArrayPosition={ArrayPosition} 
                        handleHomeClick={handleHomeClick} image={imageList[index]}
                    />}
        </div>
    );
}

export default App;
