import SolveButton from "./SolveButton"
import ResetButton from "./ResetButton"
import HintButton from "./HintButton"
import BackButton from "./BackButton"

export default function Control({reset, generateRandomArray, nPuzzle, solve, hint, handleHomeClick}) {
    return (
        <div className="Control">
                <ResetButton reset={reset} generateRandomArray={generateRandomArray} nPuzzle={nPuzzle} />
                <SolveButton solve={solve} />
                <HintButton hint={hint} />
                <BackButton back={handleHomeClick} />
            </div>
    )
}