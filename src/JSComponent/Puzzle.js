import React from "react";

export default function Puzzle({ WIDTH, HEIGHT}) {
    return (
        <React.Fragment>
            <div className="Puzzle" style={{ left: 20 }}>
                {
                    Array(WIDTH * HEIGHT / 2).fill(0).map((_, i) => {
                        return (
                            <div key={i} className="Puzzle__cell"> </div>
                        )
                    })
                }
            </div>
            <div className="Puzzle" style={{ right: 20 }}>
                {
                    Array(WIDTH * HEIGHT / 2).fill(0).map((_, i) => {
                        return (
                            <div key={i} className="Puzzle__cell"> </div>
                        )
                    })
                }
            </div>
        </React.Fragment>
    )
}