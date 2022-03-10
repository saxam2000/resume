const initialState = {
    FNAM:"",
    LNAM:"",
    ADD:"",
    PROF:"",
    PHON:"",
    CITY:"",
    ZIPC:"",
    EMAI:"",
    CNTY:"",
    STRT:"",
    STAT:"",
    LKIN:"",
    GTHB:"",
}


function ContactSection(state=initialState,action){
    // console.log("contactSecttion");
    switch(action.type){
        case "ADD_EDU":
            return state;
        case"UPDATECONTACTKEY":{
            // console.log(action.payload);
            let key=action.payload.key;
            let val=action.payload.val;
            return {...state,[key]:val};
            }
         default:
            return state;    
    }
}
export default ContactSection;