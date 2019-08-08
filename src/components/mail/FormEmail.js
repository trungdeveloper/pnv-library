import React, { Component } from "react";

class FormEmail extends Component {

  state = {
    feedback: ''
  }

  handleChange = () => {

  }

  handleClose = () => {

  }

  handleSubmit = (e) => {
    e.preventDefault();
  }
  render() {
    return (
      <div className='container'>
        <form className="feedback-form" onSubmit={this.handleSubmit}>
          <h1>Your Feedback</h1>
          <textarea
            className="text-input"
            id="feedback-entry"
            name="feedback-entry"
            onChange={this.handleChange}
            placeholder="Enter your feedback here"
            required
            value={this.state.feedback}
          />
          <div className="btn-group">
            <button className="btn btn--cancel" onClick={this.handleClose}>
              Cancel
            </button>
            <input type="submit" value="Submit" className="btn btn--submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default FormEmail;
