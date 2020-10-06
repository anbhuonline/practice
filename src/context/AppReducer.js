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
  
      default:
        return state;
    }
  }