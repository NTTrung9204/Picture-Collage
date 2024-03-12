export default function Picture({ WIDTH, HEIGHT, image}) {
    return (
        <div className="picture">
            {
                Array(WIDTH * HEIGHT).fill(0).map((_, i) => {
                    return (
                        <div data-id={i} key={i} className="picture__cell"></div>
                    )
                })
            }
            <img className="hintPicture" src={image} alt="puzzle" />
        </div>
    )
}