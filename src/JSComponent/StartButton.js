export default function StartButton({ onClick }) {
    return (
        <button className='Control__Button' onClick={onClick}>
            <label>Start</label>
        </button>
    )
}