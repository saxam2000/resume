import React from "react";
import "../html/css/templat1.css";
import "../html/css/templat2.css";
import "../html/css/templat3.css";
import "../html/css/templat4.css";
import "../html/css/templat5.css";
import "../html/css/templat6.css";
import {connect} from "react-redux"
import { fieldCd } from "../constants/typeCodes";
import ReactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fab,
  faTwitterSquare,
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

library.add(fab, faTwitterSquare, faFacebook, faLinkedin, faGithub);

function DummyPreview(props) {

    console.log(props)
  const ContactKeyToVal = (key, valToAppend) => {
    if (props.ContactSection) {
      return props.ContactSection[key]
        ? props.ContactSection[key] + (valToAppend ? valToAppend : "")
        : "";
    }
    return "";
  };

  const getWorkHistory = (key, id, valToAppend) => {
    // console.log("came");
    // console.log(props.WorkSection);
    if (props.WorkSection) {
      // console.log(props.WorkSection);
      return props.WorkSection.workHistories[id][key]
        ? props.WorkSection.workHistories[id][key] +
            (valToAppend ? valToAppend : "")
        : "";
    }
    return "";
  };
  const EducationKeyToVal = (key, id, valToAppend) => {
    if (props.EducationSection) {
      return props.EducationSection.EducationHistories[id][key]
        ? props.EducationSection.EducationHistories[id][key] +
            (valToAppend ? valToAppend : "")
        : "";
    }
    return "";
  };


//   let code=`skin${props?.DocumentReducer?.skinCode===null?"1":props?.DocumentReducer?.skinCode}`;
//   console.log(code) ;
// let skincd=`skin${props?.DocumentReducer?.skinCode===null?"1":props?.DocumentReducer?.skinCode} `;
//   console.log(props);
let skincd="skin4 "



    return (
        <div>
            <div className={skincd+"outer-container"}>
<div className={skincd+"container"}>
    <div className={skincd+"profiletext"}>
        <div className="imgbx">
            <img src="images/Pierre-Person.jpg" alt=""/>
        </div>
        <h2 className="title7">Pierre Person</h2>
        <h2 className="occupation">Web Developer</h2>
    </div>
    <hr className="horizontalline" style={{display: "none"}}/>
    
    <div className={skincd+"about"}>
        <h2 className="title3">Profile</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis sed corrupti quia eveniet in
            odio
            cupiditate recusandae ipsam esse, maiores repudiandae quisquam voluptatibus illum eligendi
            molestiae, id voluptas illo laborum.</p>
    </div>
    <div className={skincd+"contactinfo"}>
        <h2 className="title">Contact Info</h2>
        <ul>
            <li>
                <span className="icon"><i className="fa fa-phone" aria-hidden="true"></i></span>
                <span className="text">+919876543210</span>
            </li>
            <li>
                <span className="icon"><i className="fa fa-envelope-o" aria-hidden="true"></i></span>
                <span className="text">pierre@gmail.com</span>
            </li>
            <li>
                <span className="icon"><i className="fa fa-globe" aria-hidden="true"></i></span>
                <span className="text">www.mywebsite.com</span>
            </li>
            <li>
                <span className="icon"><i className="fa fa-linkedin" aria-hidden="true"></i></span>
                <span className="text">www.linked.in</span>
            </li>
            <li>
                <span className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></span>
                <span className="text">city,state,country</span>
            </li>
        </ul>
    </div>
    <div className={skincd+"Experience"}>
        <h2 className="title2">Experience</h2>
        <div className="box">
            <div className="year_company">
                <h5 className="year">2019-Present</h5>
                <h5 className="company">Company Name</h5>
            </div>
            <div className="text">
                <h4>Senior UX Designer</h4>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ad
                    assumenda velit
                    aperiam vitae unde maxime mollitia illum ea id deserunt optio praesentium culpa enim,
                    asperiores adipisci quidem provident quas!</p>
            </div>
        </div>
        <div className="box">
            <div className="year_company">
                <h5 className="year">2016-2019</h5>
                <h5 className="company">Company Name</h5>
            </div>
            <div className="text">
                <h4>UX/UI Designer</h4>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ad
                    assumenda velit
                    aperiam vitae unde maxime mollitia illum ea id deserunt optio praesentium culpa enim,
                    asperiores adipisci quidem provident quas!</p>
            </div>
        </div>
        <div className="box">
            <div className="year_company">
                <h5 className="year">2014-2016</h5>
                <h5 className="company">Company Name</h5>
            </div>
            <div className="text">
                <h4>Junior UX Designer</h4>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ad
                    assumenda velit
                    aperiam vitae unde maxime mollitia illum ea id deserunt optio praesentium culpa enim,
                    asperiores adipisci quidem provident quas!</p>
            </div>
        </div>
    </div>
    <div className={"education"}>
        <h2 className="title4">Education</h2>
        <ul>
        {props.EducationSection.EducationHistories.map((education) => {
              return (
                <li key={education.id}>
                  <h5>
                    {EducationKeyToVal(fieldCd.CollegeAdmission, education.id)}-
                    {EducationKeyToVal(fieldCd.GraduationDate, education.id)}
                  </h5>
                  <h4>{EducationKeyToVal(fieldCd.Degree, education.id)}</h4>
                  <h4>
                    {EducationKeyToVal(fieldCd.CollegeName, education.id)}
                  </h4>
                  <h3>
                    {EducationKeyToVal(fieldCd.CollegeBoard, education.id)}
                  </h3>
                </li>
              );
            })}
        </ul>
    </div>
    <div className={skincd+"DisplaySkillsList"} style={{display: "none"}}>
        <h2 className="SkillsListTitle">Professional Skills</h2>
        <ul>
            <li><h4>Html</h4></li>
            <li><h4>CSS</h4></li>
            <li><h4>JavaScript</h4></li>
            <li><h4>Photoshop</h4></li>
            <li><h4>Adobe XD</h4></li>
        </ul>
    </div>
    {/* <div className={skincd+"DisplaySkillsPercentage"} style={{display: "none"}}>
        <h2 className="SkillsPercentageTitle">Professional Skills</h2>
        <div className="box">
            <h4>Html</h4>
            <div className="percent">
                <div style="width: 95%;"></div>
            </div>
        </div>
        <div className="box">
            <h4>CSS</h4>
            <div className="percent">
                <div style="width: 70%;"></div>
            </div>
        </div>
        <div className="box">
            <h4>JavaScript</h4>
            <div className="percent">
                <div style="width: 90%;"></div>
            </div>
        </div>
        <div className="box">
            <h4>Photoshop</h4>
            <div className="percent">
                <div style="width: 75%;"></div>
            </div>
        </div>
        <div className="box">
            <h4>Adobe XD</h4>
            <div className="percent">
                <div style="width: 98%;"></div>
            </div>
        </div>
    </div> */}
    {/* <div className={skincd+"languag"}>
        <h2 className="title8">Languages</h2>
        <ul>
            <li>
                <span className="text">English</span>
                <span className="percent">
                    <div style="width:90%;"></div>
                </span>
            </li>
            <li>
                <span className="text">Spanish</span>
                <span className="percent">
                    <div style="width:48%;"></div>
                </span>
            </li>
            <li>
                <span className="text">Hindi</span>
                <span className="percent">
                    <div style="width:95%;"></div>
                </span>
            </li>
        </ul>
    </div> */}
    <div className={skincd+"interest"}>
        <h2 className="title6">Interest</h2>
        <ul>
            <li>Gaming</li>
            <li>Singing</li>
            <li>Reading</li>
            <li>Cooking</li>
        </ul>
    </div> 
</div>
</div>
        </div>
    )
}

const mapStateToProps=(store)=>{
    return store;
}
export default connect(mapStateToProps )(DummyPreview);

