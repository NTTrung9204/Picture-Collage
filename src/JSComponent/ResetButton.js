export default function ResetButton({reset, generateRandomArray, nPuzzle}) {
    function onClick() {
        reset(generateRandomArray(nPuzzle));
    }

    return (
        <button onClick={onClick} className="resetButton">
            <p>Reset</p>
        </button>

    )
}