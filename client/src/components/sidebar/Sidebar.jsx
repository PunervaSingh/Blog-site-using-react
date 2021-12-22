import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function Sidebar() {
    const { user } = useContext(Context);
    const PF = "http://localhost:5000/images/";
    const [cats, setCats] = useState([]);

    useEffect(()=>{
        const getCats = async () =>{
            const res = await axios.get("/categories");
            setCats(res.data);
        };
        getCats();
    },[]);
    return (
        <div className="sidebar">
            
            {/* {user ?(<h3 class="sidebarTitle"><span>USERNAME</span></h3>
                <img className="sidebarImg" src={PF+user.profilePic}  alt="" />
                <p>Some text about you here...(description) </p>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                </div>
                <p>❤️ ___ Followers on Splog</p>
            
                ):(<h3 class="sidebarTitle"><span>USERNAME</span></h3>
                <img className="sidebarImg" src={PF+user.profilePic}  alt="" />
                <p>Some text about you here...(description) </p>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                </div>
                <p>❤️ ___ Followers on Splog</p>)
            } */}
            {user ? (
                    <div className="sidebarItem">
                        <h3 class="sidebarTitle"><span>{user.username}</span></h3>
                        <Link to="/profile"><img className="sidebarImg" src={PF+user.profilePic}  alt="" /></Link>
                        <p>Some text about you here...(description) </p>
                        <div className="sidebarSocial">
                            <i className="profileIcon fab fa-facebook-square"></i>
                            <i className="profileIcon fab fa-twitter-square"></i>
                            <i className="profileIcon fab fa-instagram-square"></i>
                            <i className="profileIcon fab fa-pinterest-square"></i>
                        </div>
                        <p>❤️ ___ Followers on Splog</p>
                    </div> 
                    ) 
                    : (
                        <div className="sidebarItem">
                            <h3 class="sidebarTitle"><span>USERNAME</span></h3>
                            <img className="sidebarImg" src="https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                            <p>Some text about you here...(description) </p>
                            <div className="sidebarSocial">
                                <i className="sidebarIcon fab fa-facebook-square"></i>
                                <i className="sidebarIcon fab fa-twitter-square"></i>
                                <i className="sidebarIcon fab fa-instagram-square"></i>
                                <i className="sidebarIcon fab fa-pinterest-square"></i>
                            </div>
                            <p>❤️ ___ Followers on Splog</p>
                        </div>
                    )
                }
            <div className="sidebarItem">
            <h3 class="sidebarTitle"><span>SUBSCRIBE</span></h3>
                <p>Subscribe to this blog...</p>
                <input className="sidebarInput" type="text" placeholder="Email Address"/>
                <button className="sidebarButton">SUBSCRIBE</button>
            </div>

            <div className="sidebarItem">
            <h3 class="sidebarTitle"><span>POPULAR POSTS</span></h3>
                <ul className="sidebarPostList">
                    <li>
                        <a href="/" className="sidebarAnchor">
                            <div>
                                <img className="sidebarPostImg" src="https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                            </div>
                            <h4>This is the title of this post</h4>
                        </a>
                    </li>
                    <li>
                        <a href="/" className="sidebarAnchor">
                            <div>
                                <img className="sidebarPostImg" src="https://images.pexels.com/photos/2574488/pexels-photo-2574488.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                            </div>
                            <h4>This is the title of this post</h4>
                        </a>
                    </li>
                    <li>
                        <a href="/" className="sidebarAnchor">
                            <div>
                                <img className="sidebarPostImg" src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                            </div>
                            <h4>This is the title of this post</h4>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="sidebarItem">
            <h3 class="sidebarTitle"><span>INSTAGRAM</span></h3>
                <div className="instaSidebarItem">
                    <img className="sidebarInstaImg" src="https://images.pexels.com/photos/164455/pexels-photo-164455.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                    <img className="sidebarInstaImg" src="https://images.pexels.com/photos/4440123/pexels-photo-4440123.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                    <img className="sidebarInstaImg" src="https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                    <img className="sidebarInstaImg" src="https://images.pexels.com/photos/1579240/pexels-photo-1579240.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                </div>
            </div>

            <div className="sidebarItem">
            <h3 class="sidebarTitle"><span>CATEGORIES</span></h3>
                <ul className="sidebarList">
                    {cats.map((c) => (
                        <Link to={`/?cat=${c.name}`} className="link">
                        <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))} 
                </ul>
            </div>

            <div className="sidebarItem">
            <h3 class="sidebarTitle"><span>SEARCH</span></h3>
                <input className="sidebarInput" type="text" placeholder="Search"/>
            </div>
        </div>
    )
}