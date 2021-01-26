import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalState'
import { useForm } from "react-hook-form";
import { Link, useHistory } from 'react-router-dom';
import './Attendance.css';
import Select from 'react-select';
import DatePicker from "react-multi-date-picker";


function Attendance(props) {

    const { myclasses, editClass } = useContext(GlobalContext)
    const [selectedClass, setSelectedClass] = useState({
        id: '',
        name: '',
        students: [],
        teachers: []
    })

    //Appends the students name and list out
    const studOptions = myclasses.map(c => c.students).flat().map(s => ({ label: s, value: s }))
    console.log("load students from attendance", myclasses.map(c => c.students));
    
    //Appends the teachers name and list out
    const teachOptions = myclasses.map(c=>c.teachers).flat().map(t=>({label: t, value: t}))

    const { register, handleSubmit, errors } = useForm();

    const history = useHistory();

    const currentClassId = props.match.params.id;

    var path = history.location.pathname

    var str = path;

    var n = str.lastIndexOf("/") + 1;

    const classId = str.substr(n, str.length);

    const [value, setValue] = useState(new Date());

    useEffect(() => {
        const selectedClass = myclasses.find(user => user.id === classId);
        setSelectedClass(selectedClass);
        // console.log("SelectedClass from attendance useEffect", selectedClass)
    }, [currentClassId, myclasses])

    const handleSChange = (selectedStudents) => {
        // console.log("selectedClass in Edit class attendance handleSChange method", selectedStudents)
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
        history.push("/classes");
    };
    return (
        <>
            <Link to="/classes">
                <span className="icon is-small">
                    <i className="fa fa-chevron-left"></i>
                </span>&nbsp;Back
            </Link>
            <br />
            <form onSubmit={handleSubmit(onSubmit)}>
            <article className="panel is-link">
                <p className="panel-heading" align="center">
                    Attendance &nbsp;&nbsp;
                    {/* <Link className="button is-warning is-small is-outline" to="/AddClass">
                        <span className="icon is-small">
                            <i className="fas fa-user-plus fa-sm has-text-link "></i>
                        </span>
                    </Link> */}
                </p>
            </article>

            {/* <p>The selected date is <span className = "styledate">{date && format(date, 'dd MMM yyyy', { locale: enGB })}</span></p> */}
            <div className="field">
                <label>Choose Date</label><br />
                <DatePicker type="input-icon"
                    format="DD-MM-YYYY"
                    value={value}
                    onChange={setValue}
                />
                <div className="control has-icons-left has-icons-right">
                    <label>Select Students  </label>
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
            </div>
            <br />
            <div className="field is-grouped is-grouped-centered">
                <input
                    type="submit"
                    className="button is-link is-rounded is-fullwidth"
                />
                <Link to="/classes" className="button is-danger is-rounded is-fullwidth">Cancel</Link>
            </div>
            </form>
        </>
    )
}

export default Attendance