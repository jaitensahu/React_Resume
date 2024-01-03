import Button from "../Button/Button";
import "./More.css";

const More = () => {
  let moreDataArr = [
    {
      img: "https://oktayshakirov.com/assets/images/projects/pigletz.jpg",
      type: "Marketing & BizDev Content Creator",
      title: "Pigletz",
      para: "I create and manage the Pigletz community's social media presence, including producing and editing high-quality Web3 content for their YouTube channel. I also work on expanding the community's reach and impact through partnerships in the Web3 space.",
      website: "https://pigletz.com/",
      insta: "https://www.instagram.com/pigletznft",
      youtube: "https://www.youtube.com/@PigletzNFT",
    },
    {
        img: "https://oktayshakirov.com/assets/images/projects/sha-beats.jpg",
        type: "Beat Making Sound Design",
        title: "Music Production",
        para: "Produced over 100 instrumentals in different genres, collaborated with artists and my beats are on popular streaming platforms like Spotify, iTunes, Amazon and Deezer. They can also be purchased exclusively on my beatstore for musicians to create their unique sound.",
        website: "https://open.spotify.com/artist/0veyQeAcyLxXfbbnZpa3mf?si=0Xk9lBtDTP24o8w1nrPfRw",
        insta: "https://www.instagram.com/sha.beats",
        youtube: "https://www.youtube.com/@SHABEATS",
      },
      {
        img: "https://oktayshakirov.com/assets/images/projects/sha-pixels.png",
        type: "Multimedia Design 3D Rendering",
        title: "Digital Content Creation",
        para: "My digital art portfolio, which includes a wide collection of graphic designs, 3D models and short video animations created for various purposes. I have long experience working with popular softwares like Adobe Photoshop, After Effects, Premiere Pro and Blender.",
        website: "",
        insta: "https://www.instagram.com/sha.pixels",
        youtube: "",
      }
  ];
  return <div className="more">
    <h1>Side Projects</h1>
    <div className="underline"></div>
    <div className="moreCardsContainer">
       {moreDataArr.map(ele=>{
        return  <div className="moreCard">
            <div className="moreImg">
            <img src={ele.img} alt="" />
            </div>
            <div className="moreDetail">
            <p>{ele.type}</p>
            <h2>{ele.title}</h2>
            <p className="morePara">{ele.para}</p>
            <Button link={ele.website} buttonText={"Website"}/>
            <Button link={ele.insta} buttonText={"Instagram"}/>
            <Button link={ele.youtube} buttonText={"Youtube"}/>
            </div>
        </div>
       })
       }
        
    </div>
  </div>;
};

export default More;
