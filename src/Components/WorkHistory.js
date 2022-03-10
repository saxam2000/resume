import React from "react";
import Preview from "./Preview"


import TextField from "@mui/material/TextField";
import { fieldCd } from "../constants/typeCodes";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import SamplePreview from "./SamplePreview";

function WorkHistory(props) {
  let history = useHistory();
  const [WorkHistory, setWorkHistory] = useState(props.WorkSection);

// setWorkHistory(props.WorkSection);
// console.log(props.WorkSection.workHistories);
// console.log(WorkHistory);
// useEffect(() => {
//   setWorkHistory(props.WorkSection);

//   console.log(WorkHistory);
// }, []);

  const onChange = (e,id) => {
    let key = e.target.name;
    let val = e.target.value;
    let newWorkHistoryArr=[...WorkHistory.workHistories];
    newWorkHistoryArr[id]={...newWorkHistoryArr[id],[key]:val}
    // let newWorkHistoryObj={...WorkHistory}
    // newWorkHistoryObj[workHistories]:newWorkHistoryArr;
    setWorkHistory({...WorkHistory,workHistories: newWorkHistoryArr} );
    // setWorkHistory({ ...WorkHistory,[key]:[val]});
    props.updateKey(key, val,id);
  };
  const getValue = (key,id) => {
    // console.log(id,key,WorkHistory.workHistories);
    // return "abc";
    return props.WorkSection.workHistories[id][key];
    // return WorkHistory.workHistories[id][key];
  };


  let jobState={
    JTIT:"",
    JSTA:"",
    JSTD:"",
    EDDT:"",
    JDES:"",
    JCIT:"",
    CPNAME:"",
}

  let labelCss = { fontSize: "1rem", fontWeight: "bold", margin: "5px" };


const  addjob=async()=>{
  console.log("button");
  await props.addwork();
  setWorkHistory({...WorkHistory,workHistories:[...WorkHistory.workHistories,{id:WorkHistory.workHistories.length,...jobState}]});
}

  return (
    <div>
        <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>work Section</h1>
        <button          style={{border:"2px solid black", backgroundcolor:"red",height:"2rem",width:"7rem",margin:"0 0 0 1rem"}}
 onClick={()=>history.push("/preview")}> Preview</button>
        <button         style={{border:"2px solid black", backgroundcolor:"red",height:"2rem",width:"7rem",margin:"0 0 0 1rem"}}
 onClick={()=>history.push("/education")}> Go back</button>
        </div>
      <div className ="workHistoryPage"style={{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"flex-start" ,width:"100%"}}
        
      >
        <div
          style={{      
            display: "flex",
                  flexDirection: "column",
                  width:"35%",
                  // justifyContent: "sp",
                  backgroundColor:"beige",
                  alignItems: "flex-start",
                  height: "50%",}}
          className="workHistories"
        >
{
 props.WorkSection.workHistories.map(work=>{
   return (
     <div  className="workhistoryhtmlform"style={{    display: "flex",
    flexDirection: "column",
    width:"100%",
    border: "0.5px solid #e3d4c2",
    // justifyContent: "sp",
    alignItems: "flex-start",
    height: "50%",}} key={work.id}>
       <h1>{work.id+1}</h1>


       <div
    style={{
      display: "flex",
      flexWrap:"",
      width:"100%",
      flexDirection: "column",
      margin: "1rem 0 1rem 1rem",
      alignItems: "flex-start",
    }}
    className="JobTitleAndCompanyNameMain"
  >
<div style={{display:"flex",flexDirection:"row",flexWrap:"nowrap"}} className="JobTitleAndCompanyName">
            <TextField
              size="small"
              id="outlined-basic"
              value={getValue(fieldCd.JobTitle,work.id)}
              name={fieldCd.JobTitle}
              sx={{
                width: "48%",
                margin: "1px 6% 0 0",
              }}
              onChange={(e) => onChange(e,work.id)}
              label="JobTitle"
              variant="outlined"
            />
            <TextField
              size="small"
              id="outlined-basic"
              sx={{
                width: "48%",
              }}
              value={getValue(fieldCd.CompanyName,work.id)}
              name={fieldCd.CompanyName}
              onChange={(e) => onChange(e,work.id)}
              label="CompanyName"
              variant="outlined"
            />
            </div>
            </div>
            
            <div style={{
      display: "flex",
      flexWrap:"",
      width:"100%",
      flexDirection: "column",
      margin: "1rem 0 1rem 1rem",
      alignItems: "flex-start",
    }} className="DegreeAndCGPA">
          <div style={{display:"flex",flexDirection:"row",flexWrap:"nowrap"}} className="JobStateAndCity">
            <TextField
              size="small"
              id="outlined-basic"
              value={getValue(fieldCd.JobState,work.id)}
              name={fieldCd.JobState}
              sx={{
                width: "48%",
                margin: "1px 6% 0 0",
              }}
              onChange={(e) => onChange(e,work.id)}
              label="JobState"
              variant="outlined"
            />
            <TextField
              size="small"
              id="outlined-basic"
              sx={{
                width: "48%",
              }}
              value={getValue(fieldCd.JobCity,work.id)}
              name={fieldCd.JobCity}
              onChange={(e) => onChange(e,work.id)}
              label="JobCity"
              variant="outlined"
            />
          </div>
          </div>
<div  style={{
      display: "flex",
      flexWrap:"",
      width:"100%",
      flexDirection: "column",
      margin: "1rem 0 1rem 1rem",
      alignItems: "flex-start",
    }}className="JobStartAndEndTimeMain">
          <div style={{display:"flex",flexDirection:"row",flexWrap:"nowrap"}} className="JobStartAndEndTime">
            <TextField
              size="small"
              id="outlined-basic"
              value={getValue(fieldCd.JobEndDate,work.id)}
              name={fieldCd.JobEndDate}
              sx={{
                width: "48%",
                margin: "1px 6% 0 0",
              }}
              onChange={(e) => onChange(e,work.id)}
              label="JobEndDate"
              variant="outlined"
            />
            <TextField
              size="small"
              id="outlined-basic"
              sx={{
                width: "48%",
              }}
              value={getValue(fieldCd.JobStartDate,work.id)}
              name={fieldCd.JobStartDate}
              onChange={(e) => onChange(e,work.id)}
              label="JobStartDate"
              variant="outlined"
            />
          </div></div>
          <div style={{display:"flex",flexDirection:"row",flexWrap:"nowrap"}} className="JobDescription">
       <TextField
              size="small"
              id="outlined-basic"
              value={getValue(fieldCd.JobDescription,work.id)}
              multiline
              maxRows={4}
              name={fieldCd.JobDescription}
              sx={{
                width: "30rem",
                marginBottom: "2px",

                margin: "1rem 0 1rem 1rem",
              }}
              onChange={(e) => onChange(e,work.id)}
              label="JobDescription"
              variant="outlined"
            />
            </div>
            </div>
           

   
   )
 })
}

          <button onClick={()=>{
              console.log("add clicked")
              return addjob() }}>addJob</button>


        </div>
        <Preview ContactSection={props.ContactSection} DocumentReducer={props.DocumentReducer} WorkSection={props.WorkSection} EducationSection={props.EducationSection}></Preview>
      </div>
    </div>
  );
}
let mapStateToProps = (store) => {
  return store;
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateKey:(key,val,id)=>dispatch({type:"UPDATEJOBKEY",payload:{key:key,val:val,id:id}}),
        addwork:()=>dispatch({type:"ADDWORK"}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkHistory);
