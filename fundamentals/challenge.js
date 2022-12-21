const askRide = (pickup, ...stops) => {
    if(pickup && stops) {
        console.log("Picking up at: " + pickup)
        for(stop of stops) {
            console.log("Stopping at: " + stop)
        }
        console.log("Ending ride.")
    } else if (stops) {
            console.log("Picking up at: Current location")
            for(stop of stops) {
                console.log("Stopping at: " + stop)
            }
            console.log("Ending ride.")
    } else {
        console.log("Invalid parameters")
    }     
}

askRide("1st Avenue", "3rd Avenude")
askRide(undefined,"1st Avenue","2nd Avenue")