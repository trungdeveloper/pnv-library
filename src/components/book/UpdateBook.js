import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Link } from "react-router-dom";
import { updateBook } from "../../store/actions/bookActions";

class UpdateBook extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      auth: "",
      summary: ""
    };
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      title: nextProps.book.title,
      auth: nextProps.book.auth,
      summary: nextProps.book.summary
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.updateBook(this.state, this.props.book.id);
    this.setState({
      title: "",
      auth: "",
      summary: ""
    });
    this.props.history.push('/');
  };

  render() {
    console.log(this.props);
    if (this.props.book) {
      return (
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label
                htmlFor="colFormLabelLg"
                className="col-sm-2 col-form-label col-form-label-lg"
              >
                Book Title
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="title"
                  placeholder="Title"
                  value={this.state.title}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="colFormLabelLg"
                className="col-sm-2 col-form-label col-form-label-lg"
              >
                Author
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="auth"
                  placeholder="Author"
                  value={this.state.auth}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="colFormLabelLg"
                className="col-sm-2 col-form-label col-form-label-lg"
              >
                Summary
              </label>
              <div className="col-sm-10">
                <textarea
                  className="form-control form-control-lg"
                  id="summary"
                  placeholder="Summary"
                  value={this.state.summary}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              onSubmit={this.handleSubmit}
            >
              Submit
            </button>
            <Link to={"/"}>
              <button className="btn btn-warning btn-lg">Back</button>
            </Link>
          </form>
        </div>
      );
    } else {
      return <h1 className="container">Loading Book...</h1>;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const books = state.firestore.data.books;
  const book = books ? {...books[id],id} : null; //kiểm tra books có tồn tại không, nếu tồn tại trả về {...books[id],id}, nếu không trả về null
  return {
    book
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    updateBook: (book, id) => dispatch(updateBook(book, id, props))
  };
};

export default compose(
  firestoreConnect(["books"]),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(UpdateBook);
