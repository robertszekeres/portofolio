// Poner .js al ultimo archivo es Opcional
// import {heroes} from './data/heroes';
// import {heroes} from './data/heroes';
import heroes, {owners} from '../data/heroes';

// console.log(owners);




// Manera simplificada
// Si hay solo un argumento, no se ponen los parentesis
export const getHeroeById = (id)=>{
    return heroes.find((heroe) => heroe.id === id)
}

// console.log(getHeroeById(2));

// filter()
export const getHeroesByOwner = (owner)=>{
    return heroes.filter((heroe) => heroe.owner === owner)
}

// console.log(getHeroesByOwner('Marvel'));

