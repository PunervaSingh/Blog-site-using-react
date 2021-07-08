import React, { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try{
            const res = await axios.post("/auth/register", {
                username,
                email,
                password,
            });
            res.data && window.location.replace("/login");
        }catch(err){
            setError(true);
        } 
    };

    return (
        <div className="register">
            <div className="registerContainer">
                <div className="rc1">
                <span className="registerTitle">Register</span>
                <form className="registerForm" onSubmit={handleSubmit}>
                    <label >Username</label>
                    <input 
                    type="text" 
                    className="registerInput" 
                    placeholder="Enter your username..."
                    onChange={e=>setUsername(e.target.value)}
                    />
                    <label >Email</label>
                    <input 
                    type="text" 
                    className="registerInput" 
                    placeholder="Enter your email..."
                    onChange={e=>setEmail(e.target.value)}
                    />
                    <label >Password</label>
                    <input 
                    type="password" 
                    className="registerInput" 
                    placeholder="Enter your password..."
                    onChange={e=>setPassword(e.target.value)}
                    />
                    <button className="registerButton" type="submit">Register</button>
                </form>
                <button className="registerLoginButton"><Link className="link" to="/login">Login</Link></button>
                {error && <span style={{color:"red",paddingTop:"10px"}}>Something went wrong!</span>}
            </div>
            <div className="rc2">
                    <img className="rcImg" src="https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                </div>
            </div>
        </div>
    );
}