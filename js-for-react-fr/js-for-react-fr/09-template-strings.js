// --------------------- Template strings ---------------------


const background = 'black';
const color = 'yellow';
const isAuthorized = false;

// `${}`




const button = document.createElement('button');
button.innerText = 'click me';
button.style = `background: ${isAuthorized ? 'red' : background}; color: ${color}`;



button.addEventListener('click', () => {

    if(isAuthorized){
        return alert("T'es autorise");
    }
        alert("Tu n'est pas autorise !!!!");
    
});

document.body.append(button);
