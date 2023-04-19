import React from "react";
import "./Quick_SignUp.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { GoogleBtn, FacebookBtn } from "./SignUp_Btn";

const Quick_SignUp = () => {
  return (
    <div className="SignBlock">
      <div className="SignBlock__item1">
        <div className="SignBlock__item1__box">
          <KeyboardBackspaceIcon
            style={{ fontSize: "14px", color: "#000000", fontWeight: "900" }}
          />
          <div className="SignBlock__item1__word">Back</div>
        </div>
      </div>
      <div className="SignBlock__item2">Start from free</div>
      <div className="SignBlock__item3">Create an account</div>
      <div className="SignBlock__item4">
        <GoogleBtn />
        <FacebookBtn />
      </div>
      <div className="SignBlock__item5">
        <div>Or use your email for registration</div>
        <div className="SignBlock__item5__line">
          <hr className="SignBlock__item5__line__hr" />
        </div>
      </div>
    </div>
  );
};

export default Quick_SignUp;
