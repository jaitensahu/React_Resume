import logo from "./logo.svg";
import "./App.css";
import Mydetail from "./Component/Mydetail/Mydetail";
import About from "./Component/About/About";
import Certificate from "./Component/Certificate/Certificate";
import Project from "./Component/Projects/Project";
import Contact from "./Component/Contact/Contact";
import More from "./Component/More/More";

import { useState } from "react";

function App() {
  let [pageId, setPageId] = useState("about");
  function getId(e) {
    console.log(e.target.getAttribute("id"));
    setPageId(e.target.getAttribute("id"));
  }
  return (
    <div className="App">
      <div className="Container">
        <Mydetail />
        <div className="rightContainer">
          <div className="navbar">
            <p onClick={getId} id="about">
              About
            </p>
            <p onClick={getId} id="certificate">
              Certificate
            </p>
            <p onClick={getId} id="project">
              Projects
            </p>
            <p onClick={getId} id="more">
              More
            </p>
            <p onClick={getId} id="contact">
              Contact
            </p>
          </div>
          {pageId == "about" ? (
            <About getId={getId} />
          ) : pageId == "certificate" ? (
            <Certificate />
          ) : pageId == "project" ? (
            <Project />
          ) : pageId == "more" ? (
            <More />
          ) : pageId == "contact" ? (
            <Contact />
          ) : (
            ""
          )}
        </div>
      </div>
      
    </div>
  );
}

export default App;
