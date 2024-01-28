import Props from "./Props";

const Helloworld=()=>{
    let a="midhun";
    return(
        <div>
            <p> hello world</p>
            <Props data={a}/>
        </div>
    )
}

export default Helloworld;