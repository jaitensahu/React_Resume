import './Mydetail.css'
import {useEffect, useState} from 'react'
const Mydetail=()=>{
    let [hello, setHello]=useState("");
    let [age, setAge]=useState(0);

    useEffect(()=>{
        let i=0
        let timer=setInterval(()=>{
            setHello(generateRandomBinary)
            if(i>=30){
                setHello("Hello, World")
                clearInterval(timer); 
            }
            if(i<26)
            setAge(i)

            i++;
        },50)
    },[]);

    function generateRandomBinary() {
        let binaryNumber = '';
        for (let i = 0; i < 10; i++) {
          binaryNumber += Math.floor(Math.random() * 2); // Generates 0 or 1 randomly
        }
        return binaryNumber;
      }

    return(
    <div className="details"> 
        <div className="imgName">
        <img src="https://oktayshakirov.com/assets/images/avatar.jpg" alt="" />
        <h4>Jaiten Sahu</h4>
        <p>{hello}</p>
        </div>

        <hr />
        <div className="age ageLocationPersonality">
        <i class="fa-regular fa-hourglass-half"></i>
            <div className="year">
                <p>AGE</p>
                <p>{age} year old</p>
            </div>
        </div>
        <div className="locationContainer ageLocationPersonality">
        <i class="fa-solid fa-location-dot"></i>
            <div className="location">
                <p>LOCATION</p>
                <p>Berlin, Germany</p>
            </div>
        </div>

        <div className="personality ageLocationPersonality">
        <i class="fa-solid fa-user"></i>
            <div className="personalityTyper">
                <p>PERSONALITY TYPE</p>
                <p>INTK-T</p>
            </div>
        </div>

        <div className="socialIcons">
        <i class="fa-brands fa-square-instagram"></i>
        <i class="fa-brands fa-github"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-twitter"></i>
        </div>
    </div>
    )
}

export default Mydetail;