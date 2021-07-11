const students = [
{
    name:'aron',
    grade: 1
},
{
    name:'joao',
    grade: -1
},
{
    name:'sofia',
    grade: 8
},
{
    name:'safira',
    grade: 9
}

];

function getApprovedStudents(studentsList) {
    return studentsList.filter(students => students.grade >=7);
}

console.log('Alunos Aprovados:');
console.log(getApprovedStudents(students));

console.log('\nLista Alunos Burros:');
console.log(students);


