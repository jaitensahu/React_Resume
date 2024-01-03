import './Button.css'

const Button=(props)=>{
    return (
        <button disabled={props.link==""? true:false} className='projectBtn'><a href={props.link} target='_blank'>{props.buttonText}</a></button>
    )
}

export default Button