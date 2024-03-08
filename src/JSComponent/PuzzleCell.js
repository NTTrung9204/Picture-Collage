import image from '../IMG/image4.jpg';


export default function PuzzleCell({id}) {

    return (
        // <div className="Puzzle__cell">
            <img draggable="false" className='Puzzle__cell__image' id={id} src={image} alt="puzzle" />
        // </div>
    )
}