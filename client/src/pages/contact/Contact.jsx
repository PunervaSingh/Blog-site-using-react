import React from "react";
import "./contact.css";
// import { Link } from "react-router-dom";

export default function Contact() {
    return (
        <div className="contact">
            <div className="cc1">
                <span className="contactTitle">Contact Us</span>
                        <form className="contactForm">
                            <label className="contactLabel">Name</label>
                            <input 
                            type="text" 
                            className="contactInput" 
                            placeholder="Enter your name..."
                            />
                            <label className="contactLabel">Email</label>
                            <input 
                            type="password" 
                            className="contactInput" 
                            placeholder="Enter your email..."
                            />
                            <label className="contactLabel">Message</label>
                            <input 
                            type="text" 
                            className="contactInput" 
                            placeholder="Enter your message..."
                            />
                            <button className="contactButton" type="submit" >Submit</button>
                        </form>
                    <div className="cfc2">
                        
                        <ul class="contact-list">
                            <p className="contactListText">Contact/ Follow us and meet other splog members through: </p>
                            <li className="contactListItem">
                                <span ><i className="contactIcon fas fa-envelope" /></span>
                                <a className="" href="/">splog@gmail.com</a>
                            </li>
                            <li className="contactListItem">
                                <span><i className="contactIcon fab fa-twitter" /></span>
                                <a className="" href="https://twitter.com/">Twitter</a>
                            </li>
                            <li className="contactListItem">
                                <span><i className="contactIcon fab fa-facebook-f" /></span>
                                <a className="" href="https://www.facebook.com/">Facebook</a>
                            </li>
                            <li className="contactListItem">
                                <span><i className="contactIcon fab fa-linkedin-in" /></span>
                                <a className="" href="https://www.linkedin.com">LinkedIn</a>
                            </li>
                            <li className="contactListItem">
                                <span><i className="contactIcon fab fa-instagram" /></span>
                                <a className="" href="https://www.instagram.com/">Instagram</a>
                            </li>
                        </ul>
                    </div>
            </div>
            <div className="cc2"></div>
        </div>
    );
}