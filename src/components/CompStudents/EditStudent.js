import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { Link, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Select from 'react-select';
import StudentsList from './StudentsList';

const EditStudent = (props) => {
    console.log("props received from studentlist", props)
  const { register, handleSubmit, errors, reset  } = useForm();
  const { users, editUser, myclasses } = useContext(GlobalContext);
  const [selectedOption, setSelectedOption] = React.useState([]);
  const [selectedUser, setSelectedUser] = useState({
    id: '',
    sname: '',
    saddress: '',
    sparent: '',
    semail: '',
    sphone: '',
    sclass:[{label:'', value:''}]
  })
  const classOptions = myclasses.filter(stud => stud.name != selectedUser.sclass).map((c)=> {    
    return {label:c.name, value:c.id}
})
//   const defaultClass = myclasses.filter(stud => stud.name === selectedUser.sclass).map((c)=> {          
//     return {label:c.name, value:c.id}
// })
  
  const handleChange=(selectedClass)=>{     
    // setSelectedUser(selectedUser)        
    console.log("selectedClass", selectedClass)
    let tempVal = { ...selectedUser};
    tempVal.sclass = selectedClass
    setSelectedUser(tempVal)
}
  const history = useHistory();
  const currentUserId = props.match.params.id;
  var path = history.location.pathname
  
  var str = path;
  var n = str.lastIndexOf("/")+1;
  const userId = str.substr(n, str.length)
 
  useEffect(() => {
    const selectedUser = users.find(user => user.id === userId);
    console.log("users from useeffect",users)
    setSelectedUser(selectedUser);
    console.log("selectedUser from useeffect", selectedUser)
  }, [currentUserId, users])

    const onSubmit = (data) => {
        //   console.log("selectedOption inside submit event", selectedOption)
        console.log("data inside submit event", data)
        const newUser = {
            id: selectedUser.id,
            sname: data.sname,
            saddress: data.saddress,
            semail: data.semail,
            sparent: data.sparent,
            sphone: data.sphone,
            sclass: selectedUser.sclass
        }

        console.log("newUser inside edituser function:", newUser)
        editUser(newUser);
        history.push("/students");
    };
// console.log("selectedUser",selectedUser)
  return (
    <React.Fragment>
      <Link to="/students">
        <span className="icon is-small">
          <i className="fa fa-chevron-left"></i>
        </span>
        &nbsp;&nbsp;Back</Link>
      <br />
          <div className="panel-heading">
              Edit/Update Student
                <div className="panel-block">
                  <div className="control">
                      <form onSubmit={handleSubmit(onSubmit)}>
                          <div className="field">
                              <div className="control has-icons-left has-icons-right">
                                  <input name="sname" ref={register} className="input is-rounded is-fullwidth" type="text"
                                      placeholder="Name"
                                      // ref={register({ required: true })} 
                                      defaultValue={selectedUser.sname} />
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
                                      // ref={register({ required: true })} 
                                      defaultValue={selectedUser.saddress} />
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
                                      // ref={register({ required: true })} 
                                      defaultValue={selectedUser.sparent} />
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
                                      // ref={register({ required: true })} 
                                      defaultValue={selectedUser.sphone} />
                                  <span className="icon is-small is-left">
                                      <i className="fas fa-phone"></i>
                                  </span>
                                  {errors.exampleRequired && <span>This field is required</span>}
                              </div>
                          </div>

                          <div className = "field">
                              <div className = "control has-icons-left has-icons-right">
                                  <input name = "semail" ref = {register} className = "input is-rounded is-fullwidth" type = "text"
                                      placeholder = "Email ID"
                                      // ref={register({ required: true })} 
                                      defaultValue = {selectedUser.semail} />
                                  <span className = "icon is-small is-left">
                                      <i className = "fas fa-envelope"></i>
                                  </span>
                              </div>
                              {errors.exampleRequired && <span>This field is required</span>}
                          </div>
                          <div className="field">
                                <div className="control has-icons-left has-icons-right">                                    
                                    <Select                                            
                                        // defaultValue = {selectedUser.sclass}
                                        value={selectedUser.sclass}
                                        onChange = {handleChange}
                                        options = {classOptions}
                                        ref = {register({ required: true })}
                                    />                                   
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
      {/* </form> */}
    </React.Fragment>
  );
}

export default EditStudent;
