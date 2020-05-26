import React, { Component } from "react";
import Modal from "./Modal";

class AddStudent extends Component {
  state = { ...this.returnStateObject() };

  returnStateObject() {
    if (this.props.currentIndex === -1)
      return {
        name: "",
        address: "",
        parent: "",
        phone: "",
        email: "",
      };
    else {
      return this.props.list[this.props.currentIndex];
    }
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.currentIndex !== this.props.currentIndex ||
      prevProps.list.length !== this.props.list.length
    )
      this.setState({ ...this.returnStateObject() });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddorEdit(this.state);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  openModalHandler = () => {
    this.setState({
      isShowing: true,
    });
  };

  closeModalHandler = () => {
    this.setState({
      isShowing: false,
    });
  };

  render() {
    return (
      <React.Fragment>
        {/* <h1>Add Student</h1> */}

        {this.state.isShowing ? (
          <div onClick={this.closeModalHandler} className="back-drop"></div>
        ) : null}
        <button className="open-modal-btn" onClick={this.openModalHandler}>
          Add Student
        </button>
        <Modal
          className="modal"
          show={this.state.isShowing}
          close={this.closeModalHandler}
          handleSubmit={this.handleSubmit}
        >
          <form>
            <div className="field">
              <div className="control has-icons-left">
                <input
                  type="text"
                  placeholder="Enter the name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  name="name"
                  className="input"
                ></input>
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Permanent address"
                  value={this.state.address}
                  onChange={this.handleChange}
                  name="address"
                ></textarea>
              </div>
            </div>
            <div className="field">
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="text"
                  placeholder="Parent/Guardian name"
                  value={this.state.parent}
                  onChange={this.handleChange}
                  name="parent"
                ></input>
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="number"
                  placeholder="Phone number"
                  value={this.state.phone}
                  onChange={this.handleChange}
                  name="phone"
                ></input>
                <span className="icon is-small is-left">
                  <i className="fas fa-phone"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  name="email"
                ></input>
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                {/* <span className="icon is-small is-right">
                  <i className="fas fa-exclamation-triangle"></i>
                </span> */}
              </div>
              {/* <p className="help is-danger">This email is invalid</p> */}
            </div>

            {/* <div className="control is-grouped">
              <button className="button is-link" onClick={this.handleSubmit}>
                Submit&nbsp;&nbsp;
                <span className="icon is-small is-left">
                  <i className="fas fa-thumbs-up"></i>
                </span>
              </button>
              <button className="button is-link" onClick={this.handleCancel}>
                Cancel&nbsp;&nbsp;
                <span className="icon is-small is-left">
                  <i className="fas fa-thumbs-up"></i>
                </span>
              </button>
            </div> */}
          </form>
        </Modal>
      </React.Fragment>
    );
  }
}
export default AddStudent;
