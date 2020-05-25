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
        <div class="columns is-fullheight">
          <div class="column is-2 is-sidebar-menu is-hidden-mobile">
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
            {/* <aside class="menu">
              <p class="menu-label">Administration</p>
              <ul class="menu-list">
                <li>
                  <a>Team Settings</a>
                </li>
                <li>
                  <a class="is-active">Manage Your Team</a>
                  <ul>
                    <li>
                      <a>Members</a>
                    </li>
                    <li>
                      <a>Plugins</a>
                    </li>
                    <li>
                      <a>Add a member</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </aside> */}
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
          {/* <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/students">Students</Link>
        </div>
        <div>
          <Link to="/teachers">Teachers</Link>
        </div> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default AppTest;
