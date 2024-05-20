import profile from './assets/profilepics.jpg'

function Card(){
    return(
        <div className='card'>
            <img className='card-image' src={profile} alt="profile pics" />
            <h2 className='card-tittle'>Taoheed Hamzat</h2>
            <p className='card-text'>I am a Front-End Developer and an entrepreneur</p>
        </div>
    )
}


export default Card