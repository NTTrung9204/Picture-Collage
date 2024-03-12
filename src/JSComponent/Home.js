import {useState} from 'react';
import SliceImage from './SliceImage';
import HomeOptions from './HomeOptions';

export default function Home({onClick, handleRightClick, handleLeftClick, imageList, index}) {

    return (
        <div className="home">
            <SliceImage imageList={imageList} index={index} handleRightClick={handleRightClick} handleLeftClick={handleLeftClick}/>

            <HomeOptions onClick={onClick}/>
        </div>
    )
}