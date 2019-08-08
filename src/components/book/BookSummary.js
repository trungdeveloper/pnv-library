import React from "react";

const BookSummary = ({ book }) => {
  return (
    <div className="card">
      <div className="card-block">
        <h4 className="card-title">Book title: <span className="float-right">{book.title}</span></h4>
        <div className="meta">
          <p>Author: <span className="float-right">{book.auth}</span></p>
        </div>
        <div className="card-text">
         {book.summary}
        </div>
      </div>
      <div className="card-footer">
        <span className="float-right">Joined in 2013</span>
        <span>
          <i className="" />
          Category
        </span>
      </div>
    </div>
  );
};

export default BookSummary;
