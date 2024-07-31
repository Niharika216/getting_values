import React, { useRef } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  let firstName = useRef();
  let lastName = useRef();
  let selectState = useRef();
  let paraRef = useRef();
  let femaleRef = useRef();
  let maleRef = useRef();
  let selectedGender;
  let selectedMS;
  // let salutation="";

  let onCreateAccount = () => {
    if (selectState.current.value == "Select State") {
      alert("please select your state");
    } 
    else {
      let salutation ="";

      if (selectedGender == "Male") {
        salutation = "Mr. ";
      }
      if (selectedGender == "Female") {
        if (selectedMS == "Single") {
          salutation = "Miss. ";
        } else {
          salutation = "Mrs. ";
        }
      }

      paraRef.current.innerHTML = `${salutation} ${firstName.current.value} ${lastName.current.value} from ${selectState.current.value},your account has been created. Now please login`;
    }
  };

  return (
    <div className="App">
      <form>
        <div>
          <h1>SignUp</h1>
        </div>
        <div>
          <label>First Name</label>
          <input ref={firstName}></input>
        </div>
        <div>
          <label>Last Name</label>
          <input ref={lastName}></input>
        </div>
        <div>
          <label>Phone Number</label>
          <input type="number"></input>
        </div>
        <div>
          <label>Email Address</label>
          <input type="email"></input>
        </div>
        <div>
          <label>Gender</label>
          <input
            type="radio"
            name="gender"
            ref={maleRef}
            onChange={() => {
              if (maleRef.current.checked == true) {
                selectedGender = "Male";
              }
            }}
          ></input>
          <label style={{ width: "auto" }}>Male</label>
          <input
            type="radio"
            name="gender"
            ref={femaleRef}
            onChange={() => {
              if (femaleRef.current.checked == true) {
                selectedGender = "Female";
              }
            }}
          ></input>
          <label style={{ width: "auto" }}>Female</label>
        </div>
        <div>
          <label>Marital Status</label>
          <input
            type="radio"
            name="ms"
            onChange={(eventObj) => {
              if (eventObj.target.checked == "true") {
                selectedMS = "Single";
              }
            }}
          ></input>
          <label style={{ width: "auto" }}>Single</label>
          <input
            type="radio"
            name="ms"
            onChange={(eventObj) => {
              if (eventObj.target.checked == "true") {
                selectedMS = "Married";
              }
            }}
          ></input>
          <label style={{ width: "auto" }}>Married</label>
        </div>
        <div>
          <label>State</label>
          <select ref={selectState}>
            <option>Select State</option>
            <option>Andhra Pradesh</option>
            <option>Arunachal Pradesh</option>
            <option>Assam</option>
            <option>Bihar</option>
            <option>Chhattisgarh</option>
            <option>Goa</option>
            <option>Gujarat</option>
            <option>Haryana</option>
            <option>Himachal Pradesh</option>
            <option>Jharkhand</option>
            <option>Karnataka</option>
          </select>
        </div>
        <div>
          <label>Full Name of Parent/Guardian</label>
          <input></input>
        </div>
        <div>
          <label>Relationship to Student</label>
          <input></input>
        </div>
        <div>
          <label>Address</label>
          <textarea></textarea>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              onCreateAccount();
            }}
          >
            SignUp
          </button>
          <div>
          <p>
            if already have account<Link to="Login"><p>Login</p></Link>
          </p>
          </div>
        </div>
        <p ref={paraRef}></p>
      </form>
    </div>
  );
}

export default SignUp;
