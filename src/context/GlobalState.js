import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
  // users: []
  users:[],
  teachers:[
    // {id:1,tname:'ramesh',taddress:'chennai',tphone:'9841787730',temail:'ramesh@gmail.com'},
    // {id:2,tname:'suresh',taddress:'chennai',tphone:'3265652662',temail:'suresh@gmail.com'}
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
    // console.log("Adduser function",user)
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

  return (
    <GlobalContext.Provider value={{
      users: state.users,
      removeUser,
      addUser,
      editUser,
      teachers: state.teachers,
      removeTeacher,
      addTeacher,
      editTeacher
    }}>
      {children}
    </GlobalContext.Provider>
  )
}