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
            className="input is-rounded is-fullwidth"
            type="text"
            placeholder="Username"
            ref={register({ required: true })}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>        
          {errors.exampleRequired && <span>This field is required</span>}
        </div>
      </div>
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input
            name="email"
            className="input is-rounded is-fullwidth"
            type="email"
            placeholder="Email"
            ref={register({ required: true })}
          />

          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
        </p>
        {errors.exampleRequired && <span>This field is required</span>}
      </div>
      <div className="field">
        <p className="control has-icons-left">
          <input
            name="password"
            className="input is-rounded is-fullwidth"
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
            className="input is-rounded is-fullwidth"
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
            className="input is-rounded is-fullwidth"
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
      <div className="field is-grouped is-grouped-centered">
        {/* <div className="control"> */}
          <input type="submit" className="button is-link is-rounded is-fullwidth" />
        {/* </div> */}
        {/* <div className="control"> */}
          <button className="button is-light is-rounded is-fullwidth" type="reset">
            Cancel
          </button>
        {/* </div> */}
      </div>
    </form>
  );
}

export default Register;
