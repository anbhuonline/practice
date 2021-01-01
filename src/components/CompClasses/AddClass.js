import React, {useState, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { v4 as uuid } from "uuid";
import { useForm } from "react-hook-form";
import { Link, useHistory } from 'react-router-dom';
import Select from 'react-select'

const AddClass = () => {
    const { register, handleSubmit, errors } = useForm();
    
    const [selectedSOption, setSelectedSOption] = useState();

    const [selectedTOption, setSelectedTOption] = useState();
    
    const { addClass, myclasses} = useContext(GlobalContext);
    
    const history = useHistory();

    //Loads students name on select control
    const studOptions = myclasses.map(c=>c.students).flat().map(s=>({label:s, value:s}))

    //Loads teachers name on select control
    const teachOptions = myclasses.map(temp=>temp.teachers).flat().map(t=>({label: t, value: t}))

    const handleSChange=(selectedSOption)=>{
       setSelectedSOption(selectedSOption)
    }

    const handleTChange=(selectedTOption)=>{
       setSelectedTOption(selectedTOption)
    }
    
    const onSubmit = data => {
        const newClass = {
            id: uuid(),
            name: data.name,
            students: selectedSOption,
            teachers: selectedTOption,
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
                                    <input name="name" className="input is-rounded is-fullwidth" type="text"
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
                                        isMulti
                                        value={selectedSOption}
                                        onChange={handleSChange}
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
                                        isMulti     
                                        value={selectedTOption}                                        
                                        onChange={handleTChange}
                                        options={teachOptions}
                                        ref={register({ required: true })}
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