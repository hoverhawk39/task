import React, { useState } from "react";
import "./InputForm.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const InputForm = () => {
  const [first, setFirst] = useState([""]);
  const [last, setLast] = useState([""]);
  const [email, setMail] = useState([""]);
  const [password, setPassword] = useState([""]);
  const [check, setCheck] = useState(false);
  function FirstNameChange(first) {
    setFirst(first.target.value);
  }
  function LastNameChange(last) {
    setLast(last.target.value);
  }
  function EmailChange(email) {
    setMail(email.target.value);
  }
  function PasswordChange(pass) {
    setPassword(pass.target.value);
  }
  function CheckChange(check) {
    setCheck(!check);
  }
  return (
    <div className="FormBlock">
      <div className="FormBlock__line1">
        <div className="FormBlock__line1__fbox">
          <input
            className="FormBlock__line1__fbox__fname"
            type="text"
            id="FirstName"
            value={first}
            onChange={FirstNameChange}
            required
          />
          <label className="FormBlock__line1__fbox__flabel" htmlFor="FirstName">
            First Name
          </label>
        </div>
        <div className="FormBlock__line1__lbox">
          <input
            className="FormBlock__line1__lbox__lname"
            type="text"
            id="LastName"
            value={last}
            onChange={LastNameChange}
            required
          />
          <label className="FormBlock__line1__lbox__llabel" htmlFor="LastName">
            Last Name
          </label>
        </div>
      </div>
      <div className="FormBlock__line2">
        <div className="FormBlock__line2__ebox">
          <input
            className="FormBlock__line2__ebox__email"
            type="text"
            id="Email"
            value={email}
            onChange={EmailChange}
            required
          />
          <label className="FormBlock__line2__ebox__elabel" htmlFor="Email">
            E-mail
          </label>
        </div>
      </div>
      <div className="FormBlock__line3">
        <div className="FormBlock__line3__pbox">
          <input
            className="FormBlock__line3__pbox__password"
            type="password"
            id="Password"
            value={password}
            onChange={PasswordChange}
            required
          />
          <label className="FormBlock__line3__pbox__plabel" htmlFor="Password">
            Password
          </label>
        </div>
      </div>
      <div className="FormBlock__line4">
        <div className="FormBlock__line4__sign1">
          <CheckCircleIcon style={{ fontSize: "11px" }} />
          <div className="FormBlock__line4__sign1__word">8 Characters min.</div>
        </div>
        <div className="FormBlock__line4__sign2">
          <CheckCircleIcon style={{ fontSize: "11px" }} />
          <div className="FormBlock__line4__sign2__word">One number</div>
        </div>
      </div>
      <div className="FormBlock__line5">
        <div className="FormBlock__line5__box">
          <label className="FormBlock__line5__box__check" htmlFor="check">
            <input
              className="FormBlock__line5__box__check__input"
              type="checkbox"
              id="check"
              defaultChecked={check}
              onChange={CheckChange}
            />
            <span className="FormBlock__line5__box__check__span"></span>
          </label>
          <div className="FormBlock__line5__box__word">
            By creating account, you agree to accept our Privacy Policy, Terms
            of Service and Notification settings.
          </div>
        </div>
      </div>
      <div className="FormBlock__line6">
        <div className="FormBlock__line6__box">
          <input
            className="FormBlock__line6__box__button"
            type="button"
            value="Create an Free Account!"
          />
        </div>
      </div>
      <div className="FormBlock__line7">
        <div className="FormBlock__line7__box">
          Already have an account?{" "}
          <span className="FormBlock__line7__box__span">Log in</span>
        </div>
      </div>
    </div>
  );
};

export default InputForm;
