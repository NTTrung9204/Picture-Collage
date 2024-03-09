export default function ResetButton({reset, generateRandomArray, nPuzzle}) {
    function onClick() {
        reset(generateRandomArray(nPuzzle));
    }

    return (
        <button onClick={onClick} className="Control__Button">
            <p>Reset</p>
        </button>

    )
}