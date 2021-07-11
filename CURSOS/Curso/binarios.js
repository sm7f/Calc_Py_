//arrays
var arvores = new Array('1','2','3','4','5');
0 in arvores;//true
3 in arvores;//true
6 in arvores;//false
'1' in arvores;[1] // false, deve especificar o numero do indice
'lenght' in arvores; // retorna true( lenght é uma propriedade de array)

//objetos predefinidos
'pi' in Math // true
var minhastring = new String('coral');
'length' in minhastring // retorna true

//objetos personalizados
var meucarro = {marca:'honda', modelo: 'accord', ano:1998};
'marca' in meucarro; // true
'modelo' in meucarro; // true


//instaceof
objeto instanceof tipoObjeto
var dia = new Date(2018,12,17);
if (dia instanceof Date) {
    //code here
}