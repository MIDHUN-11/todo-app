import Counter from "./Counter";

const Props=(data)=>{
    console.log(data);
    return(
        <div>
            <p>{data.data}</p>
            <Counter/>
        </div>
    )
}
export default Props;