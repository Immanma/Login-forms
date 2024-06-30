import React, { useState } from "react";
//import './index.css'
//import'./App.css';

const ContactUs = () => {
    const [fullName, setfullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
   
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("fulltName:", fullName);
    console.log("Email:", email);
    console.log("PhoneNumber:", phoneNumber);
    
  };

  return (
       <div className ='bg-white-50 flex flex-col justify-center'>
      <form className='max-w-[600px] w-full mx-auto bg-white p-4 flex flex-col justify-center'  onSubmit={handleSubmit}>
        <h1 className='text-1xl font-bold text-center py-1'>Contact Us</h1>
        <p>Fill up the form below o send us a message</p>

        <div className='flex flex-col py-1'>
          <input className= 'border rounded-md p-1 m-1'
            type="fullName"
            placeholder="Full Name"
            value={fulltName}
            onChange={(e) => setfulltName(e.target.value)}
            required
          />
            </div>

        <div className='flex flex-col py-1'>
          <input className= 'border rounded-md p-1 m-1'
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className= 'flex flex-col py-1'>
          <input className='border rounded-md p-1 m-1'
            type="phoneNumber"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setphoneNumber(e.target.value)}
            required />
            </div>

            <div className= 'flex flex-col py-1'>
          <input className='border rounded-md p-10 m-1'
            type="yourmessage"
            placeholder="Your Message"
            value={phoneNumber}
            onChange={(e) => setmessage(e.target.value)}
            required />
            </div>

        <button type="submit" className="send-button">
          Send Message
        </button>
      </form>
    </div>
);

};


export default ContactUs;
