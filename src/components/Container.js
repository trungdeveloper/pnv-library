import React, { Component } from "react";
import BookList from './book/BookList'
import AddBook from './book/AddBook';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';

class Container extends Component {
  render() {  
  return (
      <div className="container">
        <AddBook />
        <BookList books={this.props.books} />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    books: state.firestore.ordered.books,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "books" }
  ])
)(Container);