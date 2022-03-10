import React from "react";
// import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import { fieldCd } from "../constants/typeCodes";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import SamplePreview from "./SamplePreview";
import Preview from "./Preview";

function Contact(props) {
  let history = useHistory();
  const [Contact, setContact] = useState(props.ContactSection);
  console.log(props);
  //   const [fname, setfname] = useState("");
  //   const [lname, setlname] = useState("");
  //   const [Address, setAddress] = useState("");
  //   const [phone, setphone] = useState("");
  //   const [email, setemail] = useState("");
  //   const [Profession, setProfession] = useState("");
  //   const [Street, setStreet] = useState("");
  //   const [State, setState] = useState("");
  //   const [City, setCity] = useState("");
  //   const [Country, setCountry] = useState("");
  //   const [Pincode, setPincode] = useState("");
  //   const [fname, setfname] = useState("hello");

  const onChange = (e) => {
    let key = e.target.name;
    let val = e.target.value;
    setContact({ ...Contact, [key]: val });
    props.updateKey(key, val);
  };
  const getValue = (key) => {
    return Contact[key];
  };

  let labelCss = { fontSize: "1rem", fontWeight: "bold", margin: "5px" };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>CONTACT SECTION</h1>
        <br></br>
        <button
        style={{border:"2px solid black", backgroundcolor:"red",height:"2rem",width:"7rem",margin:"0 0 0 1rem"}}
          onClick={() => {
            console.log("clicked");
            history.push("/education");
          }}
        >
          
          Next
        </button>
        <button
        style={{border:"2px solid black", backgroundcolor:"red",height:"2rem",width:"7rem",margin:"1rem"}}
          onClick={() => {
            console.log("clicked");
            history.push("/templates");
          }}
        >
          
          go back
        </button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "30%",
            // justifyContent: "sp",
            border: "0.5px solid #e3d4c2",
            backgroundColor: "beige",
            alignItems: "flex-start",
            height: "50%",
          }}
          className="ContacthtmlForm"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              margin: "2%",
              alignItems: "flex-start",
            }}
            className="emailInput"
          >
            <label style={labelCss} htmlFor="email">
              Email address :
            </label>
            <TextField
              id="outlined-basic"
              name={fieldCd.Email}
              value={getValue(fieldCd.Email)}
              onChange={(e) => onChange(e)}
              sx={{
                height: "5ch",
                width: "90%",
                size: "small",
              }}
              size="small"
              variant="outlined"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "",
              width: "90%",
              flexDirection: "column",
              margin: "2%",
              alignItems: "flex-start",
            }}
            className="nameInput"
          >
            <label style={labelCss} htmlFor="fullname">
              FullName:{" "}
            </label>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
              }}
              className="fnameAndLname"
            >
              <TextField
                size="small"
                id="outlined-basic"
                value={getValue(fieldCd.FirstName)}
                sx={{
                  width: "48%",
                  margin: "0 4% 0 0",
                }}
                name={fieldCd.FirstName}
                onChange={(e) => onChange(e)}
                label="FirstName"
                variant="outlined"
              />
              <TextField
                size="small"
                id="outlined-basic"
                value={getValue(fieldCd.LastName)}
                name={fieldCd.LastName}
                onChange={(e) => onChange(e)}
                sx={{
                  width: "48%",
                  // margin:"0 1rem 0 0"
                }}
                label="LastName"
                variant="outlined"
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "2%",
              alignItems: "flex-start",
            }}
            className="AddressInput"
          >
            <label style={labelCss} htmlFor="Address">
              Address :{" "}
            </label>

            <TextField
              size="small"
              id="outlined-basic"
              value={getValue(fieldCd.Address)}
              name={fieldCd.Address}
              sx={{
                width: "100%",
                marginBottom: "0.5rem",
              }}
              onChange={(e) => onChange(e)}
              label="Address"
              variant="outlined"
            />
            <TextField
              size="small"
              id="outlined-basic"
              value={getValue(fieldCd.Street)}
              name={fieldCd.Street}
              sx={{
                width: "100%",
                marginBottom: "0.5rem",
              }}
              onChange={(e) => onChange(e)}
              label="Street"
              variant="outlined"
            />
            <TextField
              size="small"
              id="outlined-basic"
              value={getValue(fieldCd.Phone)}
              name={fieldCd.Phone}
              sx={{
                width: "100%",
                marginBottom: "0.5rem",
              }}
              onChange={(e) => onChange(e)}
              label="Phone"
              variant="outlined"
            />
            <div className="localAddress">
              <TextField
                size="small"
                id="outlined-basic"
                value={getValue(fieldCd.Country)}
                name={fieldCd.Country}
                sx={{
                  width: "48%",
                  marginBottom: "2%",
                  // marginRight: "4%",

                  margin: "0 4% 0 0",
                }}
                onChange={(e) => onChange(e)}
                label="Country"
                variant="outlined"
              />
              <TextField
                size="small"
                id="outlined-basic"
                value={getValue(fieldCd.State)}
                name={fieldCd.State}
                sx={{
                  width: "48%",
                  marginBottom: "0.5rem",

                  margin: "0 0 0 0",
                }}
                onChange={(e) => onChange(e)}
                label="State"
                variant="outlined"
              />
            </div>
            <div className="localAddress">
              <TextField
                size="small"
                id="outlined-basic"
                value={getValue(fieldCd.City)}
                name={fieldCd.City}
                sx={{
                  width: "48%",
                  marginBottom: "2%",
                  // marginRight: "4%",

                  margin: "0 4% 0 0",
                }}
                onChange={(e) => onChange(e)}
                label="City"
                variant="outlined"
              />
              <TextField
                size="small"
                id="outlined-basic"
                sx={{
                  width: "48%",
                  marginBottom: "0.5rem",

                  margin: "0 0 0 0",
                }}
                value={getValue(fieldCd.ZipCode)}
                name={fieldCd.ZipCode}
                onChange={(e) => onChange(e)}
                label="Pincode"
                variant="outlined"
              />
            </div>

            <div className="linkedinAndGithub">
              <TextField
                size="small"
                id="outlined-basic"
                value={getValue(fieldCd.linkedIn)}
                name={fieldCd.linkedIn}
                sx={{
                  width: "48%",
                  marginBottom: "2%",
                  // marginRight: "4%",

                  margin: "0 4% 0 0",
                }}
                onChange={(e) => onChange(e)}
                label="linkedIn"
                variant="outlined"
              />
              <TextField
                size="small"
                id="outlined-basic"
                sx={{
                  width: "48%",
                  marginBottom: "0.5rem",

                  margin: "0 0 0 0",
                }}
                value={getValue(fieldCd.GitHub)}
                name={fieldCd.GitHub}
                onChange={(e) => onChange(e)}
                label="GitHub"
                variant="outlined"
              />
            </div>
            <div className="WebsiteAndTwitter">
              <TextField
                size="small"
                id="outlined-basic"
                value={getValue(fieldCd.Website)}
                name={fieldCd.Website}
                sx={{
                  width: "48%",
                  marginBottom: "2%",
                  // marginRight: "4%",

                  margin: "0 4% 0 0",
                }}
                onChange={(e) => onChange(e)}
                label="Website"
                variant="outlined"
              />
              <TextField
                size="small"
                id="outlined-basic"
                sx={{
                  width: "48%",
                  marginBottom: "0.5rem",

                  margin: "0 0 0 0",
                }}
                value={getValue(fieldCd.Twitter)}
                name={fieldCd.Twitter}
                onChange={(e) => onChange(e)}
                label="Twitter"
                variant="outlined"
              />
            </div>
          </div>
          {/* <div
              style={{
                display: "flex",
                flexDirection: "column",
    margin: "2%",
                alignItems: "flex-start",
              }}
              className="ProfessionInput"
            >
              <label style={ labelCss } htmlFor="Profession">
                Profession
              </label>
              <TextField
                size="small"
                id="outlined-basic"
                name={fieldCd.Profession}
                value={getValue(fieldCd.Profession)}
                onChange={(e) => onChange(e)}
                label="Profession"
                variant="outlined"
              />
            </div> */}
        </div>
        <Preview
          ContactSection={props.ContactSection}
          DocumentReducer={props.DocumentReducer}
          WorkSection={props.WorkSection}
          EducationSection={props.EducationSection}
        ></Preview>
      </div>
    </div>
  );
}

const mapStateToProps = (store) => {
  return store;
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateKey: (key, val) => {
      // console.log(key,"  ",val)
      return dispatch({ type: "UPDATECONTACTKEY", payload: { key, val } });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
