
import React, { useState } from "react";
//import './index.css'
//import'./App.css';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remindMe, setRemindMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remind me:", remindMe);
  };

  return (
    <div className ='bg-white-50 flex flex-col justify-center'>
      <form className='max-w-[600px] w-full mx-auto bg-white p-4 flex flex-col justify-center'  onSubmit={handleSubmit}>
        <h1 className='text-1xl font-bold text-center py-1'>Reset Password</h1>
        <div className='flex flex-col py-1'>
          <input className= 'border rounded-md p-1 m-1'
            type="new password"
            placeholder="New Password"
            value={email}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <p className="character text-xs"> At least 6 characters</p>
        </div>
        <div className= 'flex flex-col py-1'>
          <input className='border rounded-md p-1 m-1'
            type="confirm password"
            placeholder="Confirm Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required />
            </div>

        <button type="submit" className='login-button' >
          Submit
        </button>

      </form>
    </div>
  );
};

export default ForgotPasswordForm;
