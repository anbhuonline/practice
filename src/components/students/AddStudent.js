import React, { Component } from "react";

export default class AddStudent extends Component {
  render() {
    const {
      title,
      handleChange,
      handleSubmit,
      address,
      parent,
      phone,
      email,
    } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter student's full name"
            value={title}
            onChange={handleChange}
          ></input>
          <br />
          <input
            type="text"
            placeholder="Enter Address"
            value={address}
            onChange={handleChange}
          ></input>
          <br />
          <input
            type="text"
            placeholder="Enter Parent Name"
            value={parent}
            onChange={handleChange}
          ></input>
          <br />
          <input
            type="text"
            placeholder="Enter Phone Number"
            value={phone}
            onChange={handleChange}
          ></input>
          <br />
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={handleChange}
          ></input>
          <br />
          <button type="submit">Add Student</button>
        </form>
      </div>
    );
  }
}
