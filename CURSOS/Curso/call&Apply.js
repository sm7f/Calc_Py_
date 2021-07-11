function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'notbook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

const carro = { preco: 50000, desc: 0.20}

console.log(getPreco.apply(produto))
console.log(getPreco.call(produto)) 
console.log(getPreco.call(carro, 0.17, '$'))