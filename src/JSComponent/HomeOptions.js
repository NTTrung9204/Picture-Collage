import StartButton from "./StartButton"
import LevelButton from "./LevelButton"
import UploadButton from "./UploadButtob"

export default function HomeOptions({ onClick, level, handleLevelClick, handleImageList}) {
    return (
        <div className='home__options'>
            <LevelButton onClick={handleLevelClick} level={level}/>
            <UploadButton handleImageList={handleImageList}/>
            <StartButton onClick={onClick}/>
        </div>
    )
}