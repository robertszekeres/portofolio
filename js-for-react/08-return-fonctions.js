// --------------------- RETURN DANS LES FONCTIONS ---------------------



const button = document.createElement('button');
button.innerText = 'click me';


const isAuthorized = false;

button.addEventListener('click', () => {

    if(isAuthorized){
        return alert("T'es autorise");
    }
        alert("Tu n'est pas autorise !!!!");
    
});

document.body.append(button);
