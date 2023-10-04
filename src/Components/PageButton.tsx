import React from "react";
import { Button } from "react-bootstrap";
type PageProps = {
  totalPages: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};
const PageButton = ({ totalPages, page, setPage }: PageProps) => {
  return (
    <div className="buttons">
      {page > 1 && <Button onClick={() => setPage(page - 1)}>Previous</Button>}
      {page < totalPages && (
        <Button onClick={() => setPage(page + 1)}>Next</Button>
      )}
    </div>
  );
};
export default PageButton;
