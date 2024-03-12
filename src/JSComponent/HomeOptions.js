export default function HomeOptions({ onClick }) {
    return (
        <div className='home__options'>
            <button className='Control__Button' onClick={onClick}>
                <p>Start</p>
            </button>
        </div>
    )
}