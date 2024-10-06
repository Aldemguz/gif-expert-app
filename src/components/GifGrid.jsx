import { useFetchGifs } from "../hooks/useFetchGifs";
import  { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);
  
  return (
    <>
      <h1> {category}</h1>
        {isLoading && <p>Cargando...</p>}
        <div className="card-grid">
            {images.map(({ id, url, title}) => (
            <GifItem key={id}
                title={title}
                url={url}
            />
            ))}
        </div>
    </>
  );
};