import React, { useRef, useContext, useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import axios from "axios";


export default function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);
    const [optionsActive,setOptionsActive] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type:"LOGIN_START"});
        try{
            const res = await axios.post("/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            });
            dispatch({ type:"LOGIN_SUCCESS", payload: res.data });
        } catch (err) {
            dispatch({ type:"LOGIN_FAILURE" });
        }
    };

    return (
        <div className="login">
            <div className="loginContainer">
                <div className="lc1">
                    <img className="lcImg" src="https://images.pexels.com/photos/931162/pexels-photo-931162.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                </div>
                <div className="lc2">
            <span className="loginTitle">Login</span>
            {optionsActive ? 
                <div className="sign-in-options">
                    <button className="sign-in-button">
                        <div className="option-btn-icon"><i class="loginicon fab fa-google-plus-square"></i></div>
                        <div className="option-btn-text">Sign in with Google</div>
                    </button>
                    <button className="sign-in-button">
                        <div className="option-btn-icon"><i class="loginicon fab fa-github-square"></i></div>
                        <div className="option-btn-text">Sign in with Github</div>
                    </button>
                    <button className="sign-in-button">
                        <div className="option-btn-icon"><i className="loginicon fab fa-facebook-square"></i></div>
                        <div className="option-btn-text">Sign in with Facebook</div>
                    </button>
                    <p className="link" style={{textAlign:"center",marginTop:"20px"}} onClick={()=> {setOptionsActive(!optionsActive)}}>Back to Login</p>
                </div>
                :
                <div className="formLogin">
                    <form className="loginForm" onSubmit={handleSubmit}> 
                        <label >Username</label>
                        <input 
                        type="text" 
                        className="loginInput" 
                        placeholder="Enter your username..."
                        ref={userRef}
                        />
                        <label >Password</label>
                        <input 
                        type="password" 
                        className="loginInput" 
                        placeholder="Enter your password..."
                        ref={passwordRef}
                        />
                        <Link className="link" style={{textAlign:"right",margin:"10px 0"}}to="/forgot">Forgot Password!</Link>
                        <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
                        
                        <p className="link" style={{textAlign:"center"}} onClick={()=> {setOptionsActive(!optionsActive)}}>Other Login Options</p>
                    </form>
                    </div>
                    }
                    <button className="loginRegisterButton">
                        <Link className="link" to="/register">Register</Link></button>
                </div>
            </div>
        </div>
    );
}