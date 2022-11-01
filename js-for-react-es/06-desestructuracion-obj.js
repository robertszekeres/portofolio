


const persona = {
    nombre: 'Robert',
    edad: 27,
    personaje: 'Goku',
    rango: 'Capitan'
};

// Forma de desestructurar
// const {personaje, edad, nombre} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

// Asignacion de una propiedad + valor directamente en el argumento
const persona2 = ({nombre,edad,personaje, rango = 'Experto'}) =>{

    // console.log(nombre,edad,clave,rango);

    return{
        tipo: personaje,
        años: edad,
        latlng: {
            lat: 12.1234,
            lng: -12.12424
        },
        nivel: 'Dios',
        pseudo: 'robirobi'
    }
}

const {tipo, años, latlng: {lat, lng}, nivel, pseudo} = persona2(persona);

console.log(tipo, años, lat, lng, nivel, pseudo);

