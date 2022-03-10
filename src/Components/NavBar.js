import React,{useState,useEffect} from "react";
import { isLoaded } from 'react-redux-firebase'
import { connect } from "react-redux";
import * as authActions from '../Reducers/authActions';
import { useHistory } from "react-router";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

function NavBar(props) {
  const history=useHistory();
    return (
        <div style={{height:"10%"}}>
            <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SP.RESUME
          </Typography>
          {!props.auth?.uid?(<><Button color="inherit" onClick={()=>{history.push("/signin")}}>Login</Button><Button color="inherit" onClick={()=>{history.push("/register")}}>signup</Button></>):(<><Button onClick={()=>{props.signout()}} color="inherit">logout</Button></>)}
          
        </Toolbar>
      </AppBar>
    </Box>
        </div>
    )
}
const mapStateToProps=(store)=>{
  return{
    auth:store.firebase.auth,
    authMine:store.auth,
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
      signout:()=>{dispatch(authActions.signout())}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(NavBar)

