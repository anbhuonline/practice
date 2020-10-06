// import React from "react";
// import { useForm } from "react-hook-form";

// export default function Login() {
//   const { register, handleSubmit, errors } = useForm();
//   const onSubmit = (data) => {
//     console.log("mydata" + data);
//   };

//   return (
//     <div className="hero-body has-text-centered">
//     <form onSubmit={handleSubmit(onSubmit)}>
//         <img src="https://logoipsum.com/logo/logo-1.svg" width="325px" />
      
//       <div className="field">
//         <p className="control has-icons-left">
//           <input
//             name="email"
//             className="input is-medium is-rounded is-fullwidth"
//             type="email"
//             placeholder="Email"
//             ref={register({ required: true })}
//           />
//           <span className="icon is-small is-left">
//             <i className="fas fa-envelope"></i>
//           </span>
//           {errors.exampleRequired && <span>This field is required</span>}
//         </p>
//       </div>
//       <div className="field">
//         <p className="control has-icons-left">
//           <input
//             name="password"
//             className="input is-medium is-rounded"
//             type="password"
//             placeholder="Password"
//             ref={register({ required: true })}
//           />
//           <span className="icon is-small is-left">
//             <i className="fas fa-lock"></i>
//           </span>
//           {errors.exampleRequired && <span>This field is required</span>}
//         </p>
//       </div>
      
//       <div className="field is-grouped is-grouped-centered">
//       <button className="button is-block is-fullwidth is-primary is-medium is-rounded" type="submit" ref={register}>
//               Login
//             </button>&nbsp;&nbsp;
//               <button className="button is-block is-fullwidth is-primary is-medium is-rounded" type="reset">
//               Cancel
//             </button>
//       </div>
//     </form>
//     </div>
//   );
// }

import React from "react";
import { useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="hero-body has-text-centered">
    <form onSubmit={handleSubmit(onSubmit)}>
          <img src="https://logoipsum.com/logo/logo-1.svg" width="325px" alt="logo" />
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
    </div>
  );
}

export default Login;
