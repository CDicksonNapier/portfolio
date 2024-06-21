import React from "react";
import "./about.scss";
import ME from "../../assets/images/profilePic1.jpg";

import CV from "../../assets/CV/ChrisDicksonCV.pdf";
import { FaHtml5, FaPython, FaPhp, FaReact,FaSass, FaFigma      } from "react-icons/fa";
import { MdCss, MdJavascript } from "react-icons/md";
import { SiAdobephotoshop, SiAdobeillustrator,SiBlender,SiUnrealengine    } from "react-icons/si";




const About = () => {
  return (
    <>
      <div>
        <div className="container__about">
          <div className="text__container">
            <h1>All about me!</h1>
            <p>
              Thanks for visiting my portfolio! I have recently graduated from
              Edinburgh Napier University with a 2:1 in Web Design and
              development. I have a passion for creating websites and
              applications that are both visually appealing and functional. I am
              always looking to learn new technologies and improve my skills. I
              am currently looking for a role in web development to further my
              career. I am proficient in HTML, CSS, JavaScript, React, and
              Node.js. I am a creative thinker who is always looking for new and
              innovative ways to solve problems. I am a quick learner who is
              always looking to improve and learn new skills. I am a creative
              thinker who is always looking for new and innovative ways to solve
              problems. When i am not tinkering with code you can usually find
              me creating 3D landscapes in Blender, or creating digital designs
              in Photoshop. I am always looking for new ways to express my
              creativity and learn new skills.
            </p>
            <div className="buttons__container">
              <button className="cv-btn">
                <a href={CV} target="__blank">My CV</a>
                </button>
              <button className="contact-btn"><a href="../contact">Lets Connect</a></button>
            </div>
           
          </div>
          <div className="img-block">
            <img src={ME} alt="ProfilePic" />
          </div>
        </div>   
         <div className="skills__container">
            
            <h2>Frequently used tools</h2>
            <div className="skills__icons">
                <FaHtml5 className="icon" />
                <MdCss className="icon" />
                <MdJavascript className="icon" />
                <FaPython className="icon" />
                <FaPhp className="icon" />
                <FaReact className="icon" />
                <FaSass className="icon" />
                <SiAdobephotoshop className="icon" />
                <SiAdobeillustrator className="icon" />
                <FaFigma className="icon" />
                <SiBlender className="icon" />
                <SiUnrealengine className="icon" />


                
            </div>
         </div>

      </div>
  
    </>
  );
};

export default About;
