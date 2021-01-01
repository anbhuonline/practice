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
        console.log("updateTeacher", updateTeacher)
        if (user.id === updateTeacher.id) {
          return updateTeacher;
        }
        console.log("updateTeachers", updateTeachers)
        return user;
      })
      return {
        ...state,
        teachers: updateTeachers
      }
    case 'REMOVE_CLASS':
      console.log("action.payload", action.payload);
      return {
        ...state,
        myclasses: state.myclasses.filter(user => {
          console.log("user from remvoeclass", user)
          return user.id !== action.payload;
        })
      }
    case 'ADD_CLASS':
      console.log("ADD_CLASS from AppReducer getting fired!")
      return {
        ...state,
        myclasses: [action.payload, ...state.myclasses]
      }

    case 'EDIT_CLASS':
      const updateClass = action.payload;

      const updateClasses = state.myclasses.map(user => {
        // console.log("Entering Editclass,user", user)
        console.log("Inside Editclass,updateClass.id", updateClass)
        // console.log("Inside Editclass,updateClass", updateClass)

        if (user.id === updateClass.id) {
          return updateClass;
        }
        return user;
      })
      return {
        ...state,
        myclasses: updateClasses
      }
    default:
      return state;
  }
}