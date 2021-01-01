import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
  // teachers:[
  //   {id:1,tname:'ramesh',taddress:'chennai',tphone:'9841787730',temail:'ramesh@gmail.com'},
  //   {id:2,tname:'suresh',taddress:'chennai',tphone:'3265652662',temail:'suresh@gmail.com'}
  // ],
  // classes:[
  //   {id:'class2',name:'thulir2',classstudents:'4',classteachers:'3'},
  //   {id:'class3',name:'thulir3',classstudents:'3',classteachers:'2'}
  // ]
  users:[],
  teachers:[],  
   myclasses:[
     {
      "id":"1",
      "name":"Thulir1",
      "students":["arun1","ashok1","rajesh1","mahesh1"],
      "teachers":["ramesh1","suresh1","ashwin1"]
     },
     {
      "id":"2",
      "name":"Thulir2",
      "students":["arun2","ashok2","rajesh2","mahesh2"],
      "teachers":["ramesh2","suresh2","ashwin2"]
    },
     {
      "id":"3",
      "name":"Thulir3",
      "students":["arun3","ashok3","rajesh3","mahesh3"],
      "teachers":["ramesh3","suresh3","ashwin3"]
    }
   ]

  }



// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const removeUser = (id) => {
    dispatch({
      type: 'REMOVE_USER',
      payload: id
    })
  }

  const addUser = (user) => {
    console.log("Adduser function",user)
    dispatch({
      type: 'ADD_USER',
      payload: user
    })
  }

  const editUser = (user) => {
      console.log("edit user",user)
    dispatch({
      type: 'EDIT_USER',
      payload: user
    })
  }

  const removeTeacher = (id) => {
    dispatch({
      type: 'REMOVE_TEACHER',
      payload: id
    })
  }

  const addTeacher = (user) => {
    console.log(user, "user from Globalstate getting fired!")
    console.log("ADD_TEACHER from Globalstate getting fired!")
    dispatch({
      type: 'ADD_TEACHER',
      payload: user
    })
  }

  const editTeacher = (user) => {
      console.log("editTeacher action",user)
    dispatch({
      type: 'EDIT_TEACHER',
      payload: user
    })
  }
  const addClass = (user) => {
    console.log(user, "user from Globalstate getting fired!")
    console.log("ADD_CLASS from Globalstate getting fired!")
    dispatch({
      type: 'ADD_CLASS',
      payload: user
    })
  }
  const removeClass = (id) => {
    console.log("firing removeclass, id", id)
    dispatch({
      type: 'REMOVE_CLASS',
      payload: id
    })
  }

  const editClass = (user) => {
    console.log("editClass action",user)
    dispatch({
    type: 'EDIT_CLASS',
    payload: user
  })
}
  return (
    <GlobalContext.Provider value={{
      users: state.users,
      removeUser,
      addUser,
      editUser,
      teachers: state.teachers,
      removeTeacher,
      addTeacher,
      editTeacher,
      myclasses: state.myclasses,
      addClass,
      removeClass,
      editClass
    }}>
      {children}
    </GlobalContext.Provider>
  )
}