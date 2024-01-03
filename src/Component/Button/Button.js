import './Button.css'

const Button=(props)=>{
    return (
        <button className='projectBtn'><a href={props.link} target='_blank'>{props.buttonText}</a></button>
    )
}

export default Button