export default function ResetButton({reset}) {
    console.log(123, reset);
    return (
        <button onClick={reset} className="resetButton">
            <p>Reset</p>
        </button>

    )
}