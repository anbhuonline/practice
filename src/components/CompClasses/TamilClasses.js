import React, { useContext } from "react";
import Thulir1 from "./Thulir1";
import Thulir2 from "./Thulir2";
import Thulir3 from "./Thulir3";
import { GlobalContext } from '../../context/GlobalState';
import { Link } from 'react-router-dom';

export default function TamilClasses() {
  const { myclasses, removeClass } = useContext(GlobalContext)
  console.log("myclasses", myclasses);
  return (
    <>
      <article className="panel is-link">
        <p className="panel-heading">
          Classes &nbsp;&nbsp;
           <Link className="button is-warning is-small is-outline" to="/AddClass">
            <span className="icon is-small">
              <i className="fas fa-user-plus fa-sm has-text-link "></i>
            </span>
          </Link>
        </p>
      </article>
      <div className="table-container">
        <table className="table  is-striped is-narrow is-hoverable is-fullwidth">
          <tbody>
            <tr>
              {/* <th>Classes</th> */}
              <th>Name</th>
              <th>No of Students</th>
              <th>No of Teachers</th>
              <th>Actions</th>
            </tr>
            {myclasses.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.students.length}&#160;</td>
                  <td>{item.teachers.length}&#160;</td>
                  <td>
                    <div className="field is-grouped">
                      <p className="control">
                        <Link className="button is-small is-left is-success is-outlined" to={`/editclass/${item.id}`}>
                          <span className="icon">
                            <i className="fas fa-edit"></i>
                          </span>
                        </Link>
                      </p>
                      <p className="control">
                        <button
                          className="button is-small is-`left is-danger is-outlined"
                          onClick={() => removeClass(item.id)}
                        >
                          <span className="icon">
                            <i className="fas fa-trash"></i>
                          </span>
                        </button>
                      </p>
                      {/* <Link className="button is-small is-left is-info is-outlined" to={`/attendanceold/${item.id}`}> */}
                      <Link className="button is-small is-left is-info is-outlined" to={`/attendance/${item.id}`}>
                            <i className="fas fa-edit"></i>Attendance
                        </Link>
                        {/* <Link className="button is-info is-small is-rounded is-outlined" to={`/attendance/${item.id}'}>Attendance</Link> */}
                    </div>
                  </td>
                </tr>
              )
            })}</tbody>
        </table>

      </div>
    </>
  );
}
