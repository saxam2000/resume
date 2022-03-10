import React from "react";
import * as actionTypes from "./actionTypes";
let initialState = {
  uid:"",
  errormessage: "",
  loading: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SIGN_OUT:
      return {...state,loading:false,uid:""}
      case actionTypes.SIGN_OUT_FAILED:
        return {...state,loading:false}
    case actionTypes.SIGN_IN_FAILED:
      return { ...state, loading: false, errormessage: action.error };
    case actionTypes.SIGN_IN_REQUEST:
      return { ...state, loading: true };
    case actionTypes.SIGN_IN_SUCCESS:
      return { ...state, loading: false,uid:action.uid };
      case actionTypes.REMOVE_ERROR:{
          return {...state,errormessage:""}
      }
      case actionTypes.REGISTER_REQUEST:
          return {...state,loading:true}
          case actionTypes.REGISTER_SUCCESS:
              return{...state,loading:false,id:action.uid}
              case actionTypes.REGISTER_FAILED:{
                  return {...state,loading:true,errormessage:action.error}
              }
    default:
      return state;
  }
}
