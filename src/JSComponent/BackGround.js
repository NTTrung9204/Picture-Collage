export default function BackGround() {
    return (
        <div className="BackGround">
            <div className="picture">
                {
                    Array(50).fill(0).map((_, i) => {
                        return (
                            <div key={i} className="picture__cell"></div>
                        )
                    })
                }
            </div>
        </div>
    )
}