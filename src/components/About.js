import React from "react";
import Lottie from "react-lottie-player";
import "../css/about.css";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import chipdata from "../data/db/chipdata";
import plantJson from "../assets/lottie-animations/67043-animated-green-leaf-plant-in-a-greek-terracotta-pot.json";
import image1 from "../assets/profile-images/IMG_1804.JPG";
function About() {
  return (
    <div className="about-section" name="about">
      <div className="image-section">
        <Lottie 
        loop 
        animationData={plantJson} 
        play 
        // style={{ width: 500, height: 500 }}
        style={{width:"60%"}}
        />
      </div>
      <div className="text-section">
        <h2>About Me</h2>
        <p>
        I'm a third-year student at Kalinga Institute of Industrial Technology in Bhubaneswar studying computer science and engineering. 
        I'm actively participating and honing my skills on a variety of platforms, including Leetcode, Google Kickstart, Google Codejam, Hackerrank, Codechef, and Codeforces. 
        In addition, I'm a competitive developer who enjoys writing code and finding solutions to various algorithmic and data structure-related problems.
        As of right now, I work as a Lead Android Developer for MSA-KiiT, a Competent Programmer for the Gfg KiiT Chapter, a Volunteer for NSS, 
        a Vocalist and Music Editor for Kindel, and a Campus Ambassador for Viral Fission.
        </p>
        <div className="chip-class">
          {chipdata.map((item) => {
            return (
              <Chip
                className="chip-card"
                color={item.variant.toLowerCase()}
                label={item.label}
                avatar={<Avatar>{item.letter}</Avatar>}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default About;
