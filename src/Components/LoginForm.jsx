import React, { useState } from "react";
//import './index.css'
//import'./App.css';

const LoginForm = () => {
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
        <h1 className='text-1xl font-bold text-center py-1'>Log into your account</h1>
        <div className='flex flex-col py-1'>
          <input className= 'border rounded-md p-1 m-1'
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className= 'flex flex-col py-1'>
          <input className='border rounded-md p-1 m-1'
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required />
            </div>
  
      
      <div className = 'checkbox text-xs'>
        <input className ='small-checkbox' type='checkbox' name='' checked={remindMe}
                onChange={(e) => setRemindMe(e.target.checked)}
              />{" "} 
        <label> Remember me</label>

          <a href="#"> forgot password?</a>
  
      </div>

        <button type="submit" className="login-button">
          Login
        </button>
        <div
          style={{ display: "flex", alignItems: "center", margin: "20px 0" }}
        >
          <hr style={{ flexGrow: 1 }} />
          <span style={{ padding: "0 10px" }}>OR</span>
          <hr style={{ flexGrow: 1 }} />
        </div>
        <button type="button" className="google-button">
          <img
            src="https://img.icons8.com/color/16/000000/google-logo.png"
            alt="Google logo"
          />
          Continue with Google
        </button>
        <button type="button" className="facebook-button">
          <img
            src="https://img.icons8.com/ios-filled/16/0078FF/facebook-new.png"
            alt="Facebook logo"
          />
          Continue with Facebook
        </button>
        <div className="signup-link">
          <lable>Don't have an account?</lable> <span><a href="#"> Sign up</a></span> 
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
