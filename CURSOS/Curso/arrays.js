const notas = [6,7,9,8,7]

for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'andreia',
    sobrenome: 'amorim',
    idade: 28,
    peso: 55
}

for(let atributo in pessoa) {
    console.log(`${atributo}= ${pessoa[atributo]}`)
}

const numberandstrings = Array.of(1,2,'strings','texto');
//console
const b3 = Array('jhon','cris','jenny')
//console
const b2 = Array(3)
//console
//const divs = document.querySelectorAll('div')
//const divArray = Array.from(divs)
//divArray.pop()
//divArray.shift()

//armazena em uma variavel
const fun2 = function () {}

//armazena em um array
const array = [function (a,b) {return a+b}, fun1 ,fun2]
console.log(array[0](2,3))

//armazena atributos de um objeto
const obj = {}
obj.falar = function () {return "opa"}
console.log(obj.falar())

//passar função como param
function run(fun) {
    fun()
}
run(function() {console.log("executando...")})
