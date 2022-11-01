// --------------------- FONCTIONS ANONYMES ---------------------



// console.log(function(){
//     return 'Starting...'
// }());


const button = document.createElement('button');
button.innerText = 'click me';

button.addEventListener('click', function(){
    alert('clicked');
});

document.body.append(button);