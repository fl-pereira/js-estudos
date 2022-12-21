const range = (start, end) => {
    if(start && end) {
        for (let index = start; index <= end; index++)
        console.log(index)
    } else {
        console.log("Missing Parameters")
    }
    
}

range(10)
range(5,10)