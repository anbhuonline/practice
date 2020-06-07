import React from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log("mydata" + data);
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
            // value={this.handleInput}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>

          {errors.exampleRequired && <span>This field is required</span>}
        </div>
        {/* <p className="help ">This username is available</p> */}
      </div>
      <div className="field">
        <p className="control has-icons-left">
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
          {errors.exampleRequired && <span>This field is required</span>}
        </p>
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
          {errors.exampleRequired && <span>This field is required</span>}
        </p>
      </div>
      <div className="field is-grouped">
        <p className="control">
          <input type="submit" className="button is-primary" ref={register} />
        </p>
        <p className="control">
          <button className="button is-light" type="reset">
            Cancel
          </button>
        </p>
      </div>
    </form>
  );
}
