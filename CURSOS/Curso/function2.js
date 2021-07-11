function fn() {
    return 'code here';
}

const arrowFn = () => 'code here';
const arrowFn2 = () => {
    return 'Code here';
}


//funções tbm são objetos
fn.prop = 'posso criar uma propriedade';

console.log(fn());
console.log(fn.prop);

//receber parametros

const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

//uma função dentro de outra função

function controlFnExec(fnParam) {
    return function(allowed) {
        if (allowed) {
            fnParam
        }
    }
}
