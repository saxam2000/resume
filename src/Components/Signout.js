import React from 'react'
import {connect} from "react-redux";
import * as authActions from "../Reducers/authActions";
// import 

function Signout(props) {
    return (
        <div>
            <button onClick={()=>props.signout()}>logout</button>
        </div>
    )
}
const mapStateToProps = (store)=>{
    return {
        auth:store.firebase.auth,
        authMine:store.auth
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        signout:()=>{dispatch(authActions.signout())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Signout);
