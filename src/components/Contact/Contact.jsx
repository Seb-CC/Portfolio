import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "d503445b-7e06-41cb-8ad7-df0c9f38232e");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            alert("Email sent successfully!");
            event.target.reset(); // optional
        } else {
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <div id='contact' className='contact'>
            <div className="contactTitle">
                <h1>Get in Touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contactSection">
                <div className="contactLeft">
                    <h1>Let's talk </h1>
                    <p>Have a question or want to work together?</p>
                    <div className="contactDetails">
                        <div className="contactDetail">
                            <img src={mail_icon} alt="" /> <p>sebastian.coliba@outlook.com</p>
                        </div>
                        <div className="contactDetail">
                            <img src={call_icon} alt="" /> <p>98057435086</p>
                        </div>
                        <div className="contactDetail">
                            <img src={location_icon} alt="" /> <p>Cluj-Napoca, Romania</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contactRight">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter Your Name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter Your Email' name='email' />
                    <label htmlFor="">Write your message here...</label>
                    <textarea name="message" rows='8' placeholder='Enter your message'></textarea>
                    <button type="submit" className="contactSubmit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact