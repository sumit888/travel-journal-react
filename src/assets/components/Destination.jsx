function Destination(props){
    return(
        <>        
        <section className="destination container">
            <div className="destination--image">
                <img src={props.img} alt="destination" />
            </div>

            <div className="destination--details">
                <p className="desitnation--country">{props.country} <span><a href={props.googleMap}>View on GoogleMaps</a></span></p>
                <h2 className="desitnation--location">{props.destination}</h2>
                <p className="destination--period">{props.duration}</p>
                <p className="destination--description">{props.description}</p>
            </div>
            
        </section>
        
        </>

    )
}

export default Destination