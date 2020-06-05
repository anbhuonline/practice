import React, { Component } from "react";
import "./AddStudent.css";

const Modal = (props) => {
  console.log("props in modal" + props);
  return (
    <div
      className="modal-wrapper"
      style={{
        transform: props.show ? "translateY(0vh)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <h3 className="modal-card-title">Add student details</h3>
          <button
            className="delete"
            aria-label="close"
            onClick={props.close}
          ></button>
        </header>
        <section className="modal-card-body">
          {/* {" "} */}
          <h5>{props.children}</h5>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" onClick={props.handleSubmit}>
            Save
          </button>
          <button className="button" onClick={props.close}>
            Cancel
          </button>
        </footer>
      </div>
    </div>

    // <div>
    //   <div
    //     className="modal-wrapper"
    //     style={{
    //       transform: props.show ? "translateY(0vh)" : "translateY(-100vh)",
    //       opacity: props.show ? "1" : "0",
    //     }}
    //   >
    //     <div className="modal-header">
    //       <h3>Add student details</h3>

    //       <span className="close-modal-btn" onClick={props.close}>
    //         ×
    //       </span>
    //     </div>
    //     <div className="modal-body">
    //       <p>{props.children}</p>
    //     </div>

    //   </div>
    // </div>
  );
};
export default Modal;
