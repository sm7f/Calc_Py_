const myNumber = 12.4032;

//transrformar numero para string
const numbestring = myNumber.toString();
console.log('numero transformado em string: ', typeof numbestring);
//retorna numero com um numero de casas decimais
const fixedtwodecimals = myNumber.toFixed(2);
console.log('\nnumero com duas casas decimais', fixedtwodecimals);
//transforma uma string em float
console.log('\string parseada para float:', parseFloat('13.22'));
//transrforma uma string em int
console.log('\string parseada para int:', parseInt('13.20'));
