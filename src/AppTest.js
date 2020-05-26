import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import StudentsList from "./components/CompStudents/StudentsList";
import TeachersList from "./components/CompTeachers/TeachersList";

function AppTest() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Navbar />
        <div className="columns is-fullheight">
          <div className="column is-2 is-sidebar-menu is-hidden-mobile">
            <aside className="column">
              <p className="menu-label is-hidden-touch">Side Menu</p>
              <ul className="menu-list">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <a className="is-active">Students</a>
                  <ul>
                    <Link to="/students">Add student</Link>
                  </ul>
                </li>
                <li>
                  <a className="is-active">Teachers</a>
                  <ul>
                    <Link to="/teachers">Add teachers</Link>
                  </ul>
                </li>
              </ul>
            </aside>
          </div>
          <div className="container column is-10">
            <div className="section">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/teachers" component={TeachersList} />
                <Route path="/students" component={StudentsList} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default AppTest;
