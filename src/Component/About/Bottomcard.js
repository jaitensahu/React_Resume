import './Bottomcard.css'

const Bottomcard=(props)=>{
    return (
        <div className="bottomcard">
            <img src={props.img} alt="" />
            <h4>{props.title}</h4>
            <p>{props.para}</p>
        </div>
    )
}
export default Bottomcard