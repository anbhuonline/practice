import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import StudentsList from "./components/CompStudents/StudentsList";
import TeachersList from "./components/CompTeachers/TeachersList";
import Login from "./components/CompNavbar/Login";

function App() {
  return (
    <BrowserRouter>
      <menu>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/students">Students</Link>
        </div>
        <div>
          <Link to="/teachers">Teachers</Link>
        </div>
      </menu>
      <Switch>
        <Route path="/students" component={StudentsList} />
        <Route path="/teachers" component={TeachersList} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
