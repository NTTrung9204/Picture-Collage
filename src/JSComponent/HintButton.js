export default function HintButton({hint}) {
    function onClick() {
        hint();
    }

    return (
        <button onClick={onClick} className="Control__Button">
            <label>Hint</label>
        </button>
    )
}