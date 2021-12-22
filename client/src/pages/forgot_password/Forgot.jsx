import React from "react";
import "./forgot.css";

export default function Forgot() {
    return(
        <div className="forgot">
            <div className="forgotContainer">
                <p className="forgotTitle">Reset Password</p>
                <span style={{marginTop:"20px"}}>A password reset link will be sent to the following email id</span>
                <div className="buttonContainer">
                    <input className="forgotInput" type="text" placeholder="Enter your email id"/>
                    <input className="forgotButton" type="submit" value="Send Password Reset Link"/>
                </div>
            </div>
        </div>
    );
}