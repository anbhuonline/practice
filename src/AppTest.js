import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/CompNavbar/Navbar";
import Home from "./components/Home";
import StudentsList from "./components/CompStudents/StudentsList";
import TeachersList from "./components/CompTeachers/TeachersList";
import Thulir from "./components/CompClasses/Thulir";
import Thulir1 from "./components/CompClasses/Thulir1";
import Thulir2 from "./components/CompClasses/Thulir2";
import Thulir3 from "./components/CompClasses/Thulir3";
import Login from "./components/CompNavbar/Login";
import Register from "./components/CompNavbar/Register";

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
                  <a className="is-active is-primary">Admin</a>
                  <ul>
                    <Link to="/students">Manage Students</Link>
                    <Link to="/teachers">Manage Teachers</Link>
                    <Link to="/classes">Manage Classes</Link>
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
                <Route path="/classes" component={Thulir} />
                <Route path="/thulir1" component={Thulir1} />
                <Route path="/thulir2" component={Thulir2} />
                <Route path="/thulir3" component={Thulir3} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default AppTest;
