
import React, { useState } from "react";
//import './index.css'
//import'./App.css';

const ForgottenPassword = () => {
  const [email, setEmail] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
  };

  return (
    <div className ='bg-white-50 flex flex-col justify-center'>
      <form className='max-w-[600px] w-full mx-auto bg-white p-4 flex flex-col justify-center'  onSubmit={handleSubmit}>
        <h1 className='text-1xl font-bold text-center py-1'> Forget Password</h1>
        <div className='flex flex-col py-1'>
          <input className= 'border rounded-md p-1 m-1'
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />

        </div>

        <button type="submit" className='login-button' >
          Submit
        </button>

      </form>
    </div>
  );
};

export default ForgottenPassword;
