import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { deleteBook } from '../../store/actions/bookActions'

const BookSummary = (props) => {
  const {book} = props;
  const delBook = () => {
    props.deleteBook(book.id, props);
  }
  return (
    <div className="card">
      <div className="card-block">
        <h4 className="card-title">
          Book title: <span className="float-right">{book.title}</span>
        </h4>
        <div className="meta">
          <p>
            Author: <span className="float-right">{book.auth}</span>
          </p>
        </div>
        <div className="card-text">
          <div className="btn-group" role="group" aria-label="Basic example">
            <Link to={"/book/" + book.id}>
              <button type="button" className="btn btn-secondary">
                Details
              </button>
            </Link>
            <Link to={"/book/update/" + book.id}>
            <button type="button" className="btn btn-secondary">
              Update
            </button>
            </Link>
            <button type="button" className="btn btn-secondary" onClick={delBook}>
              Delete
            </button>
          </div>
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

const mapDispatchToProps = (dispatch, props) => {
  return {
    deleteBook: id => dispatch(deleteBook(id, props))
  };
};

export default compose(withFirestore, connect(null,mapDispatchToProps))(BookSummary);