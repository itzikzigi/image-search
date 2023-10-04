import { FormEvent, useEffect, useRef, useState } from "react";
import { Form } from "react-bootstrap";
import Filters from "./Filters";
import fetchIMages from "../utils/fetch";
import Images from "./Images";
import { images } from "../types";
import PageButton from "./PageButton";

const SearchForm = () => {
  const searchInput = useRef<HTMLInputElement | null>(null);
  const [images, setImages] = useState<images[]>();
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    console.log(page);

    fetchIMages((searchInput.current as HTMLInputElement).value, page).then(
      (data) => setImages(data.results)
    );
  }, [page]);
  const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPage(1);
    const imagesFromServer = await fetchIMages(
      (searchInput.current as HTMLInputElement).value,
      page
    );
    setImages(imagesFromServer.results);
    setTotalPages(imagesFromServer.total_pages);
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
      <Filters current={searchInput.current as HTMLInputElement} />
      {images && <Images images={images} />}
      {images && (
        <PageButton totalPages={totalPages} page={page} setPage={setPage} />
      )}
    </div>
  );
};
export default SearchForm;
