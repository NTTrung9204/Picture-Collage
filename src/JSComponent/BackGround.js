import PuzzleCell from "./PuzzleCell"
import { useEffect } from "react"
import ResetButton from "./ResetButton"


var isClicked = false;

function moveInContainer(element, container) {
    const dataId = container.getAttribute('data-id');
    const i = element.id;
    const [x, y] = [i % 10, Math.floor(i / 10)]
    const rect = container.getBoundingClientRect();
    element.style.left = rect.left + rect.width / 2 - element.offsetWidth * (x * 10 + 5) / 100 + 'px';
    element.style.top = rect.top + rect.height / 2 - element.offsetHeight * (y * 20 + 10) / 100 + 'px';
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
    const pictureCell = document.getElementsByClassName('picture__cell');
    for (let i = 0; i < pictureCell.length; i++) {
        if (pictureCell[i].getAttribute('data-id') != i) {
            return false;
        }
    }
    return true;
}

function reset(ArrayPosition) {
    const PuzzleCell = document.getElementsByClassName("Puzzle__cell__image")
    const PuzzleCellContainer = document.getElementsByClassName('Puzzle__cell');
    console.log(PuzzleCell);
    Array.from(PuzzleCell).forEach((cell, i) => {
        const [x, y] = [i % 10, Math.floor(i / 10)]
        cell.style.left = cell.offsetWidth * 0.05 + PuzzleCellContainer[ArrayPosition[i]].getBoundingClientRect().left - cell.offsetWidth * (x * 10 + 5) / 100 + 'px';
        cell.style.top = cell.offsetHeight * 0.1 + PuzzleCellContainer[ArrayPosition[i]].getBoundingClientRect().top - cell.offsetHeight * (y * 20 + 10) / 100 + 'px';

        cell.setAttribute('data-id', null);
    })
}


export default function BackGround({ ArrayPosition }) {
    console.log(reset);

    useEffect(() => {
        const PuzzleCell = document.getElementsByClassName("Puzzle__cell__image")
        const pictureCell = document.getElementsByClassName('picture__cell');
        // const PuzzleCellContainer = document.getElementsByClassName('Puzzle__cell');
        reset(ArrayPosition);
        Array.from(PuzzleCell).forEach((cell, i) => {
            var positionPointer = {
                x: 0,
                y: 0
            };
            const [x, y] = [i % 10, Math.floor(i / 10)]
            cell.style.clipPath = `polygon(${x * 10}% ${y * 20}%, ${(x + 1) * 10}% ${y * 20}%, ${(x + 1) * 10}% ${(y + 1) * 20}%, ${x * 10}% ${(y + 1) * 20}%)`

            // cell.style.left = cell.offsetWidth * 0.05 + PuzzleCellContainer[ArrayPosition[i]].getBoundingClientRect().left - cell.offsetWidth * (x * 10 + 5) / 100 + 'px';
            // cell.style.top = cell.offsetHeight * 0.1 + PuzzleCellContainer[ArrayPosition[i]].getBoundingClientRect().top - cell.offsetHeight * (y * 20 + 10) / 100 + 'px';


            cell.addEventListener('mousedown', (event) => {
                isClicked = true;
                cell.style.transition = 'all 0.0s';
                cell.style.zIndex = 100;
                positionPointer.x = event.clientX - cell.getBoundingClientRect().left;
                positionPointer.y = event.clientY - cell.getBoundingClientRect().top
            })

            cell.addEventListener('mousemove', (event) => {
                if (isClicked) {
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
                if (isContainer(pictureCell, e.clientX, e.clientY)) {
                    e.target.style.transition = 'all 0.3s';
                    moveInContainer(e.target, pictureCell);
                }
            });
        })


    }, [])

    return (
        <div className="BackGround">
            <div className="picture">
                {
                    Array(50).fill(0).map((_, i) => {
                        return (
                            <div data-id={i} key={i} className="picture__cell"></div>
                        )
                    })
                }
            </div>

            <div className="Puzzle" style={{ left: 20 }}>
                {
                    Array(25).fill(0).map((_, i) => {
                        return (
                            <div key={i} className="Puzzle__cell"> </div>
                        )
                    })
                }
            </div>
            <div className="Puzzle" style={{ right: 20 }}>
                {
                    Array(25).fill(0).map((_, i) => {
                        return (
                            <div key={i} className="Puzzle__cell"> </div>
                        )
                    })
                }
            </div>
            {
                Array(50).fill(0).map((_, i) => {
                    return (
                        <PuzzleCell dataId={null} id={i} key={i} />
                    )
                })
            }

            <div className="Control">
                <ResetButton onClick={reset} />
            </div>
        </div>
    )
}