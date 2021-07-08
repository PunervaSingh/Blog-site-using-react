import React from "react";
import "./single.css";
// import Single from "../../components/sidebar/sidebar.jsx"
import SinglePost from "../../components/singlePost/SinglePost"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Single(){
    return (
        <div className="single">
            <SinglePost />
            <Sidebar />
        </div>
    )
}