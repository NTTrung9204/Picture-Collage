export default function SolveButton({solve}) {
    function onClick() {
        solve();
    }

    return (
        <button onClick={onClick} className="Control__Button">
            <label>Solve</label>
        </button>
    )
}