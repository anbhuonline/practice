import React, { Component } from "react";
import Teachers from "./Teachers";

export default class TeachersList extends Component {
  state = {
    currentIndex: -1,
    list: this.returnList(),
  };
  returnList() {
    if (localStorage.getItem("teachers") == null)
      localStorage.setItem("teachers", JSON.stringify([]));
    return JSON.parse(localStorage.getItem("teachers"));
  }
  onAddorEdit = (data) => {
    var list = this.returnList();
    if (this.state.currentIndex === -1) {
      list.push(data);
    } else {
      list[this.state.currentIndex] = data;
    }

    localStorage.setItem("teachers", JSON.stringify(list));
    this.setState({ list, currentIndex: -1 });
  };

  handleEdit = (index) => {
    this.setState({
      currentIndex: index,
    });
  };

  handleDelete = (index) => {
    var list = this.returnList();
    list.splice(index, 1);
    localStorage.setItem("teachers", JSON.stringify(list));
    this.setState({ list, currentIndex: -1 });
  };
  render() {
    return (
      <div>
        <Teachers
          onAddorEdit={this.onAddorEdit}
          currentIndex={this.state.currentIndex}
          list={this.state.list}
        />
        <hr />
        List of Teachers
        <table>
          <tbody>
            {this.state.list.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.address}</td>
                  {/* <td>{item.parent}</td> */}
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                  <td>
                    <button onClick={() => this.handleEdit(index)}>Edit</button>
                    <button onClick={() => this.handleDelete(index)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
