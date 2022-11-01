

// Utilizar esta manera SOLO cuando se crea un array con un tamaño fijo
// const array = new Array(100);

// Utilizar esta manera: []
const array = [1,2,3,4];
// el metodo push() se utiliza para añadir informacion al array
// array.push(1);

// Operador spread para clonar el array original y añadirle el 5
let array2 = [...array, 5];

// map() es un metodo que parcurre un array
const array3 = array2.map(function(x){
    return x * 2;
});


console.log(array);  // 1,2,3,4
console.log(array2); // 1,2,3,4,5

// 2*1, 2*2, 2*3, 2*4, 2*5
console.log(array3); // 2,4,6,8,10