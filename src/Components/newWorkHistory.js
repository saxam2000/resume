import React from "react";



import TextField from "@mui/material/TextField";
import { fieldCd } from "../constants/typeCodes";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import SamplePreview from "./SamplePreview";

function WorkHistory(props) {
  let history = useHistory();
  const [WorkHistory, setWorkHistory] = useState(props.WorkSection);
console.log(props.WorkSection.workHistories);
  const onChange = (e,id) => {
    let key = e.target.name;
    let val = e.target.value;
    // let newWorkHistoryArr=[...WorkHistory.workHistories];
    // newWorkHistoryArr[id]={...newWorkHistoryArr[id],[key]:val}
    // setWorkHistory({ newWorkHistoryArr });
    setWorkHistory({ ...WorkHistory,[key]:[val]});
    props.updateKey(key, val,id);
  };
  const getValue = (key,id) => {
    return WorkHistory.workHistories[id][key];
  };




  let labelCss = { fontSize: "1rem", fontWeight: "bold", margin: "5px" };


const  addjob=()=>{
console.log("button");
props.addwork();
}

  return (
    <div>
        <h1>work Section</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            height: "50%",
          }}
          className="WorkHistoryHtmlForm"
        >
          {/* <div className="JobTitleAndCompanyName">
            <TextField
              size="small"
              id="outlined-basic"
              value={getValue(fieldCd.JobTitle)}
              name={fieldCd.JobTitle}
              sx={{
                width: "15rem",
                marginBottom: "2px",

                margin: "3px 1rem 0 0",
              }}
              onChange={(e) => onChange(e)}
              label="JobTitle"
              variant="outlined"
            />
            <TextField
              size="small"
              id="outlined-basic"
              sx={{
                width: "14rem",
                marginBottom: "2px",

                margin: "3px 0rem 0 0",
              }}
              value={getValue(fieldCd.CompanyName)}
              name={fieldCd.CompanyName}
              onChange={(e) => onChange(e)}
              label="CompanyName"
              variant="outlined"
            />
          </div>
          <div className="CompanyCityAndState">
            <TextField
              size="small"
              id="outlined-basic"
              value={getValue(fieldCd.JobState)}
              name={fieldCd.JobState}
              sx={{
                width: "15rem",
                marginBottom: "2px",

                margin: "3px 1rem 0 0",
              }}
              onChange={(e) => onChange(e)}
              label="JobState"
              variant="outlined"
            />
            <TextField
              size="small"
              id="outlined-basic"
              sx={{
                width: "14rem",
                marginBottom: "2px",

                margin: "3px 0rem 0 0",
              }}
              value={getValue(fieldCd.JobCity)}
              name={fieldCd.JobCity}
              onChange={(e) => onChange(e)}
              label="JobCity"
              variant="outlined"
            />
          </div>

          <div className="JobStartAndEndTime">
            <TextField
              size="small"
              id="outlined-basic"
              value={getValue(fieldCd.JobEndDate)}
              name={fieldCd.JobEndDate}
              sx={{
                width: "15rem",
                marginBottom: "2px",

                margin: "3px 1rem 0 0",
              }}
              onChange={(e) => onChange(e)}
              label="JobEndDate"
              variant="outlined"
            />
            <TextField
              size="small"
              id="outlined-basic"
              sx={{
                width: "14rem",
                marginBottom: "2px",

                margin: "3px 0rem 0 0",
              }}
              value={getValue(fieldCd.JobStartDate)}
              name={fieldCd.JobStartDate}
              onChange={(e) => onChange(e)}
              label="JobStartDate"
              variant="outlined"
            />
          </div> */}

{
 props.WorkSection.workHistories.map(work=>{
   return (
     <div style={{border:"2px solid black",margin:"3px"}} key={work.id}>
       <h1>{work.id+1}</h1>
                 <div className="JobTitleAndCompanyName">
            <TextField
              size="small"
              id="outlined-basic"
              value={getValue(fieldCd.JobTitle,work.id)}
              name={fieldCd.JobTitle}
              sx={{
                width: "15rem",
                marginBottom: "2px",

                margin: "3px 1rem 0 0",
              }}
              onChange={(e) => onChange(e,work.id)}
              label="JobTitle"
              variant="outlined"
            />
            <TextField
              size="small"
              id="outlined-basic"
              sx={{
                width: "14rem",
                marginBottom: "2px",

                margin: "3px 0rem 0 0",
              }}
              value={getValue(fieldCd.CompanyName,work.id)}
              name={fieldCd.CompanyName}
              onChange={(e) => onChange(e,work.id)}
              label="CompanyName"
              variant="outlined"
            />
          </div>
          <div className="CompanyCityAndState">
            <TextField
              size="small"
              id="outlined-basic"
              value={getValue(fieldCd.JobState,work.id)}
              name={fieldCd.JobState}
              sx={{
                width: "15rem",
                marginBottom: "2px",

                margin: "3px 1rem 0 0",
              }}
              onChange={(e) => onChange(e,work.id)}
              label="JobState"
              variant="outlined"
            />
            <TextField
              size="small"
              id="outlined-basic"
              sx={{
                width: "14rem",
                marginBottom: "2px",

                margin: "3px 0rem 0 0",
              }}
              value={getValue(fieldCd.JobCity,work.id)}
              name={fieldCd.JobCity}
              onChange={(e) => onChange(e,work.id)}
              label="JobCity"
              variant="outlined"
            />
          </div>

          <div className="JobStartAndEndTime">
            <TextField
              size="small"
              id="outlined-basic"
              value={getValue(fieldCd.JobEndDate,work.id)}
              name={fieldCd.JobEndDate}
              sx={{
                width: "15rem",
                marginBottom: "2px",

                margin: "3px 1rem 0 0",
              }}
              onChange={(e) => onChange(e,work.id)}
              label="JobEndDate"
              variant="outlined"
            />
            <TextField
              size="small"
              id="outlined-basic"
              sx={{
                width: "14rem",
                marginBottom: "2px",

                margin: "3px 0rem 0 0",
              }}
              value={getValue(fieldCd.JobStartDate,work.id)}
              name={fieldCd.JobStartDate}
              onChange={(e) => onChange(e,work.id)}
              label="JobStartDate"
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
      </div>
    </div>
  );
}
let mapStateToProps = (store) => {
  return store;
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateKey:(key,val,id)=>dispatch({type:"UPDATEKEYs",payload:{key:key,val:val,id:id}}),
        addwork:()=>dispatch({type:"ADDWORK"}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkHistory);
