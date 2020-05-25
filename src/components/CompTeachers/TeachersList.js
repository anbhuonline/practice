import React, { Component } from "react";
import Test from "./Test";
// import Teachers from "./Teachers";

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
      <div className="container is-fluid">
        <Test
          onAddorEdit={this.onAddorEdit}
          currentIndex={this.state.currentIndex}
          list={this.state.list}
        />
        <hr />
        <h3 className="title is-3">List of Teachers</h3>
        <div className="table-container">
          <table className="table  is-striped is-narrow is-hoverable is-fullwidth">
            <tbody>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Phone Number</th>
                <th>Email Id</th>
              </tr>
              {this.state.list.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.address}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>
                      {/* <button onClick={() => this.handleEdit(index)}>
                        Edit
                      </button>
                      <button onClick={() => this.handleDelete(index)}>
                        Delete
                      </button> */}
                      <div className="field is-grouped">
                        <p className="control">
                          <button
                            className="button is-small is-left is-success is-outlined"
                            onClick={() => this.handleEdit(index)}
                          >
                            <span className="icon">
                              <i className="fas fa-edit"></i>
                            </span>
                          </button>
                        </p>
                        <p className="control">
                          <button
                            className="button is-small is-left is-danger is-outlined"
                            onClick={() => this.handleDelete(index)}
                          >
                            <span className="icon">
                              <i className="fas fa-trash"></i>
                            </span>
                          </button>
                        </p>
                      </div>
                      {/* <button
                        className="button is-success is-outlined is-small"
                        onClick={() => this.handleEdit(index)}
                      >
                        <span className="icon is-small is-left">
                          <i className="fas fa-edit"></i>
                        </span>
                      </button>
                      <button
                        className="button is-danger is-outlined is-small"
                        onClick={() => this.handleDelete(index)}
                      >
                        <span className="icon is-small is-left">
                          <i className="fas fa-trash"></i>
                        </span>
                      </button> */}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
