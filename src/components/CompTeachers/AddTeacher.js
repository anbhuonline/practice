import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { v4 as uuid } from "uuid";
import Select from 'react-select';
import { useForm } from "react-hook-form";
import { Link, useHistory } from 'react-router-dom';

const AddTeacher = () => {
    const { register, handleSubmit, errors } = useForm();
    const [selectedTOption, setSelectedTOption] = React.useState([]);
    const { addTeacher, myclasses } = useContext(GlobalContext);
    const history = useHistory();
    const classOptions = myclasses.map((c)=> {
        return {label:c.name, value:c.id}
    })
    const handleChange=(selectedTOption)=>{    
            
    console.log("selectedTOption in handlechange AddTeacher", selectedTOption)
    // console.log("selectedTOption[0] in handlechange AddTeacher", selectedTOption[0].label)
       setSelectedTOption(selectedTOption)
    }
    
    const onSubmit = data => {
        const classOptions = selectedTOption.map((c)=> {
            return {label:c.label}
        })
        const newTeacher = {
            id: uuid(),
            tname: data.tname,
            taddress: data.taddress,
            temail: data.temail,
            tphone: data.tphone,
            tclass: classOptions           
        }        
        addTeacher(newTeacher);
        history.push("/teachers");
    };

    return (
        <React.Fragment>
            <Link to="/teachers">
                <span className="icon is-small">
                    <i className="fa fa-chevron-left"></i>
                </span>
                &nbsp;&nbsp;Back</Link>
                <div className="panel-heading">
                Add Teacher
                <div className="panel-block">
                    <div className="control">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="field">
                                <div className="control has-icons-left has-icons-right">
                                    <input name="tname" ref={register} className="input is-rounded is-fullwidth" type="text"
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
                                    <input name="taddress" ref={register} className="input is-rounded is-fullwidth" type="text"
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
                                    <input name="tphone" ref={register} className="input is-rounded is-fullwidth" type="text"
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
                                    <input name="temail" ref={register} className="input is-rounded is-fullwidth" type="text"
                                        placeholder="Email ID"
                                        ref={register({ required: true })} />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-envelope"></i>
                                    </span>
                                </div>
                                {errors.exampleRequired && <span>This field is required</span>}
                            </div>

                            <div className="field">
                                <div className="control has-icons-left has-icons-right">                                    
                                    <Select   
                                        isMulti     
                                        value={selectedTOption}                                        
                                        onChange={handleChange}
                                        options={classOptions}
                                        ref={register({ required: true })}
                                    />                                     
                                </div>
                                {errors.exampleRequired && <span>This field is required</span>}
                            </div>

                            <div className="field is-grouped is-grouped-centered">
                                <input
                                    type="submit"
                                    className="button is-link is-rounded is-fullwidth"
                                />
                                <Link to="/teachers" className="button is-danger is-rounded is-fullwidth">Cancel</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment> 
    )
}

export default AddTeacher
