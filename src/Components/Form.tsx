import { FormEvent, useRef, useState } from "react";
import { Form } from "react-bootstrap";
import Filters from "./Filters";
import fetchIMages from "../utils/fetch";

const SearchForm = () => {
  const searchInput = useRef(null);
  const [images, setImages] = useState();
  const [totalPages, setTotalPages] = useState();
  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchIMages((searchInput as HTMLInputElement).current.value)
      .then((data) => {
        setImages(data.results);
        setTotalPages(data.total_pages);
        console.log(images);
      })
      .catch((error) => console.log(error));
    console.log(searchInput.current.value);
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
      <Filters />
    </div>
  );
};
export default SearchForm;
