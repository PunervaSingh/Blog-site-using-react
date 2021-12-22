import React, { useContext, useEffect, useState } from "react";
import "./profile.css";
import { Context } from "../../context/Context";
import Posts from "../../components/posts/Posts";
import { Link } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router";

export default function Contact() {
    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/";
    const [posts,setPosts] = useState([]);
    const {search} = useLocation(); 

    useEffect(()=>{
        const fetchPosts = async ()=>{
            const res = await axios.get("/posts/?user="+user.username);
            setPosts(res.data);
        };
        fetchPosts();
    },[search]);

    return(
        <div className="profilepage">
            {user ? (
            <div>
                <div className="profileContainer1">
            <img className="profileBgImg" src="https://images.pexels.com/photos/167692/pexels-photo-167692.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
            
            <img 
                className="profilePPImg"
                src={PF+user.profilePic}
                alt="" 
            />            
            <div className="mediaAndFollowers">
                <div className="profileSocial">
                    <i className="profileIcon fab fa-facebook-square"></i>
                    <i className="profileIcon fab fa-twitter-square"></i>
                    <i className="profileIcon fab fa-instagram-square"></i>
                    <i className="profileIcon fab fa-pinterest-square"></i>
                </div>
                <div className="emptySpace">

                </div>
                <div className="ProfileFollowers" style={{fontSize:"20px"}}>
                    <div className="pfContent">
                        <div className="count">1.7K </div>
                        Followers 
                    </div>
                    <div className="pfContent">
                    <div className="count">2.3K </div>
                        Likes
                    </div>
                    <div className="pfContent">
                    <div className="count">343 </div>
                        Posts
                    </div>
                </div>
            </div>
            <div className="profileContent">
                <h1>{user.username}</h1>
                <p>Some text about you here...(description)</p>
            </div>
            <div className="profileButton">
            {user ? (
                <Link to="/settings"><button className="profilePageButton">UPDATE PROFILE</button></Link>
            ):(
                <button className="profilePageButton">FOLLOW</button>
            )}
            </div>
            </div>
            
            <div className="profilePostInfo">
            <hr style={{width:"83%",marginLeft:"130px"}}/>
                <h1 class="profilePostTitle"><span>Posts By {user.username}</span></h1>
                <Posts posts={posts}/>
                
                {/* <span className="singlePostAuthor">
                    Author: 
                    <Link to={`/?user=${post.username}`} className="link">
                    <b>{post.username}</b>
                    </Link>
                </span> */}
            </div> 
            </div>
            ):(
               <p> YOU ARE NOT LOGGED IN</p>
            )}
        </div>
    );
}