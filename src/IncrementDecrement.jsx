import { useState } from "react";

function IncrementDecrement()
{
  const [count,setcount]=useState(0);
  return(
  <>
  <h1  style={{color:"red"}}>counting pages:{count}</h1>
  <button  border="2" style={{color:"green"}} onClick={()=>setcount(count+1)}>increment</button>
  <button  border="2" style={{color:"green"}} onClick={()=>setcount(count-1)}>decrement</button>
  </>
  )
}
export default IncrementDecrement;