import React from "react";
import BookSummary from "./BookSummary";

const BookList = ({ books }) => {
  return (
    <div className="row">
      {books ? (
        books.map(book => {
          return (
            <div className="col-sm-6 col-md-4 col-lg-3 mt-4" key={book.id}>
              <BookSummary book={book} />
            </div>
          );
        })
      ) : (
        <h1>Loading....</h1>
      )}
    </div>
  );
};

export default BookList;
