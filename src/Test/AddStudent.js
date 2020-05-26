import React from "react";
import Modal from "./Modal";

class AddStudent extends React.Component {
  state = { isOpen: false, ...this.returnStateObject() };

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

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <button onClick={this.toggleModal}>Add Student</button>
        <Modal show={this.state.isOpen} onClose={this.toggleModal}>
          <form>
            <input
              type="text"
              placeholder="Enter the name"
              value={this.state.name}
              onChange={this.handleChange}
              name="name"
              className="input"
            ></input>

            <textarea
              className="textarea"
              placeholder="Permanent address"
              value={this.state.address}
              onChange={this.handleChange}
              name="address"
            ></textarea>
            <input
              className="input"
              type="text"
              placeholder="Parent/Guardian name"
              value={this.state.parent}
              onChange={this.handleChange}
              name="parent"
            ></input>
            <input
              className="input"
              type="number"
              placeholder="Phone number"
              value={this.state.phone}
              onChange={this.handleChange}
              name="phone"
            ></input>
            <input
              className="input is-danger"
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
              name="email"
            ></input>
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
          </form>
        </Modal>
      </div>
    );
  }
}

export default AddStudent;
