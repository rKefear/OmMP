import { DELETE_USER, SET_USER } from "../type/type";



const createUserReducer = (state = null, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;

    case DELETE_USER:
      return null;

    default:
      return state;
  }
};

export default createUserReducer
