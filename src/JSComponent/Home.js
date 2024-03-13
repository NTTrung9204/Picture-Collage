import SliceImage from './SliceImage';
import HomeOptions from './HomeOptions';

export default function Home({onClick, handleRightClick, handleLeftClick, imageList, index, handleLevelClick, level, handleImageList}) {

    return (
        <div className="home">
            <SliceImage imageList={imageList} index={index} handleRightClick={handleRightClick} handleLeftClick={handleLeftClick}/>

            <HomeOptions handleImageList={handleImageList} handleLevelClick={handleLevelClick} level={level} onClick={onClick}/>
        </div>
    )
}