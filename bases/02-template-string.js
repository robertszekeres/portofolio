



const nombre = 'Robert';
const apellido = 'Szekeres';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido} ${1+1}`

console.log(nombreCompleto);  // Robert Szekeres 2

// Funcion
function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`); //Este es un texto: Hola Robert