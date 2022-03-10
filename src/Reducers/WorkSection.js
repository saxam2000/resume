let jobState={
    JTIT:"",
    JSTA:"",
    JSTD:"",
    EDDT:"",
    JDES:"",
    JCIT:"",
    CPNAME:"",
}
let initialState={
    workHistories:[{id:0,...jobState}]
}
function WorkSection(state=initialState,action){
    // console.log("workSection");
    switch(action.type){
        case "ADDWORK":{
            let newstate={...state};
            

            return {...newstate,workHistories:[...newstate.workHistories,{id:newstate.workHistories.length,...jobState}]};
        }
            case "UPDATEJOBKEY":{
                // let {key,val,id}=action.payload;
                let key=action.payload.key;
                let val=action.payload.val;
                let id=action.payload.id;
                // console.log(key,val);
                
                let newWorkHistoryArr=[...state.workHistories];
    newWorkHistoryArr[id]={...newWorkHistoryArr[id],[key]:val};
                return {...state,workHistories:newWorkHistoryArr}
            }
        default:return state;
    }
}
export default WorkSection;