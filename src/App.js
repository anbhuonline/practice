import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import StudentsList from "./components/CompStudents/StudentsList";
import TeachersList from "./components/CompTeachers/TeachersList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Sidebar /> */}
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
          {/* <Route exact path="/" component={Main} /> */}
          <Route path="/teachers" component={TeachersList} />
          <Route path="/students" component={StudentsList} />
          {/* <Route path="/teachers" component={Teachers} />
          <Route path="/classes" component={Classes} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
