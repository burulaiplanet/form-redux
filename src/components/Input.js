const Input =(props)=>{
    return(
        <div>
 <input value={props.value} type={props.type} name={props.name} onChange={props.onChange} /> 

        </div>
       
        )
}
export default Input