import './Mydetail.css'

const Mydetail=()=>{
    return(
    <div className="details"> 
        <div className="imgName">
        <img src="https://oktayshakirov.com/assets/images/avatar.jpg" alt="" />
        <h4>Jaiten Sahu</h4>
        <p>Hello, World</p>
        </div>

        <hr />
        <div className="age ageLocationPersonality">
        <i class="fa-regular fa-hourglass-half"></i>
            <div className="year">
                <p>AGE</p>
                <p>26 year old</p>
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