export default function PuzzleCell({id, dataId, image}) {

    return (
        <img data-id={dataId} draggable="false" className='Puzzle__cell__image' id={id} src={image} alt="puzzle" />
    )
}