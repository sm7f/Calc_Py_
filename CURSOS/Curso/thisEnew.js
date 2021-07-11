function pessoa(name) {
    this.name = name;
}
const p = new pessoa ('herebrth')

console.log(p)

//--------------------------------------------------------

function Animal(qtdePatas) {
    this.name = qtdePatas;
}
function Cachorro(morde) {
    Animal.call(this, 4);
    this.morde = morde;
}

const pug = new Cachorro(false);
console.log(pug)