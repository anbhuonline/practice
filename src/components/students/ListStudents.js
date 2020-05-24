import React, { Component } from "react";
import StudentItem from "./StudentItem";

export default class ListStudents extends Component {
  state = {};
  render() {
      console.log(this.props)
    const { items, handleDelete, handleEdit, clearList } = this.props;
    return (
      <div>
        <ul>
          <h5>List of Students</h5>
          {items.map((item) => {
            return (
              <StudentItem
                key={item.id}
                title={item.title}
                id={item.id}
                handleDelete={() => handleDelete(item.id)}
                handleEdit={() => handleEdit(item.id)}
              />
            );
          })}
          {/* <button
            type="button"
            className="btn btn-danger btn-block mt-5 text-capitalize"
            onClick={clearList}
          >
            clear list
          </button> */}
        </ul>
      </div>
    );
  }
}
