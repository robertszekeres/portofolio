

const persona = {
    nombre: 'Robert',
    apellido: 'Szekeres',
    edad: 27,
    direccion: {
        ciudad: 'Paris',
        cp: 94120,
        lat: 12.4324,
        lng: 23.12344
    }
};

// console.table({persona});
console.log({persona});

// Operador Spread: ..., se utiliza para clonar.
const persona2 = {...persona};
persona2.nombre = 'Jack';
persona2.apellido = 'Sparrow';
persona2.edad = '100';

console.log(persona2);