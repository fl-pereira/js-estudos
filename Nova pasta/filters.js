const studentsAndGrades = [
    { name: "Felipe", approved: false, firstPeriodGrades: [78, 90] },
    { name: "Daphne", approved: true, firstPeriodGrades: [83, 97] } 
]

const approvedStudents = studentsAndGrades.filter((student) => student.approved == true)
const nameStartsWithF = studentsAndGrades.filter((student) => student.name[0] == 'F')

console.log(approvedStudents)
console.log(nameStartsWithF)