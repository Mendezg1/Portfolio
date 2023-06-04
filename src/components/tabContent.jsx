import './tabContent.css'

function Card ({title,info}){
    return(
        <div className='card-content'>
            <h3 className='card-title'>{title}</h3>
            <p className='card-info'>{info}</p>
        </div>
    )
}

export default Card