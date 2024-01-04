
const First =(props)=>{
    console.log(props);
    return(
        <div>      
            <h1>this is first component</h1>
            <h2>{props.props}</h2>
        </div>
    )
}
export default First;