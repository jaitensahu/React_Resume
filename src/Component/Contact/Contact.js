import './Contact.css'

const Contact=()=>{
    return(
    <div className='contact'>
        <h1>Contact</h1>
        <div className="underline"></div>
        <div className="contactContainer">
            <div className="email">
                <h4>Email:</h4>
                <p>jaitensahu9@gmail.com <button>Copy</button></p>
            </div>

            <div className="schedule">
                <h4>Schedule Video Call With Me:</h4>
                <img src="https://oktayshakirov.com/assets/images/calendar.png" alt="" />
            </div>

            <div className="socialsIcons">
                <h4>Socials:</h4>
                <div className="iconsInContact">
                    <img src="https://oktayshakirov.com/assets/images/socials/github.png" alt="" />
                    <img src="https://oktayshakirov.com/assets/images/socials/linkedin.png" alt="" />
                    <img src="https://oktayshakirov.com/assets/images/socials/instagram.png" alt="" />
                    <img src="https://oktayshakirov.com/assets/images/socials/twitter.png" alt="" />
                </div>
            </div>

            <div className="support">
                <h4>Support My Work:</h4>
                <p>Your support fuels my development journey! With every small donation, you contribute to hostings, domains and other essential costs. All my work is open source and free for everyone to use.</p>
            
                <button><img src="https://oktayshakirov.com/assets/images/coffee-sponsort.png" alt="" /></button>
                <button><img src="https://oktayshakirov.com/assets/images/github-sponsors.png" alt="" /></button>
                <button><img src="https://oktayshakirov.com/assets/images/paypalme.png" alt="" /></button>
            </div>
        </div>
    
    </div>
    )
}

export default Contact;