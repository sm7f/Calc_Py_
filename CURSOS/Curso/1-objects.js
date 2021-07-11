let user = {
    name: 'herberth'
};
console.log(user);
//alterando a propriedade de um objeto
user.name = 'outro nome1';

console.log(user);

user['name'] = 'outro nome 2';

console.log(user);

const prop = 'name';
user[prop] = 'outro nome 3';

console.log(user);

// criando uma propriedade
//user.lastname = 'alves amorim';

//deletando uma propriedade
//delete user.name;