import React from "react";
import'./App.css'; // Import your styles
import './index.css'
import LoginForm from './Components/LoginForm';
import CreateAccountForm from "./Components/CreateAccountForm";
import ForgotPasswordForm from "./Components/ForgotPasswordForm";
import ForgottenPassword from "./Components/ForgottenPassword";
//import ContactUs from "./Components/ContactUs";

const App = () => {
  return (
    <div className="App">
      <LoginForm />
      <CreateAccountForm/>
      <ForgotPasswordForm/>
      <ForgottenPassword/>
    </div>
  );
};

export default App;

