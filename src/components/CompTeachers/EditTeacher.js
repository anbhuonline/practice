import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { Link, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";


const EditTeacher = (props) => {

  const { register, handleSubmit, errors, reset  } = useForm();
  const { teachers, editTeacher } = useContext(GlobalContext);
  const [selectedTeacher, setSelectedTeacher] = useState({
    id: '',
    tname: '',
    taddress: '',
    temail: '',
    tphone: '',
  })
  const history = useHistory();
  const currentteacherId = props.match.params.id;
  var path = history.location.pathname
  
var str = path;
  var n = str.lastIndexOf("/")+1;

  const teacherId = str.substr(n, str.length)
  useEffect(() => {
    const selectedTeacher = teachers.find(user => user.id === teacherId);
    setSelectedTeacher(selectedTeacher);
  }, [currentteacherId, teachers])

  const onSubmit = (data) => {
    const newTeacher = {      
        id:teacherId,
        tname: data.tname,
        taddress: data.taddress,
        temail: data.temail,
        tphone: data.tphone,
    }
  editTeacher(newTeacher);
  history.push("/teachers");
  };

  return (
    <React.Fragment>
      <Link to="/teachers">
        <span className="icon is-small">
          <i className="fa fa-chevron-left"></i>
        </span>
        &nbsp;&nbsp;Back</Link>
      <br />
         
        <div className="panel-heading">
                Edit Teacher
                <div className="panel-block">
                    <div className="control">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="field">
                                <div className="control has-icons-left has-icons-right">
                                    <input name="tname" ref={register} className="input is-rounded is-fullwidth" type="text"
                                        placeholder="Name"
                                        // ref={register({ required: true })} 
                                        defaultValue={selectedTeacher.tname}/>                                        
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
                                        // ref={register({ required: true })} 
                                        defaultValue={selectedTeacher.taddress}/>
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
                                        // ref={register({ required: true })} 
                                        defaultValue={selectedTeacher.tphone}/>
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
                                        // ref={register({ required: true })} 
                                        defaultValue={selectedTeacher.temail}/>
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
                                <Link to="/teachers" className="button is-danger is-rounded is-fullwidth">Cancel</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    </React.Fragment>
  );
}

export default EditTeacher;
