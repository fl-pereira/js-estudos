const nums = [1, 2, 3, 4, 5, 6, 7]
const timesTwo = []

for (let index = 0; index < nums.length; index++) {
    const currentValue = nums[index]
    timesTwo.push(currentValue * 2)    
}

console.log("Original Array: " + nums)
console.log("Result times two: " + timesTwo) 

const timeThree = nums.map((actualValue, index, array) => {
    if(index == 0){
        console.log(array)
    }
    return actualValue * 3
})

console.log(timeThree)

const studentGrades = [
    { name: "Felipe", grades: [78, 90] },
    { name: "Daphne", grades: [83, 97] } 
]

const getNamesOnly = (student) => {
    return student.name
}

const getGradesOnly = (student) => {
    return student.grades
}

const names = studentGrades.map(getNamesOnly)
const grades = studentGrades.map(getGradesOnly)

console.log(names)
console.log(grades)

const studentStatus = studentGrades.map((student) => {
    return {
        ...student,
        approved: false
    }
}).map(student => {
    return {
        name: student.name,
        approved: student.approved,
        firstPeriodGrade: student.grades
    }
})

console.log(studentStatus)