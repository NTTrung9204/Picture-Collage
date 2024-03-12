export default function BackButton({back}) {
    function onClick() {
        back();
    }

    return (
        <button onClick={onClick} className="Control__Button">
            <p>Back</p>
        </button>
    )
}