import React, { useEffect, useRef } from "react";
import heroImg from "../Homepage/MyPicture.png";
import "../Homepage/Homepage.css";

function Homepage() {

  const handleClick = () => {
    window.location.href = "#contactHeading"; // Replace "https://example.com" with the URL you want to go to
  };

 
 

  return (
    <>

        <div id="mainContainer"> 
        <div id="leftDiv"></div>
        <div id="centerDiv">
          <div id="heading1">-Hello</div>
          <div id="heading2">I'm Husain</div>
          <div id="heading3">Full Stack Dev</div>
          <div id="heroImg">
            <img src={heroImg} />
          </div>
          <div id="btnContainer">
            <a class="btn" id="portfolioBtn" href="https://drive.google.com/file/d/17cMBrVOuFXPnIGruQwisW_Kf1EcQq73H/view?usp=sharing">
              Resume
            </a>
            <button onClick={handleClick} class="btn" id="hireBtn">
              Hire Me!
            </button>
          </div>
        </div>
        <div id="rightDiv"></div>
        </div>
        

      <div class="marquee" >
        <div class="track">
          <div class="content">
            &nbsp; Research | Discover | Design | Develop | Research | Discover
            | Design | Develop | Research | Discover | Design | Develop |
            Research | Discover | Design | Develop | Research | Discover |
            Design | Develop | Research | Discover | Design | Develop | Research
            | Discover | Design | Develop | Research | Discover | Design |
            Develop | Research | Discover | Design | Develop | Research |
            Discover | Design | Develop |{" "}
          </div>
        </div>
      </div>
     
    </>
  );
}

export default Homepage;
