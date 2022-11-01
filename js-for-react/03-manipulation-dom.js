// --------------------- MANIPULATION DU DOM ---------------------


const title = document.createElement('h1');
title.innerText = 'Hello World depuis JS';

const button = document.createElement('button');
button.innerText = 'click';

button.addEventListener('click', function(){
    title.innerText = 'Actualisation du text avec JS';
    alert('Changement du text');
});

document.body.append(title);
document.body.append(button);
