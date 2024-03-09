import image from '../IMG/image4.jpg';


export default function PuzzleCell({id, dataId}) {

    return (
        <img data-id={dataId} draggable="false" className='Puzzle__cell__image' id={id} src={image} alt="puzzle" />
    )
}