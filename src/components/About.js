import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>
Meet Ryan, the software sorcerer with a knack for 
turning bugs into features and coffee into code. 
With a mind as agile as his fingers on the keyboard, 
he's the wizard of web development, conjuring digital 
wonders with a flick of his mouse. 
Ryan: making software sorcery look easy!</p>
   <img src={image} alt="I made this."/>
  </div>;
}

export default About;
