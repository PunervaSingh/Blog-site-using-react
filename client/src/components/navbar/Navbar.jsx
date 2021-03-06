import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { Context } from "../../context/Context";

export default function Navbar() {
    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/";

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
        window.location.replace("/");
    };
    return (
        <div className="top">
            <div className="topLeft">
            <p className="navbarSymbol">Splog</p>
            {/* <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>
            <i className="topIcon fab fa-pinterest-square"></i> */}
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/" >HOME</Link>
                    </li>
                    <li className="topListItem"><Link className="link" to="/about" >ABOUT</Link></li>
                    <li className="topListItem"><Link className="link" to="/contact" >CONTACT</Link></li>
                    <li className="topListItem"><Link className="link" to="/write" >WRITE</Link></li>
                    <li className="topListItem" onClick={handleLogout}>
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <Link to="/profile">
                    <img 
                        className="topImg" 
                        src={PF+user.profilePic} 
                        alt="" />
                    </Link>
                    ) : (
                        <ul className="topList">
                            <li className="topListItem">
                                <Link className="link" to="/login" >
                                    LOGIN
                                </Link>
                            </li>
                            <li className="topListItem">
                                <Link className="link" to="/register" >
                                    REGISTER
                                </Link>
                            </li>
                        </ul>
                    )}
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}