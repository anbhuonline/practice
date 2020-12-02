import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { Link } from "react-router-dom";

const StudentsList = () => {
  const { users, removeUser } = useContext(GlobalContext)
  console.log("users from StudentsList",users)
  return (
    <div className="table-container">
      <table className="table  is-striped is-narrow is-hoverable is-fullwidth">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Parent Name</th>
            <th>Phone Number</th>
            <th>Email Id</th>
            <th>Classes</th>
            <th>Actions</th>
          </tr>
          {users.length > 0 ? (
            users.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.sname}</td>
                  <td>{item.saddress}</td>
                  <td>{item.sparent}</td>
                  <td>{item.sphone}</td>
                  <td>{item.semail}</td>
                  {/* <td>{item.sclass}</td> */}
                  <td><span class="tag is-info is-light">{item.sclass}</span></td>
                  <td>
                    <div className="field is-grouped">
                      <p className="control">

                        <Link className="button is-small is-left is-success is-outlined" to={`/edit/${item.id}`}>
                          <span className="icon">
                            <i className="fas fa-edit"></i>
                          </span>
                        </Link>

                      </p>
                      <p className="control">
                        <button
                          className="button is-small is-left is-danger is-outlined"
                          onClick={() => removeUser(item.id)}
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
              <div className="title is-3">No records!</div>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default StudentsList
