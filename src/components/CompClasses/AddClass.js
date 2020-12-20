import React, {useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { v4 as uuid } from "uuid";
import { useForm } from "react-hook-form";
import { Link, useHistory } from 'react-router-dom';
import Select from 'react-select'

const AddClass = () => {
    const { register, handleSubmit, errors } = useForm();
    const [selectedOption, setSelectedOption] = React.useState();
    const { addClass, myclasses} = useContext(GlobalContext);
    const history = useHistory();
    const studOptions = myclasses.map((c)=> {
        return {label:c.students, value:c.id}
    })
    const teachOptions = myclasses.map((c)=> {
        return {label:c.teachers, value:c.id}
    })
    const handleChange=(selectedOption)=>{
        console.log("selectedOption in handlechange from Addstudent before changing value:", selectedOption)
       setSelectedOption(selectedOption)
    }
    const onSubmit = data => {
        const newClass = {
            id: uuid(),
            name: data.name,
            classstudents: data.classstudents,
            classteachers: data.classteachers,
        }
        addClass(newClass);
        history.push("/classes");
    };
    return (
        <React.Fragment>
            <Link to="/classes">
                <span className="icon is-small">
                    <i className="fa fa-chevron-left"></i>
                </span>
                &nbsp;&nbsp;Back</Link>
            <div className="panel-heading">
                Add Class
                <div className="panel-block">
                    <div className="control">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="field">
                                <div className="control has-icons-left has-icons-right">
                                    <input name="name" ref={register} className="input is-rounded is-fullwidth" type="text"
                                        placeholder="Name"
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
                                        value={selectedOption}
                                        isMulti
                                        onChange={handleChange}
                                        options={studOptions}
                                        ref={register({ required: true })}
                                    />                                     
                                </div>
                                {errors.exampleRequired && <span>This field is required</span>}
                            </div>
                            <div className="field">
                                <div className="control has-icons-left has-icons-right">
                                    <label>Select Teachers</label>
                                    <Select
                                        defaultValue=""
                                        isMulti
                                        name="colors"
                                        options={teachOptions}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                    />
                                    {errors.exampleRequired && <span>This field is required</span>}
                                </div>
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

export default AddClass