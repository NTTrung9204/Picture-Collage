export default function LevelButton({ onClick, level }) {
    return(
        <button className='Control__Button' onClick={onClick}>
            <label>{level.Level}</label>
        </button>
    )
}