// --------------------- FONCTIONS FLECHEES - FONCTIONS FLECHEES EN LIGNE ---------------------

// function add(x, y){
//     return x + y;
// }


// const add = (x, y) => {
//     return x + y;
// }


// ----------------------


const button = document.createElement('button');
button.innerText = 'click me';

button.addEventListener('click', () => {

    alert('clicked');
});

document.body.append(button);

// -----------------------


const showText = () => 'Hello Word (showText)';
const showNumber = () => 22;
const showBoolean = () => true;
const showArray = () => [1, 2, 3];
// On doit mettre l'objet entre parenthese
const showObject = () => ({
    prenom: 'Robert',
    nom: 'Szekeres'
});

console.log(showText());
console.log(showNumber());
console.log(showBoolean());
console.log(showArray());
console.log(showObject());