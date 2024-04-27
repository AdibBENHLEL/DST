import "./Formulaire.css";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Formulaire(props) {
  const form = useRef();
  const [emailValid, setEmailValid] = useState(true); // State to manage email validation
  const [emailValue, setEmailValue] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    if (!emailValid) {
      // If email is not valid, don't send the email
      return;
    }

    emailjs
      .sendForm('service_6cuy05e', 'template_ljp1qc9', form.current, {
        publicKey: 'xkeLA1hqjqr5xmjCb',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  }

  const handleBlur = () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // Check if the email matches the pattern and affecter le résultat True or False in EmailValid variable
    setEmailValid(emailPattern.test(emailValue));
  }

  const handleChange = (e) => {
    setEmailValue(e.target.value);/*affectation de valeur d'email in EmailValue*/
  }

  return (
    <>
      <form id="form_contact_frame" ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" required />
        <label>Email</label>
        <input
          type="email"
          name="user_email"
          onBlur={handleBlur}
          onChange={handleChange} // Update the email value as the user types
          required
        />
        {/* Conditional rendering to show validation message */}
        {emailValue && ( // Check if emailValue is not empty
  <div id="emailMessage_verification">
    {!emailValid ? (
      <span style={{ color: 'red' }}>Email invalide. Veuillez entrer une adresse e-mail valide au format nom@example.com</span>
    ) : (
      <span style={{ color: 'green' }}>Email valide</span>
    )}
  </div>
)}

        <label>Message</label>
        <textarea name="message" required/>
        <label class="RQ_please_label">Please, make sure that your email is correct.</label>
        <input type="submit" value="Send" />
        <label class="RQ_please_label">We will respond to your message via email very soon.</label>
      </form>
    </>
  )
}

export default Formulaire;
