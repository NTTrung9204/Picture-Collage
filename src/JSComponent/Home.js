import {useState} from 'react';

const images = require.context('../IMG', true);
const imageList = images.keys().map(image => images(image));

export default function Home({onClick}) {
    const [index, setIndex] = useState(0);

    function handleLeftClick() {
        console.log("click left!");
        setIndex(prev => (prev - 1 + imageList.length) % imageList.length);
    }

    function handleRightClick() {
        setIndex(prev => (prev + 1) % imageList.length);
    }


    return (
        <div className="home">
            <div className="SliceImage">
                <div style={{right: 15}} className='containerArrow'>
                    <i onClick={handleRightClick} className="fas fa-chevron-right"></i>
                </div>
                {
                    imageList.map((image, i) => {
                        return (
                            <img style={{opacity: `${(i == index)? 1 : 0}`}} key={i} src={image} alt="home" />
                        )
                    })
                }
                <div style={{left: 15}} className='containerArrow'>
                    <i onClick={handleLeftClick}  className="fas fa-chevron-left"></i>
                </div>
            </div>
        </div>
    )
}