import React, { Component } from "react";

export default class Students extends Component {
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

  render() {
    return (
      <React.Fragment>
        <h1>Add Student</h1>
        <form>
          <input
            type="text"
            placeholder="Enter the name"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
          ></input>
          <br /> <br />
          <input
            type="text"
            placeholder="Address"
            value={this.state.address}
            onChange={this.handleChange}
            name="address"
          ></input>
          <br /> <br />
          <input
            type="text"
            placeholder="Parent name"
            value={this.state.parent}
            onChange={this.handleChange}
            name="parent"
          ></input>
          <br /> <br />
          <input
            type="text"
            placeholder="Phone number"
            value={this.state.phone}
            onChange={this.handleChange}
            name="phone"
          ></input>
          <br /> <br />
          <input
            type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            name="email"
          ></input>
          <br /> <br />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </React.Fragment>
    );
  }
}
