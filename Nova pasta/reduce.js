const numbers = [1, 2, 3, 4, 5, 6, 7]
let sum = 0

const reduceResult = numbers.reduce((sum, currentValue, currentIndex, array) => {
    return sum + currentValue
})

console.log(reduceResult)