import React, { useState, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { v4 as uuid } from "uuid";

import { useForm } from "react-hook-form";
import { Link, useHistory } from 'react-router-dom';


const AddStudent = () => {
    const { register, handleSubmit, errors, reset } = useForm();
    const [state, setState] = React.useState({
        sname: "",
        saddress: "",
        sparent: "",
        sphone: "",
        semail: ""
    })

    const { addUser } = useContext(GlobalContext);
    const history = useHistory();

    const onSubmit = data => {
        const newUser = {
            id: uuid(),
            sname: data.sname,
            saddress: data.saddress,
            semail: data.semail,
            sparent: data.sparent,
            sphone: data.sphone,
        }
        addUser(newUser);
        history.push("/students");
    };


    // function handleChange(evt) {
    //     const value = evt.target.value;
    //     setState({
    //         ...state,
    //         [evt.target.name]: value
    //     });
    // }

    return (

        <React.Fragment>
            <Link to="/students">
                <span className="icon is-small">
                    <i className="fa fa-chevron-left"></i>
                </span>
                &nbsp;&nbsp;Back</Link>
            <div className="panel-heading">
                Add Student
                <div className="panel-block">
                    <div className="control">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="field">
                                <div className="control has-icons-left has-icons-right">
                                    <input name="sname" ref={register} className="input is-rounded is-fullwidth" type="text"
                                        placeholder="Name"
                                        ref={register({ required: true })} />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-user"></i>
                                    </span>
                                    {errors.exampleRequired && <span>This field is required</span>}
                                </div>
                            </div>
                            <div className="field">
                                <div className="control has-icons-left has-icons-right">
                                    <input name="saddress" ref={register} className="input is-rounded is-fullwidth" type="text"
                                        placeholder="Address"
                                        ref={register({ required: true })} />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-user"></i>
                                    </span>
                                    {errors.exampleRequired && <span>This field is required</span>}
                                </div>
                            </div>
                            <div className="field">
                                <div className="control has-icons-left has-icons-right">
                                    <input name="sparent" ref={register} className="input is-rounded is-fullwidth" type="text"
                                        placeholder="Parent Name"
                                        ref={register({ required: true })} />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-user"></i>
                                    </span>
                                    {errors.exampleRequired && <span>This field is required</span>}
                                </div>
                            </div>
                            <div className="field">
                                <div className="control has-icons-left has-icons-right">
                                    <input name="sphone" ref={register} className="input is-rounded is-fullwidth" type="text"
                                        placeholder="Contact number"
                                        ref={register({ required: true })} />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-phone"></i>
                                    </span>
                                    {errors.exampleRequired && <span>This field is required</span>}
                                </div>
                            </div>

                            <div className="field">
                                <div className="control has-icons-left has-icons-right">
                                    <input name="semail" ref={register} className="input is-rounded is-fullwidth" type="text"
                                        placeholder="Email ID"
                                        ref={register({ required: true })} />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-envelope"></i>
                                    </span>
                                </div>
                                {errors.exampleRequired && <span>This field is required</span>}
                            </div>
                            <div className="field is-grouped is-grouped-centered">
                                <input
                                    type="submit"
                                    className="button is-link is-rounded is-fullwidth"
                                />
                                <Link to="/students" className="button is-danger is-rounded is-fullwidth">Cancel</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AddStudent
