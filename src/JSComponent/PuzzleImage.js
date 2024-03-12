import React from "react"

export default function PuzzleImage({WIDTH, HEIGHT, PuzzleCell, image}) {
    return (
        <React.Fragment>
            {
                Array(WIDTH * HEIGHT).fill(0).map((_, i) => {
                    return (
                        <PuzzleCell image={image} dataId={null} id={i} key={i} />
                    )
                })
            }
        </React.Fragment>
    )
}