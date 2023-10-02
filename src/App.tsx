import { FormEvent, useRef, useState } from "react";
import "./App.css";
// import SearchForm from "./Components/Form";
// import Filters from "./Components/Filters";
import { Form } from "react-bootstrap";
import fetchIMages from "./utils/fetch";

const App = () => {
  const searchInput = useRef<HTMLInputElement | null>(null);
  const [images, setImages] = useState();
  const [totalPages, setTotalPages] = useState();

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchIMages((searchInput.current as HTMLInputElement).value)
      .then((data) => {
        setImages(data.results);
        setTotalPages(data.total_pages);
        console.log(images);
      })
      .catch((error) => console.log(error));
    console.log((searchInput.current as HTMLInputElement).value);
    console.log(totalPages);
  };

  const handleSelection = (selection: string) => {
    (searchInput.current as HTMLInputElement).value = selection;
  };
  return (
    <div className="container">
      <h1 className="title">Image Search</h1>
      <div className="search-section">
        <Form onSubmit={handleSearch}>
          <Form.Control
            type="search"
            placeholder="Type something to search..."
            className="search-input"
            ref={searchInput}
          />
        </Form>
      </div>
      <div className="filters">
        <div onClick={() => handleSelection("nature")}>Nature</div>
        <div onClick={() => handleSelection("birds")}>Birds</div>
        <div onClick={() => handleSelection("cats")}>Cats</div>
        <div onClick={() => handleSelection("shoes")}>Shoes</div>
      </div>
      <div className="images">
        {images &&
          images.map((image) => {
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
    </div>
  );
};

export default App;
