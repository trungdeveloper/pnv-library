import React from "react";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBook } from '../../store/actions/bookActions'

const BookDetails = props => {
  const id = props.match.params.id;
  const { book } = props;
  const delBook = () => {
    props.deleteBook(id, props);
    props.history.push('/');
  }


  if (book) {
    return (
      <div className="container section book-details">
        <div className="card">
          <div className="card-header">{book.title}</div>
            <div className="card-body">
            <p>{book.summary}</p>
            <button className="btn btn-danger" onClick={delBook} >Delete</button>
            <button className="btn btn-info" >Update</button>
            <Link to={'/'}>
              <button className="btn btn-warning" >Back</button>
            </Link>
          </div>

          <div className="card-footer">
            <div>
              By {book.auth}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading Book...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const books = state.firestore.data.books;
  const book = books ? books[id] : null;
  return {
    book: book,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return{
    deleteBook: id => dispatch(deleteBook(id, props))
  }
}

export default compose(
  firestoreConnect(["books"]),
  connect(mapStateToProps,mapDispatchToProps)
)(BookDetails);