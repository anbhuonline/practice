import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalState'
import { useForm } from "react-hook-form";
import { Link, useHistory } from 'react-router-dom';
import { enGB } from 'date-fns/locale'
import { DatePickerCalendar, useDateInput } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import Select from 'react-select';
import './Attendance.css';

function Attendanceold(props) {
    console.log("props from Attendance", props);
    const [date, setDate] = useState()
    const inputProps = useDateInput({
        date,
        // format: 'yyyy-MM-dd',
        format: 'dd-MM-yyyy',
        locale: enGB,
        onDateChange: setDate
    })
    const { myclasses, editClass } = useContext(GlobalContext)
    const [selectedClass, setSelectedClass] = useState({
        id: '',
        name: '',
        students: [],
        teachers: []
    })
    
    //Appends the students name and list out
    const studOptions = myclasses.map(c=>c.students).flat().map(s=>({label:s, value:s}))
    console.log("load students from attendance",myclasses.map(c=>c.students));

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
        // console.log("SelectedClass from attendance useEffect", selectedClass)
    }, [currentClassId, myclasses])

    const handleSChange = (selectedStudents) => {
        // console.log("selectedClass in Edit class attendance handleSChange method", selectedStudents)
        let tempVal = { ...selectedClass };
        tempVal.students = selectedStudents
        setSelectedClass(tempVal)
    }

    return (
        <>
            <Link to="/classes">
                <span className="icon is-small">
                    <i className="fa fa-chevron-left"></i>
                </span>&nbsp;Back
            </Link>
            <br />
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
            <label>Select date from the picker</label>
            <input className='input' {...inputProps} />
            <DatePickerCalendar date={date} onDateChange={setDate} locale={enGB} />
        </>
    )
}

export default Attendanceold