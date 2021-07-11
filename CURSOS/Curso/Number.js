Number.prototype.entre = function(inicio, fim) {
    return this >= inicio && this <= fim
}
const imresultado = function (nota){
    if (nota.entre(9, 10)) {
        console.log('destaque')
    }   else if(nota.entre(7, 8.99)) {
            console.log('aprovado')
    }   else if(nota.entre(4, 6.99)) {
            console.log('recuperaão')
    }   else if(nota.entre(0, 3.99)) {
            console.log('reprovado')
    }   else {
            console.log('nota invalida')
    }
    console.log('fim')
}

imresultado(10)
imresultado(7)
imresultado(4)
imresultado(0)


