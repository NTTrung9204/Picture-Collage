import StartButton from "./StartButton"
import LevelButton from "./LevelButton"

export default function HomeOptions({ onClick, level, handleLevelClick}) {
    console.log('HomeOptions', level)
    return (
        <div className='home__options'>
            <LevelButton onClick={handleLevelClick} level={level}/>
            <StartButton onClick={onClick}/>
        </div>
    )
}