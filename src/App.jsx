 import Header from "./assets/components/Header"
 import Destination from "./assets/components/Destination";
 import data from "./data.js"

 function App(){

  const desitnations = data.map(function(destination){
    return(
      <Destination
        key = {destination.id}
        destination = {destination}
        // img= {destination.img}
        // destination = {destination.destination}
        // country= {destination.country}
        // googleMap={destination.googleMap}
        // duration={destination.duration}
        // description={destination.description}
        
      />
    )
  })

  return(
    <>
      <Header />
      {desitnations}
      
    </>
  );
}

export default App

// id: 1,
//         img: "mafushi.webp",
//         country: "Maldives",
//         googleMap: "link",
//         destination: "Mafushi Island",
//         duration: "07 Feb - 15 Feb",
//         description: "An unforgetabble visit to a public isalnd"