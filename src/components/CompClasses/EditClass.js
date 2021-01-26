import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalState'
// import { v4 as uuid } from "uuid";
import { useForm } from "react-hook-form";
import { Link, useHistory } from 'react-router-dom';
import Select from 'react-select'


const EditClass = (props) => {
    const { myclasses, editClass } = useContext(GlobalContext)
    const [selectedClass, setSelectedClass] = useState({
        id: '',
        name: '',
        students: [],
        teachers: []
    })
    
    //Appends the students name and list out
    const studOptions = myclasses.map(c=>c.students).flat().map(s=>({label:s, value:s}))
    
    //Appends the teachers name and list out
    const teachOptions = myclasses.map(c=>c.teachers).flat().map(t=>({label: t, value: t}))

    const { register, handleSubmit, errors } = useForm();
    
    const history = useHistory();
    
    const currentClassId = props.match.params.id;
    
    var path = history.location.pathname  
    
    var str = path;
    
    var n = str.lastIndexOf("/")+1;

    const classId = str.substr(n, str.length)

    useEffect(() => {
        const selectedClass = myclasses.find(user => user.id === classId);
        setSelectedClass(selectedClass);
        // console.log("SelectedClass from useEffect", selectedClass)
    }, [currentClassId, myclasses])

    const handleSChange = (selectedStudents) => {
        console.log("selectedClass in Edit class handleSChange method", selectedStudents)
        let tempVal = { ...selectedClass };
        tempVal.students = selectedStudents
        setSelectedClass(tempVal)
    }
    const handleTChange = (selectedTeachers) => {
        console.log("selectedClass in Edit class handleTChange method", selectedTeachers)
        let tempVal = {...selectedClass}
        tempVal.teachers = selectedTeachers
        setSelectedClass(tempVal)
        console.log("selectedClass in handleTChange",selectedClass)
    }
    const onSubmit = data => {
        // console.log("data from onsubmit in editclass selectedClass", selectedClass)
        // console.log("data from onsubmit in editclass", data)
        const newClass = {
            // id: uuid(),
            id:selectedClass.id,
            name: data.name,
            students: selectedClass.students,
            teachers: selectedClass.teachers,
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
                                        defaultValue={selectedClass.name}
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
                                        // defaultValue={[classOptions[0],classOptions[1]]}
                                        isMulti
                                        value={selectedClass.students}
                                        onChange={handleSChange}
                                        options={studOptions}
                                        ref={register({ required: true })}
                                    />
                                    {errors.exampleRequired && <span>This field is required</span>}
                                </div>
                            </div>                            
                            <div className="field">
                                <div className="control has-icons-left has-icons-right">
                                    <label>Select Teachers</label>
                                    <Select
                                        // defaultValue={[classOptions[0],classOptions[1]]}
                                        isMulti
                                        value={selectedClass.teachers}
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

export default EditClass