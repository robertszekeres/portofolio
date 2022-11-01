// --------------------- Spread operator ---------------------


// const names = ['Robert', 'Maria', 'Juan'];
// const newNames = ['Petru', 'Mario', 'John'];


// C'est un peu la meme chose que concat()
// console.log([...names, ...newNames]);


const user = {
    prenom: 'Robert',
    nom: 'Szekeres'
};

const adresse = {
    rue: 'Avenue de Paris',
    numero: 192,
    pays: 'France'
};


const userInfo = {
    ...user,
    ...adresse
};

console.log(userInfo);