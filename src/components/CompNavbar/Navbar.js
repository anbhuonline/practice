import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

class Navbar extends Component {
  state = { show: false };

  render() {
    // console.log(this.state.show);
    return (
      <div>
        <nav
          className="navbar is-primary"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            {/* <a className="navbar-item" href="https://bulma.io">
              
            </a> */}
            <Link className="navbar-item" to="/">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                width="112"
                height="28"
              />
            </Link>
            <a
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div className="navbar-menu">
            <div className="navbar-start">
              <Link className="navbar-item" to="/">
                Home
              </Link>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">Admin</a>

                <div className="navbar-dropdown">
                  <Link className="navbar-item" to="/students">
                    Manage students
                  </Link>
                  <Link className="navbar-item" to="/teachers">
                    Manage Teachers
                  </Link>
                  {/* <Link className="navbar-item" to="/classes">
                    Manage Classes
                  </Link> */}
                  <div className="nested navbar-item dropdown">
                    <div className="dropdown-trigger">
                      <button
                        className="button"
                        aria-haspopup="true"
                        aria-controls="dropdown-menu"
                      >
                        <span>Manage Classes</span>
                        <span className="icon is-small">
                          <i
                            className="fas fa-angle-down"
                            aria-hidden="true"
                          ></i>
                        </span>
                      </button>
                    </div>
                    <div
                      className="dropdown-menu"
                      id="dropdown-menu"
                      role="menu"
                    >
                      <div className="dropdown-content">
                        <Link to="/thulir1" className="dropdown-item">
                          Thulir1
                        </Link>
                        <Link to="/thulir2" className="dropdown-item">
                          Thulir2
                        </Link>
                        {/* <a href="#" className="dropdown-item is-active">
                          Active dropdown item
                        </a> */}
                        <Link to="/thulir3" className="dropdown-item">
                          Thulir3
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <Link
                    className="button is-primary is-inverted is-outlined"
                    to="/register"
                  >
                    Register
                  </Link>
                  <Link
                    className="button is-primary is-inverted is-outlined"
                    to="/login"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
const container = document.createElement("div");
document.body.appendChild(container);
export default Navbar;
