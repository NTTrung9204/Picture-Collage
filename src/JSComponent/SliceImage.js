export default function SliceImage({ sliceImage, imageList, index, handleLeftClick, handleRightClick }) {
    return (
        <div className="SliceImage">
            <div style={{ right: 15 }} className='containerArrow'>
                <i onClick={handleRightClick} className="fas fa-chevron-right"></i>
            </div>
            {
                imageList.map((image, i) => {
                    return (
                        <img style={{ opacity: `${(i === index) ? 1 : 0}` }} key={i} src={image} alt="home" />
                    )
                })
            }
            <div style={{ left: 15 }} className='containerArrow'>
                <i onClick={handleLeftClick} className="fas fa-chevron-left"></i>
            </div>
        </div>
    )
}