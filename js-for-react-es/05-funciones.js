

// Funcion tradiciona;
const saludar = function(nombre){
    return `Hola ${nombre}`;
}

// Funcion flecha
const saludar2 = (nombre)=>{
    return `Hola ${nombre}`;
}
// Funcion flecha en una sola linea
const saludar3 = (nombre)=> `Hola ${nombre}`;




console.log(saludar('Robert'));
console.log(saludar2('Juan'));
console.log(saludar3('Pablo'));

// Si quitamos el return, hay que poner los parentesis ()
const getUser = () =>({
        id: 'ABC123',
        username: 'Elpapi'
    })


const user = getUser();
console.log(user)

// Funcion flecha + return objeto implicito
// el objeto implicito esta entre parentesis
const getUsuarioActivo = (nombre)=>({
        id: 'ABC789',
        username: nombre
    });

const usuarioActivo  = getUsuarioActivo('Robert');
console.log(usuarioActivo);