function add(a,b){
    console.log("Performing " + a + " + " + b)
    return a + b
}

function subtract(a,b){
    console.log("Performing " + a + " - " + b)
    return a - b
}

function multiply(a,b){
    console.log("Performing " + a + " * " + b)
    return a * b
}

function run(operation, a,b){
    const result = operation(a,b)
    console.log("The result is " + result)
}

run(add, 2, 2)
run(subtract, 5, 3)
run(multiply, 4, 3)

function finalPriceWithTax(tax, price) {
    tax /= 100
    return(tax * price) + price
}

const tv = 400
console.log(finalPriceWithTax(10,tv))