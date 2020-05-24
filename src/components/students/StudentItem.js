import React, { Component } from "react";

export default class StudentItem extends Component {
  state = {};
  render() {
    const { title, handleEdit, handleDelete } = this.props;
    return (
      <div>
        <li>
          <h6>{title}</h6>
          <div>
            {/* <span className="mx-2 text-success" onClick={handleEdit}>
              <i className="fas fa-pen"></i>
            </span>
            <span className="mx-2 text-danger" onClick={handleDelete}>
              <i className="fas fa-trash"></i>
            </span> */}
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </li>
      </div>
    );
  }
}
