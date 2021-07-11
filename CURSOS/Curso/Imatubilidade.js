const user = {
    name: 'Bumbum',
    lastname:'Malandro',
    sexualidade:'VIADO'
}
 function getUserWithFullName(user) {
     return {
         ...user,
         fullname: user.name + ' ' + user.lastname + ' ' + user.sexualidadenn
     }
 }

const  userWithFullName = getUserWithFullName(user);
console.log(userWithFullName);