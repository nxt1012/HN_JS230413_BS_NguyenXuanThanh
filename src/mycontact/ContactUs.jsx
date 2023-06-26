import React from "react";
import { useState } from "react";
export default function ContactUs({ contactInfo, getContactInfo }) {
  const [inputContact, setInputContact] = useState({ name: contactInfo.name, email: contactInfo.email, phone: contactInfo.phone, message: contactInfo.message });
  const [isValid, setIsValid] = useState({ 
    isValidName: true,
    isValidEmail: true,
    isValidPhoneNumber: true,
    isValidMessage: true,
   });
   
   const {validName, validEmail, validPhone, validMessage} = isValid

console.log(isValid.isValidName);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputContact({ ...inputContact, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validate();
    getContactInfo(inputContact);
  };
  let alertMessage = "";
  const validate = () => {
    if(inputContact.name === ""){
      setIsValid({...isValid, isValidName: false});
      alertMessage = "Not blank";
      console.log(isValid.isValidName)
    } 
  }
  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          value={inputContact.name === "" ? "" : inputContact.name}
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
        />
        {validName ? <p></p> : <p>{alertMessage}</p>}
        <br />
        <label htmlFor="email">Email</label>
        <input
          value={inputContact.email === "" ? "" : inputContact.email}
          type="text"
          id="email"
          name="email"
          onChange={handleChange}
        />
        {isValid.isValidEmail ? <p></p> : <p>{alertMessage}</p>}
        <br />
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          value={inputContact.phone === 0 ? "" : inputContact.phone}
          type="text"
          id="phoneNumber"
          name="phone"
          onChange={handleChange}
        />
        {isValid.isValidPhoneNumber ? <p></p> : <p>{alertMessage}</p>}
        <br />
        <label htmlFor="message">Message</label>
        <textarea
          value={inputContact.message === "" ? "" : inputContact.message}
          id="message"
          name="message"
          onChange={handleChange}
        >
          
        </textarea>
        {isValid.isValidMessage ? <p></p> : <p>{alertMessage}</p>}
        <button>Submit</button>
      </form>
    </div>
  );
}
