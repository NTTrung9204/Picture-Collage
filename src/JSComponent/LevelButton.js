export default function LevelButton({ onClick, level }) {
    console.log('LevelButton', level)
    return(
        <button className='Control__Button' onClick={onClick}>
            <p>{level.Level}</p>
        </button>
    )
}