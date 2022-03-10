// import { initialState } from "./initialState";
let initialState={id:null,skinCode:null}

function DocumentReducer(state = initialState, action) {
  if (action.type === "SET_SKIN") {
    return {...state,skinCode:action.payload.skinCode,id:action.payload.id};
  } else if (action.type === "UPDATE_SKIN") {
    return { ...state, skinCode: action.payload.skinCode };
  } else {
    return state;
  }
}

export default DocumentReducer;