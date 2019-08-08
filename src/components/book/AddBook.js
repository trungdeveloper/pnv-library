import React, { Component } from "react";

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
  };

  render() {
      console.log(this.state)
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

export default AddBook;
