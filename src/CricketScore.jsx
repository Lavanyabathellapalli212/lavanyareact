import { useState } from "react";

function CricketScore()
{
  const [score,setscore]=useState(0);
  return (
    <>
    <h1 style={{color:"purpule"}}>Cricket score:{score}</h1>
    <button  border="2" style={{color:"red"}} onClick={()=>setscore(score+1)} >+1</button>
    <button  border="2"  style={{color:"red"}}onClick={()=>setscore(score+2)}>+2</button>
    <button  border="2" style={{color:"red"}}onClick={()=>setscore(score+3)} >+3</button>
    <button  border="2" style={{color:"red"}}onClick={()=>setscore(score+4)}>+4</button>
    <button  border="2" style={{color:"red"}}onClick={()=>setscore(score+6)} >+6</button>
    <button  border="2" style={{color:"red"}}onClick={()=>setscore(0)}>reset</button>
    
    </>
  )
}
export default CricketScore;