import React, { Component } from "react";
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withFirestore } from 'react-redux-firebase';
import { addBook } from '../../store/actions/bookActions'

class AddBook extends Component {
  state = {
    title: "",
    auth: "",
    summary: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addBook(this.state, this.props);
    this.setState({
      title: '',
      auth: '',
      summary:''
    });
  };

  render() {
      return (
      <div>
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
            className="btn btn-primary mb-3 btn-lg btn-block"
            onSubmit={this.handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch, props) => {
  return {
    addBook: book => dispatch(addBook(book,props))
  }
}

export default compose(withFirestore, connect(null, mapDispatchToProps))(AddBook);