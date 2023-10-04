import { images } from "../types";

const Images = ({ images }: { images: images[] }) => {
  return (
    <div className="images">
      {images.map((image: images) => {
        return (
          <img
            key={image.id}
            src={image.urls.small}
            alt={image.alt_description}
            className="image"
          />
        );
      })}
    </div>
  );
};
export default Images;
