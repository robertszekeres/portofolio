import { useState } from "react";
import { AddCategory, GifGrid, Footer } from "./components";

// - GifApp c'est le composant principal
export const GifApp = () => {
  
  // - useState
  const [categories, setCategories] = useState([]);

  // - newCategory = inputValue
  const onAddCategory = (newCategory) => {
    
    // - Verifier si la la categorie existe deja
    if (categories.includes(newCategory)) return;
    
    setCategories([...categories, newCategory]);
  };


  
  return (
    <>
      <h1>GifApp</h1>
      <AddCategory onAddCategory={onAddCategory} />
      
        {categories.map((category) => {
          return (
            <GifGrid  key={category} category={category}/>
            )
          })}
          <Footer />
    </>
  );
};
