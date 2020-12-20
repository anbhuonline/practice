import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isActive, setisActive] = useState(false);
  return (
    <React.Fragment>
      <nav
        className="navbar is-link"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a
            onClick={() => {
              setisActive(!isActive);
            }}
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div
          id="navbarBasicExample"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-start">
            <div className="navbar-brand">
              <Link className="navbar-item" to="/">
                <img
                  src={require("../../assets/Logo.png")}
                  alt="logo_transparent"
                />
                {/* <span style={{ padding: "0.5em" }}>USA Tamil Schools</span> */}
              </Link>
            </div>
            {/* <Link className="navbar-item" to="/">
              Home
            </Link> */}
            <Link className="navbar-item" to="/news">
              News
            </Link>
            <Link className="navbar-item" to="/schools">
              Schools
            </Link>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Admin</a>
              <div className="navbar-dropdown">
                <Link className="navbar-item" to="/students">
                  Students
                </Link>
                <Link className="navbar-item" to="/teachers">
                  Teachers
                </Link>
                <Link className="navbar-item" to="/Classes">
                  Classes
                </Link>
                {/* <div className="nested navbar-item dropdown">
                  <div className="dropdown-trigger">
                    <button
                      className="button"
                      aria-haspopup="true"
                      aria-controls="dropdown-menu"
                    >
                      <span>Classes</span>
                      <span className="icon is-small">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                      </span>
                    </button>
                  </div>
                  <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                      <Link to="/thulir1" className="dropdown-item">
                          Thulir1
                        </Link>
                        <Link to="/thulir2" className="dropdown-item">
                          Thulir2
                        </Link>
                        <Link to="/thulir3" className="dropdown-item">
                          Thulir3
                        </Link>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <Link className="navbar-item" to="../../register">
              Register
            </Link>
            <Link className="navbar-item" to="../../login">
              Login
            </Link>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
const container = document.createElement("div");
document.body.appendChild(container);
// export default Navbar;
