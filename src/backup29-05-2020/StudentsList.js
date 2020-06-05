import React, { Component } from "react";
import AddStudent from "./AddStudent";
import API from "../../utils/API";
import { v4 as uuidv4 } from "uuid";

export default class StudentsList extends Component {
  state = {
    currentIndex: -1,
    list: [],
  };

  async componentDidMount() {
    // Load async data.
    let studentsList = await API.get("/students");
    // console.log(studentsList);
    this.setState({ list: studentsList.data });
    // this.setState({ list: JSON.parse(studentsList.data.body) });
    // console.log("a" + JSON.parse(studentsList.data.body));
    // console.log(this.state.list);
    // console.log(studentsList.data[0]);
  }

  // async returnList() {
  //   console.log("API_URL", process.env.API_URL);
  //   let studentsList = await API.get("/students");
  //   // if (localStorage.getItem("students") == null)
  //   //   localStorage.setItem("students", JSON.stringify([]));
  //   // return JSON.parse(localStorage.getItem("students"));
  //   return JSON.parse(studentsList);
  // }

  onAddorEdit = (data) => {
    // var list = this.returnList();
    // console.log("data" + data);
    // if (this.state.currentIndex === -1) {
    //   list.push(data);
    // } else {
    //   list[this.state.currentIndex] = data;
    // }
    // localStorage.setItem("students", JSON.stringify(list));
    // this.setState({ list, currentIndex: -1 });
    data["id"] = uuidv4();
    console.log(data);
    // console.log(data);
    API.post("/students/", data);
    console.log(API.post("/students/", data));
  };

  handleEdit = (index) => {
    // console.log("firing" + index);
    // this.setState({
    //   currentIndex: index,
    // });
  };

  handleDelete = (index) => {
    // list.splice(index, 1);
    // localStorage.setItem("students", JSON.stringify(list));
    // this.setState({ list, currentIndex: -1 });
    // API.delete("/students/" + index);
    // console.log(" inside handledelete: " + this.state.list);

    try {
      const response = API.delete("/students/" + index);
      console.log("response" + response);
    } catch (e) {
      console.log("ERROR" + e);
    }
  };
  render() {
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
