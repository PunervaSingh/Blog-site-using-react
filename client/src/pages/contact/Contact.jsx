import React,{ useState } from "react";
import "./contact.css";
// import { Link } from "react-router-dom";
import axios from "axios";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        // e.preventDefault();
        setError(false);
        try{
            const res = await axios.post("/contacts/contact", {
                name,
                email,
                message,
            });
            res.data();
        }catch(err){
            setError(true);
        } 
    };

    return (
        <div className="contact">
            <div className="cc1">
                <span className="contactTitle">Contact Us</span>
                        <form className="contactForm" onSubmit={handleSubmit}>
                            <label className="contactLabel">Name</label>
                            <input 
                            type="text" 
                            className="contactInput" 
                            placeholder="Enter your name..."
                            onChange={(e)=>setName(e.target.value)}
                            />
                            <label className="contactLabel">Email</label>
                            <input 
                            type="text" 
                            className="contactInput" 
                            placeholder="Enter your email..."
                            onChange={(e)=>setEmail(e.target.value)}
                            />
                            <label className="contactLabel">Message</label>
                            <input 
                            type="text" 
                            className="contactInput" 
                            placeholder="Enter your message..."
                            onChange={(e)=>setMessage(e.target.value)}
                            />
                            <button className="contactButton" type="submit" >Submit</button>
                        </form>
                    <div className="cfc2">
                        
                        <ul className="contact-list">
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