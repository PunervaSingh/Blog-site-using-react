import React from "react";
import "./header.css"

export default function Header(){
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Small Personal Blog</span>
                <span className="headerTitleLg">Splog</span>
            </div>
            <img 
                className="headerImg"
                src="https://images.pexels.com/photos/1160500/pexels-photo-1160500.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt=""
            />
        </div>
    );
} 