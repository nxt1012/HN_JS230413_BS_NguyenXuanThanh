import React from 'react'

export default function ContactInfo({contactInfo}) {
  return (
    <div>
      <h2>Contact Info</h2>
      <label htmlFor="name">Name</label>
      <input value={contactInfo.name === "" ? "?" : contactInfo.name} type="text" /> <br />
      <label htmlFor="email">Email</label>
      <input value={contactInfo.email === "" ? "?" : contactInfo.email} type="text" /> <br />
      <label htmlFor="phoneNumber">Phone Number</label>
      <input value={contactInfo.phone === 0 ? "?" : contactInfo.phone} type="text" /> <br />
      <label htmlFor="message">Message</label>
      <input value={contactInfo.message === "" ? "?" : contactInfo.message} type="text" />
    </div>
  )
}
