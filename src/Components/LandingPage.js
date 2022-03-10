import { useTheme } from "@emotion/react";
import React from "react";
import { useHistory } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import abc from "./abc.png";

function LandingPage() {
  const history = useHistory();
  return (
    <div
      style={{
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
      }}
    >
      <div
        className="bodyLandingPage"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent:"center",
          alignItems:"center",
          height: "97vh",
        //   border: "5px solid black",
          width: "100%",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "9%",
            zindex: -1,
            backgroundImage: `url(${abc})`,
            backgroundPosition:"center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            // backgroundSize:"100%",
            minWidth: "98%",
            width: "98%",
            height: "99%",
            overflow: "none",
          }}
        ></div>
        <Button onClick={()=>{
                history.push("/templates")
            }}
          className="gettingStarted"
          style={{
            position: "absolute",
            fontSize: "2.5rem",
            top: "77%",
            left: "16%",
            fontFamily: "fantasy",
            border: "none",
            color: "black",
          }}
        >
          lets get started
        </Button>
      </div>
    </div>
  );
}

export default LandingPage;
