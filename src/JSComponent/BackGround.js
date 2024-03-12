import PuzzleCell from "./PuzzleCell"
import { useEffect } from "react";
import Picture from "./Picture";
import Puzzle from "./Puzzle"
import PuzzleImage from "./PuzzleImage"
import Control from "./Control"


var isClicked = false;
var isAlert = false;

function settingGame(Picture, pictureCell, PuzzleCellPosition, WIDTH, HEIGHT){
    Picture.style.gridTemplateColumns = `repeat(${WIDTH}, 1fr)`;
    Picture.style.gridTemplateRows = `repeat(${HEIGHT}, 1fr)`;
    Array.from(pictureCell).forEach((cell, i) => {
        cell.style.width = 750 / WIDTH + 'px';
        cell.style.height = 500 / HEIGHT + 'px';
    })

    Array.from(PuzzleCellPosition).forEach((cell, i) => {
        cell.style.width = 750 / WIDTH + 'px';
        cell.style.height = 500 / HEIGHT + 'px';
    })
}

function moveInContainer(element, container, WIDTH, HEIGHT) {
    element.style.transition = 'all 0.3s';
    const dataId = container.getAttribute('data-id');
    const i = element.id;
    const [x, y] = [i % WIDTH, Math.floor(i / WIDTH)]
    const rect = container.getBoundingClientRect();
    element.style.left = rect.left + rect.width / 2 - element.offsetWidth * (x * 100 / WIDTH + 50 / WIDTH) / 100 + 'px';
    element.style.top = rect.top + rect.height / 2 - element.offsetHeight * (y * 100 / HEIGHT + 50 / HEIGHT) / 100 + 'px';
    element.setAttribute('data-id', dataId);
}

function isContainer(element, x, y) {
    const rect = element.getBoundingClientRect();
    return (
        x >= rect.left &&
        x <= rect.right &&
        y >= rect.top &&
        y <= rect.bottom
    );
}

function checkWin() {
    const PuzzleCell = document.getElementsByClassName("Puzzle__cell__image")
    for (let i = 0; i < PuzzleCell.length; i++) {
        if (PuzzleCell[i].getAttribute('data-id') != i) {
            return false;
        }
    }
    return true;
}


export default function BackGround({ handleHomeClick, ArrayPosition, generateRandomArray, nPuzzle, WIDTH, HEIGHT, image}) {
    console.log(WIDTH, HEIGHT);
    function reset(ArrayPosition) {
        const PuzzleCell = document.getElementsByClassName("Puzzle__cell__image")
        const PuzzleCellContainer = document.getElementsByClassName('Puzzle__cell');
        Array.from(PuzzleCell).forEach((cell, i) => {
            const [x, y] = [i % WIDTH, Math.floor(i / WIDTH)]
            cell.style.left = cell.offsetWidth * 0.5 / WIDTH + PuzzleCellContainer[ArrayPosition[i]].getBoundingClientRect().left - cell.offsetWidth * (x * 100 / WIDTH + 50 / WIDTH) / 100 + 'px';
            cell.style.top = cell.offsetHeight * 0.5 / HEIGHT + PuzzleCellContainer[ArrayPosition[i]].getBoundingClientRect().top - cell.offsetHeight * (y * 100 / HEIGHT + 50 / HEIGHT) / 100 + 'px';
    
            cell.setAttribute('data-id', null);
        })
    }

    function solve() {
        const PuzzleCell = document.getElementsByClassName("Puzzle__cell__image")
        const pictureCell = document.getElementsByClassName('picture__cell');
        recureSolve(PuzzleCell, pictureCell, 0)
    }

    function recureSolve(PuzzleCell, pictureCell, i) {
        if (i == nPuzzle) {
            return;
        }
        if(PuzzleCell[i].getAttribute('data-id') == i){
            recureSolve(PuzzleCell, pictureCell, i + 1);
            return;
        }
        moveInContainer(PuzzleCell[i], pictureCell[i], WIDTH, HEIGHT);
        setTimeout(() => {
            recureSolve(PuzzleCell, pictureCell, i + 1);
        }, 300);
    }

    function hint() {
        const hintImage = document.getElementsByClassName('hintPicture')[0];
        setTimeout(() => {
            hintImage.style.opacity = 1;
        }, 0);
        setTimeout(() => {
            hintImage.style.opacity = 0;
        }, 2500);
    }

    useEffect(() => {
        const PuzzleCell = document.getElementsByClassName("Puzzle__cell__image")
        const pictureCell = document.getElementsByClassName('picture__cell');
        const Picture = document.getElementsByClassName('picture')[0];
        const PuzzleCellPosition = document.getElementsByClassName('Puzzle__cell');
        settingGame(Picture, pictureCell, PuzzleCellPosition, WIDTH, HEIGHT);
        reset(ArrayPosition);
        Array.from(PuzzleCell).forEach((cell, i) => {
            var positionPointer = {
                x: 0,
                y: 0
            };
            const [x, y] = [i % WIDTH, Math.floor(i / WIDTH)]
            cell.style.clipPath = `polygon(${x * 100 / WIDTH}% ${y * 100 / HEIGHT}%, ${(x + 1) * 100 / WIDTH}% ${y * 100 / HEIGHT}%, ${(x + 1) * 100 / WIDTH}% ${(y + 1) * 100 / HEIGHT}%, ${x * 100 / WIDTH}% ${(y + 1) * 100 / HEIGHT}%)`

            cell.addEventListener('mousedown', (event) => {
                isClicked = true;
                cell.style.transition = 'all 0.0s';
                cell.style.zIndex = 100;
                positionPointer.x = event.clientX - cell.getBoundingClientRect().left;
                positionPointer.y = event.clientY - cell.getBoundingClientRect().top
            })

            cell.addEventListener('mousemove', (event) => {
                if (isClicked) {
                    event.target.setAttribute('data-id', null);
                    event.target.style.left = event.clientX - positionPointer.x + 'px';
                    event.target.style.top = event.clientY - positionPointer.y + 'px';
                    Array.from(pictureCell).forEach(pictureCell => {
                        if (isContainer(pictureCell, event.clientX, event.clientY)) {
                            pictureCell.style.backgroundColor = 'lightgreen';
                        }
                        else {
                            pictureCell.style.backgroundColor = 'unset';
                        }
                    });
                }
            })
        })


        document.addEventListener('mouseup', (e) => {
            isClicked = false;
            e.target.style.zIndex = 0;
            Array.from(pictureCell).forEach(pictureCell => {
                if (isContainer(pictureCell, e.clientX, e.clientY) && e.target.className == 'Puzzle__cell__image') {
                    moveInContainer(e.target, pictureCell, WIDTH, HEIGHT);
                    if(checkWin() && !isAlert){
                        isAlert = true;
                        alert('You win');
                    }
                }
            });
        })


    }, [])

    return (
        <div className="Game">
            <Picture WIDTH={WIDTH} HEIGHT={HEIGHT} image={image} />
            <Puzzle WIDTH={WIDTH} HEIGHT={HEIGHT} />
            
            <PuzzleImage image={image} WIDTH={WIDTH} HEIGHT={HEIGHT} PuzzleCell={PuzzleCell} />

            <Control nPuzzle={nPuzzle} solve={solve} reset={reset} generateRandomArray={generateRandomArray} hint={hint} handleHomeClick={handleHomeClick} />
        </div>
    )
}