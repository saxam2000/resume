import React,{useState,useEffect} from "react";
import { isLoaded } from 'react-redux-firebase'
import { connect } from "react-redux";
import * as authActions from '../Reducers/authActions';
import { useHistory } from "react-router";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Signin(props) {
    // console.log(props);
 
    let history = useHistory();
    const [name, setName] = useState("");
    const [secondname, setSecondname] = useState("");
    const [email,setEmail] = useState('');
    const [loading,setLoading] = useState(true);
    const [password,setPassword]= useState('');
    const handleEmail= (e)=>{
      setEmail(e.target.value);
      }
      const handlePassword=(e)=>{
        setPassword(e.target.value);
      }
   
  const onSubmit=()=>{
    console.log(props);
    
     props.signin({email:email, password:password})
    
  }
  // console.log(props.auth.uid);
  useEffect(()=>{
    // console.log(props.auth.uid);
    if(props.auth?.uid){
       history.push("/");
     }
     setLoading(false);

  },[props])

 
    return (
      <>
    {/* To save from multiple request */}
      {/* {!isLoaded(props.auth)?<></>:<>
        {props.authMine.loading?<h4 style={{marginTop:'10%',height:'52vh'}}>Patiently Wait...we are resgistering you in</h4>: */}
          <div
        className="mainsigninBody"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
          width: "98vw",
          backgroundColor:"#f7e2b2",
          
        }}
      >
        <div
          className="signinForm"
          style={{ border: "1px solid #d3bd22", width: "50rem" ,fontSize:"1rem",backgroundColor:"#edd99f"}}
        >
          <h1>Sign In</h1>
          <div className="email-Input" style={{margin:"4rem 0"}}>
          <TextField
            // fullWidth
              id="outlined-name"
              label="email"
              value={email}
              size="large"
              sx={{ width: '43rem',height:"1rem" }}
              inputProps={{style: {fontSize: 20}}} // font size of input text
               InputLabelProps={{style: {fontSize: 20}}} // font size of input label
              onChange={(e)=>setEmail(e.target.value)}
              style={{ }}
            />
          </div>
          <div className="email-Input" style={{margin:"4rem 0"}}>
          <TextField
            // fullWidth
              id="outlined-name"
              label="Password"
              value={password}
              size="large"
              sx={{ width: '43rem',height:"1rem" }}
              inputProps={{style: {fontSize: 20}}} // font size of input text
               InputLabelProps={{style: {fontSize: 20}}} // font size of input label
              onChange={(e)=>setPassword(e.target.value)}
              style={{ }}
            />
          </div>
          <div className="signinbutton" style={{display:"flex" ,flexDirection:"row" ,margin:"0 2rem ",alignItems:"center"}}>
          {props.authMine?.ErrorMessage?.message?<div className="input-group full">
                                <span className="error-message" >{props.authMine?.ErrorMessage?.message}</span> 
                        </div> :<></>}
          <Button onClick={onSubmit} variant="contained" sx={{height:"3rem",width:"6rem" ,margin:"0 2rem"}}>sign In</Button>
          <Button onClick={()=>history.push("/register")} variant="contained" sx={{ backgroundColor:"blue" ,height:"3rem",width:"6rem"}}>Register</Button>

          </div>
          
        </div>
      </div>

        </>
    );
  }



  const mapStateToProps=(store)=>{
    return{
      auth:store.firebase.auth,
      authMine:store.auth,
    }
}
const mapDispatchToProps=(dispatch)=>{
return {
  signin:(abc)=>{ dispatch( authActions.signIn(abc))}
}
}
  export default connect(mapStateToProps, mapDispatchToProps)(Signin)

