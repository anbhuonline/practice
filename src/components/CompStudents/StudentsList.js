import React, { Component } from "react";
import AddStudent from "./AddStudent";
import API from "../../utils/API";
import { v4 as uuidv4 } from "uuid";

export default class StudentsList extends Component {
  state = {
    currentIndex: -1,
    list: [],
    id: uuidv4,
  };

  async componentDidMount() {
    let studentsList = await API.get("/students");
    this.setState({ list: studentsList.data });
    console.log(studentsList);
  }

  async returnList() {
    console.log("Inside return list");
    try {
      let studentsList = await API.get("/students");
      this.setState({ list: studentsList.data });
    } catch (e) {
      console.log("ERROR" + e);
    }
  }

  onAddorEdit = (props) => {
    console.log("Inside add or edit function " + this.state.props);

    // try {
    //   data["id"] = uuidv4();
    //   console.log(data);
    //   API.post("/students/", data);
    // } catch (e) {
    //   console.log("Error while adding : " + e);
    // }
  };

  handleEdit = (props) => {
    console.log("firing" + props);
  };

  async handleDelete(props) {
    try {
      const response = await API.delete("/students/" + props);
      console.log("In Delete response" + response);
      this.returnList();
    } catch (e) {
      console.log("ERROR" + e);
    }
  }
  render() {
    console.log("List value: " + this.state.list);
    
    return (
      <div>
        <hr />
        <h3 className="title is-3">List of Students</h3>

        <div className="table-container">
          <table className="table  is-striped is-narrow is-hoverable is-fullwidth">
            <tbody>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Parent Name</th>
                <th>Phone Number</th>
                <th>Email Id</th>
              </tr>
              {this.state.list.length > 0 &&
                this.state.list.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.sname}</td>
                      <td>{item.saddress}</td>
                      <td>{item.sparent}</td>
                      <td>{item.sphone}</td>
                      <td>{item.semail}</td>
                      <td>
                        <div className="field is-grouped">
                          <p className="control">
                            <button
                              className="button is-small is-left is-success is-outlined"
                              onClick={() => this.handleEdit(item.id)}
                            >
                              <span className="icon">
                                <i className="fas fa-edit"></i>
                              </span>
                            </button>
                          </p>
                          <p className="control">
                            <button
                              className="button is-small is-left is-danger is-outlined"
                              onClick={
                                () => this.handleDelete(item.id)
                                // this.handleDelete(index, this.state.list.id)
                              }
                            >
                              <span className="icon">
                                <i className="fas fa-trash"></i>
                              </span>
                            </button>
                          </p>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <AddStudent
          onAddorEdit={this.onAddorEdit}
          currentIndex={this.state.currentIndex}
          list={this.state.list}
        />
      </div>
    );
  }
}
