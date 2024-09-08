function Destination(props){
    return(
        <>        
        <section className="destination container">
            <div className="destination--image">
                <img src={props.destination.img} alt="destination" />
            </div>

            <div className="destination--details">
                <p className="destination--country"><img src="map-icon.png" width="10px" height="auto" /> {props.destination.country} <span><a href={props.destination.googleMap} target="__blank">View on GoogleMaps</a></span></p>
                <h2 className="destination--location">{props.destination.destination}</h2>
                <p className="destination--period">{props.destination.duration}</p>
                <p className="destination--description">{props.destination.description}</p>
            </div>
            
        </section>
        
        </>

    )
}

export default Destination