import React from "react";
let EducationState = {
  CLG: "",
  DGRE: "",
  GRYR: "",
  GRDT: "",
  GRCG: "",
  CBOARD: "",
  CCITY: "",
};
let initialState={
    EducationHistories:[{id:0,...EducationState}]
}

function EducationSection(state = initialState, action) {
    // console.log("education section")
    switch(action.type){
        case "ADDEDUCATION":{
            let newstate={...state};
            

            return {...newstate,EducationHistories:[...newstate.EducationHistories,{id:newstate.EducationHistories.length,...EducationState}]};
        }
            case "UPDATEEDUCATIONKEY":{
                // let {key,val,id}=action.payload;
                let key=action.payload.key;
                let val=action.payload.val;
                let id=action.payload.id;
                // console.log(key,val);
                
                let newEducationHistoryArr=[...state.EducationHistories];
    newEducationHistoryArr[id]={...newEducationHistoryArr[id],[key]:val};
                return {...state,EducationHistories:newEducationHistoryArr}
            }
        default:return state;
    }

}

export default EducationSection;
