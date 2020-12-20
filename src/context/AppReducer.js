export default (state, action) => {
    switch (action.type) {
      case 'REMOVE_USER':
        return {
          ...state,
          users: state.users.filter(user => {
            return user.id !== action.payload;
          })
        }
      case 'ADD_USER':
        return {
          ...state,
          users: [action.payload, ...state.users]
        }
      case 'EDIT_USER':
        const updateUser = action.payload;
  
        const updateUsers = state.users.map(user => {
          if (user.id === updateUser.id) {
            return updateUser;
          }
          return user;
        })
        return {
          ...state,
          users: updateUsers
        }
      case 'REMOVE_TEACHER':
        return {
          ...state,
          teachers: state.teachers.filter(user => {
            return user.id !== action.payload;
          })
        }
      case 'ADD_TEACHER':
        console.log("ADD_TEACHER from AppReducer getting fired!")
        return {
          ...state,
          teachers: [action.payload, ...state.teachers]
        }
      case 'EDIT_TEACHER':
        const updateTeacher = action.payload;
  
        const updateTeachers = state.teachers.map(user => {
          if (user.id === updateTeacher.id) {
            return updateTeacher;
          }
          return user;
        })
        return {
          ...state,
          teachers: updateTeachers
        }
        case 'ADD_CLASS':
        console.log("ADD_CLASS from AppReducer getting fired!")
        return {
          ...state,
          myclasses: [action.payload, ...state.myclasses]
        }
      case 'REMOVE_CLASS':
        return {
          ...state,
          classes: state.classes.filter(user => {
            return user.id !== action.payload;
          })
        }
        case 'EDIT_CLASS':
        const updateClass = action.payload;
  
        const updateClasses = state.classes.map(user => {
          if (user.id === updateClass.id) {
            return updateClass;
          }
          return user;
        })
        return {
          ...state,
          classes: updateTeachers
        }
      default:
        return state;
    }
  }