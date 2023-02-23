import React, { useState } from "react";

const FunctionalComponents = ()=>{
    const [count,setCount] = useState(0);
    const [n , setn] = useState("")
    return(
        <div>
            <p> This is a FunctionalComponents beti chod!</p>
            <h2>{count}</h2>
            <button onClick={()=> setCount(count + 1)}>Click me to Add</button> 
            <button onClick={()=> setCount(count - 1)}>Click me to Subtract</button>
            <div>
                <h1>My name is {n} .</h1>
                <input onChange={(e)=> setn(e.target.value)} />
                <button onClick={()=> setn(n)}>change name</button>
            </div>
        </div>
    );
};


export default FunctionalComponents;