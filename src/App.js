import React from "react";
import "./App.css";
import { GlobalProvider } from "./context/GlobalState";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Navbar from "./components/CompNavbar/Navbar";
import Home from "./components/Home";
import News from "./components/News";
import Schools from "./components/Schools";

import Students from "./components/CompStudents/Students";
import StudentsList from "./components/CompStudents/StudentsList";
import AddStudent from "./components/CompStudents/AddStudent";
import EditStudent  from "./components/CompStudents/EditStudent"

import Teachers from "./components/CompTeachers/Teachers";
import TeachersList from "./components/CompTeachers/TeachersList";
import AddTeacher from "./components/CompTeachers/AddTeacher";
import EditTeacher  from "./components/CompTeachers/EditTeacher";

import Thulir from "./components/CompClasses/Thulir";
import Thulir1 from "./components/CompClasses/Thulir1";
import Thulir2 from "./components/CompClasses/Thulir2";
import Thulir3 from "./components/CompClasses/Thulir3";
import Login from "./auth/Login";
import Register from "./auth/Register";

function AppTest() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <div className="container-fluid">
          <Navbar />
          <div className="columns is-fullheight">
            <div className="column is-2 is-sidebar-menu is-hidden-mobile">
              <aside className="column">
                <ul className="menu-list">
                  <li>
                    <Link to="/news">News</Link>
                    <Link to="/schools">Schools</Link>
                  </li>
                  <li>
                    <a className="is-active is-primary">Admin</a>
                    <ul>
                      <Link to="/students">Students</Link>
                      <Link to="/teachers">Teachers</Link>
                      <Link to="/classes">Classes</Link>
                    </ul>
                  </li>
                  
                </ul>
              </aside>
            </div>
            <div className="container column is-10">
              <div className="section">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/news" component={News} />
                  <Route path="/schools" component={Schools} />

                  <Route path="/students" component={Students} />
                  <Route path="/list" component={StudentsList} />
                  <Route path="/addstudent" component={AddStudent} />
                  <Route path="/edit" component={EditStudent} />
                  
                  <Route path="/teachers" component={Teachers} />
                  <Route path="/addteacher" component={AddTeacher} />
                  <Route path="/listteacher" component={TeachersList} />
                  <Route path="/editteacher" component={EditTeacher} />


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
    </GlobalProvider>
  );
}

export default AppTest;
