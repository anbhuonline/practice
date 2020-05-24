import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import AddStudents from "./AddStudent";
import ListStudents from "./ListStudents";

export default class Students extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      id: uuid(),
      item: "",
      address: "",
      parent: "",
      phone: "",
      email: "",
      editItem: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
    console.log("item :" + this.state.item);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
      address: this.state.address,
      parent: this.state.parent,
      phone: this.state.phone,
      email: this.state.email,
    };
    if (newItem.title !== "") {
      console.log("Entering in");
      const updatedItems = [...this.state.items, newItem];
      //   console.log(updatedItems);
      this.setState({
        items: updatedItems,
        item: "",
        id: uuid(),
        editItem: false,
      });
    } else {
      alert("Enter the details");
    }
  };

  handleDelete = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: filteredItems,
    });
  };

  handleEdit = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: filteredItems,
    });

    const selectedItem = this.state.items.find((item) => item.id === id);
    this.setState({
      items: filteredItems,
      id: id,
      editItem: true,
      item: selectedItem.title,
    });
  };

  clearList = (e) => {
    if (this.state.items.length === 0) {
      alert("No names to edit!");
    } else {
      this.setState({
        items: [],
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          <div>
            <h5 className="text-capitalize text-center">Students</h5>
            <AddStudents
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <ListStudents
              items={this.state.items}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              clearList={this.clearList}
            />
          </div>
        </div>
      </div>
    );
  }
}
