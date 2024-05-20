import profile from './assets/profilepics.jpg'

function Card(){
    return(
        <div className='card'>
            <img className='card-image' src={profile} alt="profile pics" />
            <h2>Taoheed Hamzat</h2>
            <p>I am a Front-End Developer and an entrepreneur</p>
        </div>
    )
}


export default Card