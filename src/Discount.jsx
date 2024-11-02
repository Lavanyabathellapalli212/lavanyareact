import { useState } from "react";


function Discount() 
{
  const origprice = 1000;
  const [discount, setDiscount] = useState(0);

  const applyDiscount = (discountpercentage) => {
    if (discountpercentage === 10) 
    {
      setDiscount(0.1 * origprice);
    } 
    else if (discountpercentage === 20)
    {
      setDiscount(0.2 * origprice);
    } 
    else if (discountpercentage === 30) 
    {
      setDiscount(0.3 * origprice);
    } 
    else 
    {
      setDiscount(0);  
    }
  };

  return (
    <>
      <h1 style={{color:"orange"}}>Original Price: ${origprice}</h1>
      <p style={{color:"red"}}>Discounted Price: ${origprice - discount}</p>
      <p>Click a button to apply a discount</p>
      <button style={{color:"green"}}onClick={() => applyDiscount(10)}>Apply 10% Discount</button>
      <button style={{color:"green"}}onClick={() => applyDiscount(20)}>Apply 20% Discount</button>
      <button style={{color:"green"}}onClick={() => applyDiscount(30)}>Apply 30% Discount</button>
      <button style={{color:"green"}}onClick={() => applyDiscount(0)}>Reset Price</button>
    </>
  );
}

export default Discount;