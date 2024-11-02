import { useState } from "react";

function Apples()
    {
            const[apples,setApples]=useState(0);
        
            return(
                <>
                <h1 style={{color:"green"}}>Number of apples:{apples}</h1>
                { apples === 0 ? (
                    <p style={{color:"pink"}}>no apples</p>
                ):(
                    <p style={{color:"brown"}}>great!applies are availabule</p>
                )
                }
                <button border="2" style={{color:"blue"}} onClick={()=>setApples(apples+1)}>add apple</button>
                <button  border="2" style={{color:"blue"}} onClick={()=>apples > 0 && setApples (apples-1)}>remove apple</button>
                <button  border="2" style={{color:"blue"}}onClick={()=>setApples(0)}>reset</button>
        
                </>
        
                
            )
        }
        export default Apples;
