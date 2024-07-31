import React from "react";
import { Link } from "react-router-dom";

function Application() {
  return (
    <div className="Color">
        <div>
            <Link to="/Application/Dashboard"><button>Back</button></Link>
        </div>
        <div className="App">
            <h1>Application form</h1>
        </div>
      <form className="AppForm">
        <fieldset>
          <legend>Personal Details</legend>
          <div>
            <label>First Name</label>
            <input type="text"></input>
            <label>Last Name</label>
            <input type="text"></input>
          </div>
          <div>
            <label>Email</label>
            <input type="email"></input>
          </div>
          <div>
            <label for="gender">Gender</label>
            <select name="" id="gender">
              <option>Male</option>
              <option>Female</option>
              <option>Not To Say</option>
            </select>
          </div>
          <div>
            <label></label>
            <input type="text"></input>
          </div>
          <div>
            <label>Address</label>
            <textarea></textarea>
          </div>
          <div>
            <label>Phone Number</label>
            <input type="number"></input>
          </div>
          <div>
            <label>Parent/Guardian Name:</label>
            <input type="text"></input>
          </div>
          <div>
            <label>Parent/Guardian Contact Number:</label>
            <input type="number"></input>
          </div>
        </fieldset>
        <fieldset>
          <legend>Academic Information</legend>
          <div>
            <label>Current School Name:</label>
            <input type="text"></input>
          </div>
          <div>
            <label>Current Grade Level:</label>
            <input type="text"></input>
          </div>
          <div>
            <label>Previous Schools Attended (if applicable)</label>
            <label>School Name:</label>
            <input type="text"></input>
            <label>Grade Levels Attended:</label>
            <input type="number"></input>
          </div>
        </fieldset>
        <fieldset>
          <legend>Course Information</legend>
          <div>
            <label>Applying For Grade</label>
            <input type="text"></input>
          </div>
          <div>
            <label>Program of Interest </label>
            <input type="text"></input>
          </div>
        </fieldset>
        <fieldset>
          <legend>Declaration</legend>
          <p>
            I hereby declare that the information provided in this application
            is true and accurate to the best of my knowledge.
          </p>
          <div>
            <label>Applicant's Signature:</label>
            <input type="text"></input>
            <label>Date</label>
            <input type="date"></input>
          </div>
          <div>
            <label>Parent/Guardian's Signature: </label>
            <input type="text"></input>
            <label>Date</label>
            <input type="date"></input>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default Application;
