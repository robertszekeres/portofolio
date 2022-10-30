

const personajes = ['Goku', 'Vegetta', 'Trunks'];

// Ponemos la coma para decirle que ignore los otros personajes
const [, , p3] = personajes;
console.log(p3);


const returnArray = ()=>{
    return ['ABC', 123];
}

const [letras, numeros] = returnArray();

console.log(letras, numeros);


// 

const state = (valor)=>{
    return [valor, ()=>{console.log('Hola Mundo')}];
}

const [nombre, apellido] = state('Robert');

console.log(nombre);
apellido();