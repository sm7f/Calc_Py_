// Retorna o tamanho de uma string
const textsize = 'texto'.length;
console.log(`quantidade de letras: ${textsize}`);

// Retorna o array quebrando a string por um delimitador
const splittedtext = 'texto'.split('x');
console.log('\narray com as posições separadas pelo deliitador:', splittedtext);

// busca por um valor e substitui por outro
const replacedtext = 'texto'.replace('text', 'txeT');
console.log('\nsubstituicao de valor:', replacedtext);

// retorna a fatia de um valor
const lastchar = 'texto'.slice(-1);
console.log('\nultima letra de uma string:',lastchar);

const allwithoutlastchar = 'texto'.slice(0,-1);
console.log('\nvalor da string da segunda letra até a ultima', allwithoutlastchar);

const secondtoend = 'texto'.slice(1);
console.log('\nvalor da string da segunda letra até a ultima:', secondtoend);

// retorna n caracters a partir de ua posição
const twocharbeforefirstpos = 'texto'.substr(0,2);
console.log('\nas duas letras primeiras letras são:', twocharbeforefirstpos);