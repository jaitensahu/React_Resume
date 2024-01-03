import Button from "../Button/Button";
import "./Project.css";

const Project = () => {
  let projectCards = [
    {
      img: "https://oktayshakirov.com/assets/images/projects/mybestwishes.jpg",
      title: "MyBestWishes AI Generator",
      desc: "Design + Frontend Figma | React.js | Chakra UI",
      preview: "",
      github: "",
      projectLink: "",
    },
    {
      img: "https://oktayshakirov.com/assets/images/projects/myworkphoto.png",
      title: "MyWorkPhoto AI Generator",
      desc: "Design + Frontend Figma | React.js | Chakra UI",
      preview: "",
      github: "",
      projectLink: "",
    },
    {
      img: "https://oktayshakirov.com/assets/images/projects/ogno-dashboard.png",
      title: "Ogno Marketing Dashboard",
      desc: "Fullstack Project React.js | Strapi.js | MySQL",
      preview: "",
      github: "https://github.com/oktayshakirov/marketing-dashboard",
      projectLink: "",
    },
    {
      img: "https://oktayshakirov.com/assets/images/projects/bayer-askmed.png",
      title: "AskMed By Bayer",
      desc: "Website + Chatbot Drupal | PHP | CSS",
      preview: "https://askmed.bayer.com/",
      github: "",
      projectLink: "",
    },
    {
      img: "https://oktayshakirov.com/assets/images/projects/enemzet.png",
      title: "EnEmZet Online Store",
      desc: "Website + Admin Panel Next.js | TypeScript | MySQL",
      preview: "https://enemzet.store/",
      github: "https://github.com/En-Em-Zet",
      projectLink: "",
    },
    {
      img: "https://oktayshakirov.com/assets/images/projects/tinnitus-blog.png",
      title: "Beyond Tinnitus Blog",
      desc: "Website Next.js | TypeScript | Material-UI",
      preview: "https://www.beyondtinnitus.online/",
      github: "https://github.com/oktayshakirov/tinnitus-blog",
      projectLink: "",
    },
    {
      img: "https://oktayshakirov.com/assets/images/projects/watch_store.png",
      title: "Timeazon Online Store",
      desc: "Website + Admin Panel React.js | Node.js | MySQL | Sass",
      preview: "https://timeazon.netlify.app/",
      github: "https://github.com/oktayshakirov/timeazon-fullstack",
      projectLink: "",
    },
    {
      img: "https://oktayshakirov.com/assets/images/projects/weather-app.png",
      title: "Weather App",
      desc: "Application JavaScript | API's | CSS",
      preview: "https://oktayshakirov.github.io/weather-app/",
      github: "https://github.com/oktayshakirov/weather-app",
      projectLink: "",
    },
    {
      img: "https://oktayshakirov.com/assets/images/projects/pigletz-matching.png",
      title: "Pigletz Memory Game",
      desc: "Web Game JavaScript | CSS",
      preview: "https://oktayshakirov.github.io/pigletz-matching/",
      github: "https://github.com/oktayshakirov/pigletz-matching",
      projectLink: "",
    },
  ];

  return (
    <div className="projectCardContainer">
      <h1>My Projects</h1>
      <div className="underline"></div>
      <div className="projectNav">
        <p>All</p>
        <p>Websites</p>
        <p>Applications</p>
        <p>Games</p>
      </div>
      <div className="allProjectCards">
        {projectCards.map((ele) => {
          return (
            <div className="projectCard">
              <div className="projectCardImg">
                <img src={ele.img} alt="" />
                <div className="blackScreen"></div>
              </div>
              <div className="titleAndDesc">
              <h3>{ele.title}</h3>
              <p>{ele.desc} </p>
              </div>
              <div className="btn">
                {ele.preview != "" ? (
                  <Button buttonText={"Preview"} link={ele.preview} />
                ) : (
                  ""
                )}

                {ele.github != "" ? (
                  <Button buttonText={"Github"} link={ele.github} />
                ) : (
                  ""
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
