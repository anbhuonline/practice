import React from "react";
import { useForm } from "react-hook-form";

function Register() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="field">
        <div className="control has-icons-left has-icons-right">
          <input
            name="username"
            className="input"
            type="text"
            placeholder="Username"
            ref={register({ required: true })}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
          {/* <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span> */}
          {errors.exampleRequired && <span>This field is required</span>}
        </div>
        {/* <p className="help">This username is available</p> */}
      </div>
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input
            name="email"
            className="input"
            type="email"
            placeholder="Email"
            ref={register({ required: true })}
          />

          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          {/* <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span> */}
        </p>
        {errors.exampleRequired && <span>This field is required</span>}
      </div>
      <div className="field">
        <p className="control has-icons-left">
          <input
            name="password"
            className="input"
            type="password"
            placeholder="Password"
            ref={register({ required: true })}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-lock"></i>
          </span>
        </p>
        {errors.exampleRequired && <span>This field is required</span>}
      </div>
      <div className="field">
        <p className="control has-icons-left">
          <input
            name="cpassword"
            className="input"
            type="password"
            placeholder="Confirm password"
            ref={register({ required: true })}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-lock"></i>
          </span>
        </p>
        {errors.exampleRequired && <span>This field is required</span>}
      </div>
      <div className="field">
        <p className="control has-icons-left">
          <input
            name="contactno"
            className="input"
            type="text"
            placeholder="Contact number"
            ref={register({ required: true })}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-phone"></i>
          </span>
        </p>
        {errors.exampleRequired && <span>This field is required</span>}
      </div>
      <div className="field is-grouped">
        <div className="control">
          <input type="submit" className="button is-primary" />
        </div>
        <div className="control">
          <button className="button is-light" type="reset">
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}

export default Register;
