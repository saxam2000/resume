import React,{useEffect} from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router-dom";
import "../html/css/sample.css"
// import image from "../html/images/samp1.jpg"
import image1 from "../html/images/samp1.jpg"
import image2 from "../html/images/samp2cop.jpg"
import image3 from "../html/images/samp3cop.jpg"
import image4 from "../html/images/samp4cop.jpg"
import image5 from "../html/images/samp5cop.jpg"
import image6 from "../html/images/samp6cop.jpg"

function Templates(props) {
  const history = useHistory();
  console.log(props);

  function handleSelect(e) {
    console.log("clicked");
    console.log(e.target.name);
    if (props.DocumentReducer.id == null) {
      let uuid = uuidv4();
      // console.log(uuid);
      props.setSkin(uuid, e.target.name);
    } else {
      props.updateSkin(e.target.name);
    }
  }
  useEffect(()=>{
    // console.log(props.auth.uid);
    if(!props.firebase.auth?.uid){
       history.push("/signin");
     }
    //  setLoading(false);

  },[props])

  return (
    <div className="mainTemplate" style={{margin:"0.5rem"}}>
      <h1 className="h1">Choose button template</h1>
    <h2 className="h2">Select button template and colour to begin</h2>

    <div className="flex-containercolor">
        <div className="fitem1"></div>
        <div className="fitem2"></div>
        <div className="fitem3"></div>
        <div className="fitem4"></div>
        <div className="fitem5"></div>

    </div>
    <div className="sample-container">
        <div className="item">
            <button name="1" href=""  onClick={(e) => handleSelect(e)}><img src={image1} name="1" onClick={(e) => handleSelect(e) } alt="sample template cant be loaded"></img></button>
        </div>
        <div  name="2" className="item">
            <button href="" onClick={(e) => handleSelect(e)}><img src={image2} name="2" onClick={(e) => handleSelect(e) } alt="sample template cant be loaded"></img></button>
        </div>
        <div  name="3" className="item">
            <button href="" onClick={(e) => handleSelect(e)}><img src={image3} name="3" onClick={(e) => handleSelect(e) } alt="sample template cant be loaded"></img></button>
        </div>
        <div name="4" className="item">
            <button href="" onClick={(e) => handleSelect(e)}><img src={image4} name="4" onClick={(e) => handleSelect(e) } alt="sample template cant be loaded"></img></button>
        </div>
        <div name="5" className="item">
            <button href="" onClick={(e) => handleSelect(e)}><img src={image5} name="5" onClick={(e) => handleSelect(e) } alt="sample template cant be loaded"></img></button>
        </div>
        <div name="6" className="item">
            <button href="" onClick={(e) => handleSelect(e)}><img src={image6} name="6" onClick={(e) => handleSelect(e) } alt="sample template cant be loaded"></img></button>
        </div>
    </div>


      <button name="nothing" onClick={() => history.push("/contact")}>
        next
      </button>
      <button name="nothing" onClick={() => history.push("/")}>
        back
      </button>
      <button name="1" onClick={(e) => handleSelect(e)}>
        template1
      </button>
      <button name="2" onClick={(e) => handleSelect(e)}>
        template2
      </button>
      <button name="3" onClick={(e) => handleSelect(e)}>
        template3
      </button>
      <button name="4" onClick={(e) => handleSelect(e)}>
        template4
      </button>
      <button name="5" onClick={(e) => handleSelect(e)}>
        template5
      </button>
      <button name="6" onClick={(e) => handleSelect(e)}>
        template6
      </button>
    </div>
  );
}

const mapStateToProps = (store) => {
  return store;
};
const mapDispatchToProps = (dispatch) => {
  return {
    setSkin: (id, skinCode) => {
      console.log("setSkin");
      return dispatch({
        type: "SET_SKIN",
        payload: { id: id, skinCode: skinCode },
      });
    },
    updateSkin: (skinCode) => {
      console.log("updateSkin");
      return dispatch({ type: "UPDATE_SKIN", payload: { skinCode: skinCode } });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Templates);
