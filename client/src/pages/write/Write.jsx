import React, { useState, useContext } from "react";
import "./write.css";
import axios from "axios";
import {Context} from "../../context/Context";

export default function Write(){
    const [title,setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const {user} = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            desc
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            try{
                await axios.post("/upload", data);
            }catch(err){ }
        }
        try{
            const res = await axios.post("/posts", newPost);
            window.location.replace("/post/"+ res.data._id);
        }catch (err) { }
        
    };

    return (
        <div className="write">
            {/* <div className="writeInstruction">
                <div className="wc1">
                    <img className="writeInstructionImg" src="https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                </div>
                <div className="wc2">
                    <h1>Instructions:</h1>
                    <p>To be able to publish a blog, follow the steps given below:-</p>
                    <ul>
                        <li>Click on plus sign given below to upload the picture for you blog.</li>
                        <li>Provide an appropriate title to your blog.</li>
                        <li>By click on "Tell your story", you will be able to write the body of your blog.</li>
                        <li>When you are satisfied by your content, you can click on the publish button to share your thought with other members of splog.</li>
                    </ul>
                    <p>If you clicked on publish button by mistake, or you are not satified by the content after publishing it, don't worry.. just follow the steps given below.</p>
                    <ul>
                        <li>You can go to the published blog and click on the edit button given on top right corner. Make changes and click on the update button to permanentize your work.</li>
                        <li>If you do not wish that to be published then you can delete the blog by clicking on the delete button given next to edit button.</li>
                    </ul>
                </div> 
            </div> */}
            {file && (
                <img 
                    className="writeImg"
                    src={URL.createObjectURL(file)}
                    alt="" 
                />
            )}
            <form className="writeForm" onSubmit={handleSubmit}>
            <pre>
                <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                </label>
                <div className="writeFormGroup">
                    <input type="file" id="fileInput" style={{display:"none"}}
                    onChange = {(e) => setFile(e.target.files[0])}
                    />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}
                    onChange = {(e) => setTitle(e.target.value)}
                    />
                </div>
                    <div className="writeFormGroup">
                    
                    <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"
                    onChange = {(e) => setDesc(e.target.value)}
                    ></textarea>
                
                </div>
                <button className="writeSubmit" type="submit">Publish</button>
                </pre>
            </form>
        </div>
    );
}