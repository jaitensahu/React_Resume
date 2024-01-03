import './Card.css'

const Card=(props)=>{
    // console.log(props);
    return(
<div className="card">
    <img src={props.icon}/>
    <div className="titleAndPara">
    <h4>{props.title}</h4>
    <p>{props.para}</p>
    </div>
</div>
    )
}

export default Card