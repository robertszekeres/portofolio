


export const getImagen = async() => {

    try {

        const apiKey = 'nSbUXA56oAqM0VfChA9xcE0mfuc50bAo';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        console.error(error)
        return "Il n'y a pas d'image";
    }
    
    
    
}

 getImagen();



