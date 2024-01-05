import Card from "../Card/Card";
import "./About.css";
import { useState } from "react";
import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import Bottomcard from "./Bottomcard";

// const Example = () => {
//   return <ProgressBar completed={80}
//   className="wrapper"
//   barContainerClassName="container"
//   completedClassName="barCompleted"
//   labelClassName="label"/>;
// };
const About = (props) => {
  const dataArr = [
    {
      icon: "https://oktayshakirov.com/assets/images/icon-dev.svg",
      title: "Web Design & Development",
      para: "Creating attractive, easy-to-use websites that work well for businesses and individuals online.",
    },
    {
      icon: "https://oktayshakirov.com/assets/images/icon-app.svg",
      title: "Mobile Apps & Games",
      para: "Creating and developing engaging mobile apps and games for iOS and Android devices.",
    },
    {
      icon: "https://oktayshakirov.com/assets/images/icon-frameworks.svg",
      title: "Development Solutions",
      para: "Utilizing JavaScript frameworks like React, Node, Next, Vue and more to build interactive web applications.",
    },
    {
      icon: "https://oktayshakirov.com/assets/images/icon-marketing.svg",
      title: "Marketing & SEO",
      para: "Using SEO and marketing strategies to boost online visibility and promote products or services.",
    },
    {
      icon: "https://oktayshakirov.com/assets/images/icon-video.svg",
      title: "Visual Storytelling",
      para: "Taking and editing photos or videos that tell engaging stories, bringing concepts and ideas to life visually.",
    },
    {
      icon: "https://oktayshakirov.com/assets/images/icon-multimedia.svg",
      title: "Digital Content Creation",
      para: "Creatiing dynamic digital content, such as 3D models, graphics or animations.",
    },
  ];
  const bottomcardData = [
    {
      img: "https://oktayshakirov.com/assets/images/finances.png",
      title: "Investments",
      para: "Exploring Stocks, Crypto and Long-Term Growth Opportunities for Financial Investment",
    },
    {
      img: "https://oktayshakirov.com/assets/images/music.png",
      title: "Music",
      para: "Creating Instrumentals, Mixing and Mastering Tracks and Collaborating with Musicians",
    },
    {
      img: "https://oktayshakirov.com/assets/images/traveling.png",
      title: "Traveling",
      para: "Exploring new places, learn about different cultures and create lifelong memories.",
    },
    {
      img: "https://oktayshakirov.com/assets/images/camera.png",
      title: "Photography",
      para: "Capturing precious moments and memories through the lens of a camera.",
    },
  ];
  let [isHide, setHidden] = useState(true);

  function showOrHide() {
    if (isHide) setHidden(false);
    else setHidden(true);
  }
  let arr = [5];

  return (
    <div className="right">
      <h1>About Me</h1>
      <div className="underline"></div>
      <div className="colorYellow"></div>
      <div className="introContainer">
        <div className="intro" style={{ height: isHide ? "60px" : "auto" }}>
          Hello there! 👋 My name is Oktay and I'm from Berlin, Germany. As a
          Full-Stack software developer, I specialize in creating visually
          appealing websites, apps and mobile games. My passion for graphic
          design isn't just a hobby, it's a key ingredient in every project I
          work on. <br />
          <br />
          Growing up bilingual, I developed a love for languages and I currently
          speak four of them fluently. I believe that this skill has given me a
          unique perspective and allows me to communicate effectively with
          clients from all over the world. One of my strengths is adding a
          personal touch to my projects by adding the client's identity and
          message into the design, creating meaningful and beautiful end
          products that are both eye-catching and user-friendly.
          <br />
          <br /> In my free time, I enjoy exploring my other passions, such as
          photography and music production, which provide me with creative
          outlets. I am also very passionate about Web3 and everything related
          to crypto, NFTs and blockchain technology as I believe they have the
          potential to revolutionize business and online interactions.
          <br />
          <br /> If you have an innovative idea for a project that needs to be
          developed, I would love to hear from you. Your vision can be turned
          into a real product. Don't hesitate to reach out and let's start a
          conversation about your concept. I'm excited to collaborate and help
          bring your ideas to life.
        </div>
        <p className="showOrHide" onClick={showOrHide}>
          {isHide ?<i class="fa-solid fa-arrow-down-long"></i>:<i class="fa-solid fa-arrow-up-long"></i> }<span className="show">{isHide ? "Show more" : "Show Less"}</span>
          {isHide ?<i class="fa-solid fa-arrow-down-long"></i>:<i class="fa-solid fa-arrow-up-long"></i> }
          </p>
      </div>

      <div className="primaryFocusContainer">
        <h2>Primary Focus</h2>
        <div className="primaryFocus">
          {dataArr.map((oneCard, idx) => {
            if (idx < 4) return <Card key={"cardkey" + idx} {...oneCard} />;
          })}
        </div>
      </div>

      <div className="exploringCreativity">
        <h2>Exploring Creativity</h2>
        <div className="exploreCardContainer">
          {dataArr.map((oneCard, idx) => {
            if (idx > 3) return <Card key={"cardkey" + idx} {...oneCard} />;
          })}
        </div>
      </div>

      <div className="ProgrammingLang">
        <h2>Programming Language</h2>
        <div className="languageContainer">
          {dataArr.map(() => {
            return (
              <ProgressBar
                completed={60}
                bgColor="#ffd100"
                labelAlignment="left"
                labelColor="#ffffff"
                transitionDuration="1"
                animateOnRender
                maxCompleted={100}
                customLabel="Java"
                margin="10px"
              />
            );
          })}
        </div>
      </div>

      <div className="humanLang">
        <h2>Human Language</h2>
        <div className="humanLangContainer"></div>
      </div>

      <div className="skill example1">
        <div className="skillContent">
          <img src="https://oktayshakirov.com/assets/images/mysql.png" alt="" />
          <img
            src="https://oktayshakirov.com/assets/images/python.png"
            alt=""
          />
          <img src="https://oktayshakirov.com/assets/images/linux.png" alt="" />
          <img
            src="https://oktayshakirov.com/assets/images/wordpress.png"
            alt=""
          />
          <img
            src="https://oktayshakirov.com/assets/images/github.png"
            alt=""
          />
          <img src="https://oktayshakirov.com/assets/images/php.png" alt="" />
          <img src="https://oktayshakirov.com/assets/images/git.png" alt="" />
          <img
            src="https://oktayshakirov.com/assets/images/photoshop.png"
            alt=""
          />
          <img
            src="https://oktayshakirov.com/assets/images/premierepro.png"
            alt=""
          />
          <img
            src="https://oktayshakirov.com/assets/images/aftereffects.png"
            alt=""
          />
          <img
            src="https://oktayshakirov.com/assets/images/blender.png"
            alt=""
          />
          <img src="https://oktayshakirov.com/assets/images/html.png" alt="" />
          <img
            src="https://oktayshakirov.com/assets/images/java-script.png"
            alt=""
          />
          <img src="https://oktayshakirov.com/assets/images/css.png" alt="" />
          <img src="https://oktayshakirov.com/assets/images/react.png" alt="" />
          <img src="https://oktayshakirov.com/assets/images/next.png" alt="" />
          <img src="https://oktayshakirov.com/assets/images/node.png" alt="" />
          <img
            src="https://oktayshakirov.com/assets/images/typescript.png"
            alt=""
          />
          <img src="https://oktayshakirov.com/assets/images/npm.png" alt="" />
        </div>
      </div>
      <div className="bottomcardContainer">
      {
  bottomcardData.map((ele,idx)=>{
    return <Bottomcard {...ele}/>
  })
}
      </div>

      
    </div>
  );
};

export default About;
