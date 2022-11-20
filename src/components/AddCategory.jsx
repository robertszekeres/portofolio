import { useState } from "react";

// - onAddCategory = props fonction composant GiffApp
export const AddCategory = ({ onAddCategory }) => {

  // - useState
  const [inputValue, setInputValue] = useState("");

  // - Fonction input
  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // - Fonction form
  const onFormSubmit = (e) => {
    e.preventDefault();

    const cleanValue = inputValue.trim();

    // - Vérifier la lonngeur des mots
    if (cleanValue.length <= 3) return;
    
    onAddCategory(cleanValue[0].toUpperCase() + cleanValue.substring(1).toLowerCase());

    // - Vider l'input apres soumission du form
    setInputValue("");
  };

  // console.log(inputValue);

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Search GIF"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
