import React, { Component } from "react";
import BookList from './book/BookList'
import AddBook from './book/AddBook';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';

class Container extends Component {

  render() {  
  console.log(this.props)
  return (
      <div className="container">
        <AddBook />
        <BookList books={this.props.books} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
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