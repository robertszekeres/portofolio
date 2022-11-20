import { useEffect, useState } from "react";
import {getGifs} from '../helpers/getGifs'


export const useFetchGifs = (category) => {

      // - useState
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // - Fonction recuperation data
  const getInfo = async() => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  // - useEffect
  useEffect(() => {
    getInfo();
  }, []);
    

    return{
        images,
        isLoading
    }
}

