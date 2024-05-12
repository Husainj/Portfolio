import React, { useEffect, useRef } from "react";
import heroImg from "../Homepage/MyPicture.png";
import "../Homepage/Homepage.css";

function Homepage() {
  return (
    <>

        <div id="mainContainer"> 
        <div id="leftDiv"></div>
        <div id="centerDiv">
          <div id="heading1">-Hello</div>
          <div id="heading2">I'm Husain</div>
          <div id="heading3">Web Developer</div>
          <div id="heroImg">
            <img src={heroImg} />
          </div>
          <div id="btnContainer">
            <button class="btn" id="portfolioBtn">
              Portfolio
            </button>
            <button class="btn" id="hireBtn">
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
