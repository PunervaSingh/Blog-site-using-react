import React from "react";
import "./about.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function About(){
    return (
        <div className="about">
            <div className="aboutWrapper">
                <h1 className="aboutUpdateTitle">About Splog</h1>
                <p className="aboutIntroPara">
                    Splog is a blog site where you can share your thoughts, ideas, experiences and anything that crosses your mind which you want to share with the world. 
                    You can use this app as your diary or memoryBook. Share your best adventures, recommend book that you recently read, rate the movie or online webseries that you saw, recepies of your favourite dishes, or anything that you feel should be shared with others is appreciated on the splog community.
                    <br />
                    <br />
                    <b>NOTE: You are free to write anything until it is sociably acceptable. If your content is found to be inappropriate then strict actions will be taken.</b>
                </p>
                
                <div className="founderContainer">
                    <h2 className="aboutFounderTitle">About the Founder/Creator of Splog</h2>
                    <div className="fc1">
                        <img className="founderImg" src="https://media-exp3.licdn.com/dms/image/C4E03AQH3G82VQx6xBA/profile-displayphoto-shrink_400_400/0/1621161333060?e=1631145600&v=beta&t=WiDEe_02t87G9fS-0pmYz3qkdAR0YSV-xSCOdNaBqd4" alt="" />
                        <p className="founderPara">
                            Hey Guyzz...Whats up! I hope you all are well and enjoying yourself while sharing your life experiences through slogs with other members. 
                            <br />
                            If you are a new member of splog then I hope you will love this app as you become used to it after some time. A guide is provided below for you, check it as it will be helpful to you definitely.
                            <br />
                            Let me Introduce myself first...
                            <br />
                            I am Punerva, founder/creator of splog.
                            <br />
                            I made this site with a lot of love 💜 so that you guyz can enjoy it thouroughly.
                            <br/>
                            I am Indian and currently {new Date().getFullYear()-2002} years old.
                            <br /> 
                            I am an undergraduate from Indira Gandhi Delhi Technical University for Women pursuing my Bachelor of technology degree in Computer Science and Artificial Intelligence. 
                            <br />
                            Yes.. AI but it is more than robots (trust me😌) and for those who know about it my interest is in machine learning aspect of it. 
                            <br />
                        </p>
                    </div>
                    <p style={{letterSpacing:"1px",lineHeight:"20px"}}>
                            Along with it I also enjoy Web development immensely and create sites just like the one you are currently on.
                            <br />
                            I aim to develop environment friendly technology that will help humans to live their life with more comfort and take care of the environment.
                            <br />
                            In my free time I love to dance, sing, cook, read book, paint, sketch and the one thing which I love to do the most is sleep. But I rarely get free time...
                            <br />
                            It's okay I guess as APJ Abdul Kalam once said "Man needs difficulties in life because they are necessary to enjoy the success".
                            <br />
                            With that said I will leave you guyz to enjoy splog and don't forget to share this site with other people around you.
                    </p>
                </div>

                <div className="splogGuideContainer">
                    <h2 className="aboutFounderTitle">A Small Guide to Splog</h2>
                    <div className="guideList">
                    <ol>
                        <li>On the home you will be able to see all the blogs. By clicking on the totle of blog, you can open it and check the author as well as the date of posting that blog.</li>
                        <br />
                        <li>To be able to write your own blog you will have to register first and then login using the username and password that you provided while registering.</li>
                        <br />
                        <li>In about section you will be able to see the founder and the guide of splog.</li>
                        <br />
                        <li>To write your blog, go to write section, there you will be able to provide a photo for your blog by clicking on the plus sign. After uploading the pic, you can write the title and the body of your blog. By clicking on the publish button, you will be able to post your blog on the site where other members can read and appreciate it.</li>
                        <br />
                        <li>You can also edit or delete your post by clicking on the title and then clicking on the required buttons provided on the top right corner. 
                            <br /><b>Note:</b> You won't be able to edit or delete other member's blog. </li>
                        <br />
                        <li>You can change your profile pic/Username/password/email by clicking on your current profile pic on the navbar. When you click Update after changing the necessary detail, they will be updated and a message will appear which says"Account has been updated". If the message does not show up then there is some problem, in that case you can contact us.</li>
                        <br />
                        <li>To contact us you can go to the contact page and specify your problem, we will look into it and try to solve it as soon as possible.</li>
                        {/* <li>Sidebar provided on all the pages ( except write ) will display your details along with the link to your social media links which </li> */}
                        <br />
                        <li>You can logout of your account by simply clicking on the logout option provided in the navbar.</li>
                    </ol>
                    </div>
                </div>
            </div>
            <Sidebar />
        </div>
    );
}