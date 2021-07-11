    // Ou lógco (||)

exp1 || exp2
var o1 = true   ||     true;  //t||t //true
var o2 = false  ||     true;  //f||t //true
var o3 = true   ||    false;  //t||f //true
var o4 = false  || (3 == 4);  //f||f //false
var o5 = 'gato' ||    'cao';  //t||t //gato
var o6 = false  ||   "gato";  //f||t //gato
var o7 = 'gato' ||    false;  //t||f //gato

//não logico
!exp1

var n1 = !true;    //retorna false
var n2 = !false;   //retorna true
var n3 = !'gato';  //retorna false