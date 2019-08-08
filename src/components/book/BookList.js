import React from "react";
import BookSummary from "./BookSummary";
import { Link } from "react-router-dom";

const BookList = ({ books }) => {
  return (
    <div className="row">
      {books &&
        books.map(book => {
          return (
            <div className="col-sm-6 col-md-4 col-lg-3 mt-4" key={book.id}>
              <Link to={"/book/" + book.id}>
                <BookSummary book={book} />
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default BookList;
