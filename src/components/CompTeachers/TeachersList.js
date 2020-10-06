import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { Link } from "react-router-dom";

const TeachersList = () => {
  const { teachers, removeTeacher } = useContext(GlobalContext)
  console.log("Teachers from TeachersList", TeachersList)
  return (
    <div className="table-container">
      <table className="table  is-striped is-narrow is-hoverable is-fullwidth">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email Id</th>
            <th>Actions</th>
          </tr>
          {teachers.length > 0 ? (
            teachers.map((item, index) => {
              return (
                <tr key={index}>                  
                  <td>{item.tname}</td>
                  <td>{item.taddress}</td>
                  <td>{item.tphone}</td>
                  <td>{item.temail}</td>
                  <td>
                    <div className="field is-grouped">
                      <p className="control">

                        <Link className="button is-small is-left is-success is-outlined" to={`/editteacher/${item.id}`}>
                          <span className="icon">
                            <i className="fas fa-edit"></i>
                          </span>
                        </Link>

                      </p>
                      <p className="control">
                        <button
                          className="button is-small is-left is-danger is-outlined"
                          onClick={() => removeTeacher(item.id)}
                        >
                          <span className="icon">
                            <i className="fas fa-trash"></i>
                          </span>
                        </button>
                      </p>
                    </div>
                  </td>
                </tr>
              )
            })
          ) : (
              <span className="title is-3">No records!</span>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default TeachersList
