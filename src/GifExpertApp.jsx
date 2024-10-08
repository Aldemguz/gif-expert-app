import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (category) => {
    if(categories.includes(category)) return;
    setCategories((cat) => [category, ...cat]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onAddCategory={onAddCategory} />
        {categories?.map(category => 
          <GifGrid 
            key={category} 
            category={category}
            />
        )}

      <button onClick={() => setCategories([])}>Limpiar</button>
    </>
  );
};

export default GifExpertApp;
