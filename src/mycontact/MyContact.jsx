import React from 'react'
import { useState } from 'react'
import ContactInfo from './ContactInfo'
import ContactUs from './ContactUs'
export default function MyContact() {
    const [contactInfo, setContactInfo] = useState({
        name: "",
        email: "",
        phone: 0,
        message: "",
    })
    const getContactInfo = (contactInfo) => {
        setContactInfo(contactInfo);
    }
  return (
    <div>
        <ContactInfo contactInfo={contactInfo} />
        <hr />
        <ContactUs contactInfo={contactInfo} getContactInfo={getContactInfo}/>
    </div>
  )
}
