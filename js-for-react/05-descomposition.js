// --------------------- DESCOMPOSITION (DESTRUCTURING) ---------------------


const user = {
    prenom: 'Robert',
    age: 27
}

function printInfo(user){

    const {prenom, age} = user;
    console.log(prenom, age);

    return '<h1>Hola ' + prenom + '</h1>';
}

console.log(printInfo(user));

document.body.innerHTML = printInfo(user);