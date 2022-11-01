// --------------------- DES OBJETS COMME PARAMETRES ---------------------

const user = {
    prenom: 'Robert',
    age: 27
}

function printInfo(user){
    return '<h1>Hola ' + user.prenom + '</h1>';
}

console.log(printInfo(user));

document.body.innerHTML = printInfo(user);