import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalState'
import { v4 as uuid } from "uuid";
import { useForm } from "react-hook-form";
import { Link, useHistory } from 'react-router-dom';
import Select from 'react-select'


const EditClass = (props) => {

    let [val, setVal] = useState();
    const { myclasses, editClass, users } = useContext(GlobalContext)
    const [selectedUser, setSelectedUser] = useState({
        id: '',
        name: '',
        students: [],
        teachers: []
    })

    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();
    const currentUserId = props.match.params.id;
    var path = history.location.pathname    
    var n = path.lastIndexOf("/") + 1;
    const userId = path.substr(n, path.length)

   
    const selTeachers= [
        { value: 'ramesh1', label: 'ramesh1' },
        { value: 'suresh1', label: 'suresh1' },
        { value: 'ashwin1', label: 'ashwin1' }
    ]

    const userOptions = users.map((u)=> {
        return {label:u.sname, value:u.semail}
    })
    console.log("userOptions",userOptions,users)
    const onSubmit = data => {
        const newClass = {
            id: uuid(),
            name: data.name,
            classstudents: data.classstudents,
            classteachers: data.classteachers,
        }
        console.log("newClass", newClass)
        editClass(newClass);
        history.push("/classes");
    };
    return (
        <React.Fragment>
            <Link to="/classes">
                <span className="icon is-small">
                    <i className="fa fa-chevron-left"></i>
                </span>
        &nbsp;Back</Link>
            <br />
            <div className="panel-heading">
                Edit Class
            <div className="panel-block">
                    <div className="control">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="field">
                                <div className="control has-icons-left has-icons-right">
                                    <input
                                        name="name"
                                        ref={register}
                                        className="input is-fullwidth"
                                        type="text"
                                        placeholder="Name"
                                        defaultValue={selectedUser.name}
                                        ref={register({ required: true })} />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-graduation-cap"></i>
                                    </span>
                                    {errors.exampleRequired && <span>This field is required</span>}
                                </div>
                            </div>
                            <div className="field">
                                <div className="control has-icons-left has-icons-right">
                                    <label>Select Students</label>
                                    <Select
                                        defaultValue=""
                                        isMulti
                                        name="colors"
                                        options={userOptions}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                    />
                                    {errors.exampleRequired && <span>This field is required</span>}
                                </div>
                                <div className="field">
                                    <div className="control has-icons-left has-icons-right">
                                        <label>Select Teachers</label>
                                        <Select
                                            defaultValue=""
                                            isMulti
                                            name="colors"
                                            options={selTeachers}
                                            className="basic-multi-select"
                                            classNamePrefix="select"
                                        />
                                    </div>
                                </div>
                                {errors.exampleRequired && <span>This field is required</span>}
                            </div>

                            <div className="field is-grouped is-grouped-centered">
                                <input
                                    type="submit"
                                    className="button is-link is-rounded is-fullwidth"
                                />
                                <Link to="/classes" className="button is-danger is-rounded is-fullwidth">Cancel</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default EditClass