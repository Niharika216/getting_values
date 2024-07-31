import React from "react";

function ForgotPassword() {
  return (
    <div className="App">
      <form>
        <div>
          <h2>Forgotten Password</h2>
        </div>
        <div>
          <label>Mobile Number/Email</label>
          <input></input>
        </div>
        <button>Send Otp</button>
      </form>
    </div>
  );
}

export default ForgotPassword;
