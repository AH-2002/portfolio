import React, { useRef }from 'react';
import  { useState } from 'react';
import emailjs from '@emailjs/browser';
import BackgroundText from './BackgroundText';
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import './contact.css';
import FollowLinks from './followLinks';
import PersonalImg from './Personalimg';
function Contact(){
    
    const form = useRef();
    const [inputValue1, setNameValue] = useState('');
    const [inputValue2, setEmailValue] = useState('');
    const [inputValue3, setMessageValue] = useState('');
    const [error, setError] = useState('');

    
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        // Check if the input values are empty
        if (inputValue1 === '' || inputValue2 === '' || inputValue3 === '') {
          setError('Please fill out all fields');
          return;
        }
    
        // Reset error message
        setError('');
    
        // Send email
        emailjs
          .sendForm('service_4w3ueh5', 'template_xp0zu7e', form.current, '1qvqzqmDR8R7SzjsO')
          .then((result) => {
            console.log(result.text);
            // Display success message or perform other actions
            SuccessMsg();
          })
          .catch((error) => {
            console.log(error.text);
            // Optionally, show an error message to the user
            setError('Failed to send email. Please try again.');
          })
          .finally(() => {
            // Clear input values after 3 seconds
            setTimeout(() => {
              setNameValue('');
              setEmailValue('');
              setMessageValue('');
            }, 2000);
          });
      };
    // const sendEmail = (e) => {
    //     e.preventDefault();
        
    
    //     emailjs.sendForm('service20190349', 'template_i9n84q7', form.current, 'Ixjv3sCtCNaN9XWx3')
    //       .then((result) => {
    //         console.log(result.text);
    //       }, (error) => {
    //         console.log(error.text);
    //       });
    //     };

    
    
    
    
    const SuccessMsg = () => {
        var mainForm = document.getElementById("mainForm");
        var formTitle = document.getElementById("formTitle");
        var success = document.getElementById('successMsg');
        formTitle.style.visibility = 'hidden';
        formTitle.style.opacity = '0';
        mainForm.style.visibility = 'hidden';
        mainForm.style.opacity = '0';
        success.style.visibility = 'visible';
        success.style.opacity = '1'
    }
    return(
        <section className="contact" id='contact'>
            <div className='container'>
                <BackgroundText value1="Get In Touch" value2="CONTACT"/>
                <div className='contact-main row'>
                <div className='contact-info row'>
                    <div className='col-lg-3'>
                        <div className='contact-sub'>
                        
                            <h4 className='mb-4'>CONTACT:</h4>
                            <PersonalImg/>
                            
                            <div className='contact-numbers'>
                                <ul>
                                    <li><FaPhoneAlt className='contact-icon'/><a href='tel:+201124851405'>+201124851405</a></li>
                                    <li><FaEnvelope className='contact-icon'/><a href='mailto:xabdo608@gmail.com'>xabdo608@gmail.com</a></li>
                                </ul>
                            </div>
                            
                            <h4 className='mb-2'>
                                FOLLOW ME
                            </h4>
                            
                            <div className='follow-links'>
                                <FollowLinks class="linkedin" hover="LinkedIn" icon={<FaLinkedin/>} target="_blank" href="https://www.linkedin.com/in/abdelrahman-hamada-2a0a51248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"/>
                                <FollowLinks class="github" hover="Github" icon={<FaGithub/>} target="_blank" href="https://github.com/AH-2002"/>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-8'>
                        <div className='contact-form'>
                            <h4 className='mb-4' id='formTitle'>Send a note:</h4>
                            {error && <p style={{color: 'red'}}>{error}</p>}
                            <form class="main-form row" id='mainForm' ref={form} onSubmit={sendEmail}>

                                <div className="col-lg-6" id='name'>
                                    <input type="text" class="form-control" id='nameInput' placeholder="Name" name="from_name"
                                    value={inputValue1} 
                                    onChange={(e) => setNameValue(e.target.value)}  />
                                </div>
                                <div className="col-lg-6" id='email'>
                                    <input type="email" class="form-control" id='emailInput' placeholder="Email" name="from_email"
                                    value={inputValue2} 
                                    onChange={(e) => setEmailValue(e.target.value)}  />
                                </div>
                                <div className='col-lg-12' id='message'>
                                    <textarea placeholder='Tell us more about your needs.....' id='messageInput'  className='form-control' name="message"
                                    value={inputValue3} 
                                    onChange={(e) => setMessageValue(e.target.value)} ></textarea>
                                </div>
                                <div className='form-btn text-center'>
                                    <button type="submit">Send Message</button>
                                </div>
                            </form>
                            <div className='successMsg' id='successMsg'>
                                <h2>{<FaCheckCircle/>} Message has been sent successfully</h2>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            
        </section>
        
    );
}
export default Contact;