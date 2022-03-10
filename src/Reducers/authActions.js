import * as actionTypes from './actionTypes';
import { useFirebase,getFirebase  } from 'react-redux-firebase'
export const signInRequest=()=>{
    return {
        type: actionTypes.SIGN_IN_REQUEST
    }
}
export const signInSuccess=(users)=>{
    return {
        type: actionTypes.SIGN_IN_SUCCESS,
        payload:users
    }
}
export const signInFailed=(error)=>{
    return {
        type: actionTypes.SIGN_IN_FAILED,
        payload:error
    }
}
export const signIn=(userData)=>{
    return async(dispatch, getState, {getFirebase,getFirestore}) => {
        dispatch({type: actionTypes.SIGN_IN_REQUEST})
       
        const firebase = getFirebase();
        const firestore = getFirestore();
        try{
            console.log(userData);
        let data = await firebase.auth().signInWithEmailAndPassword(userData.email,userData.password)
        console.log(data);
        console.log(data.uid);
     
            dispatch({type: actionTypes.SIGN_IN_SUCCESS,uid:data.uid})
    }
        catch(err) {
            console.log("Error is ", err)
            dispatch({type: actionTypes.SIGN_IN_FAILED,error:err})
        };
    }
}

export const register=(userData)=>{
    
    console.log("signIn 1 method")
    return async (dispatch, getState, {getFirebase,getFirestore}) => {
        // console.log("signIn method",getFirebase)
        const firebase = getFirebase();    
        const firestore = getFirestore();    
        firebase.auth().createUserWithEmailAndPassword(
            userData.email,
            userData.password
            ).then(async(data) => {
            console.log(data);
            const res = await firestore.collection('users').doc(data.uid).set({
                email:userData.email,password:userData.password,
                resumeIds:[]
              });
              dispatch({type: actionTypes.REGISTER,uid:data.uid})
        }).catch((err) => {
            dispatch({type: actionTypes.REGISTER_FAILED,error:err})
            console.log("signIn 3 method",err);
        });
    }
} 
export const setUser=(data)=>{
    return(dispatch)=>{
    dispatch({type:actionTypes.SET_USER, payload:data})
    }
}
export const signout=()=>{
    // console.log("aa");
    return async (dispatch, getState, {getFirebase,getFirestore}) => {
        console.log('signing out')
        const firebase = getFirebase();     
        firebase.auth().signOut(
            ).then(() => {
                // console.log("bb");
                dispatch({type: actionTypes.SIGN_OUT})
            }).catch((err) => {
            // console.log("bb");
            dispatch({type: actionTypes.SIGN_OUT_FAILED,error:err})
        });
    }
    // console.log("bb");
}
