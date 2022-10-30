


const apiKey = 'nSbUXA56oAqM0VfChA9xcE0mfuc50bAo';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// Como el fetch() retorna una promesa, podemos utilizar el then
peticion
.then((res)=>res.json())
.then(({data})=>{
    const {url} = data.images.original;
    

    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
})
.catch(console.warn);