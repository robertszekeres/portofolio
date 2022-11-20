
export const getGifs = async (category) => {

  const url = `https://api.giphy.com/v1/gifs/search?api_key=08VqyJ5LqFF2nG7Jy6IZLaRL5uVDvRE0&q=${category}&limit=3`;

  const res = await fetch(url);

  const { data } = await res.json();

  const gifsProps = data.map((img) => {
    

    return {
      id: img.id,
      title: img.title,
      url: img.images.fixed_height.url,
    };

    
  });
  return gifsProps;
};
