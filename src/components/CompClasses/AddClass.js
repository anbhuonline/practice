import React, {useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { v4 as uuid } from "uuid";
import { useForm } from "react-hook-form";
import { Link, useHistory } from 'react-router-dom';
import Select from 'react-select'
// import makeAnimated from 'react-select/animated';

const AddClass = () => {
    const [val,setVal]=useState();
    const { myclasses } = useContext(GlobalContext)
    
    // useEffect(() => {
    //     myclasses.students.map((myval)=>{
    //         alert(myval.name)
    //     })
    // },[]);         
    console.log(val);
    const customStyles = {
        menu: (provided, state) => ({
            ...provided,
            color: state.selectProps.menuColor,
            padding: 10,
        })
    }
    
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    console.log("myclasses",myclasses)
    console.log("Addoptions",options)


    const { addClass } = useContext(GlobalContext);
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();
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
                                        defaultValue=""
                                        isMulti
                                        name="colors"
                                        options={options}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                        styles={customStyles}
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
                                        options={options}
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

export default AddClass