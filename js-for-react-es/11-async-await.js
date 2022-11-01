

// const getImagePromesa = ()=> new Promise(res=>res('https://kansflkasfhsa.com'));
// getImagePromesa().then(console.log);


// 

const getImage = async()=>{

    try{

    const apiKey = 'nSbUXA56oAqM0VfChA9xcE0mfuc50bAo';
    const res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await res.json();
    
    const {url} = data.images.original;

    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);

    } catch(err){
        // manejo del error
        console.error(err);
    }


}

getImage();



