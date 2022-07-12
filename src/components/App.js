import React, { useState, useEffect } from "react";
import Lottie from "react-lottie-player";
import NavBar from "./NavBar";
import Header from "./Header";
import About from "./About";
import Experience from "./Experience";
import Project from "./Project";
import Skill from "./Skill";
import Education from "./Education";
import Footer from "./Footer";
import Contact from "./Contact";
import loaderJson from "../assets/lottie-animations/9416-just-a-bouncing-ball.json";
import "../css/main.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Lottie
            loop
            animationData={loaderJson}
            play
            style={{ width: 500}}
            // style={{ width: "60%" }}
          />
        </div>
      ) : (
        <div className="main-section">
          <NavBar />
          <Header />
          {/* <hr class="sep-2" /> */}
          <About />
          <Experience />
          {/* <hr class="sep-2" /> */}
          <Project />
          {/* <hr class="sep-2" /> */}
          <Skill />
          {/* <hr class="sep-2" /> */}
          <Education />
          {/* <hr class="sep-2" /> */}
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}
export default App;


  /* <div className="main-section">
            <NavBar />
            <Header />
            <hr></hr>
            <hr></hr>
            <About />
            <Experience />
            <hr></hr>
            <hr></hr>
            <Project />
            <hr></hr>
            <hr></hr>
            <Skill />
            <hr></hr>
            <hr></hr>
            <Education />
            <hr></hr>
            <hr></hr>
            <Contact />
            <Footer />
        </div> */


// font-family: 'Caveat', cursive;
// font-family: 'Open Sans', sans-serif;
// font-family: 'Roboto', sans-serif;
// font-family: 'Space Mono', monospace;
// font-family: 'Amaranth', sans-serif;
// font-family: 'Arima Madurai', cursive;
// font-family: 'Lemon', cursive;
// font-family: 'Mirza', cursive;
// font-family: 'Rancho', cursive;
// font-family: 'Sansita', sans-serif;
// font-family: 'Satisfy', cursive;
